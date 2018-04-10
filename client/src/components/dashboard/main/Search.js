import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({term: event.target.value});
  }
  handleSubmit(event) {
    this.props.handleSubmit(event, this.state.term);
    this.setState({term: ""});
    event.preventDefault();
  }
  render() {
    return (
      <form id="search-bar" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.term}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default connect(null, actions)(Search);
