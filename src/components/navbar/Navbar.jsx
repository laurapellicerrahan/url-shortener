import React from 'react'
import logo from '../../assets/images/Keep.png'
import "../../assets/styles/navbar.css";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  const navigateToHome = () => {
      navigate('/cut-url');
  };

  const navigateToLanding = () => {
    localStorage.removeItem('token');
    navigate('/');
};

const navigateToUrls = () => {
  navigate('/my-urls');
}

  return (
    <div className='navbar'>
      <div className='left-navbar'>
        <img className='logo-navbar' onClick={navigateToHome} src={logo} alt="Logo" />
      </div>
      <div className='right-navbar'>
        <h5 className='navbar-option' onClick={navigateToUrls}>My Urls</h5>
        <button className='btn-logout' onClick={navigateToLanding}>Cerrar Sesión</button>
      </div>
    </div>
  )
}

export default Navbar