import React, { useEffect } from 'react'
import axios from 'axios';
import Brief from '../components/sections/brief';
import SectionTitle from '../components/sectionTitle';
import { convertISODate, endpoint } from '../utils';
import ApiManager from '../utils/apiManager';


function IndexPage({ data, lastUpdate }) {
	useEffect(() => {
		document.title = 'COVID-19-REPORT-DASHBOARD';
	})

	return (
		<section className="section">
			<SectionTitle title="Word Wide" subtitle={ lastUpdate ? `Last Update: ${convertISODate(lastUpdate)}` : '' } />

			<div className="container">
				<Brief data={ data } />
			</div>
		</section>
	)
}

IndexPage.getInitialProps = async (ctx) => {

	try {
		let { data, message } = await ApiManager.readBrief();

		const response = message ? { data: {} } : { ...data };
		console.log(response);
		return { ...response }
	} catch (error) {
		console.error(error);
		return { error: error }
	}
}

export default IndexPage
