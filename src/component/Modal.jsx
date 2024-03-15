import Modal from 'react-modal';
import '../index.css';

const ModalConfirmacion = ({ isOpen, onClose, userInfo, onConfirm, setCode }) => {
  const onClickModal = () => {
    onClose();
    setCode('');
  };

  const handleConfirm = (event) => {
    event.preventDefault();
    onConfirm();
  };

  const modalStyle = {
    content: {
      maxWidth: '400px',
      maxHeight: '300px',
      margin: 'auto',
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClickModal} style={modalStyle}>
      {userInfo && (
        <form onSubmit={handleConfirm}>
          <div className="ModalBody">
            <div className="modalHeader">
              <img
                src="src/assets/img/confirma.png"
                alt="Imagen"
                className="modalImage"
              />
              <h2 className="titleConfirmacion">Confirmar nombre</h2>
            </div>
            <p className="text">
              ¿Podría confirmar si su nombre es
              <span className="name"> {userInfo.nombre}</span>
              <span className="name"> {userInfo.apellido}</span>?
            </p>
            <button autoFocus type="submit" className="btnConfirmar">
              Confirmar
            </button>
            <button className="btnNo" onClick={onClickModal}>
              No, no lo soy
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
};

export default ModalConfirmacion;
