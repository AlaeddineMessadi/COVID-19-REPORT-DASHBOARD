import React, { useEffect, Fragment, useState } from 'react'

import Brief from '../components/sections/brief';
import SectionTitle from '../components/sectionTitle';
import { convertISODate, endpoint, parseLatestResponse } from '../utils';
import ApiManager from '../utils/apiManager';
import BriefRegional from '../components/sections/briefRegional';
import InputSearch from '../components/sections/search';
import LineChartComponent from '../components/charts/lineChart'

function IndexPage({ data, lastUpdate, countries }) {
	useEffect(() => {
		document.title = 'COVID-19-REPORT-DASHBOARD';
	})

	const initialState = {
		isLoading: false,
		selected: 'us',
		brief: {
			confirmed: '-',
			deaths: '-',
			recovered: '-'
		},
		chart: [],
	}
	const [regional, setRegional] = useState(initialState);

	const countriesOption = Object.keys(countries)
		.map(
			elm => ({
				label: elm,
				value: countries[elm].iso2 || countries[elm].iso3   // incase iso2 undefined use iso3 | server handle both
			})
		)


	const handleCountrySelection = async e => {
		const { value: iso, label } = e;
		setRegional({ ...regional, isLoading: true })
		const { data: responseLatest } = await ApiManager.readLatest(iso);
		const { confirmed, deaths, recovered } = responseLatest[0];


		const { data: responseTimeSeries } = await ApiManager.readTimeseries(iso);
		const { location, timeseries } = responseTimeSeries[0];

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
					<Brief data={ data } />
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

					<div className="columns is-multiline">
						<div className="column">
							<LineChartComponent
								data={ regional.chart }
								mainKey="name"
								dataKey="confirmed" />
						</div>
						<div className="column">
							<LineChartComponent
								data={ regional.chart }
								mainKey="name"
								dataKey="deaths"
								stroke="#d9534f" />
						</div>
						<div className="column">
							<LineChartComponent
								data={ regional.chart }
								mainKey="name"
								dataKey="recovered"
								stroke="#4bbf73" />
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	)
}




IndexPage.getInitialProps = async (ctx) => {

	try {
		let { data, lastUpdate } = await ApiManager.readBrief();
		let { countries } = await ApiManager.readCountries();
		// let { lastUpdate: updateLatest, count, data: latestData } = await ApiManager.readLatest();
		// let { latest: { lastUpdate, count, data: latestData } } = await ApiManager.readLatest();

		// console.log(Object.values(latestData));

		// const { countryList } = latestData
		// console.log(countryList)
		// const response = message ? { data: {} } : { ...data };

		return { data, lastUpdate, countries }
	} catch (error) {
		console.error(error);
		return { error: error }
	}
}

export default IndexPage
