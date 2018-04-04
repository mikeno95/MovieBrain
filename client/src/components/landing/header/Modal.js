import React from "react";
import Signin from "../../auth/Signin";
import Signup from "../../auth/Signup";

function renderComponent({signIn, onSwitch}) {
  if(signIn) {
    return (
      <Signin
        onSwitch={onSwitch}
      />
    );
  } else {
    return <Signup onSwitch={onSwitch} />;
  }
}

const Modal = (props) => {
  return (
    <div className="modal fade" id="signModal">
      {renderComponent(props)}
    </div>
  );
}

export default Modal;
