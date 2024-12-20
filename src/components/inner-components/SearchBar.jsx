import React from "react";
import { assets } from "../../assets/images/assets";
const SearchBar = () => {
  return (
    <>
      <div className="search-wrapper" style={{position : "relative"}}>
        <input
          type="text"
          name="Search"
          className="search-bar"
          placeholder="What are you looking for?"
        />
        <img src={assets.SearchIcon} className="searchIcon" alt="Search" />
      </div>
    </>
  );
};

export default SearchBar;
