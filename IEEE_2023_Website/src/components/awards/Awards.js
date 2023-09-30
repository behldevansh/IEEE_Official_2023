import React from 'react'
import "./Awards.css"
import Awardcar from './carousel/Awardcar'
function Awards() {
  return (
    <div className='awards'>
        <div className='bold_wrap'>

        <div className='award_1'>Our Achievements</div>
        <div className='award_2'>Awards</div>
        </div>
        <Awardcar/>
    </div>
  )
}

export default Awards