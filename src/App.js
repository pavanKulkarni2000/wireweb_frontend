import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DesignPage from "./Components/DesignPage";
import HomePage from "./Components/HomePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route path="/" exact><HomePage /></Route>
              <Route path="/home"><HomePage /></Route>
              <Route path="/design"><DesignPage /></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
