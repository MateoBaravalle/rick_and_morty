import { useNavigate, useLocation } from 'react-router-dom';
import './Card.css';

function Card({character, onClose})
{
   const navigate = useNavigate();
   const locate = useLocation();
   let detail = false;

   function handleCardClick(event)
   {
      // Verificar si el clic fue en el botón de cierre
      const isCloseButton = event.target.classList.contains('close-button');
      if (!isCloseButton)
      {
        navigate(`/detail/${character.id}`);
      }
   }

   if(locate.pathname === '/detail')
       detail = true;

   return (
      <div className="card-container" onClick={handleCardClick}>
         <button className="close-button" onClick={()=>onClose(character.id)}>X</button>
         <h2>{detail && `ID: ${character.id}`}</h2>
         <h2>{detail && "Name: "}{character.name}</h2>
         <h2>{detail && `Status: ${character.status}`}</h2>
         <h2>{detail && `Species: ${character.species}`}</h2>
         <h2>{detail && `Gender: ${character.gender}`}</h2>
         <h2>{detail && `Origin: ${character.origin.name}`}</h2>
         <img src={character.image} alt={character.name} />
      </div>
   );
}

export default Card;