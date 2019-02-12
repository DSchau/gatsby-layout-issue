import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'gatsby'
import '../styles/base.module.scss'
import SEO from '../components/seo'
import Intro from '../components/Intro.js'

class IndexPage extends Component {
  componentDidMount() {
    this.props.setState({
      ...this.props.state,
      renderHero: 'all',
      renderHeroLoaded: true,
    })
  }
  render() {
    return (
      <div>
        <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
        <Intro />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    renderHero: state.renderHero,
    state: state,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setState: payload => dispatch({ type: `SET_STATE`, payload: payload }),
  }
}

const ConnectedIndexPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage)

export default ConnectedIndexPage
