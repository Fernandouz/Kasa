export default function Banner(props){
    return (
        <div className="img-container">
                <img src={props.photo} alt="paysage"  />
                <p className="descr">Chez vous, partout et ailleurs</p>
            </div>
    )
}