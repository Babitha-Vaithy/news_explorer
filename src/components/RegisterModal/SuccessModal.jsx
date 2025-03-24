import "./SuccessModal.css";
import closebutton from "../../assets/closebutton.svg";

const SuccessModal = ({ isOpen, closeActiveModal, handleSignInClick }) => {
  return (
    <div className={`modal ${isOpen === true && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="success__title">Registration successfully completed!</h2>
        <button
          onClick={closeActiveModal}
          type="button"
          className="success__close"
        >
          <img
            src={closebutton}
            alt="Close Btn"
            className="success__closebtn"
          />
        </button>
        <div className="success__container">
          <button onClick={handleSignInClick} className="success__sigin">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
