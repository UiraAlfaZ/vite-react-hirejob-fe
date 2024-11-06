import React from 'react';
import NavProfile from '../../../components/navbar/navprofile';
import './profile.css';
import prof1 from '../../../assets/img/louis.png';
import pinmap from '../../../assets/img/map-pin.png';
import Footer from '../../../components/footer';

const EditWorker = () => {
  return (
    <>
    <NavProfile/>
    <div className="d-flex align-items-start" style={{ backgroundColor: "#5E50A1", height: "300px", width: "100%", zIndex: "0" }}></div>
      <div className='container mt-4'>
        <div className='row'  style={{ zIndex: "1", position: "relative", marginTop:"-200px" }}>
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
          <div className='col-md-8'>
          <div className='custom-card rounded mb-3' style={{ width: "100%", boxSizing: 'border-box', padding: '20px' }}>
            <div className='border-bottom'>
                <h4>Data Diri</h4>
            </div>          
            <form>
                <div className='mb-3 mt-3'>
                  <label>Nama Lengkap</label>
                  <input type="text" placeholder='Masukkan nama lengkap' className="form-control" />
                </div>
                <div className='mb-3 mt-3'>
                  <label>JobDesk</label>
                  <input type="text" placeholder='Masukkan JobDesk' className="form-control" />
                </div>
                <div className='mb-3 mt-3'>
                  <label>Domisili</label>
                  <input type="text" placeholder='Masukkan Domisili' className="form-control" />
                </div>
                <div className='mb-3 mt-3'>
                  <label>Tempat Kerja</label>
                  <input type="text" placeholder='Masukkan Tempat Kerja' className="form-control" />
                </div>
                <div className='mb-3 mt-3'>
                  <label>Deskripsi Singkat</label>
                  <textarea placeholder='Masukkan deskripsi singkat' className='form-control'></textarea>
                </div>
            </form>         
    </div>
    {/* Skill */}
    <div className="custom-card rounded mb-3" style={{ width: "100%", boxSizing: 'border-box', padding: '20px' }}>
        <div className="border-bottom">
            <h4>Skill</h4>
        </div>
        <form action="">
        <div className='mb-3 mt-3'>
            <div className='row'>
                <div className='col-10'>
                <input type="text" placeholder='Java' className='form-control'/>
                </div>
                <div className='col'>
                <button className='btn btn-warning'>Simpan</button>
                </div>
            </div>
        </div>
        </form>
    </div>
    {/* Pengalaman Kerja */}
    <div className="custom-card rounded mb-3" style={{ width: "100%", boxSizing: 'border-box', padding: '20px' }}>
        <div className="border-bottom">
            <h4>Pengalaman Kerja</h4>
        </div>
        <div className='mb-3 mt-3'>
            <label htmlFor="">Posisi</label>
            <input type="text" placeholder='Web Developer' className='form-control' />
        </div>
        <div className='row mb-3'>
            <div className='col'>
                <label htmlFor="">Nama Perusahaan</label>
                <input type="text" placeholder='PT Harus Bisa' className='form-control' />
            </div>
            <div className='col'>
                <label htmlFor="">Bulan/Tahun</label>
                <input type="text" placeholder='18 Januari'className='form-control' />
            </div>
        </div>
        <div className='mb-3 border-bottom'>
            <label htmlFor="">Deskripsi Singkat</label>
            <textarea name="" id="" placeholder='Deskripsikan pekerjaan anda' className='form-control'></textarea>
        </div>
        <div className='text-center'>
            <button className='btn btn-outline-danger' style={{color:"#DAA520", width:"100%"}}>Tambah Pengalaman</button>
        </div>
    </div>
    {/* Portofolio */}
    <div className="custom-card rounded mb-3" style={{ width: "100%", boxSizing: 'border-box', padding: '20px' }}>
        <div className="border-bottom">
            <h4>Pengalaman Kerja</h4>
        </div>
        <div className='mb-3 mt-3'>
            <label htmlFor="">Nama Aplikasi</label>
            <input type="text" placeholder='Masukkan nama aplikasi' className='form-control' />
        </div>
        <div className='mb-3'>
            <label htmlFor="">Link Repository</label>
            <input type="text" placeholder='Masukkan link repository' className='form-control' />
        </div>
        <label htmlFor="" className='text-start'>Type Portofolio</label>
        <div className='container text-center'>
            <div className='row justify-content-start'>
                <div class="form-check form-check-inline col-3">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-check-label" for="inlineRadio1">Aplikasi Mobile</label>
                </div>
                <div class="form-check form-check-inline col-3">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option1" />
                    <label class="form-check-label" for="inlineRadio2">Aplikasi Web</label>
                </div>
            </div>
        </div>
        <div className='mb-3 border-bottom'>

        </div>
        <div>
        <button className='btn btn-outline-danger d-flex justify-content-center' style={{color:"#DAA520", width:"100%"}}>Tambah Portofolio</button>
        </div>
    </div>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default EditWorker
