import React,{useState} from 'react';
import axios from 'axios';
import Cards from '../components/Cards.jsx';
import Nav from '../components/Nav.jsx';

function Home()
{
    const [characters, setCharacters] = useState([]);

    function searchHandler(id)
    {
        if(!characters.some(elem => elem.id === Number(id)))
        {
            axios(`https://rickandmortyapi.com/api/character/${id}`).then(({data}) => {
            if (data.name)
            setCharacters((oldChars) => [...oldChars, data]);
            }).catch(error => {
            window.alert('¡No hay personajes con este ID!');
            console.error('Error en la solicitud:', error);
            });
        }
    }

    function randomHandler()
    {
        let randID;
        do
        {
            let randID = Math.floor(Math.random() * 826) + 1;
            searchHandler(randID);
        }while(characters.some(elem => elem.id === randID));
    }

    function closeHandler(id)
    {
        setCharacters(characters.filter(Element => Element.id !== id));
    }

    return(
        <div>
            <Nav onSearch={searchHandler} rand={randomHandler}/>
            <Cards characters={characters} onClose={closeHandler}/>
        </div>        
    );
}

export default Home;