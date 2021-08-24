import React from 'react'

const FixedRow = () => {
  return (
    <>
      <div id="footer-1" className="grey-bg">
        <div className="inner">
          <div>
            <span>Looking to ignite your career? We can help.</span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
          }}>
              <a href="https://hennepintech.edu/future-students/admissions/campus-visits.html" 
                className="border-white"
                style={{
                  borderRight: 'none'
                }}
              >Virtual Campus Tour</a>
              <a href="https://eservices.minnstate.edu/adm/public/studentWelcome?campusId=204" 
                target="_blank"
                rel="noreferrer"
                className="border-white"
              >Apply Now</a>
          </div>
        </div>
      </div>
      <a href="https://hennepintech.edu/covid_21.html" className="orange-bg" id="footer-covid-link">
        COVID FAQ
      </a>
    </>  
  )
}

export default FixedRow