import "./ModalWithForm.css";

import closebutton from "../../assets/closebutton.svg";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  onSubmit,
  openModal,
}) {
  return (
    <div className={`modal ${isOpen === true && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>

        <img
          onClick={onClose}
          src={closebutton}
          alt="Close Btn"
          className="modal__closebtn"
        />

        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button type="button" onClick={openModal} className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
