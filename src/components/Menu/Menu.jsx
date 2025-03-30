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
  handleClickSavedArticles,
  handleSavedArticleColor,
}) {
  const currentUser = useContext(CurrentUserContext);
  const handleMenuColor = () => {
    handleSavedArticleColor();
    closeActiveModal();
  };
  return (
    <div className={`menu ${isOpen === true && "menu_opened"}`}>
      <div className="menu__container">
        <div className="menu__header">
          <Link to="/" onClick={handleMenuColor} className="menu__link">
            <nav>
              <p
                className="menu__logo"
                style={{ color: styleColor }}
                alt="Header Logo"
              >
                NewsExplorer
              </p>
            </nav>
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
              onClick={handleMenuColor}
              className={
                location.pathname === "/" ? "menu__link_selected" : "menu__link"
              }
            >
              <nav>
                <p className="menu__home" alt="Home">
                  Home
                </p>
              </nav>
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
                onClick={handleMenuColor}
                className={
                  location.pathname === "/"
                    ? "menu__link_selected"
                    : "menu__link"
                }
              >
                <nav>
                  <p
                    className="menu__home"
                    alt="Home"
                    style={{ color: styleColor }}
                  >
                    Home
                  </p>
                </nav>
              </Link>
              <Link
                to="/saved-news"
                onClick={handleClickSavedArticles}
                className={
                  location.pathname === "/saved-news"
                    ? "menu__link_saved"
                    : "menu__link"
                }
              >
                <nav>
                  <p className="menu__saved" alt="Saved Articles">
                    Saved articles
                  </p>
                </nav>
              </Link>
              <Link to="/" className="menu__link">
                <nav>
                  <button
                    className="menu__username"
                    style={{ color: styleColor, borderColor: styleColor }}
                    onClick={handleMenuColor}
                  >
                    {currentUser.name}
                    <img
                      src={styleColor == "white" ? usernameicon : logout}
                      alt="Username Icon"
                      className="menu__username-icon"
                      onClick={onSignOut}
                    />
                  </button>
                </nav>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;
