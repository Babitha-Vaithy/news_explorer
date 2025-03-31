import { Link } from "react-router-dom";

import "./Header.css";
import { CurrentUserContext } from "../../Contexts/CurrentUserContext";
import { useContext } from "react";
import usernameicon from "../../assets/username_icon.svg";
import logout from "../../assets/logout.svg";
import { useLocation } from "react-router-dom";
import menuicon from "../../assets/menu.svg";
import menublack from "../../assets/menublack.svg";
import SearchForm from "../SearchForm/SearchForm";

function Header({
  handleSignInClick,
  styleColor,
  onSignOut,
  handleMenu,
  onSearch,
}) {
  const currentUser = useContext(CurrentUserContext);

  const location = useLocation();

  return (
    <header
      className={location.pathname === "/" ? "header" : "header__savedarticle"}
    >
      <nav id="headerMenu" className="header__menu">
        <Link to="/" className="header__link">
          <p
            className={`header__logo ${
              location.pathname === "/" ? "header__white" : "header__black"
            }`}
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
                  ? "header__link header__link_selected"
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
            <div className="header__usercontainer">
              <Link
                to="/"
                className={
                  location.pathname === "/"
                    ? "header__link header__link_selected"
                    : "header__link"
                }
              >
                <p
                  className={`header__home ${
                    location.pathname === "/"
                      ? "header__white"
                      : "header__black"
                  }`}
                  alt="Home"
                >
                  Home
                </p>
              </Link>
              <Link
                to="/saved-news"
                className={
                  location.pathname === "/saved-news"
                    ? "header__link header__link_saved"
                    : "header__link"
                }
              >
                <p
                  className={`header__saved ${
                    location.pathname === "/"
                      ? "header__white"
                      : "header__black"
                  }`}
                  alt="Saved Articles"
                >
                  Saved articles
                </p>
              </Link>
              <Link to="/" className="header__link">
                <button
                  className={`header__username ${
                    location.pathname === "/"
                      ? "header__white"
                      : "header__black header__border"
                  }`}
                >
                  {currentUser.name}
                  <img
                    src={location.pathname === "/" ? usernameicon : logout}
                    alt="Username Icon"
                    className="header__username-icon"
                    onClick={onSignOut}
                  />
                </button>
              </Link>
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
      </nav>

      {location.pathname === "/" && (
        <div className="header__searchlist">
          <h1 className="header__title">What&apos;s going on in the world?</h1>
          <p className="header__text">
            Find the latest news on any topic and save them in your personal
            account.
          </p>

          <SearchForm onSearch={onSearch} />
        </div>
      )}
    </header>
  );
}

export default Header;
