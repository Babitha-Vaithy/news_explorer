import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="search__form">
      <input
        className="searchform__input"
        type="search"
        placeholder="Enter topic"
      />
      <button type="submit" className="searchform__button">
        Search
      </button>
    </div>
  );
}

export default SearchForm;
