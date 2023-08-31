import {Routes, Route} from 'react-router-dom';
import './App.css';
import logo from './assets/rymLogo.png';
import Home from './views/Home';
import Detail from './views/Detail';
import About from './views/About';
import BackgroundVideo from './components/BackgroundVideo.jsx';
import BackgroundMusic from './components/BackgroundMusic.jsx';

function App() 
{
   return (
      <div className='App'>
         <img src={logo} alt="rymApp.png" className='logo'/>
         <BackgroundVideo/>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Detail/:id' element={<Detail/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='*' element={<h1>404 Not Found</h1>}/>
         </Routes>
         <BackgroundMusic/>
      </div>
   );
};

export default App;

// `https://rym2-production.up.railway.app/api/character/${id}?key=henrym-MateoBaravalle`