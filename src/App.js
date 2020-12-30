import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';

import WelcomePage from "./pages";
import LoginPage from "./pages/login";

class App extends React.Component {
  render() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </Router>
    
  )
}
}

export default App;