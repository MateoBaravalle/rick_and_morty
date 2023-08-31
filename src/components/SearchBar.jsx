import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch, rand }) {
  const [id, setId] = useState("");

  // Función para manejar el cambio en el input
  function changeHandler(e) {
    setId(e.target.value);
  }

  // Función para manejar la tecla Enter
  function enterPressHandler(e) {
    if (e.key === "Enter") {
      onSearch(id);
      setId("");
    }
  }

  // Función para manejar la búsqueda
  function searchHandler() {
    onSearch(id);
    setId("");
  }

  // Función para manejar el botón de Random
  function randomHandler() {
    rand();
    setId("");
  }

  return (
    <div className="search-bar-container">
      <input
        className="search-bar-input"
        type="search"
        onChange={changeHandler}
        onKeyDown={enterPressHandler}
        value={id}
        placeholder="Add ID..."
      />
      <button className="search-bar-button" onClick={searchHandler}>Buscar</button>
      <button className="search-bar-button" onClick={randomHandler}>Random</button>
    </div>
  );
}

export default SearchBar;