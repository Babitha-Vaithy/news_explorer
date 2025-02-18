import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const handleSignupClick = () => {
    setActiveModal("signUp");
  };

  const handleSignInClick = () => {
    setActiveModal("signin");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const onSignIn = (email, password) => {
    logIn(email, password)
      .then((res) => {
        closeActiveModal();
      })
      .catch(console.error);
  };

  return (
    <div className="page__root">
      <div className="page">
        <div className="page__content">
          <Header
            handleSignInClick={handleSignInClick}
            handleSignupClick={handleSignupClick}
          />
          <Main />
          <SearchForm />
        </div>
      </div>
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
    </div>
  );
}

export default App;
