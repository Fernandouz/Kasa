import React from "react";
import { useParams } from "react-router-dom";
import Collapse from "../components/About/collapse";
import '../styles/fiche.css';
import Caroussel from "../components/FicheLogement/caroussel";
import Host from "../components/FicheLogement/host";
import BadURL from "./ErrorPage";


export default function Fiche(){
    const logements = require('../assets/logements.json');
    const params = useParams()
    const logement = logements.find(log => log.id === params.id)
    if (logement === undefined) {
        return (<BadURL/>);
      }
    return (
        <div className="fiche-container">
            <Caroussel pic={logement.pictures}  ></Caroussel>
            <div className="info">
                <div className="info-left">
                    <h2 className="log-title">{logement.title}</h2>
                    <h3 className="log-subtitle">{logement.location}</h3>
                    <div className="tags">{logement.tags.map(tag => <div key={tag} className="tag"><p className="tag-t">{tag}</p></div>)}</div>
                </div>
                <div className="info-right">
                    <Host title={logement.host.name} pic={logement.host.picture} rating={logement.rating}/>
                </div>
            </div>
            <div className="collapse-container">
                    <Collapse title="Description">{logement.description}</Collapse>
                    <Collapse title="Equipements">{<ul>{logement.equipments.map(equip=> <li key={equip}>{equip}</li>)}</ul>}</Collapse>
            </div>
        </div>
    )
}