import Urls from '../url/Urls';
import '../../assets/styles/url.css';
import Navbar from '../navbar/Navbar';

const MyUrls = () => {
    return (
        <div>
            <Navbar />
            <div className='container-urls'>
                <Urls />
            </div>
        </div>
    )
}

export default MyUrls