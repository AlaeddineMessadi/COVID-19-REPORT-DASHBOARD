import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'
import { useState, Fragment } from 'react'

// import logo from '../static/logo.png';

Router.events.on('routeChangeStart', url => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())



const Navigation = (params) => {
  const [isActive, setIsActive] = useState(false)

  const toggleIsActive = value => {
    console.log('Menu is clicked')
    if (typeof value === 'boolean') {
      setIsActive(value)
      return
    }
    setIsActive(!isActive)
  }

  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <a
              className="navbar-item is-unselectable"
              onClick={ e => toggleIsActive(false) }
            >
              <strong className="is-3">CoronaVirus</strong>
            </a>
          </Link>

          <a
            role="button"
            className={ `navbar-burger burger${isActive ? ' is-active' : ''}` }
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarmenu"
            onClick={ e => toggleIsActive() }
          >
            <span aria-hidden="true" onClick={ e => toggleIsActive() } />
            <span aria-hidden="true" onClick={ e => toggleIsActive() } />
            <span aria-hidden="true" onClick={ e => toggleIsActive() } />
          </a>
        </div>

        <div
          id="navbarmenu"
          className={ `navbar-menu${isActive ? ' is-active' : ''}` }
        >
          <div className="navbar-end">
            <Link href="/#regionl ">
              <a className="navbar-item" onClick={ e => toggleIsActive() }>
                Regions
							</a>
            </Link>
            <Link href="/datatable ">
              <a className="navbar-item" onClick={ e => toggleIsActive() }>
                DataTable
							</a>
            </Link>
            <a className="navbar-item" href="https://github.com/AlaeddineMessadi/COVID-19-REPORT-DASHBOARD" target="_blank">Gihub</a>
            <Link href="/contact">
              <a className="navbar-item" onClick={ e => toggleIsActive() }>
                Contact
							</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navigation
