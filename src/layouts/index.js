import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import '../../node_modules/css-reset-and-normalize/css/reset-and-normalize.css'
import Header from '../components/header'
import layoutStyles from '../styles/layout.module.scss'
import HomepageHero from '../components/homepageHero'

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <HomepageHero />
        <div className={layoutStyles.container}>
          <main>{this.props.children}</main>
        </div>
      </React.Fragment>
    )
  }
}

export default Layout
