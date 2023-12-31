import React from "react";
import Logo from "../images/trollo.png"


export default function Header() {
    return (
        <header className="header">
            <img 
                src={Logo} alt="troll-face"
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}