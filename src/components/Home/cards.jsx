import { Link } from "react-router-dom"
export default function Card(props){
    return(
        <Link to={"/fiche/"+props.id} className="cards" id={props.id}>
            <img src={props.pictures[0]} alt={props.title} />
            <p className="card-title">{props.title}</p>
        </Link>
    )
}