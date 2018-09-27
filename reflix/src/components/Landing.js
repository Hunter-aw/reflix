import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return(
            <div className="landing">
                <h2 className="landingIntro">Who's Watching?</h2>
                <div className = "userBox">
                {this.props.users.map(u => <span className = "user">
                <Link to= {`/catalog/${u.name}`}><img src={u.image}></img></Link>{u.name}</span>)}
                </div>
            </div>
        )
    }
}

export default Landing
