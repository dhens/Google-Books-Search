import React from "react";
import TitleImage from "../../assets/GoogleBooksSearch.jpg";
import "./style.css";

const Header = () => {
    return(
        <header>
        <h1 id="headerText">The Best Looking Book Site Ever</h1>
        <img id="header_image" src={TitleImage} />
        </header>
    )
}

export default Header;