import React from "react";

import logo from "../../images/logo.svg";
import SearchBar from "../SearchBar/SearchBar";

function Navbar({ value, onChange }) {
  return (
    <div className="navbar">
      <img src={logo} alt="Timescale" />
      <SearchBar value={value} onChange={onChange} />
    </div>
  );
}

export default Navbar;
