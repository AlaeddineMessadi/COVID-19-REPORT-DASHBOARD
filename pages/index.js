import React, { useEffect } from 'react'


function IndexPage({ text, children }) {
	useEffect(() => {
		document.title = 'COVID-19-REPORT-DASHBOARD'
	})

	return (
		<div>
			{ text }
		</div>
	)
}

IndexPage.getInitialProps = (ctx) => {
	return { text: 'hello' }
}

export default IndexPage
