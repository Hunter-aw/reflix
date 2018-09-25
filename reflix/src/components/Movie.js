import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class Movie extends Component {
    render() {
        return(
            <Link to="/movies/:id" class="movie" id={this.props.id}>
                <img className ="movieImg" src = {this.props.img}></img>
            </Link>
        )
    }
}

export default Movie