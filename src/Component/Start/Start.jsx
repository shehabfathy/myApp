import React from 'react'
import hambozo from '../../Assets/Images/avataaars.svg'

export default function Start() {
  return <>
  <header className='vh-100 text-white d-flex align-items-center justify-content-center text-center' >
     <div >
          <img src={hambozo} alt="" className='w-100 mb-5' height={250} />
          <h1 className='fw-bold mb-3'>START FRAMEWORK</h1>
          <span className="demo position-relative mb-4 " ><i className="fa-solid fa-star "></i></span>
          <p>Graphic Artist - Web Designer - Illustrator</p>
     </div>
     </header>
  </>
    
  
}
