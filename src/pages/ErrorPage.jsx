import React from "react";
import { Link } from "react-router-dom";
import '../styles/error.css'

export default function BadURL (){
    return (
        <div>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas</p>
            <Link to="/">Retourner sur la page d'acceuil</Link>
        </div>
    )
}
