import React, { useEffect, Fragment, useState } from 'react'
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';

import Brief from '../components/sections/brief';
import SectionTitle from '../components/sectionTitle';
import { convertISODate, parseToDataCharts } from '../utils';
import ApiManager, { getIsoCode } from '../utils/apiManager';
import BriefRegional from '../components/sections/briefRegional';
import InputSearch from '../components/sections/search';
import RegionalLineCharts from '../components/sections/regionalLineCharts';
import BriefLineCharts from '../components/sections/briefLineCharts';
import Navigation from '../components/navigation';

const StikyHeatMap = dynamic(() => import('../components/charts/stikyHeatMap'), { ssr: false })

function IndexPage({ brief, lastUpdate, countries, latest, briefTimeseries }) {
	useEffect(() => {
		document.title = 'COVID-19-REPORT-DASHBOARD';
	})

	const initialState = {
		isLoading: false,
		selected: '',
		brief: {
			confirmed: '-',
			deaths: '-',
			recovered: '-'
		},
		chart: [],
	}

	/** Declare and Initialize Regional state */
	const [regional, setRegional] = useState(initialState);


	/** Prepare PointList for Map  */
	const parsePointList = (data) => Object.values(data).map(
		(countryLatest) => {
			return {
				geometry: [
					countryLatest.location.lng,
					countryLatest.location.lat,
				],
				weight: Math.min(countryLatest.confirmed / 20, 1.0),
			};
		}
	);

	/** Prepare Select options  */
	const countriesOption = Object.keys(countries)
		.map(elm => {
			const { provincestate, countrycode: { iso2 = '', iso3 = '' } = {} } = countries[elm];
			return {
				label: elm,
				value: `${(iso2 || iso3)}${provincestate ? '.' + provincestate : ''}`    // incase iso2 undefined use iso3 | server handle both
			}
		});

	const handleCountrySelection = async e => {
		const { value, label } = e;
		let [iso, provincestate] = value.split('.');

		if (!iso) iso = await getIsoCode(label);

		setRegional({ ...regional, isLoading: true })
		const { data: responseLatest } = await ApiManager.readLatest(iso, provincestate);
		const { confirmed = '-', deaths = '-', recovered = '-' } = responseLatest[0] || {};


		const { data: responseTimeSeries } = await ApiManager.readTimeseries(iso);
		const { location = {}, timeseries = {} } = responseTimeSeries[0] || {};

		setRegional({
			...regional,
			isLoading: false,
			selected: label,
			brief: { confirmed, deaths, recovered },
			chart: parseToDataCharts(timeseries),
			heatMap: []
		});
	}

	return (
		<Fragment>
			<NextSeo title="Home" titleTemplate='%s | Stats-Coronavirus' />

			<Navigation />
			<div className="hero is-medium is-primary">
				<div className="hero-body">
					<SectionTitle
						title="World Wide"
						subtitle={ lastUpdate ? `Last Update: ${convertISODate(lastUpdate)}` : '' }
					/>
				</div>
			</div>
			<section className="section">
				<div className="container">
					<Brief data={ brief } />
					<BriefLineCharts data={ briefTimeseries } />
				</div>
				<div className="section">
					<div className="container grid" style={ { minHeight: "300px" } }>
						<StikyHeatMap
							pointList={ parsePointList(latest) }
						/>
					</div>
				</div>
			</section>
			<div className="container">
				<div className="is-divider no-margin" data-content="Analytics"></div>
			</div>
			<div className="hero is-medium is-primary">
				<div className="hero-body">
					<SectionTitle title="Regional" subtitle="Select Country/Region" />
				</div>
			</div>
			<section className="section" id="regional">
				<div className="container">
					<div className="section has-text-black" >
						<InputSearch
							selected={ regional.selected }
							options={ countriesOption }
							onChange={ handleCountrySelection } />

						{
							!regional.selected ?
								<div className="notification is-primary">
									<button className="delete" onClick={ e => setRegional({ ...regional, selected: true }) }></button>
									Please select the country/region
								</div> : ''
						}
					</div>
					<br />

					<BriefRegional data={ regional.brief } isLoading={ regional.isLoading } />

					<RegionalLineCharts data={ regional.chart } />
				</div>
			</section>
		</Fragment>
	)
}




IndexPage.getInitialProps = async (ctx) => {
	try {
		let { data: brief, lastUpdate } = await ApiManager.readBrief();
		let { countries } = await ApiManager.readCountries();

		let { data: briefTimeseries } = await ApiManager.readBriefTimeseries();
		let { data: latest } = await ApiManager.readLatest();

		briefTimeseries = parseToDataCharts(briefTimeseries);

		return { brief, lastUpdate, countries, briefTimeseries, latest }
	} catch (error) {
		console.error(error);
		return { error: error }
	}
}

export default IndexPage
