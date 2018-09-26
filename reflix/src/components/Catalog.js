import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './catalog.css';
import Movie from './Movie.js'

class Catalog extends Component {

    render() {
        return(
            <div>
                <div className="catalogHeader">
                    <input type="text" className="search" placeholder="search" onChange={this.props.movieSearch}></input>
                    <span>Budget: ${this.props.state.budget}</span>
                </div>
                <div>
                    {this.props.state.rentCount ?
                        <h2 className="catalogIntro">Rented:</h2>
                    : null} 
                    <div className="rentedMovies">
                        {this.props.state.catalog.filter(
                            m => m.isRented).map(
                                m => <Movie img={m.img} id={m.id} rented={m.isRented} 
                                rentMovie ={this.props.rentMovie} searched={m.isSearched}/>)}
                    </div>  
                </div>
                <h2 className="catalogIntro">Catalog:</h2>
                <div className="movies">
                    {this.props.state.catalog.map(
                        m => <Movie img={m.img} id={m.id} rented={m.isRented} 
                        rentMovie ={this.props.rentMovie} searched={m.isSearched}/>)}
                </div>
            </div>
        )
    }
}

export default Catalog