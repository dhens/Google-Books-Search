import React from "react";
import "./style.css";

const SearchBar = (props) => {
    return(
        <div className="search-bar">
            <form onSubmit={props.searchBook} action="">
                <input id="searchBar" onChange={props.handleSearch} type="text" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;