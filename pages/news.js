
import Navigation from "../components/navigation";
import SectionTitle from "../components/sectionTitle";
import ApiManager from "../utils/apiManager";
import { convertISODate } from "../utils";
import { useState } from "react";
import { NextSeo } from "next-seo";

const NUMBER_ARTICLES = 8;
const FIRST_PAGE = 1;
const IMG_URL = 'https://images.unsplash.com/flagged/photo-1584036561584-b03c19da874c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80';

const NewsPage = props => {
  const [state, setState] = useState(props.articles || [])
  const [page, setPage] = useState(FIRST_PAGE)


  const loadMoreArticles = async () => {
    try {
      const { data: { articles, totalResults } } = await ApiManager.readLatestNews('corona', NUMBER_ARTICLES, page + 1)

      setState([...state, ...articles])

      setPage(page + 1);
    } catch (error) {
      console.log('cannot load more articles');
    }
  }

  return (
    <div>
      <NextSeo title="News" titleTemplate='%s | Stats-Coronavirus' />

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
              state.filter(e => e.description).map(({ title, author, description, url, urlToImage = IMG_URL, publishedAt }, i) => (
                <div key={ i } className="box">
                  <article className="media">
                    <div className="media-left">
                      <figure className="image is-128x128">
                        <a href={ url } target="_blank" >
                          <img src={ urlToImage } alt="Image" />
                        </a>
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
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
            <div className="center">
              <button className="button is-primary" onClick={ loadMoreArticles }>Load More</button>
            </div>
          </div>
        </div>
      </div>
    </div>)
}

NewsPage.getInitialProps = async (ctx) => {
  try {
    const { data: { articles, totalResults } } = await ApiManager.readLatestNews('corona', NUMBER_ARTICLES, FIRST_PAGE);

    return { articles, totalResults }
  } catch (error) {
    console.error(error);
    return { error: error }
  }
}

export default NewsPage;