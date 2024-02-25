import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <>
<nav className="navbar navbar-expand-lg ">
  <div className="container">
    <Link className="navbar-brand text-uppercase fs-4 text-white fw-bold" to="start">start framwork</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto py-3 fs-6 fw-bold ">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="about">About </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="portfolio">Portofolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="contact">Contact</Link>
        </li>
  
      </ul>
    </div>
  </div>
</nav>

  </>
}
