import React from 'react'
import logo from '../../assets/images/Keep.png'
import "../../assets/styles/navbar.css";
import { useNavigate } from 'react-router-dom';

const NavbarLanding = () => {

  const navigate = useNavigate();

  const navigateToHome = () => {
      navigate('/');
  };

  const navigateToLogin = () => {
    navigate('/login');
};

const navigateToRegister = () => {
    navigate('/register');
};

  return (
    <div className='navbar'>
      <div className='left-navbar'>
        <img className='logo-navbar' onClick={navigateToHome} src={logo} alt="Logo" />
      </div>
      <div className='right-navbar'>
        <button className='btn-login-landing' onClick={navigateToLogin}>Iniciar Sesión</button>
        <button className='btn-register' onClick={navigateToRegister}>Registro</button>
      </div>
    </div>
  )
}

export default NavbarLanding