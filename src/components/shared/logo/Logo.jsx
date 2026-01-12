import React from "react";
import logo from "../../../assets/logobook.png";

import { Link } from "react-router";

const Logo = () => {
  return (
    <div>
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-16 h-10" />
        <span className="text-xl font-bold text-primary">BookCourier</span>
      </Link>
    </div>
  );
};

export default Logo;
