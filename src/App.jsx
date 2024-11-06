import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPages from './pages/landingpages';
import Home from './pages/home';
import RawTest from './pages/rawtest';
import HirePages from './pages/hirepages';
import ProfileWorker from './pages/profile/worker/profileworker';
import EditWorker from './pages/profile/worker/editworker';
import ProfileCompany from './pages/profile/company/profilecompany';
import EditCompany from './pages/profile/company/editcompany';
import LoginWorker from './pages/auth/loginworker';
import LoginCompany from './pages/auth/logincompany';
import RegisterWorker from './pages/auth/registerworker';
import RegisterCompany from './pages/auth/registercompany';
import ResetPass from './pages/auth/reset';
import KonfirmasiPass from './pages/auth/konfirmasi';
import KonfirmasiLogin from './pages/auth/konfirmasilogin';


function App() {
return(  <>
    <Router>
      <Routes>
      <Route path="/" element={<LandingPages />} />
      
      <Route path="/loginworker" element={<LoginWorker />} />
      <Route path="/logincompany" element={<LoginCompany />} />
      <Route path="/registerworker" element={<RegisterWorker />} />
      <Route path="/registercompany" element={<RegisterCompany />} />
      <Route path="/resetpassword" element={<ResetPass />} />
      <Route path="/konfirmasipassword" element={<KonfirmasiPass />} />
      <Route path="/konfirmasilogin" element={<KonfirmasiLogin />} />
      <Route path="/home" element={<Home />} />
      <Route path="/hire" element={<HirePages />} />
      <Route path="/profileworker" element={<ProfileWorker />} />
      <Route path="/editworker" element={<EditWorker />} />
      <Route path="/profilecompany" element={<ProfileCompany/>} />
      <Route path="/editcompany" element={<EditCompany/>} />
      <Route path="/test" element={<RawTest />} />
      </Routes>
    </Router>
  </>)
}

export default App