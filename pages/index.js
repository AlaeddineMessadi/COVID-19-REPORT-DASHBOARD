import React, { useEffect, Fragment } from 'react'
import axios from 'axios';
import Brief from '../components/sections/brief';
import SectionTitle from '../components/sectionTitle';
import { convertISODate, endpoint } from '../utils';
import ApiManager from '../utils/apiManager';
import BriefRegional from '../components/sections/briefRegional';


function IndexPage({ data, lastUpdate }) {
	useEffect(() => {
		document.title = 'COVID-19-REPORT-DASHBOARD';
	})

	return (
		<Fragment>
			<section className="section">
				<SectionTitle title="Word Wide" subtitle={ lastUpdate ? `Last Update: ${convertISODate(lastUpdate)}` : '' } />
				<div className="container">
					<Brief data={ data } />
				</div>
			</section>
			<div className="container">
				<div class="is-divider" data-content="Analytics"></div>
			</div>
			<section className="section">
				<SectionTitle title="Regional" subtitle="Select Country/Region" />
				<div className="container">
					<BriefRegional data={ data } />
				</div>
			</section>
		</Fragment>
	)
}

IndexPage.getInitialProps = async (ctx) => {

	try {
		let { data, message } = await ApiManager.readBrief();

		const response = message ? { data: {} } : { ...data };

		return { ...response }
	} catch (error) {
		console.error(error);
		return { error: error }
	}
}

export default IndexPage
