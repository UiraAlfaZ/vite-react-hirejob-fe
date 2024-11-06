import React from 'react';
import { Link } from 'react-router-dom';
import NavProfile from '../../../components/navbar/navprofile';
import Footer from '../../../components/footer';
import prof1 from '../../../assets/img/Ellipse330.png';
import pinmap from '../../../assets/img/map-pin.png';
import github from '../../../assets/img/github.png';
import gitlab from '../../../assets/img/gitlab.png';
import mail from '../../../assets/img/mail.png';
import insta from '../../../assets/img/instagram.png';
import Tabs from '../../../components/tabs';

const ProfileWorker = () => {
  return (
    <>
      <NavProfile/>
      <div className="d-flex align-items-start" style={{ backgroundColor: "#5E50A1", height: "300px", width: "100%", zIndex: "0" }}></div>
      <div className='container mt-4'>
        <div className='row' style={{ zIndex: "1", position: "relative", marginTop:"-200px" }}>
          <div className='col-md-4'>
            {/* Card */}
            <div className='custom-card rounded p-3' style={{ width: '100%', boxSizing: 'border-box', padding: '20px' }}>
              <div className="text-center">
                <img src={prof1} alt="profile" style={{ width: '150px', maxWidth: '100%', alignSelf: "center" }} className="rounded-circle mt-3 mb-3" />
              </div>
              <div>
                <h3>Louis Tomlinson</h3>
                <p>Web Developer</p>
                <p><img src={pinmap} alt="pinmap" /> Purwokerto, Jawa Tengah</p>
                <p>Freelance</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <Link to="/test">
                <button className='btn btn-outline-primary custom-btn' style={{ width: "100%" }}>Hire</button>
                </Link>
              </div>
              <h3 className="mt-3">Skill</h3>
            <div className="row gap-3 mb-3 d-flex flex-row flex-wrap text-center ms-1 me-1" style={{ paddingRight: "20px" }}>
                    <div className="card" style={{ width: "70px", height: "28px", backgroundColor: "#FBB017" }}>
                      <p className="me-auto mx-auto">Phyton</p>
                    </div>
                    <div className="card" style={{ width: "80px", height: "28px", backgroundColor: "#FBB017" }}>
                      <p className="me-auto mx-auto">Laravel</p>
                    </div>
                    <div className="card" style={{ width: "80px", height: "28px", backgroundColor: "#FBB017" }}>
                      <p className="me-auto mx-auto">Golang</p>
                    </div>
                    <div className="card" style={{ width: "90px", height: "28px", backgroundColor: "#FBB017" }}>
                      <p className="me-auto mx-auto">Javascript</p>
                    </div>
                    <div className="card" style={{ width: "70px", height: "28px", backgroundColor: "#FBB017" }}>
                      <p className="me-auto mx-auto">PHP</p>
                    </div>
                    <div className="card" style={{ width: "70px", height: "28px", backgroundColor: "#FBB017" }}>
                      <p className="me-auto mx-auto">HTML</p>
                    </div>
                    <div className="card" style={{ width: "70px", height: "28px", backgroundColor: "#FBB017" }}>
                      <p className="me-auto mx-auto">C++</p>
                    </div>
                    <div className="card" style={{ width: "70px", height: "28px", backgroundColor: "#FBB017" }}>
                      <p className="me-auto mx-auto">Kotlin</p>
                    </div>
                    <div className="card" style={{ width: "70px", height: "28px", backgroundColor: "#FBB017" }}>
                      <p className="me-auto mx-auto">Swift</p>
                    </div>
              </div>
                  <div className="col d-flex flex-column ms-1 me-1">
                        <div className="d-flex align-items-center">
                            <img src={mail}/><p>Louistommo@gmail.com</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <img src={insta} /><p>@Louist91</p>                           
                        </div>
                        <div className="d-flex align-items-center">
                            <img src={github} /><p>@Louistommo</p>                           
                        </div>
                        <div className="d-flex align-items-center">
                            <img src={gitlab} /><p>@Louistommo91</p>
                        </div>
                  </div>
            </div>
            {/* Card */}
          </div>
          <div className='col-md-8'>
            {/* Tabs */}
            <Tabs/>
            {/* Tabs */}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default ProfileWorker;