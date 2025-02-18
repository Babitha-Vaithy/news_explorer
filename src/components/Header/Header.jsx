import { Link } from "react-router-dom";

import "./Header.css";

function Header({ handleSignInClick }) {
  return (
    <header className="header">
      <Link to="/">
        <p className="header__logo" alt="Header Logo">
          NewsExplorer
        </p>
      </Link>
      <div className="header__container">
        <Link to="/" className="header__link">
          <p className="header__home" alt="Home">
            Home
          </p>
        </Link>
        <button
          onClick={handleSignInClick}
          type="button"
          className="header__signin"
        >
          Sign in
        </button>
      </div>
    </header>
  );
}

export default Header;
