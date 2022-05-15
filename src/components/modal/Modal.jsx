// import styles
import "./modal.css";

const Modal = ({ children }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">{children}</div>
    </div>
  );
};

export default Modal;
