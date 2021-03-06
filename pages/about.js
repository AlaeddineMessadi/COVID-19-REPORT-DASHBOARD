import SectionTitle from '../components/sectionTitle'
import { Fragment } from 'react'
import Navigation from '../components/navigation'
import { NextSeo } from 'next-seo'

function Contact({ children, id = "contact" }) {
  return (
    <Fragment>
      <NextSeo title="About" titleTemplate='%s | Stats-Coronavirus' />

      <Navigation />
      <section className="section has-text-centered">
        <SectionTitle
          title="About Stats-Cornavirus"
          subtitle="stats-coronavirus.com"
        />
        <section className="hero is-fullheight has-text-white has-text-left">
          <div className="section">
            <div className="container is-size-4">
              <div className="box">
                <p>
                  STATS-CORONAVIRUS.com is an open source project that aims to collect data about the Novel Cornavirus.
                  It acts as a portal for the public to keep track of the latest analytics and news development about the COVID-19
              </p>
                <p>
                  Inspired by the Coronavirus Outbreak Map by John Hopkins University that was very informative.
                  and also recognized the difficulty to gather data for in-depth analysis through various other sources of scattered
                  data on different news portals as well as in different languages.
              </p>
                <br />
                <p>STATS-CORONAVIRUS.com is composed by two separate standalone projects.</p>
                <p>The first <a href="https://github.com/AlaeddineMessadi/COVID-19-REPORT-API">@COVID-19-REPORT-API</a> is the server part
              of the website which is an API Service that keep tracking cases worldwide using the data source repository
              operated officially and updated by the Johns Hopkins University Center for Systems Science and Engineering <a href="https://github.com/CSSEGISandData/COVID-19">(JHU CSSE)</a></p>

                <p>The second project <a href="https://github.com/AlaeddineMessadi/COVID-19-REPORT-DASHBOARD">@COVID-19-REPORT-DASHBOARD</a> is the client side
                which consume the api's endpoints and render received data to the user interface</p>
                <br />

                <p>
                  If you are a Developer, Designer, Writer and you would like to contribute, please check the repositories,
                  or if you just have an idea please don't hesitate get in touch to the listed email bellow
              </p>
                <p>Contact email:  <a href="mailto: coronaviursstats@gmail.com" target="_blank"> coronaviursstats@gmail.com</a></p>
                <p>
                  <a href="https://github.com/AlaeddineMessadi/COVID-19-REPORT-DASHBOARD" target="_blank">
                    <img src="/public/static/github.svg" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

    </Fragment>
  )
}

export default Contact
