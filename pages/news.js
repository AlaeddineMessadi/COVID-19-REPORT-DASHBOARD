
import Navigation from "../components/navigation";
import SectionTitle from "../components/sectionTitle";
import ApiManager from "../utils/apiManager";
import { convertISODate } from "../utils";


const NewsPage = ({ articles = [], totalResults }) => {
  return (<div>
    <Navigation />
    <div className="section">
      <SectionTitle title="News" subtitle="Latest news about the Novel Coronavirus in the world" />
      <div className="section">
        <div className="container">
          <div className="box">
            <p><strong>IMPORTANT INFORMATION</strong></p>
            <p className="has-text-white">
              The Novel Coronavirus (COVID-19) is not related to or a form of the flu (Influenza), it is part of the family of Coronaviruses which includes MERS and SARS.
The virus is very serious, please follow the guidance of your local authorities and if you believe you may have symptoms contact them immediately.</p>
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          {
            articles.slice(0, 10).filter(e => e.description).map(({ title, author, description, url, urlToImage, publishedAt }, i) => (
              <div key={ i } class="box">
                <article class="media">
                  <div class="media-left">
                    <figure class="image is-128x128">
                      <a href={ url } target="_blank" >
                        <img src={ urlToImage } alt="Image" />
                      </a>
                    </figure>
                  </div>
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <a href={ url } target="_blank" >
                          <strong>{ title }</strong>
                        </a>
                        <br /> <small>{ convertISODate(publishedAt) }</small>
                        <br /> { description }
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  </div>)
}

NewsPage.getInitialProps = async (ctx) => {
  try {
    const { data: { articles, totalResults } } = await ApiManager.readLatestNews();

    return { articles, totalResults }
  } catch (error) {
    console.error(error);
    return { error: error }
  }
}

export default NewsPage;