import React, { useEffect, Fragment, useState } from 'react'

import Brief from '../components/sections/brief';
import SectionTitle from '../components/sectionTitle';
import { convertISODate, endpoint, parseLatestResponse } from '../utils';
import ApiManager, { getIsoCode } from '../utils/apiManager';
import BriefRegional from '../components/sections/briefRegional';
import InputSearch from '../components/sections/search';
import LineChartComponent from '../components/charts/lineChart'
import RegionalLineCharts from '../components/sections/regionalLineCharts';
import Axios from 'axios';

function IndexPage({ brief, lastUpdate, countries, briefTimeseries }) {
	// console.log(countries)
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


	/** Prepare Select options  */
	const countriesOption = Object.keys(countries)
		.map(elm => {
			const { provincestate, countrycode: { iso2 = '', iso3 = '' } = {} } = countries[elm];
			return {
				label: elm,
				value: `${(iso2 || iso3)}${provincestate ? '.' + provincestate : ''}`    // incase iso2 undefined use iso3 | server handle both
			}
			console.log('!!!!!!!')
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

		// convert for linear charts
		let result = []
		Object.keys(timeseries).map(e => result.push({ name: e, ...timeseries[e] }));

		setRegional({
			...regional,
			isLoading: false,
			selected: label,
			brief: { confirmed, deaths, recovered },
			chart: result,
			heatMap: []
		});
	}

	return (
		<Fragment>
			<section className="section">
				<SectionTitle title="World Wide" subtitle={ lastUpdate ? `Last Update: ${convertISODate(lastUpdate)}` : '' } />
				<div className="container">
					<Brief data={ brief } />
				</div>
			</section>
			<div className="container">
				<div className="is-divider" data-content="Analytics"></div>
			</div>
			<section className="section">
				<SectionTitle title="Regional" subtitle="Select Country/Region" />
				<div className="container">
					<div className="section" >
						<InputSearch selected={ regional.selected } options={ countriesOption } onChange={ handleCountrySelection } />
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

		console.log(result);
		return { brief, lastUpdate, countries, briefTimeseries }
	} catch (error) {
		console.error(error);
		return { error: error }
	}
}

export default IndexPage
