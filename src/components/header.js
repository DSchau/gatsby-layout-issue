import { Link, navigate } from 'gatsby'
import React from 'react'
import { connect } from 'react-redux'

import Logo from '../images/logo.svg'
import HeaderStyles from '../styles/header.module.scss'
import { strictEqual } from 'assert'

const Header = ({ siteTitle, toggle, menuActive, state, setState }) => (
  <header className={HeaderStyles.headerContainer}>
    <div className={HeaderStyles.menuInner}>
      <svg
        className={state.loading ? HeaderStyles.logoIn : HeaderStyles.logo}
        viewBox="0 0 181 84"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        onClick={() => {
          navigate('/')
        }}
      >
        <g id="Page-1" stroke-width="1" fill-rule="evenodd">
          <g id="Artboard" transform="translate(-24.000000, -32.000000)">
            <g id="Group-2" transform="translate(24.000000, 32.000000)">
              <rect
                id="Rectangle"
                stroke-width="8"
                x="4"
                y="4"
                width="173"
                height="76"
                fill="none"
              />
              <g id="Group" transform="translate(24.000000, 31.000000)">
                <path
                  d="M6.20738044,9.98578593 L6.20738044,20.9971391 L0,20.9971391 L0,0.269886106 L5.72158545,0.269886106 L5.72158545,2.48295218 L5.93749434,2.48295218 C7.12499321,0.971589983 9.12215039,0 11.4971481,0 C15.0056675,0 18.4602097,2.05113441 18.4602097,8.04260597 L18.4602097,20.9971391 L12.2528292,20.9971391 L12.2528292,8.25851485 C12.2528292,6.04544878 10.9573759,4.91192713 9.28408206,4.91192713 C6.96306154,4.91192713 6.20738044,7.07101598 6.20738044,9.98578593 Z M31.68465,21.3749796 C25.3693151,21.3749796 21.4829552,17.4886197 21.4829552,10.9573759 C21.4829552,4.64204103 25.0454518,0 31.5227183,0 C37.2443038,0 40.968732,3.61647382 40.968732,9.76987705 L40.968732,12.3607837 L27.4069552,12.3607837 C27.7308185,14.8167472 29.0262718,16.4090753 31.6306728,16.4090753 C34.1136249,16.4090753 34.9232833,14.9516903 35.355101,13.7102142 L40.8068004,15.1675992 C40.1590737,17.8664602 37.6221443,21.3749796 31.68465,21.3749796 Z M31.4687411,4.91192713 C29.431101,4.91192713 28.1221534,6.19388614 27.5958755,8.36646929 L35.1931694,8.36646929 C35.1931694,6.42328933 33.8977161,4.91192713 31.4687411,4.91192713 Z M56.4602156,11.2812392 L56.4602156,0.269886106 L62.667596,0.269886106 L62.667596,20.9971391 L56.9460106,20.9971391 L56.9460106,18.784073 L56.7301017,18.784073 C55.5426028,20.2954352 53.5454456,21.2670252 51.1704479,21.2670252 C47.6619285,21.2670252 44.2073864,19.2158908 44.2073864,13.2244192 L44.2073864,0.269886106 L50.4147668,0.269886106 L50.4147668,13.0085103 C50.4147668,15.2215764 51.7102201,16.355098 53.383514,16.355098 C55.7045345,16.355098 56.4602156,14.1960092 56.4602156,11.2812392 Z"
                  stroke-width="0"
                  id="neu"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>

      <div
        className={
          menuActive
            ? `${HeaderStyles.menuBars}  ${HeaderStyles.menuBarsActive}`
            : HeaderStyles.menuBars
        }
        onClick={toggle}
      >
        <div className={`${HeaderStyles.menuBar}  ${HeaderStyles.menuBar1}`} />
        <div className={`${HeaderStyles.menuBar}  ${HeaderStyles.menuBar2}`} />
      </div>

      <div
        className={
          menuActive
            ? `${HeaderStyles.menu} ${HeaderStyles.menuIn}`
            : HeaderStyles.menu
        }
      >
        <div>
          <span>a</span>
        </div>
      </div>
    </div>
  </header>
)

const mapStateToProps = state => {
  return {
    menuActive: state.menuActive,
    state: state,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggle: () => dispatch({ type: `TOGGLE_MENU` }),
    setState: payload => dispatch({ type: `SET_STATE`, payload: payload }),
  }
}

const ConnectedHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default ConnectedHeader
