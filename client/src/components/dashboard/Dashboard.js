import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.searchMovie("batman");
  }
  renderMovies() {
    return this.props.searchedMovies.map((movie) => {
      return (
        <li>{movie.title}</li>
      );
    })
  }
  render() {
    return (
      <ul>
        {this.renderMovies()}
      </ul>
    );
  }
}

function mapStateToProps({ searchedMovies }) {
  return { searchedMovies };
}
export default connect(mapStateToProps, actions)(Dashboard);
