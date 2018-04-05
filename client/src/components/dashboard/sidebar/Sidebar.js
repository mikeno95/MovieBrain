import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions";

import Sidebar from "react-sidebar";

const mql = window.matchMedia(`(min-width: 800px)`);

class Sidenav extends Component {
  render() {
    return (
      <div style={{position: "absolute", top: "0px", bottom: "0px", width: "230px", borderRight: "solid black 1px"}}>
        <table>
          <h1>MB</h1>


        </table>
      </div>
    );
  }
}
export default Sidenav;
