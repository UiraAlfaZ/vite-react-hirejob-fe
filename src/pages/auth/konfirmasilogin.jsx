import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/img/Peworldlogo.png';
import pict from '../../assets/img/MaskGroup.png';
import cover from '../../assets/img/bluecover.png';

const KonfirmasiLogin = () => {
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
                    <h3>Please login with your account</h3>
                    <p>We have an an email containing a password reset instruction toyour email. please check your email.</p>
                    <form action="" className='mt-4'>
                        <div className='mb-3 mt-3'>
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder='Masukkan email' className='form-control'/>
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="">Kata sandi</label>
                            <input type="password" placeholder='Masukkan kata sandi' className='form-control'/>
                        </div>
                        <Link to={'/'} style={{textDecorationLine:"none"}}>
                        <button className='btn btn-outline-danger d-flex justify-content-center mt-4' style={{color:"#FFFFFF", width:"100%", backgroundColor:"#FBB017"}}>Reset password</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default KonfirmasiLogin
