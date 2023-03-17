import './assets/styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CutUrl from './components/url/CutUrl';
import Login from './components/login/Login';
import RegisterUser from './components/register/RegisterUser';
import MyUrls from './components/url/MyUrls';
import Redirect from './components/url/Redirect';
import Landing from './components/landing/Landing';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/cut-url" element={<CutUrl />} />
          <Route path='/register' element={<RegisterUser />}/>
          <Route path='/my-urls' element={<MyUrls />}/>
          <Route path='/:id' element={<Redirect />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
