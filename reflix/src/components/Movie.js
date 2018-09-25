import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class Movie extends Component {
    render() {
        let path = `/movies/${this.props.id}`
        return(
            <span className="movie">
            <Link to={path} id={this.props.id}>
                <img className ="movieImg" src = {this.props.img}></img>
            </Link>
            <i className="rentButton" id={this.props.id} onClick={this.props.rentMovie}>{!this.props.rented ? "+" : "-"}</i>
            </span>
        )
    }
}

export default Movie