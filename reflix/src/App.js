import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Loader from './components/Loader';
import Landing from './components/Landing';
import Catalog from './components/Catalog';
import MovieDetails from './components/MovieDetails'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faPlusCircle, faMinusCircle)



class App extends Component {
  constructor() {
    super()
    this.state={
      budget: 10.0,
      catalog: [
          { id: 0, isRented: false, isSearched: true, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
          { id: 1, isRented: false, isSearched: true, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
          { id: 2, isRented: false, isSearched: true, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
          { id: 3, isRented: false, isSearched: true, title: "The Sword in the Stone", year: 1963, img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
          { id: 4, isRented: false, isSearched: true, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
        ],
      rentCount: 0,
      users: [
        {name: "Hunter", budget: 10.0, image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png"},
        {name: "Dubi", budget: 10.0, image: "https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/92995677ac0aab719760c33c_rw_600.png?h=c453d5442731bca5c02fcc8a4542af57"},
        {name: "Jona", budget: 10.0, image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"},
        {name: "Bar", budget: 10.0, image: "https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/8e65207aca8751179e10e03c_rw_600.png?h=506076a9f26fdf62293000f07c8c3c78"}
      ]
    }
  }
  componentDidMount() {
    for (let user of this.state.users) {
      if (!localStorage[user.name]) {
        localStorage.setItem(user.name, JSON.stringify(this.state))
      }
    }
  }
  rentMovie = (movieId, userName) => {
    let updatedCatalog = [...this.state.catalog];
    let newCount = this.state.rentCount;
    let newBudget = this.state.budget
    if (!updatedCatalog[movieId].isRented && newBudget < 2) {
      alert("Sorry, you're out of money. Please return some movies to rent new ones.");
      return
    }
    else if (!updatedCatalog[movieId].isRented && newBudget > 2) {
        updatedCatalog[movieId].isRented = true;
        newCount ++;
        newBudget -= 3;
      }
    else {
        updatedCatalog[movieId].isRented = false;
        newCount --;
        newBudget += 3;
      }
      this.setState({budget: newBudget, 
                    catalog: updatedCatalog, 
                    rentCount: newCount},
         () => {localStorage.setItem(userName, JSON.stringify(this.state))})
  }

  movieSearch = (event) => {
    let term = event.target.value
    let caseTerm = term.toLowerCase()
    let updatedCatalog = [...this.state.catalog]
      let searchedCatalog = updatedCatalog.filter(m => m.title.toLowerCase().includes(caseTerm));
      for (let movie of updatedCatalog) {
        if (!searchedCatalog.includes(movie)) {
          movie.isSearched = false
        }
        else {
          movie.isSearched = true
        }
      } 
    this.setState({catalog: updatedCatalog})
  }

  loadUserfromStorage = (user) => {
      let userInfo = JSON.parse(localStorage.getItem(user))
      // debugger;
        this.setState({budget:userInfo.budget, 
          catalog: userInfo.catalog, 
          rentCount: userInfo.rentCount}, () => {console.log(this.state.catalog)})    
  }

  resetSearch = () => {
    let catalog = [...this.state.catalog]
    for (let movie of catalog) {
      movie.isSearched = true
    }
    this.setState({catalog: catalog})
  }

  render() {
    return (
      <Router>
        <div>
            <Loader/>
          <div className="App">
            <nav className="navBar">
            <h5><Link to="/">Home</Link>{'  '}<Link to="/catalog">Catalog</Link></h5>
            <h3 className= "logo"><Link to="/">REFLIX</Link></h3> 
            </nav>
            <Route path="/" exact render={() => <Landing users={this.state.users}/>}/>
            <Route path="/catalog/:user" exact render={({ match }) => 
                <Catalog state={this.state} match={match} rentMovie = {this.rentMovie} 
                         movieSearch = {this.movieSearch} resetSearch = {this.resetSearch} 
                         loadUser = {this.loadUserfromStorage}/>}/>
            <Route path="/movies/:id" exact render={({ match }) => 
              <MovieDetails match={match} catalog={this.state.catalog}/>}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
