import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";
import { set } from "mongoose";

const LoginModal = ({
  closeActiveModal,
  onSignIn,
  isOpen,
  handleSignupClick,
}) => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const formvalidation = () => {
    console.log("form");
    if (email == "") {
      setEmailError(true);
      return;
    }

    if (password == "") {
      setPasswordError(true);
      return;
    }
    onSignIn(email, password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn(email, password);
  };

  return (
    <ModalWithForm
      title="Sign in"
      buttonText="or Sign up"
      isOpen={isOpen}
      onClose={closeActiveModal}
      onSubmit={handleSubmit}
      openModal={handleSignupClick}
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          id="email"
          type="email"
          className="modal__input"
          placeholder="Enter email"
          required
          value={email}
          onChange={handleEmailChange}
        />
        {emailError === true && (
          <span id="emailError" onClick={formvalidation} style="color: red;">
            Email cannot be null
          </span>
        )}
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          id="password"
          type="password"
          className="modal__input"
          placeholder="Enter password"
          required
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError === true && (
          <span id="passwordError" style="color: red;">
            Password cannot be null
          </span>
        )}
      </label>
      <button type="submit" onClick={formvalidation} className="signin__signup">
        Sign in
      </button>
    </ModalWithForm>
  );
};

export default LoginModal;
