import React from "react";
import logo from "../assets/logo-kasa.png";
import { Link } from "react-router-dom";
import "../styles/header.css"

export default function Header(){
    return <div className="header container">
        <img src={logo} alt="logo" />
        <nav>
           <Link to="/"><p>Acceuil</p></Link> 
           <Link to="/about"><p>A propos</p></Link> 
            
        </nav>
    </div>
}