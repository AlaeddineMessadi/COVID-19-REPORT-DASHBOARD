

const TileElement = (props) => {
  return (
    <div className="box">
      <div className="heading">Top Seller Total</div>
      <div className="title">56,950</div>
      <div className="level">
        <div className="level-item">
          <div className="">
            <div className="heading">Sales $</div>
            <div className="title is-5">250,000</div>
          </div>
        </div>
        <div className="level-item">
          <div className="">
            <div className="heading">Overall $</div>
            <div className="title is-5">750,000</div>
          </div>
        </div>
        <div className="level-item">
          <div className="">
            <div className="heading">Sales %</div>
            <div className="title is-5">25%</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TileElement;