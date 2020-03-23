

const TileElement = ({ title, value }) => {
  return (
    <div className="box">
      <div className="heading">{ title }</div>
      <div className="title">{ value }</div>
      <div className="level">
        <div className="level-item">
          <div className="">
            <div className="heading">Last</div>
            <div className="title is-5">250,000</div>
          </div>
        </div>
        <div className="level-item">
          <div className="">
            <div className="heading">Overall</div>
            <div className="title is-5">750,000</div>
          </div>
        </div>
        <div className="level-item">
          <div className="">
            <div className="heading">Fatality Rate %</div>
            <div className="title is-5">25%</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TileElement;