import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Main from "../Main/Main";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import { signUp, signIn, getUser, saveArticle } from "../../utils/auth.js";
import { CurrentUserContext } from "../../Contexts/CurrentUserContext.js";
import { getSearchData } from "../../utils/api.js";
import Savedarticles from "../SavedArticles/SavedArticles.jsx";
import SuccessModal from "../RegisterModal/SuccessModal.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Menu from "../Menu/Menu.jsx";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [search, setSearch] = useState(null);
  const [loader, setLoader] = useState(null);
  const [showSavedArticles, setShowSavedArticles] = useState(false);

  const handleSignupClick = () => {
    setActiveModal("signUp");
  };

  const handleSignInClick = () => {
    setActiveModal("signin");
  };
  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleMenu = () => {
    setActiveModal("menu");
  };

  const handleClickSavedArticles = () => {
    setShowSavedArticles(true);
    closeActiveModal();
  };

  const handleSavedArticleColor = () => {
    setShowSavedArticles(false);
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
        console.log(data);
        setActiveModal("success");
      })
      .catch(console.error);
  };

  const onSearch = (data) => {
    setLoader("load");
    getSearchData(data)
      .then((data) => {
        setLoader("complete");
        setSearch(data.articles);
      })
      .catch(setSearch([]));
  };

  const onSaveCards = (item) => {
    console.log(item);
    saveArticle(item)
      .then(() => {})
      .catch(console.error);
  };

  const onSignOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
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
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        {
          <div className="page__content">
            <Header
              handleSignInClick={handleSignInClick}
              styleColor={showSavedArticles === false ? "white" : "black"}
              onSignOut={onSignOut}
              handleMenu={handleMenu}
              onSearch={onSearch}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    loader={loader}
                    search={search}
                    onSaveCards={onSaveCards}
                  />
                }
              ></Route>{" "}
              <Route
                path="/saved-news"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Savedarticles />
                  </ProtectedRoute>
                }
              ></Route>
            </Routes>
            <Footer />
          </div>
        }

        {activeModal === "signUp" && (
          <RegisterModal
            closeActiveModal={closeActiveModal}
            isOpen={activeModal === "signUp"}
            onSignUp={onSignUp}
            handleSignInClick={handleSignInClick}
          />
        )}
        {activeModal === "menu" && (
          <Menu
            isOpen={activeModal === "menu"}
            styleColor="white"
            handleClickSavedArticles={handleClickSavedArticles}
            onSignOut={onSignOut}
            closeActiveModal={closeActiveModal}
            handleSignInClick={handleSignInClick}
            handleSavedArticleColor={handleSavedArticleColor}
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
        {activeModal === "success" && (
          <SuccessModal
            closeActiveModal={closeActiveModal}
            isOpen={activeModal === "success"}
            handleSignInClick={handleSignInClick}
          />
        )}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
