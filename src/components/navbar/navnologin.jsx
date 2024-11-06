import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/LogoPelworld.png'
import './navbar.css'

const NavnoLogin = () => {
  return (
    <>
        <nav className='navbar navbar-expand-lg bg-body-tertiary' style={{ margin: '30px', backgroundColor: 'transparent'}}>
            <div className='container'>
                <Link to="/landingpages">
                    <img src={logo} alt="peworld" style={{ marginLeft: "50px" }} />
                </Link>
                <div className='nav ms-auto me-3'>
                    <ul className='nav'>
                        <li>
                            <Link to='#'>
                                <button 
                                    type='button'
                                    className="btn btn-outline-primary custom-btn me-3"
                                >
                                    Masuk
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to='#'>
                                <button 
                                    type='button'
                                    className='btn btn-outline-primary custom-btn'
                                >
                                    Daftar
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

export default NavnoLogin
