import { useEffect } from 'react';
import '../../assets/styles/url.css';
import { useParams } from "react-router-dom";
import axios from 'axios';

const Redirect = () => {

    const { id } = useParams();

    useEffect(() => {
        const GoToUrl = async () => {
            try {
                const response = await axios.get(`http://localhost:3008/api/url/${id}`)
                window.location.replace(response.data.longUrl);
            } catch (error) {
                console.error(error);
            }
        };
        GoToUrl();
    }, [id]);


    return (
        <div>
        </div>
    )
}

export default Redirect