
import Navigation from "../components/navigation";
import SectionTitle from "../components/sectionTitle";
import Link from "next/link";


const FAQPage = (props) => {
  return (
    <div>
      <Navigation />
      <div className="section">
        <SectionTitle title="FAQ" subtitle="Frequently Asked Questions" />
        <div className="section">
          <div className="container">
            <div className="box">
              <h4>Who? Why? How?</h4>
              <p className="has-text-white">
                The Novel Coronavirus (COVID-19) is not related to or a form of the flu (Influenza), it is part of the family of Coronaviruses which includes MERS and SARS.
                The virus is very serious, please follow the guidance of your local authorities and if you believe you may have symptoms contact them immediately.
              </p>
            </div>
            <div className="box">
              <h4>What Do The Terms Mean?</h4>
              <table className="table is-narrow">
                <thead>
                  <tr>
                    <th>Cases</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th>Confirmed</th><td className="has-text-centered has-text-white">The number of confirmed (recorded) cases</td></tr>
                  <tr><th>Deaths</th><td className="has-text-centered has-text-white">The number of confirmed cases that have died</td></tr>
                  <tr><th>Recovered</th><td className="has-text-centered has-text-white">The number of confirmed cases that have recovered</td></tr>
                  <tr><th>Fatality Rate</th><td className="has-text-centered has-text-white">Sometimes called case fatality risk — is the proportion of deaths compared to the total number of confirmed</td></tr>
                </tbody>
              </table>
            </div>
            <div className="box">
              <p>If you have more question please check -

              <Link href="/about">
                  <a> About</a>
                </Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQPage;