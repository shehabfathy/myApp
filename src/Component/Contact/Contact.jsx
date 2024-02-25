import React from 'react'

export default function Contact() {

  return <>
  <div className='vh-200 text-dark  text-center  py-5'>
          <h2 className='  fw-bold fs-2 mb-3'>CONATCT SECTION</h2>
          <span className='line mb-3 d-inline-block  position-relative '><i className="  fa-solid fa-star "></i></span>

  <div className="mb-3 w-50 mx-auto  ">
  <div className="container  ">
  <input type="text" className="form-control  mb-5 w-100 border-0 border-bottom" id="exampleFormControlInput1" placeholder="userName"/>
  <input type="number" className="form-control mb-5 w-100 border-0 border-bottom" id="exampleFormControlInput1" placeholder="userAge"/>
  <input type="email" className="form-control mb-5 w-100 border-0 border-bottom" id="exampleFormControlInput1" placeholder="userEmail"/>
  <input type="password" className="form-control mb-3 w-100 border-0 border-bottom" id="exampleFormControlInput1" placeholder="userPassword"/>
  <button className='btn btn-success send'>send Message</button>
</div>
</div>
</div>
  </>
}
