import React,{useState} from 'react';
import axios from 'axios';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';


function App() 
{
   const [characters, setCharacters] = useState([]);
   
   function searchHandler(id)
   {
      if(!characters.some(elem => elem.id === Number(id)))
      {
         axios(`https://rym2-production.up.railway.app/api/character/${id}?key=henrym-MateoBaravalle`).then(({data}) => {
         if (data.name)
            setCharacters((oldChars) => [...oldChars, data]);
         }).catch(error => {
            window.alert('¡No hay personajes con este ID!');
            console.error('Error en la solicitud:', error);
         });
      }
   }

   function closeHandler(id)
   {
      setCharacters(characters.filter(Element => Element.id !== id));
   }

   return (
      <div className='App'>
         <Nav onSearch={searchHandler}/>
         <Cards characters={characters} onClose={closeHandler}/>
      </div>
   );
}

export default App;
