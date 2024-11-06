import React from 'react';
import tokped from '../assets/img/tokped.png';
import img1 from '../assets/img/remainder.png';
import img2 from '../assets/img/remainder2.png';
import img3 from '../assets/img/social.png';
import img4 from '../assets/img/social2.png';
import img5 from '../assets/img/management.png';
import img6 from '../assets/img/management2.png';
import './component.css'

const Tabs = () => {
  return (
    <>
           <div className='d-flex justify-content-center align-items-center'>
        <div className='custom-card rounded' style={{ width: "60vw", height: "60vw" }}>
          {/* Tabs Navigation */}
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Portofolio</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Pengalaman Kerja</button>
            </li>
          </ul>
          {/* Tabs Navigation */}

          {/* Tabs Content */}
          <div className="tab-content mt-5" id="myTabContent">
            {/* Portofolio Tab */}
            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
              <div className="row d-flex justify-content-center text-center mt-4" style={{ paddingRight: "20px" }}>
                {/* First Column */}
                <div className="col-12 col-md-4 mb-4">
                  <div className="custom-card mb-3" style={{ width: "100%" }}>
                    <img className='card-img' src={img1} alt="forto1" />
                    <div className="card-body">
                      <h5 className="card-title">Remainder App</h5>
                    </div>
                  </div>
                  <div className="custom-card" style={{ width: "100%" }}>
                    <img className='card-img' src={img2} alt="forto2" />
                    <div className="card-body">
                      <h5 className="card-title">Remainder App</h5>
                    </div>
                  </div>
                </div>

                {/* Second Column */}
                <div className="col-12 col-md-4 mb-4">
                  <div className="custom-card mb-3" style={{ width: "100%" }}>
                    <img className='card-img' src={img3} alt="forto3" />
                    <div className="card-body">
                      <h5 className="card-title">Social Media App</h5>
                    </div>
                  </div>
                  <div className="custom-card" style={{ width: "100%" }}>
                    <img className='card-img' src={img4} alt="forto4" />
                    <div className="card-body">
                      <h5 className="card-title">Social Media App</h5>
                    </div>
                  </div>
                </div>

                {/* Third Column */}
                <div className="col-12 col-md-4 mb-4">
                  <div className="custom-card mb-3" style={{ width: "100%" }}>
                    <img className='card-img' src={img5} alt="forto5" />
                    <div className="card-body">
                      <h5 className="card-title">Project Management App</h5>
                    </div>
                  </div>
                  <div className="custom-card" style={{ width: "100%" }}>
                    <img className='card-img' src={img6} alt="forto6" />
                    <div className="card-body">
                      <h5 className="card-title">Project Management App</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pengalaman Kerja Tab */}
            <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
              <div className="mt-4 mb-3">
                {/* Experience 1 */}
                <div className="row mb-4">
                  <div className="col-2 d-flex align-items-center justify-content-center">
                    <img className='card-img' src={tokped} alt="tokped" style={{ width: "50px", height: "50px" }} />
                  </div>
                  <div className="col-10">
                    <h4>Engineer</h4>
                    <h5 className="text-muted">Tokopedia</h5>
                    <p className="text-muted">Juli 2019 - January 2020 <span className="ms-2">6 months</span></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                  </div>
                </div>

                {/* Experience 2 */}
                <div className="row mb-4">
                  <div className="col-2 d-flex align-items-center justify-content-center">
                    <img src={tokped} alt="tokped" style={{ width: "50px", height: "50px" }} />
                  </div>
                  <div className="col-10">
                    <h4>Web Developer</h4>
                    <h5 className="text-muted">Tokopedia</h5>
                    <p className="text-muted">Juli 2019 - January 2020 <span className="ms-2">6 months</span></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Tabs Content */}
        </div>
    </>
  );
};

export default Tabs;
