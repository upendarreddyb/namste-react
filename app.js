import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import Logo from './assets/images/logo.png';


const resObj = {
    id: "82407",
    name: "Hotel Rumaan",
    locality: "Tolichowki",
    costForTwo: "₹300 for two",
    cuisines: [
        "Biryani",
        "Chinese",
        "Indian",
        "Kebabs",
        "Tandoor"
    ],
    avgRating: 4.3,
    totalRatingsString: "10K+",
    time:30
}


const Header = () => {
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
                </ul>

            </div>

        </div>
    )
}

const Rescard = (props) => {
    const { ResData } = props;
    
    return (
        <div className="res-card">
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/vkd5w3cvu5reag0ng4p1" />
            <h3>{ResData.name}</h3>
            <h4>{ResData.cuisines.join(",")}</h4>
            <h4>{ResData.avgRating}</h4>
            <h4>{ResData.time} </h4>
        </div>
    )
}


const Body = () => {
    return (
        <div className="body">
            <div className="search">Search </div>
            <br></br>
            <div className="res-container">
                <Rescard ResData={resObj} />
            </div>
        </div>
    )
}
const Approot = () => {
    return <div className="app">
        <Header />
        { <Body /> }
    </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Approot />); 