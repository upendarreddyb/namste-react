import Logo from '../../assets/images/logo.png';
import { useState } from 'react';
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [LogVariable, togleLogvar] = useState("Login");
    const onLineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg ">
            <div className="logo-container">
                <img className="w-24" src={Logo}  />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status : {onLineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="grocery">Grocery</Link></li>
                    <li className="px-4">  <Link to="about">About Us</Link> </li>
                    <li className="px-4"><Link to="contact">Contact Us</Link></li>
                    <li className="px-4">Cart</li>
                    <li className="px-4"> <button className='btn' onClick={() => LogVariable === "Login" ? togleLogvar("Logout") : togleLogvar("Login")}>{LogVariable}</button></li>
                </ul>
            </div>
        </div>
    )
}


export default Header;