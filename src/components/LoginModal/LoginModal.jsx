import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

const LoginModal = ({
  closeActiveModal,
  onSignIn,
  isOpen,
  handleSignupClick,
}) => {
  // function validateForm() {
  //   let email = document.getElementById("email").value;
  //   let password = document.getElementById("password").value;
  //   let emailError = document.getElementById("emailError");
  //   let passwordError = document.getElementById("passwordError");
  //   let isValid = true;

  //   emailError.textContent = "";
  //   passwordError.textContent = "";

  //   if (email === "") {
  //     emailError.textContent = "Email is required";
  //     isValid = false;
  //   } else if (!isValidEmail(email)) {
  //     emailError.textContent = "Invalid email format";
  //     isValid = false;
  //   }

  //   if (password === "") {
  //     passwordError.textContent = "Password is required";
  //     isValid = false;
  //   } else if (password.length < 6) {
  //     passwordError.textContent = "Password must be at least 6 characters";
  //     isValid = false;
  //   }

  //   return isValid;
  // }

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
        {/* <span id="emailError" style="color: red;"></span> */}
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
        {/* <span id="passwordError" style="color: red;"></span> */}
      </label>
      <button type="submit" onClick={onSignIn} className="signin__signup">
        Sign in
      </button>
    </ModalWithForm>
  );
};

export default LoginModal;
