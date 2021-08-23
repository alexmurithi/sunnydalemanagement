import React from "react";
import LoginIputs from "../../Components/Login/LoginInputs";

const Login = ({ children }) => {
  return (
    <>
      <LoginIputs>{children}</LoginIputs>
    </>
  );
};

export default React.memo(Login);
