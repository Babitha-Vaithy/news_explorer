import "./Menu.css";

import { CurrentUserContext } from "../../Contexts/CurrentUserContext";
import { useContext } from "react";
import closebutton from "../../assets/closebutton.svg";
import usernameicon from "../../assets/username_icon.svg";
import logout from "../../assets/logout.svg";
import { Link } from "react-router-dom";

function Menu({
  isOpen,
  styleColor,
  closeActiveModal,
  onSignOut,
  handleSignInClick,
}) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className={`menu ${isOpen === true && "menu_opened"}`}>
      <div className="menu__container">
        <div className="menu__header">
          <Link to="/" onClick={closeActiveModal} className="menu__link">
            <p
              className="menu__logo"
              style={{ color: styleColor }}
              alt="Header Logo"
            >
              NewsExplorer
            </p>
          </Link>
          <img
            src={closebutton}
            alt="Menu Icon"
            id="menuIcon"
            onClick={closeActiveModal}
            className="menu__menuicon"
          />
        </div>

        <div className="menu__compentents">
          {!currentUser && (
            <Link
              to="/"
              onClick={closeActiveModal}
              className={
                location.pathname === "/" ? "menu__link-selected" : "menu__link"
              }
            >
              <p className="menu__home" alt="Home">
                Home
              </p>
            </Link>
          )}
          {!currentUser && (
            <button
              type="button"
              onClick={handleSignInClick}
              className="menu__signin"
            >
              Sign in
            </button>
          )}

          {currentUser && (
            <div className="menu__content">
              <Link
                to="/"
                onClick={closeActiveModal}
                className={
                  location.pathname === "/"
                    ? "menu__link-selected"
                    : "menu__link"
                }
              >
                <p
                  className="menu__home"
                  alt="Home"
                  style={{ color: styleColor }}
                >
                  Home
                </p>
              </Link>
              <Link
                to="/saved-news"
                onClick={closeActiveModal}
                className={
                  location.pathname === "/saved-news"
                    ? "menu__link-saved"
                    : "menu__link"
                }
              >
                <p className="menu__saved" alt="Saved Articles">
                  Saved articles
                </p>
              </Link>
              <Link to="/" className="menu__link">
                <button
                  className="menu__username"
                  style={{ color: styleColor, borderColor: styleColor }}
                >
                  {currentUser.name}
                  <img
                    src={styleColor == "white" ? usernameicon : logout}
                    alt="Username Icon"
                    className="menu__username-icon"
                    onClick={onSignOut}
                  />
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;
