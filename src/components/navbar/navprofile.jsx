import React from 'react';
import logo from '../../assets/img/LogoPelworld.png';
import { Link } from 'react-router-dom';
import bell from '../../assets/img/bell.png';
import mail from '../../assets/img/mail.png';
import profile from '../../assets/img/Profilelogo.png';

const NavProfile = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary' style={{ margin: '30px', backgroundColor: 'transparent' }}>
        <div className='container d-flex justify-content-between align-items-center'>
          <Link to="/landingpages">
            <img src={logo} alt="peworld" style={{ marginLeft: "50px" }} />
          </Link>
          
          <div className='d-flex flex-row align-items-center'>
            <ul className='nav d-flex flex-row flex-nowrap align-items-center'>
              <li className='m-2'>
                <Link to='/bell'>
                  <img src={bell} alt="ring" style={{ width: '24px', height: '24px' }} />
                </Link>
              </li>
              <li className='m-2'>
                <Link to='/mail'>
                  <img src={mail} alt="mail" style={{ width: '24px', height: '24px' }} />
                </Link>
              </li>
              <li className='m-2'>
                <Link to='/profile'>
                  <img src={profile} alt="profile" style={{ width: '24px', height: '24px' }} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavProfile;
