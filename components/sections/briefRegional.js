import TileElement from "../elements/tile";
import { formatNumber, addFatalityRate, capitalizeFirstLetter } from "../../utils";
import TileSmall from "../elements/tileSmall";

const BriefRegional = ({ data = {} }) => {



  return (
    <div className="tile is-ancestor has-text-centered">
      {
        Object.keys(addFatalityRate(data)).map(
          (e, i) =>
            <TileSmall
              key={ i }
              title={ formatNumber(data[e]) }
              value={ capitalizeFirstLetter(e) } />
        )
      }
    </div>
  )
}

export default BriefRegional;