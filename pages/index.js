import React, { useEffect } from 'react'
import axios from 'axios';
import Brief from '../components/sections/brief';

const BASE_URL = 'https://covid-19-report-api.now.sh/api/v1'

function IndexPage({ data }) {
	useEffect(() => {
		document.title = 'COVID-19-REPORT-DASHBOARD'
	})

	console.log(data);
	return (
		<section className="section">
			<div className="container">
				<Brief data={ data } />
			</div>
		</section>
	)
}

IndexPage.getInitialProps = async (ctx) => {
	try {
		const { data } = await axios.get(`${BASE_URL}/cases/brief`);

		return { ...data }
	} catch (error) {
		console.error(error);
		return { error: error }
	}


}

export default IndexPage
