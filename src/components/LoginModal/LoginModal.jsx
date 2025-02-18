import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

const LoginModal = ({
  closeActiveModal,
  onSignIn,
  isOpen,
  handleSignupClick,
}) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn(email, password);
  };

  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      isOpen={isOpen}
      onClose={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          id="email"
          type="email"
          className="modal__input"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          id="password"
          type="password"
          className="modal__input"
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <button
        type="button"
        onClick={handleSignupClick}
        className="signin__signup"
      >
        or Sign up
      </button>
    </ModalWithForm>
  );
};

export default LoginModal;
