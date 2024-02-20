import Logo from '../../assets/images/logo.png';
import { useState } from 'react';
import {Link} from "react-router-dom"
const Header = () => {
    const [LogVariable, togleLogvar] = useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
                <img src={Logo} className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>  <Link to="about">About Us</Link> </li>
                    <li><Link to="contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <li> <button className='btn' onClick={() =>LogVariable==="Login"?togleLogvar("Logout"):togleLogvar("Login")}>{LogVariable}</button></li>
                </ul>
            </div>
        </div>
    )
}


export default Header;