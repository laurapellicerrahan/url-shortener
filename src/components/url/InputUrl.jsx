import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Url from './Url'
import '../../assets/styles/url.css'

const InputUrl = () => {

    const [longUrl, setLongUrl] = useState('')
    const [shortUrl, setShortUrl] = useState('')
    const [info, setInfo] = useState(false);
    const [token, setToken] = useState('');

    const createUrl = async () => {
        try {
            const token = localStorage.getItem('token');
            console.log('token:', token);
            setToken(token);
            const response = await axios.post(
                'http://localhost:3008/api/url/cut',
                { longUrl: longUrl },
                { headers: { Authorization: token } }
            );
            console.log(response.data);
            setShortUrl(response.data.shortUrl);
            setInfo(true);
        } catch (error) {
            console.error(error.response);
        }
    };

    return (
        <div className='url-shortener'>
            <h1 className="title">Url Shortener</h1>
            <div className='input-button'>
                <input
                    className="input"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                    type="text"
                    required
                    placeholder="Add Url"
                />
                <button className='btn-create' onClick={createUrl}>Create</button>
            </div>
            <div>{info ? <Url key={token} longUrl={longUrl} shortUrl={shortUrl}/> : null}</div>
        </div>
    )
}

export default InputUrl