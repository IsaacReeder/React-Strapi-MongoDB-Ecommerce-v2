import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import MainNavigation from "./components/Navigation/MainNavigation";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Router>
        <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
          <Switch>
            <Route path="/" exact>
              <LandingPage />
            </Route>
          </Switch>
        </CSSTransition>
      </Router>
    </div>
  );
}

export default App;
