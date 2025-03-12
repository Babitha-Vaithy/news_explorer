import { Link } from "react-router-dom";

import "./Header.css";
import { CurrentUserContext } from "../../Contexts/CurrentUserContext";
import { useContext, useState } from "react";
import usernameicon from "../../assets/username_icon.svg";
import logout from "../../assets/logout.svg";

function Header({ handleSignInClick, styleColor, onSignOut }) {
  const currentUser = useContext(CurrentUserContext);

  const [id, setId] = useState(null);

  const handleNavClick = (e) => {
    setId(e.currentTarget.id);
  };
  return (
    <header
      className={styleColor == "white" ? "header" : "header__savedarticle"}
    >
      <Link to="/" className="header__link">
        <p
          className="header__logo"
          style={{ color: styleColor }}
          alt="Header Logo"
        >
          NewsExplorer
        </p>
      </Link>
      <div className="header__container">
        {!currentUser && (
          <Link
            to="/"
            id="home"
            onClick={(e) => handleNavClick(e)}
            className={id === "home" ? "header__link-selected" : "header__link"}
          >
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
              <Link
                to="/"
                id="home"
                onClick={(e) => handleNavClick(e)}
                className={
                  id === "home" ? "header__link-selected" : "header__link"
                }
              >
                <p
                  className="header__home"
                  alt="Home"
                  style={{ color: styleColor }}
                >
                  Home
                </p>
              </Link>
              <Link
                to="/saved-news"
                id="savedArticles"
                onClick={(e) => handleNavClick(e)}
                className={
                  id === "savedArticles" ? "header__link-saved" : "header__link"
                }
              >
                <p
                  className="header__saved"
                  alt="Saved Articles"
                  style={{ color: styleColor }}
                >
                  Saved articles
                </p>
              </Link>
              <Link to="/" className="header__link">
                <button
                  className="header__username"
                  style={{ color: styleColor, borderColor: styleColor }}
                >
                  {currentUser.name}
                  <img
                    src={styleColor == "white" ? usernameicon : logout}
                    alt="Username Icon"
                    className="header__username-icon"
                    onClick={onSignOut}
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
