import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/Peworldlogo.png';
import pict from '../../assets/img/MaskGroup.png';
import cover from '../../assets/img/bluecover.png';


const RegisterWorker = () => {
  return (
    <>
    <div className='container my-3 mx-3'>
        <div className='row' style={{minHeight: "100vh"}}>
            <div className='col d-flex position-relative'>
                <div style={{width: "100%", height: "100%", position: "absolute"}}>
                    <img src={pict} alt="" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                </div>
                <div style={{width: "100%", height: "100%", position: "absolute"}}>
                    <img src={cover} alt="" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                </div>
                <div className='top-5 start-3 mt-2 ms-3' style={{zIndex:"2", position:"relative"}}><img src={logo} alt="" /></div>
                <div className='justify-self-center align-self-center text-center text-white' 
                    style={{zIndex:"2", position:"absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: "80%"}}>
                    <h2>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h2>
                </div>
            </div>
            <div className='col'>
                <div className='ms-4 mt-5'>
                    <h3>Hello, Pewpeople</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                    <form action="" className='mt-4'>
                        <div className='mb-3 mt-3'>
                            <label htmlFor="">Nama</label>
                            <input type="text" placeholder='Masukkan nama panjang' className='form-control'/>
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder='Masukkan Email' className='form-control'/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder='Masukkan no handphone' className='form-control'/>
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="">Kata Sandi</label>
                            <input type="password" placeholder='Masukkan kata sandi' className='form-control'/>
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="">Konfirmasi kata Sandi</label>
                            <input type="password" placeholder='Masukkan konfirmasi kata sandi' className='form-control'/>
                        </div>
                        <p className='text-end mt-3'><Link to={'/'} style={{textDecoration:'none', color:'#000'}}>Lupa kata sandi?</Link></p>
                        <button className='btn btn-outline-danger d-flex justify-content-center mt-3' style={{color:"#FFFFFF", width:"100%", backgroundColor:"#FBB017"}}>Masuk</button>
                        <p className="text-center mt-4">Anda sudah punya akun? <Link to={'/loginworker'} style={{color: '#FBB017', textDecoration:'none'}}>Masuk disini</Link></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default RegisterWorker
