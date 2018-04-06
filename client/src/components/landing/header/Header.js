import React, { Component } from "react";
import Modal from "./Modal";

export class Header extends Component {
  state = {
    signIn: null
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            MovieBrain
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Example
                </a>
              </li>
              <li className="nav-item active">
                <p className="nav-link">|</p>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="modal" href="" data-target="#signModal" onClick={() => { this.setState({signIn:false})}}>
                  Sign up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="modal" href="" data-target="#signModal" onClick={() => { this.setState({signIn:true})}}>
                  Sign in
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <Modal
          signIn={this.state.signIn}
          onSwitch={() => {this.setState({signIn: !this.state.signIn})}}
        />
      </div>
    );
  }
};
