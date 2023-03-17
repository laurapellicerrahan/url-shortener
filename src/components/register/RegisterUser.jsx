import React from 'react';
import { useState } from 'react';
/* import registerAPI from "../../services/registerAPI"; */
import { Link, useNavigate } from 'react-router-dom';
import image from '../../assets/images/cuturl.jpg'
import '../../assets/styles/register.css'
import axios from 'axios';


function RegisterUser() {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [storeToken, setStoreToken] = useState(false);

    async function handleRegisterSubmit(event) {
        event.preventDefault();
        try {
          const response = await axios.post('http://localhost:3008/register', {
            firstName,
            lastName,
            email,
            password,
          });
          navigate("/login");
        } catch (error) {
          console.log(error);
        }
      }

    return (
        <section className='register'>
            <div className="register-image-container">
                <img src={image} alt="delivery-person" />
            </div>
            <div className="register-content">
                <form className="register-form" onSubmit={handleRegisterSubmit} >
                    <div className='form-register-title'>
                        <h2 className='title-register'>Registro</h2>
                        <h4 className='subtitle-register'>Introduce tus datos para el registro</h4>
                    </div>

                    <div className="register-inputs">
                        <div className="register-field">
                            <label htmlFor="name" className='title-register-input'>Nombre</label>
                            <input className='register-input' value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" required placeholder='Nombre' id="name" />
                        </div>
                        <div className="register-field">
                            <label htmlFor="lastname" className='title-register-input'>Apellido</label>
                            <input className='register-input' value={lastName} onChange={(e) => setLastName(e.target.value)} type="lastname" required placeholder='Apellido' id="lastname" />
                        </div>
                        <div className="register-field">
                            <label htmlFor="Email" className='title-register-input'>Email</label>
                            <input className='register-input' value={email} onChange={(e) => setEmail(e.target.value)} type="text" required placeholder='email@email.com' id="email" />
                        </div>
                        <div className="register-field">
                            <label htmlFor="password" className='title-register-input'>Contraseña</label>
                            <input className='register-input' value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder='*************' id="password" />
                        </div>
                        <div className="register-field">
                            <label htmlFor="confirmpassword" className='title-register-input'>Confirme Contraseña</label>
                            <input className='register-input' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" required placeholder='*************' id="confirmpassword" />
                        </div>
                        <div className="check-register-container">
                            <input className="checkbox-register" onChange={() => setStoreToken(!storeToken)} type="checkbox" id="remember" />
                            <label htmlFor="remember" className="slider-register"> Recuérdame</label>
                        </div>
                        <button className='btn-registers' type="submit">Registrarme</button>
                    </div>
                </form>
                <div className="box-register-user">
                    <h4 className='subtitle-reg-in' >
                        <Link to="/login" className="text-link-register">
                            ¿Ya tienes cuenta? <b>Inicia Sesión</b>
                        </Link>
                    </h4>
                </div>
            </div>
        </section>
    );
}
export default RegisterUser
