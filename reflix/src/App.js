import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Loader from './components/Loader';
import Landing from './components/Landing';
import Catalog from './components/Catalog';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Loader/>
          <div className="App">
            <nav className="navBar">
            <h5><Link to="/">Home</Link>{'  '}<Link to="/catalog">Catalog</Link></h5>
            <h3 className= "logo">REFLIX</h3> 
            </nav>
            <Route path="/" exact render={() => <Landing/>}/>
            <Route path="/catalog" exact render={() => <Catalog/>}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
