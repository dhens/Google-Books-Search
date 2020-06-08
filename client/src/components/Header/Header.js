import React from "react";
import TitleImage from "../../pictures/GoogleBooksSearch.jpg";
import "./style.css";

const Header = () => {
    return(
        <header>
        <img id="header_image" src={TitleImage} />
        </header>
    )
}

export default Header;