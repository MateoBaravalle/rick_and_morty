import React from "react";
import SearchBar from "./SearchBar"

function Nav({onSearch, rand})
{
    return (
        <div>
            <SearchBar onSearch={onSearch} rand={rand}/>
        </div>
    );
}

export default Nav;