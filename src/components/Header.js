import Logo from '../../assets/images/logo.png';
import { useState } from 'react';
const Header = () => {
    const [LogVariable, togleLogvar] = useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
                <img src={Logo} className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li> <button className='btn' onClick={() =>LogVariable==="Login"?togleLogvar("Logout"):togleLogvar("Login")}>{LogVariable}</button></li>
                </ul>

               
            </div>

        </div>
    )
}


export default Header;