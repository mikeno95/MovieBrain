import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowOne from "./ShowOne";
import ShowList from "./ShowList";
import Search from "./Search";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedResult: {},
      term: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onSelected(result) {
    this.setState({selectedResult:result})
  }
  handleSubmit(event, searched) {
    this.setState({term: searched});
    // this.setState({term: ""});
    // event.preventDefault();
  }
  render() {
      return (
          <div id="MainComponent">
              <Search
                handleSubmit={this.handleSubmit}
              />
              <ShowOne
                selectedResult={this.state.selectedResult}
              />
              <ShowList
                onSelected={(result) => {this.onSelected(result)}}
                searchTerm={this.state.term}
              />
          </div>
      );
  }
}

export default Main;
