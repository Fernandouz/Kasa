import logo from "../assets/logo-black.png";
import "../styles/header.css";

export default function Footer(){
    return <div className="footer contain">
        <img src={logo} alt="logo" />
        <p>© 2020 Kasa. All rights reserved</p>
    </div>
}