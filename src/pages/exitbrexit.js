import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'gatsby'
import * as Scroll from 'react-scroll'
import {
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll'
import '../styles/base.module.scss'
import SEO from '../components/seo'
import CaseStudy from '../components/caseStudy'

class ExitBrexit extends Component {
  componentDidMount() {
    this.props.setState({
      ...this.props.state,
      renderHero: 'video',
      renderHeroLoaded: true,
    })
    scroll.scrollTo(100, {
      duration: 300,
      smooth: 'linear',
    })
  }
  render() {
    return (
      <div className="exitBrexit">
        <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
        <CaseStudy />
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

const ConnectedExitBrexit = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExitBrexit)

export default ConnectedExitBrexit
