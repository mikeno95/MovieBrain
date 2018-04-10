import React, { Component } from "react";

class SelectedResult extends Component {
  render() {
    const { Title, Year, Rated, Released, Runtime, Genre, Director, Actors, Plot, Ratings, Production } = this.props.selectedResult;
    return (
      <div id="SelectedResult">
        <div id="selected-results">
          <h3>{Title}</h3>
        </div>
      </div>
    )
  }
}

export default SelectedResult
