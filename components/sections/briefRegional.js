import TileElement from "../elements/tile";
import { formatNumber } from "../../utils";
import TileSmall from "../elements/tileSmall";

const BriefRegional = ({ data = {} }) => {

  console.log(data);

  return (
    <div className="tile is-ancestor has-text-centered">
      {
        Object.keys(data).map(
          (e, i) =>
            <TileSmall
              key={ i }
              title={ formatNumber(data[e]) }
              value={ e } />
        )
      }
      <TileSmall
        title={ data
          ? `${(
            (data.deaths / data.confirmed) *
            100
          ).toFixed(2)}`
          : '-' }
        value="Fatality Rate"
      />
    </div>
  )
}

export default BriefRegional;