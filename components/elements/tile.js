import { ICONS } from "../../utils/constants";

const TileElement = ({ title, value, options }) => {
  return (
    <div className="box">
      <div className="columns is-mobile is-vcentered">
        <div className="column">
          <div className="heading">{ title }</div>
          <div className="title">{ value }</div>
        </div>
        <div className="column">
          <span>
            {
              ICONS[title.toLowerCase()] ? ICONS[title.toLowerCase()] : ICONS.percentage
            }
          </span>
        </div>
      </div>

      {
        options && (
          <div className="level is-mobile">
            {
              options.map((e, i) => <div key={ i }
                className="level-item">
                <div className="">
                  <div className="heading">{ e.title }</div>
                  <div className="title is-5">{ e.value }</div>
                </div>
              </div>)
            }
          </div>
        )
      }
    </div>
  )
}

export default TileElement;