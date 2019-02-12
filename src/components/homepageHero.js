import { Link, navigate } from 'gatsby'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Scroll from 'react-scroll'
import {
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll'
import ExitBrexit from '../images/exitbrexit.png'
import ExitBrexitVideo from '../videos/exitBrexitVideoWhite.mp4'

import HomepageHeroStyles from '../styles/homepageHero.module.scss'

let TweenLite

class HomepageHero extends Component {
  constructor() {
    super()
    this.state = {}
    this.loaderWrap = null
    this.imageTween = null
    this.textTween = null
    this.textWrap = null
  }

  componentDidMount() {
    if (!this.props.loaded) {
      return
    }
    if (typeof window !== `undefined`) {
      TweenLite = window.TweenLite
    }
    if (this.props.renderHero == 'all') {
      this.imageTween = TweenLite.fromTo(
        this.loaderWrap,
        1,
        {
          scale: '0.9',
          opacity: 0,
          delay: 1,
        },
        {
          scale: '1',
          delay: 1,
          opacity: 1,
        }
      )
      this.textTween = TweenLite.fromTo(
        this.textWrap,
        1,
        {
          opacity: 0,
          delay: 1,
        },
        {
          delay: 1,
          opacity: 1,
        }
      )
    }
  }

  render() {
    if (!this.props.loaded) {
      return <span />
    }
    return (
      <div className={HomepageHeroStyles.contianer}>
        <div className={HomepageHeroStyles.inner}>
          {this.props.renderHero == 'all' && (
            <div
              className={HomepageHeroStyles.meta}
              ref={div => (this.textWrap = div)}
            >
              <h4 className={HomepageHeroStyles.strapLine}>Featured project</h4>
              <h2 className={HomepageHeroStyles.title}>Exit Brexit</h2>
              <h3 className={HomepageHeroStyles.subTitle}>
                Change happens when ordinary people get involved
              </h3>
              <Link to="/exitbrexit">
                <div
                  className={HomepageHeroStyles.cta}
                  // onClick={() => {
                  //   scroll.scrollTo(0, {
                  //     duration: 500,
                  //     smooth: 'easeInOutQuint',
                  //   })

                  //   this.props.setState({
                  //     ...this.props.state,
                  //     renderHero: 'video',
                  //   })
                  //   setTimeout(() => {
                  //     navigate('/exitbrexit')
                  //   }, 500)
                  // }}
                >
                  <span>More</span>
                </div>
              </Link>
            </div>
          )}
          <div
            className={HomepageHeroStyles.heroImage}
            ref={div => (this.loaderWrap = div)}
          >
            {/* <img src={ExitBrexit} /> */}
            <video
              src={ExitBrexitVideo}
              muted
              autoPlay
              loop
              playsInline
              ref="video"
              style={
                this.props.renderHero !== 'all'
                  ? {
                      paddingLeft: '0%',
                    }
                  : {}
              }
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    renderHero: state.renderHero,
    loaded: state.renderHeroLoaded,
    state: state,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setState: payload => dispatch({ type: `SET_STATE`, payload: payload }),
  }
}

const ConnectedHomepageHero = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomepageHero)

export default ConnectedHomepageHero
