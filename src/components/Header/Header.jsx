import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <p className="header__logo" alt="Header Logo">
          NewsExplorer
        </p>
      </Link>
      <Link to="/" className="header__link">
        <p className="header__home" alt="Home">
          Home
        </p>
      </Link>
      <button type="button" className="header__signin">
        Sign in
      </button>
    </header>
  );
}

export default Header;
