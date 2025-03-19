import { Link } from "react-router-dom";

import "./Header.css";
import { CurrentUserContext } from "../../Contexts/CurrentUserContext";
import { useContext } from "react";
import usernameicon from "../../assets/username_icon.svg";
import logout from "../../assets/logout.svg";
import { useLocation } from "react-router-dom";
import menuicon from "../../assets/menu.svg";
import menublack from "../../assets/menublack.svg";

function Header({
  handleSignInClick,
  styleColor,
  onSignOut,
  handleMenu,
}) {
  const currentUser = useContext(CurrentUserContext);

  const location = useLocation();

  return (
    <header
      className={styleColor == "white" ? "header" : "header__savedarticle"}
    >
      <div id="headerMenu" className="header__menu">
        <Link to="/" className="header__link">
          <p
            className="header__logo"
            style={{ color: styleColor }}
            alt="Header Logo"
          >
            NewsExplorer
          </p>
        </Link>

        <div id="headerContainer" className="header__container">
          {!currentUser && (
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? "header__link-selected"
                  : "header__link"
              }
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
                  className={
                    location.pathname === "/"
                      ? "header__link-selected"
                      : "header__link"
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
                  className={
                    location.pathname === "/saved-news"
                      ? "header__link-saved"
                      : "header__link"
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

        <img
          src={styleColor === "white" ? menuicon : menublack}
          alt="Menu Icon"
          id="menuIcon"
          onClick={handleMenu}
          className="header__menuicon"
        />
      </div>
    </header>
  );
}

export default Header;
