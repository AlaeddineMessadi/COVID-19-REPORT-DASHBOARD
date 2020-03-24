import Spinner from "./spinner";
import { Fragment } from "react";


const TileSmall = ({ title, value, toolTip, isLoading }) => {
  return (
    <div className="tile is-parent">
      <article className="tile is-child box">
        {
          isLoading ?
            <Spinner /> :
            <Fragment>
              <p className="title">{ title }</p>
              <p className="subtitle">{ value } { dataToolTip }</p>
            </Fragment>
        }

      </article>
    </div>
  )
}

export default TileSmall;