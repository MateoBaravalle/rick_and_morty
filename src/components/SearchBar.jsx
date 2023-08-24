import { useState } from "react";

function SearchBar({onSearch})
{
   const [id,setId] = useState("");

   function changeHandler(e)
   {
      setId(e.target.value);
   }
   
   function enterPressHandler(e)
   {
      if(e.key === 'Enter')
         onSearch(id);
   }

   return (
      <div>
         <input 
            type='search' 
            onChange={changeHandler} 
            onKeyDown={enterPressHandler}
            value={id} 
            placeholder="Add ID..."
         />
         <button onClick={()=>onSearch(id)}>Buscar</button>
      </div>
   );
}

export default SearchBar;