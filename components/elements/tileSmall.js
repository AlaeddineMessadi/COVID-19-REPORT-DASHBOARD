const TileSmall = ({ title, value }) => {
  return (
    <div class="tile is-parent">
      <article class="tile is-child box">
        <p class="title">{ title }</p>
        <p class="subtitle">{ value }</p>
      </article>
    </div>
  )
}

export default TileSmall;