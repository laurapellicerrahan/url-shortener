import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Url from './Url'

const Urls = () => {

    const [urls, setUrls] = useState([]);

    useEffect(() => {
      const getUserUrls = async () => {
        const token = localStorage.getItem("token");
        try {
          const response = await axios.get("http://localhost:3008/api/url/urls", {
            headers: {
              Authorization: token,
            },
          });
          setUrls(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      getUserUrls();
    }, []);
  

    return (
        <div>
            <div className='container-urls'>{urls.map(url => <Url key={url._id} url={url} longUrl={url.longUrl} shortUrl={url.shortUrl} />)}</div>
        </div>
    )
}

export default Urls