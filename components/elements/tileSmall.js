import Spinner from "./spinner";
import { Fragment } from "react";


const TileSmall = ({ title, value, toolTip, isLoading }) => {
  return (
    <div className="tile is-parent" data-tooltip={ toolTip }>
      <article className="tile is-child box">
        {
          isLoading ?
            <Spinner /> :
            <Fragment>
              <p className="title">{ title }</p>
              <p className="subtitle">{ value }</p>
            </Fragment>
        }

      </article>
    </div>
  )
}

export default TileSmall;