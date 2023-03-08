import red from '../../assets/stars/Vector.png'
import grey from '../../assets/stars/Vector-grey.png'

export default function Host(props){
    const rate = parseInt(props.rating);
    const stars = [grey,grey,grey,grey,grey];
    stars.fill(red,0,rate);
    return (
        <div className="host-container">
            <div className="host-card">
                <p className="host-title">{props.title}</p>
                <img className='host-img' src={props.pic} alt="user avatar" />
            </div>
            <div className="ratings">
                {stars.map(star => <img key={Math.random()} className='star'src={star} alt="star"/>)}
            </div>
        </div>
    )
}