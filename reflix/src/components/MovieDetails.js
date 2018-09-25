import React, { Component } from 'react';

class MovieDetails extends Component {
    render() {
        let movieId = this.props.match.params.id
        let movieInfo = this.props.catalog[movieId]
        return(
            <div className = "movieDetails">
                <h1>{movieInfo.title} ({movieInfo.year})</h1>
                <img src={movieInfo.img}></img>
                <p className="description">{movieInfo.descrShort}</p>
            </div>
        )
    }
}

export default MovieDetails