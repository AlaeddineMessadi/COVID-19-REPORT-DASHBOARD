function Error({ statusCode: status, message }) {
	return (
		<section className="hero is-link is-fullheight diagonal-hero-bg">
			<div className="hero-body">
				<h1 className="title is-1 is-capitalized">
					{status
						? `An error ${status} occurred on server`
						: 'An error occurred on client'}
				</h1>
			</div>
		</section>
	)
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404
	return { statusCode }
}

export default Error
