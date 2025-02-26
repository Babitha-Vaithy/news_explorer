import "./Preloader.css";

import notfound from "../../assets/not_found.svg";

function Preloader({ loader, search }) {
  const showloader = loader && loader === "load";

  const shownoresult = search && search.length === 0;

  return (
    <div className="preloader">
      {showloader && (
        <div className="preloader__circle-container">
          <div className="circle__preloader"></div>
          <p className="preloader__text">Searching for news...</p>
        </div>
      )}
      <div className="preloader__error">
        {shownoresult && (
          <>
            <img
              src={notfound}
              alt="Not Found avatar"
              className="error__avatar"
            />
            <p className="error__title">Nothing found</p>
            <p className="error__text">
              Sorry, but nothing matched your search terms.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Preloader;
