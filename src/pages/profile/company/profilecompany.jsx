import React from 'react'
import { Link } from 'react-router-dom'
import prof from '../../../assets/img/louis.png';
import linkd from '../../../assets/img/linkedin.png';
import mail from '../../../assets/img/mail.png';
import phone from '../../../assets/img/phone.png';
import loc from '../../../assets/img/loc.png';
import insta from '../../../assets/img/instagram.png';
import NavProfile from '../../../components/navbar/navprofile';
import Footer from '../../../components/footer';
import "./company.css"


const ProfileCompany = () => {
  return (
    <>
    <NavProfile/>
    <div className='d-flex justify-content-center' style={{ margin: "0" }}>
      <div className='card rounded' style={{ height: "auto", width: "70vw", marginTop:"50px", marginBottom:"50px", overflow: "hidden" }}>
        <div className="rounded-top d-flex align-items-start" style={{ backgroundColor: "#5E50A1", height: "200px", width: "100%", zIndex: "0" }}>
        </div>
        <div style={{ zIndex: "1", position: "relative", marginTop:"-70px" }}>
          <div className="d-flex justify-content-center">
            <img src={prof} alt="louis" className="rounded-circle"/>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <h3>PT. Martabat Jaya Abadi</h3>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <h5>Financial</h5>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <img src={loc} alt="location" />
          </div>
          <div className="d-flex justify-content-center mt-4">
            <div style={{ textAlign: "center" }}>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</h5>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3 mb-4">
            <Link to="/test">  
              <button type='button' className='btn btn-outline-primary custom-btn' style={{width:"20vw"}}>Edit Profile</button>
            </Link>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <h5>
              <img src={mail} alt="mail" /> martabatjaya@gmail.com
            </h5>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <h5>
              <img src={insta} alt="instagram" /> martabat_jaya
            </h5>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <h5>
              <img src={phone} alt="phone" /> 021-2990-0056
            </h5>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <h5>
              <img src={linkd} alt="linkedin" /> MartabatJaya
            </h5>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default ProfileCompany
