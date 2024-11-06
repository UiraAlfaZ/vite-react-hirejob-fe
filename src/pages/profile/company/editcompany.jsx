import React from 'react';
import NavProfile from '../../../components/navbar/navprofile';
import Footer from '../../../components/footer';
import prof1 from '../../../assets/img/louis.png';
import pinmap from '../../../assets/img/map-pin.png';
import './company.css'

const EditCompany = () => {
  return (
    <>
      <NavProfile />
      <div className="d-flex align-items-start" style={{ backgroundColor: "#5E50A1", height: "300px", width: "100%", zIndex: "0" }}></div>
      <div className='container mt-4'>
        <div className='row'  style={{ zIndex: "1", position: "relative", marginTop:"-200px" }}>
          {/* Left Column */}
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
              </div>
              <div style={{ marginBottom: '20px' }}>
                <button className='btn btn-outline-primary custom-btn' style={{ width: "100%" }}>Simpan</button>
              </div>
              <div>
                <button className='btn btn-outline-primary custom-btn' style={{ width: "100%" }}>Batal</button>
              </div>
            </div>
            {/* End Card */}
          </div>

          {/* Right Column */}
          <div className='col-md-8'>
            {/* Form */}
            <div className='custom-card rounded' style={{ width: "100%", boxSizing: 'border-box', padding: '20px' }}>
              <div className='border-bottom'>
                <h4>Data Diri</h4>
              </div>          
              <form>
                <div className='mb-3 mt-3'>
                  <label>Nama Perusahaan</label>
                  <input type="text" placeholder='Masukkan Nama Perusahaan' className="form-control" />
                </div>
                <div className='mb-3'>
                  <label>Bidang</label>
                  <input type="text" placeholder='Masukkan bidang perusahaan ex: Financial' className="form-control" />
                </div>
                <div className='mb-3'>
                  <label>Kota</label>
                  <input type="text" placeholder='Masukkan Kota' className="form-control" />
                </div>
                <div className='mb-3'>
                  <label>Deskripsi Singkat</label>
                  <textarea placeholder='Tuliskan deskripsi singkat' className="form-control"></textarea>
                </div>
                <div className='mb-3'>
                  <label>Email</label>
                  <input type="email" placeholder='Masukkan email' className="form-control" />
                </div>
                <div className='mb-3'>
                  <label>Instagram</label>
                  <input type="text" placeholder='Masukkan nama Instagram' className="form-control" />
                </div>
                <div className='mb-3'>
                  <label>Nomor Telepon</label>
                  <input type="tel" placeholder='Masukkan nomor telepon' className="form-control" />
                </div>
                <div className='mb-3'>
                  <label>LinkedIn</label>
                  <input type="text" placeholder='Masukkan nama LinkedIn' className="form-control" />
                </div>
              </form>
            </div>
            {/* End Form */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EditCompany;
