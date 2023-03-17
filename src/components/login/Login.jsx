import React from "react";
import { useState } from 'react';
import '../../assets/styles/login.css';
import image from '../../assets/images/cuturl.jpg'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [storeToken, setStoreToken] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3008/login', {
                email: email,
                password: password
            });
            const { token } = response.data;
            if (storeToken) {
                localStorage.setItem('token', token);
            }
            navigate("/cut-url");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className="login">
            <div className="login-image-container">
                <img src={image} alt="delivery person" />
            </div>
            <div className="login-content">
                <form className="login-form" onSubmit={handleLogin}>
                    <div className='form-title'>
                        <h2 className='title-log-in'>Inicio de sesión</h2>
                        <h4 className='subtitle-login'>Introduce tus datos para iniciar sesión</h4>
                    </div>
                    <div className="login-inputs">
                        <div className="login-field">
                            <label htmlFor="email" className='title-input'>Email</label>
                            <input className='input' value={email} onChange={(e) => setEmail(e.target.value)} type="text" required placeholder='email@email.com' id="email" />
                        </div>
                        <div className="login-field">
                            <label htmlFor="password" className='title-input'>Contraseña</label>
                            <input className='input' value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder='*************' id="password" />
                        </div>
                        <div className="check-container">
                            <input className="checkbox" onChange={() => setStoreToken(!storeToken)} type="checkbox" id="remember" />
                            <label htmlFor="remember" className="checkbox-text"> Recuérdame</label>
                        </div>
                        <button className='btn-login' type="submit">Inicio de sesión</button>
                    </div>
                </form>
                <div className="box-register">
                    <h4 className='subtitle-log-in' >
                        <Link to="/register" className="text-link">
                            ¿No tienes cuenta? <b>Registrate</b>
                        </Link>
                    </h4>
                </div>
            </div>
        </section>
    )
}

export default Login;