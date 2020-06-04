import React, {useState} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Feed from './components/Feed'
import Navigation from './components/Navigation'
import About from './components/About'
import Projects from './components/Projects'
import Other from './components/Other'
import{
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";




function App() {
  return (
    <div className="main_body">
      <div class = "content">
      <Router>
        <Header/>
        <Navigation/>
          <Switch>
            <Route exact path="/" component={Feed}/>
            <Route path="/About" component={About}/>
            <Route path="/Projects" component={Projects}/>
            <Route path="/Other" component={Other}/>
          </Switch>
        <Footer/>
      </Router>
      </div>
    </div>
  );
}

export default App;
