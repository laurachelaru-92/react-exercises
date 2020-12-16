import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Views/Home';
import About from './Views/About';


function App() {
  return (
    <div>
      <Router>
        <Header/>
 
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
        </Switch>

      </Router>
      <Footer/>
    </div>
  );
}

export default App;
