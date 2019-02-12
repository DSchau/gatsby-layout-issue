import { Link } from 'gatsby'
import React from 'react'

import CaseStudyStyles from '../styles/casestudy.module.scss'

const CaseStudy = ({}) => (
  <div className={CaseStudyStyles.casestudy}>
    <h1>ExitBrexit</h1>
    <p>
      Firstly, a bit of context. It's November 28th, 2018: The government has
      just released its report on the long term economic impact of Britain
      leaving the EU. In every scenario we are financially worse off outside of
      the EU. There is no consensus in Parliament on how to proceed. Parliament
      is becoming theatre and the political noise around Brexit is astonishing -
      but a handful of politicians are making it all, rather than the British
      people. Theresa May is whipping MPs to vote on her unpopular deal, urging
      them to vote 'in the interests of their constituents'.
    </p>
    <p>
      But how do we, the constituents, let our MPs know what we think? Vote
      every 4 years? Hand write some letters? I can't remember the last time I
      bought a stamp. November 29th our product manager Richard came into the
      neu office frustrated and with an idea to make emailing your MP incredibly
      easy. If Theresa May wanted MPs to vote on behalf of their constituents -
      then we wanted to make sure those constituents had a say.
    </p>
  </div>
)

export default CaseStudy
