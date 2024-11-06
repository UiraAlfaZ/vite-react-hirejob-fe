import React from 'react'
import NavProfile from '../components/navbar/navprofile'
import Footer from '../components/footer'
import prof1 from '../assets/img/louis.png'
import pinmap from '../assets/img/map-pin.png'
import './pages.css'

const HirePages = () => {
  return (
    <>
      <NavProfile/>
      <div className='container mt-4'>
        <div className='row'>
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
              <h3 className="mt-3">Skill</h3>
              <div className="row gap-3 mb-3 d-flex flex-row flex-wrap text-center ms-1" style={{ paddingRight: "20px" }}>
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
            </div>
            {/* Card */}
          </div>
          <div className="col">
            <div>
            <form style={{backgroundColor: '#ffffff', 
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'}}>
            <div className="mb-4">
              <label htmlFor="tujuanSelect" className="form-label">Tujuan tentang pesan ini</label>
              <select className="form-select" id="tujuanSelect" aria-label="Default select example">
                <option defaultValue>Projek</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
  
            <div className="mb-4">
              <label htmlFor="namaLengkap" className="form-label">Nama Lengkap</label>
              <input type="text" className="form-control" id="namaLengkap" placeholder="Masukkan nama lengkap" />
            </div>
  
            <div className="mb-4">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Masukkan email" />
            </div>
  
            <div className="mb-4">
              <label htmlFor="noHandphone" className="form-label">No Handphone</label>
              <input type="text" className="form-control" id="noHandphone" placeholder="Masukkan no handphone" />
            </div>
            
            <div className="mb-4">
              <label htmlFor="deskripsi" className="form-label">Deskripsi</label>
              <textarea className="form-control" id="deskripsi" rows="5" placeholder="Deskripsikan/jelaskan lebih detail"></textarea>
            </div>
  
            <div className="text-center">
              <button type="submit" className="btn btn-warning" style={{color: "white", width: "100%"}}>
                Hire
              </button>
            </div>
          </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default HirePages
