import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import Preloader from "../Preloader/Preloader";
import { signUp, signIn } from "../../utils/auth.js";

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

  const onSignIn = ({ email, password }) => {
    signIn(email, password)
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
      })
      .catch(console.error);
  };

  const checkToken = (token) => {
    return new Promise((resolve, reject) => {
      resolve({
        data: { name: "fake user", email: "test@gmail.com", _id: "fake-id" },
      });
    });
  };

  return (
    <div className="page__root">
      <div className="page">
        <div className="page__content">
          <Header handleSignInClick={handleSignInClick} />
          <Main />
          <SearchForm />
        </div>
      </div>
      <Preloader />
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
