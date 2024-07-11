import React from 'react'
import { Link } from 'react-router-dom'
import bonnevile from '../assets/Images/bonnevile.png'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id='navbaba'>
      <div className="container-fluid ">
        <Link to='/home' class="navbar-brand p-4" href="#" style={{color:'white'}}>
        <img style={{width:'120px'}} src={bonnevile} alt=""/>
        </Link>
        <Link to = '/signup' className='me-auto me-3 signIn-button' style={{textDecoration:'none', color:'white', marginLeft:'20px', fontWeight:'bold'}}>
              <button className='btn btn-sm btn-dark'>
              SignUp
              </button>
            </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div  className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to = '/about' style={{textDecoration:'none', color:'white', marginLeft:'10px', fontWeight:'bold'}}>
              About
            </Link>
            
            <Link to = '/atm'style={{textDecoration:'none', color:'white', marginLeft:'15px', fontWeight:'bold'}}>
              Atm
            </Link>
            <Link to = '/atm'style={{textDecoration:'none', color:'white', marginLeft:'15px', fontWeight:'bold'}}>
              Help
            </Link>
            
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar