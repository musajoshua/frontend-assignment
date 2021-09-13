import React from "react";

import SearchIcon from "./../../images/search-icon.svg";

function SearchBar({ value, onChange }) {
  return (
    <div className="search--container">
      <img src={SearchIcon} alt="icon" className="search--icon" />
      <input
        className="search--input"
        value={value}
        onChange={onChange}
        placeholder="Search for a movie"
      />
    </div>
  );
}

export default SearchBar;
