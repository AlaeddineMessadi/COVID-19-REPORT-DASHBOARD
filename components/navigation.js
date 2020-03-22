import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'
import { useState, Fragment } from 'react'
import { Navbar } from 'bloomer/lib/components/Navbar/Navbar'
import { NavbarBrand } from 'bloomer/lib/components/Navbar/NavbarBrand'
import { NavbarItem } from 'bloomer/lib/components/Navbar/NavbarItem'
import { Icon } from 'bloomer/lib/elements/Icon'
import { NavbarBurger } from 'bloomer/lib/components/Navbar/NavbarBurger'
import { NavbarMenu } from 'bloomer/lib/components/Navbar/NavbarMenu'
import { NavbarLink } from 'bloomer/lib/components/Navbar/NavbarLink'
import { NavbarDropdown } from 'bloomer/lib/components/Navbar/NavbarDropdown'
import { NavbarDivider } from 'bloomer/lib/components/Navbar/NavbarDivider'
import { NavbarStart } from 'bloomer/lib/components/Navbar/NavbarStart'
import { NavbarEnd } from 'bloomer/lib/components/Navbar/NavbarEnd'
import { Field } from 'bloomer/lib/elements/Form/Field/Field'
import { Control } from 'bloomer/lib/elements/Form/Control'
import { Button } from 'bloomer/lib/elements/Button'

// import logo from '../static/logo.png';

Router.events.on('routeChangeStart', url => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())



const Navigation = (params) => {
  const [isActive, setIsActive] = useState(false)

  const toggleIsActive = value => {
    if (typeof value === 'boolean') {
      setIsActive(value)
      return
    }
    setIsActive(!isActive)
  }

  return (
    <Fragment>
      <Navbar style={ { border: 'solid 1px #00D1B2', margin: '0' } }>
        <NavbarBrand>
          <NavbarItem> <img src='static/logo.png' style={ { marginRight: 5 } } /> Bloomer </NavbarItem>
          <NavbarItem isHidden='desktop'>
            <Icon className='fa fa-github' />
          </NavbarItem>
          <NavbarItem isHidden='desktop'>
            <Icon className='fa fa-twitter' style={ { color: '#55acee' } } />
          </NavbarItem>
          <NavbarBurger isActive={ isActive } onClick={ toggleIsActive } />
        </NavbarBrand>
        <NavbarMenu isActive={ isActive } onClick={ toggleIsActive }>
          <NavbarStart>
            <NavbarItem href='#/'>Home</NavbarItem>
            <NavbarItem hasDropdown isHoverable>
              <NavbarLink href='#/documentation'>Documentation</NavbarLink>
              <NavbarDropdown>
                <NavbarItem href='#/'>One A</NavbarItem>
                <NavbarItem href='#/'>Two B</NavbarItem>
                <NavbarDivider />
                <NavbarItem href='#/'>Two A</NavbarItem>
              </NavbarDropdown>
            </NavbarItem>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem href="https://github.com/AlgusDark/bloomer" isHidden='touch'>
              <Icon className='fa fa-github' />
            </NavbarItem>
            <NavbarItem href="https://twitter.com/AlgusDark" isHidden='touch'>
              <Icon className='fa fa-twitter' style={ { color: '#55acee' } } />
            </NavbarItem>
            <NavbarItem>
              <Field isGrouped>
                <Control>
                  <Button id="twitter" data-social-network="Twitter" data-social-action="tweet"
                    data-social-target="http://bloomer.js.org" target="_blank" href="https://twitter.com/intent/tweet?text=bloomer:
                    a set of React Stateless Components for bulma.io&amp;url=http://bloomer.js.org&amp;via=AlgusDark">
                    <Icon className="fa fa-twitter" />
                    <span>Tweet</span>
                  </Button>
                </Control>
              </Field>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    </Fragment>
  )
}

export default Navigation
