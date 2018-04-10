import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions";

import Sidebar from "react-sidebar";

const mql = window.matchMedia(`(min-width: 800px)`);

class Sidenav extends Component {
    renderCollections(){
        const animals = ["aardvark", "bug", "aardvark", "bug","aardvark", "bug","aardvark", "bug","aardvark", "bug"];
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
          <thead>
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
          </thead>
          <tbody>
            <tr>
              <td id="nav-divider">
                  <div></div>
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
                <th>COLLECTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td id="nav-selectable">Watchlist</td>
            </tr>
            {this.renderCollections()}
            <tr>
                <td id="nav-selectable">+ Custom Collection</td>
                {/* Would you like a linked folder in Seen? */}
            </tr>
            <tr>
                <td id="nav-selectable">+ Import Collection</td>
            </tr>
            <tr>
              <td id="nav-divider">
                  <div></div>
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
                <th>SEEN</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td id="nav-selectable">All</td>
            </tr>
            <tr>
                <td id="nav-selectable">Favorites</td>
            </tr>
            <tr>
                <td id="nav-selectable">+ Custom Collection</td>
            </tr>
            <tr>
              <td id="nav-divider">
                  <div></div>
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
                <th id="nav-selectable">BLACKLIST</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>
                    <div id="nav-end"></div>
                </td>
            </tr>
          </tbody>





        </table>
      </div>
    );
  }
}
export default Sidenav;
