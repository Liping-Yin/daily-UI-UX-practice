import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutScreen from "./AboutScreen";
import HomeScreen from "./HomeScreen";
import ProjectScreen from "./ProjectScreen";
import logo from "./logo-black.svg";
export default function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <nav className="nav">
            <img src={logo} className="nav__logo" alt="my logo" />
            <ul className="nav__links">
              <li className="nav__item">
                <Link to="/about" className="nav__link">
                  about
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/" className="nav__link">
                  home
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Route path="/project/:id" component={ProjectScreen}></Route>
          <Route path="/about" component={AboutScreen}></Route>
          <Route path="/" component={HomeScreen}></Route>
        </main>
      </div>
    </Router>
  );
}
