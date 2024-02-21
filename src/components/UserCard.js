
import {useState} from "react";
const UserCard=(props)=>{
 const [count]=useState(0);
 const [count1]=useState(1);

    return (
        <div className="contact-card">
            <h2>count: {count}</h2>
            <h2>count: {count1}</h2>
          <h3>Name:{props.name}</h3>
          <h4>Location: Hyderabad</h4>
          <h5>Contact:upendar170194@gmail.com</h5>
        </div>
    )
}
export default UserCard;