import pic from "../assets/about-pic.svg";
import Banner from "../components/Home/banner";
import '../styles/about.css'


export default function About(){
    return (
        <div className="about-container">
            <Banner photo={pic} />
        </div>
        
    )
}