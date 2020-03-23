import TileElement from "../tile";
import { formatNumber } from "../../utils";

const BriefRegional = ({ data = {} }) => {

  return (
    <div className="tile is-ancestor has-text-centered">
      {
        Object.keys(data).map(
          (e, i) =>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">439k</p>
                <p class="subtitle">Users</p>
              </article>
            </div>
        )
      }
      <div className="column">
        <TileElement title="Fatality Rate" value={ data
          ? `${(
            (data.deaths / data.confirmed) *
            100
          ).toFixed(2)}`
          : '-' } />
      </div>
    </div>
  )
}

export default BriefRegional;