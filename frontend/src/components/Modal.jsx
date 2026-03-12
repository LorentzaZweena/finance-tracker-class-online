export default function Modal({ modal, onClose }) {
  if (!modal) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className={`modal-icon ${modal.type}`}>
          {modal.type === "success" ? "✅" : "❌"}
        </div>
        <p className="modal-message">{modal.message}</p>
        <button className="modal-btn" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
}
