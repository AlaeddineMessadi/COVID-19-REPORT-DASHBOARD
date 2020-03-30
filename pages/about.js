import SectionTitle from '../components/sectionTitle'
import { Fragment } from 'react'
import Navigation from '../components/navigation'

function Contact({ children, id = "contact" }) {
  return (
    <Fragment>
      <Navigation />
      <section className="section has-text-centered">
        <SectionTitle
          title="About Stats-Cornavirus"
          subtitle="stats-coronavirus.com"
        />
        <section className="hero is-fullheight has-text-white has-text-left">
          <div className="section">
            <div className="container">
              <p>
                STATS-CORONAVIRUS.com is an open source project that aims to collect data about the Novel Cornavirus.
                It acts as a portal for the public to keep track of the latest analytics and news development about the COVID-19
              </p>
              <p>STATS-CORONAVIRUS.com is composed by two separate standalone projects.</p>
              <p>The first <a href="https://github.com/AlaeddineMessadi/COVID-19-REPORT-API">@COVID-19-REPORT-API</a> is the server part
              of the website which is an API Service that keep tracking cases worldwide using the data source repository
              operated officially and updated by the Johns Hopkins University Center for Systems Science and Engineering
                <a href="https://github.com/CSSEGISandData/COVID-19">(JHU CSSE)</a></p>

              <p>The second project <a href="https://github.com/AlaeddineMessadi/COVID-19-REPORT-DASHBOARD">@COVID-19-REPORT-DASHBOARD</a> is the client side
                which consume the api's endpoints and render received data in the page</p>

              <h4 className="subtitle center"> Send Email to  <a href="mailto: abc@example.com">alaeddine.messadi@gmail.com</a> </h4>
            </div>
          </div>
        </section>
      </section>

    </Fragment>
  )
}

export default Contact
