import React, { Component } from 'react';
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Landing from "./landing/Landing";
// import * as actions  from "../actions";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
