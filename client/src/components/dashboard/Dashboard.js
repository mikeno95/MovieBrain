import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Sidebar from './sidebar/Sidebar';
import Main from "./Main";


class Dashboard extends Component {
  componentDidMount() {
    // fetch movies from user's database
  }

  render() {
    return (
      <div className="dashboard-container">
        <Sidebar />
        <Main />
      </div>
    );
  }
}

function mapStateToProps({ searchedMovies }) {
  return { searchedMovies };
}
export default connect(mapStateToProps, actions)(Dashboard);
