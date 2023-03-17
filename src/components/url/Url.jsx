import React from 'react'
import '../../assets/styles/url.css'
import { useNavigate } from 'react-router-dom';

const Url = (props) => {

  const navigate = useNavigate();

  const navigateToPage = () => {
    navigate(`/${props.shortUrl}`)
  }

  return (
    <div className='container-url'>
      <div className='small-container'>
        <div className='small-container-title'>My Url: </div>
        <div className='small-container-subtitle'>{props.longUrl.substring(0, 80)}...</div>
      </div>

      <div className='small-container'>
        <div className='small-container-title'>Short Url: </div>
        <div onClick={navigateToPage} className='small-container-subtitle' target="_blank" rel="noopener noreferrer">
          {props.shortUrl}
        </div>
      </div>
    </div>
  )
}

export default Url