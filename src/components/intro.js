import { Link } from 'gatsby'
import React from 'react'

import HeaderStyles from '../styles/intro.module.scss'

const Intro = ({}) => (
  <div className={HeaderStyles.intro}>
    <h3 className={HeaderStyles.strap}>
      neu is a digital product studio. We design, develop and ship digital
      products and services for the world's most respected brands and
      organisations.
    </h3>
  </div>
)

export default Intro
