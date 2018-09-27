import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './catalog.css';
import Movie from './Movie.js'

class Catalog extends Component {

    constructor( props ) {
        super();
        this.state = {
            userName: props.match.params.user
        }
    }

    componentDidMount() {
        this.props.resetSearch();
        this.props.loadUser(this.state.userName);
        
    }
    
    render() {
        let user = this.props.state.users.find(u => u.name === this.state.userName)
        console.log(this.props.state.catalog)
        return(
            <div>
                <div className="catalogHeader">
                    <input type="text" className="search" placeholder="search" onChange={this.props.movieSearch}></input>
                    <span>Budget: ${this.props.state.budget}</span>
                    <img className = "thumbnail" src = {user.image}></img>
                </div>
                <div>
                    {this.props.state.rentCount ?
                        <h2 className="catalogIntro">Rented:</h2>
                    : null} 
                    <div className="rentedMovies">
                        {this.props.state.catalog.filter(
                            m => m.isRented).map(
                                m => <Movie img={m.img} id={m.id} rented={m.isRented} 
                                rentMovie ={this.props.rentMovie} searched={m.isSearched} 
                                userName = {this.state.userName}/>)}
                    </div>  
                </div>
                <h2 className="catalogIntro">Catalog:</h2>
                <div className="movies">
                    {this.props.state.catalog.map(
                        m => <Movie img={m.img} id={m.id} rented={m.isRented} 
                        rentMovie ={this.props.rentMovie} searched={m.isSearched}
                        userName = {this.state.userName}/>)}
                </div>
            </div>
        )
    }
}

export default Catalog