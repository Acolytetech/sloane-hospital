import React from 'react'
import './whychoosesvh.css'
import inaccessible from '../../../images/inaccessible.jpg'
import longtime from '../../../images/long time wating.jpg'
import highcost from '../../../images/high cost HEALTHCARE.jpg'
import followup from '../../../images/followups.jpg'
import lackofcare from '../../../images/LACK IF IMMEDIATE CARE.jpg'
import fragmented from '../../../images/fragmented.jpg'


const Whychoosesvh = () => {
  return (
    <>
     <div className='whychooseheading'>
        <h1>Why Choose SVH?</h1>

        <div className='whychooseSection'>
          <div className='whychoosediv'>
            {/* <a href={''} target="_blank" rel="noopener noreferrer"> */}
              <div className='whychoosediv-img'>
                <img src={inaccessible} alt='' />
              </div>
              <div className='whychoosediv-content'>
                <p>Inaccessible Healthcare 
                    Services
                </p>
              </div>
            {/* </a> */}
          </div>
          <div className='whychoosediv'>
            {/* <a href='#'> */}
              <div className='whychoosediv-img'>
                <img src={longtime} alt='' />
              </div>
              <div className='whychoosediv-content'>
                <p>Long Wait Times</p>
              </div>
            {/* </a> */}
          </div>
          <div className='whychoosediv'>
            {/* <a href='/appointment'> */}
              <div className='whychoosediv-img'>
                <img src={highcost} alt='' />
              </div>
              <div className='whychoosediv-content'>
                <p>High Healthcare Costs:</p>
              </div>
            {/* </a> */}
          </div>
          <div className='whychoosediv'>
            {/* <a href='#'> */}
              <div className='whychoosediv-img'>
                <img src={followup} alt='' />
              </div>
              <div className='whychoosediv-content'>
                <p>Inconvenience in Follow-ups</p>
              </div>
            {/* </a> */}
          </div>
          <div className='whychoosediv'>
            {/* <a href='#'> */}
              <div className='whychoosediv-img'>
                <img src={lackofcare} alt='' />
              </div>
              <div className='whychoosediv-content'>
                <p>Lack of Immediate 
                    care
                </p>
              </div>
            {/* </a> */}
          </div>
          <div className='whychoosediv'>
            {/* <a href='#'> */}
              <div className='whychoosediv-img'>
                <img src={fragmented} alt='' />
              </div>
              <div className='whychoosediv-content'>
                <p>Fragmented Healthcare System</p>
              </div>
            {/* </a> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Whychoosesvh