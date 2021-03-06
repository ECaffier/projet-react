import Header from "./components/layout/header/Header"
import Nav from "./components/layout/nav/Nav"
import Footer from "./components/layout/footer/Footer"
import Recherche from "./components/recherche/Recherche"
import Home from "./components/home/Home"
import Detail from './components/home/detail/Detail'
import Swapi from "./components/home/swapi/Swapi"
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div >
      <Header />
      <Router>
      <Nav/>
      <main>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path ="/recherche">
            <Recherche />
          </Route>
          <Route path ="/detail">
            <Detail />
          </Route>
          
        </Switch>       
      </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
