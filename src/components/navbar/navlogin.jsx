import React from 'react'
import logo from '../../assets/img/LogoPelworld.png'
import { Link } from 'react-router-dom'
import './navbar.css'

const NavLogin = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary' style={{ margin: '30px', backgroundColor: 'transparent'}}>
            <div className='container'>
                <Link to="/landingpages">
                    <img src={logo} alt="peworld" style={{ marginLeft: "50px" }} />
                </Link>
               
                <div className='d-flex align-items-center ms-5'>
                  <Link to='/home' className='text-decoration-none text-dark'>
                  <p className='mb-0'>Home</p>
                  </Link>
                </div>
                <div className='nav ms-auto' style={{marginRight: "50px"}}>
                    <ul className='nav'>
                        <li>
                            <Link to='#'>
                                <button 
                                    type='button'
                                    className='btn btn-outline-primary custom-btn'
                                >
                                    Profile
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavLogin
