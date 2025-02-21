import Preloader from "../Preloader/Preloader";
import "./SearchForm.css";

function SearchForm() {
  return (
    <>
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
      <div className="search__container">
        <section className="search__preloader">
          <Preloader />
        </section>
      </div>
    </>
  );
}

export default SearchForm;
