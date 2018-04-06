import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions";

import Sidebar from "react-sidebar";

const mql = window.matchMedia(`(min-width: 800px)`);

class Sidenav extends Component {
    renderCollections(){
        const animals = ["aardvark", "bug"];
        return animals.map(animal => {
            return (
                <tr>
                    <td id="nav-selectable">{animal}</td>
                </tr>
            )
        })
    }

    renderSeen(){
        const array = ["all", "favorites", "anime", "action"];
        return array.map(category => {
            return (
                <tr>
                    <td id="nav-selectable"><a>{category}</a></td>
                </tr>
            )
        })
    }


  render() {
    return (
      <div style={{position: "absolute", top: "0px", bottom: "0px", width: "230px", overflowY: "scroll"}}>

        <table id="nav-table">
          <tr>
              <th id="logo"><h1>MB</h1></th>
          </tr>
          <tr>
              <th id="nav-selectable"><a>HOME</a></th>
          </tr>
          <tr>
              <th id="nav-selectable"><a>BROWSE</a></th>
          </tr>
          <tr>
              <th id="nav-selectable"><a>RECOMENDATIONS</a></th>
          </tr>
          <tr>
              <td id="nav-divider">
                  <div id="nav-divider"></div>
              </td>
          </tr>
          <tr>
              <th>COLLECTIONS</th>
          </tr>
          {this.renderCollections()}
          <tr>
              <td id="nav-selectable">+ Custom Collection</td>
          </tr>
          <tr>
              <td id="nav-selectable">+ Import Collection</td>
          </tr>
          <tr>
              <td id="nav-divider">
                  <div id="nav-divider"></div>
              </td>
          </tr>
          <tr>
              <th>SEEN</th>
          </tr>
          {this.renderSeen()}
          <tr>
              <td id="nav-divider">
                  <div id="nav-divider"></div>
              </td>
          </tr>
          <tr>
              <th id="nav-selectable">BLACKLIST</th>
          </tr>




        </table>
      </div>
    );
  }
}
export default Sidenav;
