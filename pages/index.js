import React, { useEffect } from 'react'


function indexPage({ children }) {
	useEffect(() => {
		document.title = 'COVID-19-REPORT-DASHBOARD'
	})

	return (
		<div>
			THis is DIV
		</div>
	)
}

export default indexPage
