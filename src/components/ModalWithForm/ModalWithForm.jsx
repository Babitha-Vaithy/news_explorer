import "./ModalWithForm.css";

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

        <button
          type="button"
          onClick={onClose}
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
