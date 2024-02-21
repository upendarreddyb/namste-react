
import UserCard from "./UserCard";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
    constructor(props) {
        super(props)
        console.log("parent constructor")
    }
    componentDidMount(){
        console.log("parent componentDidMount")
    }
    render() {
        console.log("parent render")

        return (
            <div>
                <h3>About</h3>
                <h4>This is about react </h4>
                {/* <ContactCard name={"Upendar(function)"} /> */}
                <UserClass name={"upendar (class function)"} location={"dharadoon"} />
            </div>
        )
    }
}

export default About;