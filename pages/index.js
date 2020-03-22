import React, { useEffect } from 'react'


function indexPage({ children }) {
	useEffect(() => {
		document.title = 'Alaeddine Messadi'
	})

	return (
		<div>
			THis is DIV
		</div>
	)
}

export default indexPage
