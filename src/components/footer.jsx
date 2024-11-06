import React from 'react'
import logo from '../assets/img/Peworldlogo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div style={{ marginTop: "120px" }}>
        <div style={{ height: "401px", border: "1px solid #5E50A1", backgroundColor: "#5E50A1" }}>
          <div className="container">
            <div className="d-flex ">
              <div className="p-2 mx-auto my-3">
                <img src={logo} alt="logo" />
                <p className="col-4" style={{ marginTop: "30px", color: "white" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores accusamus culpa ab, eius voluptatum suscipit accusantium nostrum unde optio cum? Mollitia maxime illum minus libero suscipit saepe ratione soluta quod.
                </p>
                <div style={{ border: "1px solid white", width: "1140px", marginTop: "67px" }}></div>
                <div className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block' style={{color:"white"}}>
          <span>2020 Peworld. All right reserved</span>
        </div>
        <div className='' style={{color:"white"}}>
          <Link to='/' className='text-decoration-none text-reset me-3'>
            Telepon
          </Link>
          <Link to='/' className='text-decoration-none text-reset'>
            Email
          </Link>
        </div>
      </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
