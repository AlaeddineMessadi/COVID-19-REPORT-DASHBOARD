import Link from "next/link"
import { Fragment } from "react"
import Navigation from "../components/navigation"

const error = {
  404: <h1>4<span>0</span>4</h1>,
  500: <h1>5<span>0</span>0</h1>
}

function Error({ statusCode: status, message }) {
  return (
    <Fragment>
      <Navigation />
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            { status ? error[404] : error[500] }
          </div>
          <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
          <Link href="/">
            <a>home page</a>
          </Link>
        </div>
      </div>
    </Fragment>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
