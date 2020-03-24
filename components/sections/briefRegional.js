import {
  formatNumber,
  addFatalityRate,
  capitalizeFirstLetter,
  camelize
} from "../../utils";
import TileSmall from "../elements/tileSmall";
import { help } from "../../utils/constants";

const BriefRegional = ({ data = {}, isLoading }) => {
  return (
    <div className="tile is-ancestor has-text-centered">
      {
        Object.keys(addFatalityRate(data)).map(
          (e, i) =>
            <TileSmall
              key={ i }
              title={ formatNumber(data[e]) }
              value={ capitalizeFirstLetter(e) }
              isLoading={ isLoading }
              toolTip={ help[camelize(e)] }
            />
        )
      }
    </div>
  )
}

export default BriefRegional;