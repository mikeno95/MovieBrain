import React, { Component } from "react";
import { connect } from "react-redux";
import { Header } from "./header/Header";

class Landing extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Landing);
