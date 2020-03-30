
import Navigation from "../components/navigation";
import SectionTitle from "../components/sectionTitle";


const NewsPage = (props) => {
  return (<div>
    <Navigation />
    <div className="section">
      <SectionTitle title="News" subtitle="Get latest news about the Novel Coronavirus world wide" />
      <div className="section">
        <div className="container">
          <div className="box">
            <p><strong>IMPORTANT INFORMATION</strong></p>
            <p className="has-text-white">
              The Novel Coronavirus (COVID-19) is not related to or a form of the flu (Influenza), it is part of the family of Coronaviruses which includes MERS and SARS.
The virus is very serious, please follow the guidance of your local authorities and if you believe you may have symptoms contact them immediately.</p>
          </div>
        </div>
      </div>
    </div>
  </div>)
}

export default NewsPage;