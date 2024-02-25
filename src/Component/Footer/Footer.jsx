import React from 'react'

export default function Footer() {
  return (
    <div className='text-center  '>
      <div className="info py-5 text-white">
        <div className="container">
          <div className="row gx-3">
            <div className="col-md-4">
              <h3>Location</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4">
              <h3>AROUND THE WEB</h3>
              <div className="icon d-flex justify-content-center align-items-center ">
              <span className='border border-white  p-2 rounded-circle d-flex align-items-center '> <i className="fa-brands fa-facebook "></i> </span>
              <span className='border border-white ms-2 p-2 rounded-circle d-flex align-items-center '>   <i className="fa-brands fa-twitter "></i> </span>
              <span className='border border-white ms-2 p-2 rounded-circle d-flex align-items-center '> <i className="fa-brands fa-linkedin "></i> </span>
              <span className='border border-white ms-2 p-2 rounded-circle d-flex align-items-center '>   <i className="fa-solid fa-globe"></i> </span>
              </div>
            </div>
            <div className="col-md-4"> 
              <h3>ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </div>
       <div className="text py-2  text-white">
        <p>Copyright © Your Website 2021</p>
       </div>
      </div>
  )
}
