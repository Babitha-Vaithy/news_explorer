import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import NewsCard from "../NewsCard/NewsCard.jsx";
import { signUp, signIn, getUser } from "../../utils/auth.js";
import Navigation from "../Navigation/Navigation.jsx";
import { CurrentUserContext } from "../../Contexts/CurrentUserContext.js";
import { getSearchData } from "../../utils/api.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleSignupClick = () => {
    setActiveModal("signUp");
  };

  const handleSignInClick = () => {
    setActiveModal("signin");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const onSignIn = ({ email, password }) => {
    signIn({ email, password })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        checkToken(res.token);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const onSignUp = ({ username, email, password }) => {
    signUp({ username, email, password })
      .then((data) => {
        onSignIn(data.email);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const onSearch = (data) => {
    console.log(data);
    getSearchData(data)
      .then((data) => {
        //onSearch();
        console.log(data);
      })
      .catch(console.error);
  };

  const checkToken = (token) => {
    if (token) {
      getUser(token)
        .then((data) => {
          setCurrentUser(data.data);
          setIsLoggedIn(true);
        })
        .catch(console.error);
    }
  };

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    checkToken(jwt);
  }, []);

  return (
    <div className="page__root">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <div className="page__content">
            <Header handleSignInClick={handleSignInClick} />

            <Main />
            <SearchForm onSearch={onSearch} />
            <Navigation />
          </div>
        </div>
        <NewsCard />
        <About />
        <Footer />

        {activeModal === "signUp" && (
          <RegisterModal
            closeActiveModal={closeActiveModal}
            isOpen={activeModal === "signUp"}
            onSignUp={onSignUp}
            handleSignInClick={handleSignInClick}
          />
        )}

        {activeModal === "signin" && (
          <LoginModal
            closeActiveModal={closeActiveModal}
            isOpen={activeModal === "signin"}
            onSignIn={onSignIn}
            handleSignupClick={handleSignupClick}
          />
        )}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
