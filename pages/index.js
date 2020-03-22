import React, { useEffect } from 'react'
import Navigation from '../components/navigation'


function indexPage({ children }) {
	useEffect(() => {
		document.title = 'COVID-19-REPORT-DASHBOARD'
	})

	return (
		<div>
			<Navigation />
			{

			}
		</div>
	)
}

export default indexPage
