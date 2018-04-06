import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Sign up</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body modal-transition" style={{height: "500px"}}>

          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary btn-small">Save changes</button>
          </div>
          <small className="text-center mb-1" ><p className="modal-switch" onClick={this.props.onSwitch}>Already signed up? Click here to sign in</p></small>
        </div>
      </div>
    );
  }
}

export default Signup;
