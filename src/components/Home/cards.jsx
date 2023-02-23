export default function Card(props){
    return(
        <div className="cards">
            <img src={props.pictures[0]} alt={props.title} />
            <p className="card-title">{props.title}</p>
        </div>
    )
}