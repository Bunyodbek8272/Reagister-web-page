import React from "react";
import { Link } from "react-router-dom";

import logo from "../image/logo__main.svg";

const Logo = () => {
  return (
    <>
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>
    </>
  );
};
export default Logo;
