import React from 'react'
import styles from './Portofolio.module.css'
import first from '../../Assets/Images/poert1.png'
import second from '../../Assets/Images/port2.png'
import third from '../../Assets/Images/port3.png'

export default function Portofolio() {
  return <>
  
  
     <div className='vh-200 text-dark text-center py-5'>
          <h2 className='fw-bold fs-2 mb-3'>PORTFOLIO COMPONENT</h2>
          <span className='line mb-3 d-inline-block position-relative '><i className="  fa-solid fa-star "></i></span>
          <div className="container">
            <div className="row g-5">
              <div className="col-md-4 position-relative">
                <div className="item position-relative ">
                <div className="layer  position-absolute d-flex justify-content-center align-items-center "><i class="fs-1 text-white fa-solid fa-plus fa-2xl"></i> </div>
                <img src={first} alt="" className='w-100' height={250}/>
                </div>
              </div>
              <div className="col-md-4 position-relative">
                <div className="item position-relative ">
                <div className="layer  position-absolute d-flex justify-content-center align-items-center "><i class="fs-1 text-white fa-solid fa-plus fa-2xl"></i> </div>
                <img src={second} alt="" className='w-100' height={250}/>
                </div>
              </div>
              <div className="col-md-4 position-relative">
                <div className="item position-relative ">
                <div className="layer  position-absolute d-flex justify-content-center align-items-center "><i class="fs-1 text-white fa-solid fa-plus fa-2xl"></i> </div>
                <img src={third} alt="" className='w-100' height={250}/>
                </div>
              </div>
              <div className="col-md-4 position-relative">
                <div className="item position-relative ">
                <div className="layer  position-absolute d-flex justify-content-center align-items-center "><i class="fs-1 text-white fa-solid fa-plus fa-2xl"></i> </div>
                <img src={first} alt="" className='w-100' height={250}/>
                </div>
              </div>
              <div className="col-md-4 position-relative">
                <div className="item position-relative ">
                <div className="layer  position-absolute d-flex justify-content-center align-items-center "><i class="fs-1 text-white fa-solid fa-plus fa-2xl"></i> </div>
                <img src={second} alt="" className='w-100' height={250}/>
                </div>
              </div>
              <div className="col-md-4 position-relative">
                <div className="item position-relative ">
                <div className="layer  position-absolute d-flex justify-content-center align-items-center "><i class="fs-1 text-white fa-solid fa-plus fa-2xl"></i> </div>
                <img src={third} alt="" className='w-100' height={250}/>
                </div>
              </div>
              
          </div>
          </div>
    </div>
  </>

}
