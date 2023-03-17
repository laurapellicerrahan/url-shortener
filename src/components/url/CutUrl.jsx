import InputUrl from '../url/InputUrl';
import '../../assets/styles/url.css';
import Navbar from '../navbar/Navbar';

const CutUrl = () => {
    return (
        <div>
            <Navbar />
            <div className='page-url'>
                <InputUrl />
            </div>
        </div>
    )
}

export default CutUrl