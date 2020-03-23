function SectionTitle({ title, subtitle }) {
	return (
		<>
			<h3 className="title is-1 has-text-centered"> {title} </h3>
			{subtitle && (
				<h4 className="subtitle is-5 has-text-centered">{subtitle}</h4>
			)}
		</>
	)
}

export default SectionTitle
