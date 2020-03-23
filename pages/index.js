import React, { useEffect } from 'react'
import axios from 'axios';
import Brief from '../components/sections/brief';
import SectionTitle from '../components/sectionTitle';
import { convertISODate, endpoint } from '../utils';


function IndexPage({ data, lastUpdate }) {
	useEffect(() => {
		document.title = 'COVID-19-REPORT-DASHBOARD'
	})

	return (
		<section className="section">
			<SectionTitle title="Word Wide" subtitle={ `Last Update: ${convertISODate(lastUpdate)}` } />

			<div className="container">
				<Brief data={ data } />
			</div>
		</section>
	)
}

IndexPage.getInitialProps = async (ctx) => {
	try {
		const { data } = await axios.get(endpoint.getBriefUrl());

		return { ...data }
	} catch (error) {
		console.error(error);
		return { error: error }
	}


}

export default IndexPage
