import TileElement from "../tile";

const Brief = ({ data }) => {

  return (
    <div className="columns">
      {
        Object.keys(data).map(
          (e, i) =>
            <div className="column">
              <TileElement
                key={ i }
                title={ e }
                value={ data[e] }
              />
            </div>
        )
      }
    </div>
  )
}

export default Brief;