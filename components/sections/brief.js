import TileElement from "../elements/tile";
import { formatNumber, addFatalityRate, camelize } from "../../utils";
import { HELP } from "../../utils/constants";

const Brief = ({ data = {} }) => {

  return (
    <div className="columns">
      {
        Object.keys(addFatalityRate(data, false)).map(
          (e, i) =>
            <div key={ i } className="column">
              <TileElement
                title={ e }
                value={ formatNumber(data[e]) }
                toolTip={ HELP[camelize(e)] }
              />
            </div>
        )
      }
    </div>
  )
}

export default Brief;