const TileSmall = ({ title, value }) => {
  return (
    <div className="tile is-parent">
      <article className="tile is-child box">
        <p className="title">{ title }</p>
        <p className="subtitle">{ value }</p>
      </article>
    </div>
  )
}

export default TileSmall;