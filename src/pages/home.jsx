import React from 'react';
import { Link } from 'react-router-dom';
import prof1 from '../assets/img/louis.png';
import pinmap from '../assets/img/map-pin.png'
import './pages.css'
import NavLogin from '../components/navbar/navlogin';
import Footer from '../components/footer';

const Home = () => {
  return (
    <>
      {/* Bagian atas */}
      <NavLogin/>
      <div
        className="atas"
        style={{
          backgroundColor: "#5E50A1",
          width: "100vw",
          height: "100px",
          border: "1px solid #5E50A1",
          position: "relative",
          zIndex: "0",
        }}
      >
        <div
          className="d-flex align-items-center"
          style={{ zIndex: "1", marginLeft: "120px", height: "100%" }}
        >
          <h2 style={{ color: "white" }}>Top Jobs</h2>
        </div>
      </div>

      {/* Bagian bawah, dengan lebar 80vw dan di tengah */}
      <div className="bawah" style={{width: "82vw", margin: "0 auto", marginTop: "50px", display: "flex", justifyContent: "center",}}>
        <div className="input-group input-group-lg" style={{boxSizing: "border-box" }}> 
          <input type="text" className="form-control" placeholder="Search for any details" aria-label="Search for any details"/>
          {/* Dropdown Sort */}
          <button className="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownSortButton" data-bs-toggle="dropdown" aria-expanded="false">
            Sort
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#/action-1">Sortir berdasarkan Nama</a></li>
            <li><a className="dropdown-item" href="#/action-2">Sortir berdasarkan Skill</a></li>
            <li><a className="dropdown-item" href="#/action-3">Sortir berdasarkan Lokasi</a></li>
            <li><a className="dropdown-item" href="#/action-4">Sortir berdasarkan Freelance</a></li>
            <li><a className="dropdown-item" href="#/action-5">Sortir berdasarkan Fulltime</a></li>
          </ul>
          {/* Buttons */}
          <button className="btn btn-outline-primary" type="button" id='button-addon2'>
            Search
          </button>
        </div>
      </div>

    {/* List */}
    <div className="mt-4" style={{ 
            marginTop: "50px",
            width: "80vw",
            margin: "0 auto",
            marginTop: "50px",           
           }}>
      {/* Card */}
      <div className="row d-flex justify-content-center custom-card">
                <div className="col-2 d-flex align-items-center">
                  {/* -lg-1 col-md-2 col-sm-2  */}
                  <img src={prof1} alt="miniprofile"/>
                </div>
                <div className="col-8" style={{paddingTop: "10px" }}>
                  {/* -lg-8 col-md-7 col-sm-6 */}
                  <div>
                  <h4>Louis</h4>
                  <p>Web developer</p>
                  <img src={pinmap} alt="pinmap" /> Lorem ipsum
                  <div className="row mt-2 mb-3">
                    <div className="row">
                      <div className="card me-2" style={{ width: "70px", height: "28px", backgroundColor: "#FBB017" }}>
                        <p className="me-auto mx-auto">PHP</p>
                      </div>
                      <div className="card me-2" style={{ width: "90px", height: "28px", backgroundColor: "#FBB017" }}>
                        <p className="me-auto mx-auto">Javascript</p>
                      </div>
                      <div className="card me-2" style={{ width: "70px", height: "28px", backgroundColor: "#FBB017" }}>
                        <p className="me-auto mx-auto">HTML</p>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col-2" style={{ paddingTop: "50px" }}>
                  {/* -lg-3 col-md-3 col-sm-4 */}
                  <Link to={"/portofolio"}>
                    <button type="button" className="btn btn-outline-primary custom-btn">
                      Lihat Profile
                    </button>
                  </Link>
                </div>
              </div>   
    </div>
    {/* End Card */}
    {/* Pagination */}
    <div className='d-flex justify-content-center mt-5'>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    {/* End Pagination */}
    <Footer/>
    </>
    
  );
};

export default Home;
