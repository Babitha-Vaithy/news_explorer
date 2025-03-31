import { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ onSearch }) => {
  const [search, setSearch] = useState(null);
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="searchform">
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
        >
          Search
        </button>
      </form>
    </>
  );
};

export default SearchForm;
