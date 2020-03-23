import TileElement from "../tile";

const Brief = ({ data = {} }) => {

  return (
    <div className="columns">
      {
        Object.keys(data).map(
          (e, i) =>
            <div key={ i } className="column">
              <TileElement
                title={ e }
                value={ parseFloat(data[e]) }
              />
            </div>
        )
      }
      <div className="column">
        <TileElement title="Fatality Rate" value={ data
          ? `${(
            (data.deaths / data.confirmed) *
            100
          ).toFixed(2)} %`
          : '-' } />
      </div>
    </div>
  )
}

export default Brief;