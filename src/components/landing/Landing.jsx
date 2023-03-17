import React from 'react'
import '../../assets/styles/landing.css'
import NavbarLanding from '../navbar/NavbarLanding'
import { Link } from 'react-router-dom'
import image from '../../assets/images/computer.jpg'

const Landing = () => {
    return (
        <div className='container-landing'>
            <NavbarLanding />
            <div className='container-body'>
                <div className='container-orders'>
                    <div className="text-container-landing">
                        <h1 className='title-landing'>The best <span className="color-word">Url Shortener</span></h1>
                        <p className='subtitle-landing'>In Keep it Short we shorten the longest URLs in less than a second.</p>
                        <Link to='/login'><button className='button-cta'>Start</button>
                        </Link>
                    </div>
                </div>
                <div className='container-img'>
                    <img className='img-landing' width='500' src={image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Landing