import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class Landing extends Component {
    constructor() {
        super()
        this.state = {
            users: [
                {name: "Hunter", image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png"},
                {name: "Dubi", image: "https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/92995677ac0aab719760c33c_rw_600.png?h=c453d5442731bca5c02fcc8a4542af57"},
                {name: "Jona", image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"},
                {name: "Bar", image: "https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/8e65207aca8751179e10e03c_rw_600.png?h=506076a9f26fdf62293000f07c8c3c78"}
            ]
        }
    }
    render() {
        return(
            <div className="landing">
                <h2 className="landingIntro">Who's Watching?</h2>
                <div className = "userBox">
                {this.state.users.map(u => <span className = "user"><Link to= "/catalog"><img src={u.image}></img></Link>{u.name}</span>)}
                </div>
            </div>
        )
    }
}

export default Landing
