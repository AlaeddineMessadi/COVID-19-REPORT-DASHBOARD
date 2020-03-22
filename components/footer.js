function FooterSection({ description = "Footer Description", url = "#", urlTitle = "url title" }) {
  return (
    <footer className="footer has-background-black">
      <div className="section-heading has-text-centered">
        <p className="has-text-white-bis">
          <span className="has-text-white-bis has-text-weight-semibold">
            { description }
          </span>
						-<a href={ url }>{ urlTitle }</a>
        </p>
      </div>
    </footer>
  )
}

export default FooterSection
