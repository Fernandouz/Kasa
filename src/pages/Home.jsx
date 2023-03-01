import React from "react";
import '../styles/home.css'
import banner from '/Users/hugo/Desktop/BTS/projet-6/kasa/src/assets/paysage.png'
import Card from "../components/Home/cards";
import Banner from "../components/Home/banner";

const logements = require('../assets/logements.json');

export default function Home(){
    return (
        <div className="home-container">
           <Banner photo={banner}>Chez vous, partout et ailleurs</Banner>
            <div className="cards-container">
                {logements.map((logement) => <Card key={logement.id} id={logement.id} title={logement.title} pictures={logement.pictures} />)}
            </div>
         
        </div>
    )
}

// {logement.map(logement => <Card props={logement} key={logement.id} /> )}