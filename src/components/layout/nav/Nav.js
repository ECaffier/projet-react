import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function Nav(){
    return(
        <nav className="grey-color pb-5">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link grey-color" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link grey-color" to="/recherche">Rechercher</Link>
                </li>
            </ul>
        </nav>
    );
}
export default Nav;