import { useState } from "react";
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
      <form className="search__form">
        <input
          className="searchform__input"
          type="search"
          placeholder="Enter topic"
          onChange={handleSearchChange}
          required
        />
        <button
          type="submit"
          onChange={onSearch}
          className="searchform__button"
          onClick={handleOnClick}
        >
          Search
        </button>
      </form>
    </>
  );
};

export default SearchForm;
