import React, { useState } from "react";

import Preloader from "../Preloader/Preloader";
import "./SearchForm.css";

const SearchForm = ({ onSearch }) => {
  const [search, setSearch] = useState(null);
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleOnClick = () => {
    onSearch(search);
  };

  return (
    <>
      <div className="search__form">
        <input
          className="searchform__input"
          type="search"
          placeholder="Enter topic"
          onChange={handleSearchChange}
        />
        <button
          type="submit"
          onChange={onSearch}
          className="searchform__button"
          onClick={handleOnClick}
        >
          Search
        </button>
      </div>
      <div className="search__container">
        <section className="search__preloader">{/* <Preloader /> */}</section>
      </div>
    </>
  );
};

export default SearchForm;
