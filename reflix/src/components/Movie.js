import React, { Component } from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Movie extends Component {
    rentMovie = () => {
        this.props.rentMovie(this.props.id, this.props.userName)
    }
    render() {
        let path = `/movies/${this.props.id}`
        let searchClass = `search-${this.props.searched}`
        let className = `movie ${searchClass}`
        return(
            <span className={className}>
            <Link to={path} id={this.props.id}>
                <img className ="movieImg" src = {this.props.img}></img>
            </Link>
            <FontAwesomeIcon className="rentButton" onClick={this.rentMovie} 
            icon ={!this.props.rented ? "plus-circle" : "minus-circle"}/>
            </span>
        )
    }
}

export default Movie