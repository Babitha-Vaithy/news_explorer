import { Link } from "react-router-dom";

import "./Header.css";
import { CurrentUserContext } from "../../Contexts/CurrentUserContext";
import { useContext } from "react";
import usernameicon from "../../assets/username_icon.svg";

function Header({ handleSignInClick, styleColor, handleSavedArticles }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <header className="header" style={{ color: styleColor }}>
      <Link to="/" className="header__link">
        <p className="header__logo" alt="Header Logo">
          NewsExplorer
        </p>
      </Link>
      <div className="header__container">
        {!currentUser && (
          <Link to="/" className="header__link">
            <p className="header__home" alt="Home">
              Home
            </p>
          </Link>
        )}
        {!currentUser && (
          <button
            onClick={handleSignInClick}
            type="button"
            className="header__signin"
          >
            Sign in
          </button>
        )}

        {currentUser && (
          <div className="header__nav-link">
            <div className="header__user-containter">
              <Link to="/" className="header__link">
                <p className="header__home" alt="Home">
                  Home
                </p>
              </Link>
              <Link
                to="/saved-news"
                onClick={handleSavedArticles}
                className="header__link"
              >
                <p className="header__saved" alt="Saved Articles">
                  Saved articles
                </p>
              </Link>
              <Link to="/" className="header__link">
                <button className="header__username">
                  {currentUser.name}
                  <img
                    src={usernameicon}
                    alt="Username Icon"
                    className="header__username-icon"
                  />
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
