import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './catalog.css';
import Movie from './Movie.js'

class Catalog extends Component {

    render() {
        return(
            <div>
                <div className="catalogHeader">
                    <input type="text" className="search" placeholder="search"></input>
                    <span>Budget: ${this.props.state.budget}</span>
                </div>
                <h2 className="catalogIntro">Rented:</h2>
                <div className="movies">
                    {this.props.state.rented.map(m => <Movie img={m.img} id={m.id} rented={m.isRented} rentMovie ={this.props.rentMovie}/>)}
                </div>
                <h2 className="catalogIntro">Catalog:</h2>
                <div className="movies">
                    {this.props.state.catalog.map(m => <Movie img={m.img} id={m.id} rented={m.isRented} rentMovie ={this.props.rentMovie}/>)}
                </div>
            </div>
        )
    }
}

export default Catalog