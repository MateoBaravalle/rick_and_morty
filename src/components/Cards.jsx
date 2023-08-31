import Card from './Card';
import './Cards.css';

export default function Cards({characters, onClose})
{
   return (
      <div className="cards-container">
         {characters.map((character)=>(
            <Card
            key={character.id}
            character={character}
            onClose={onClose}
            className="card"
            />
         ))}
      </div>
   );
}
