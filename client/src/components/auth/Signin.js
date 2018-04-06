import React, { Component } from "react";

class Signin extends Component {
  render() {
    return (
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Sign in</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body modal-transition">
            ...
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
          <small className="text-center mb-1" ><p className="modal-switch" onClick={this.props.onSwitch}>Sign up instead</p></small>
        </div>
      </div>
    );
  }
}

export default Signin;
