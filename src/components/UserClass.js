
import React from 'react';
import axios from "axios";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "wefbhefb",
                location: "sd hsdvc",
                avatar_url: ""
            }
        };
        console.log("child constructor")

    }
    async componentDidMount() {
        console.log(" child componentDidMount");
        const data = await axios.get("https://api.github.com/users/upendarreddyb");
        console.log(data);
        this.setState({
            userInfo: data.data,
        })
    }
    render() {
        const { name, location, avatar_url } = this.state.userInfo;
        console.log("child render")

        return (
            <div className="contact-card">
                <div className="profile">
                    <img src={avatar_url} />
                </div>
                <h3>Name:{name}</h3>
                <h4>Location: {location}</h4>
                <h5>Contact:upendar170194@gmail.com</h5>
            </div>
        )
    }

}
export default UserClass;