import React from 'react';
import Modal from 'react-modal';
import '../index.css';

const ModalConfirmacion = ({ isOpen, onClose, userInfo, onConfirm, setCode }) => {
  const onClickModal = () => {
    onClose();
    setCode('');
  };
  const modalStyle = {
    content: {
      maxWidth: '400px',
      maxHeight: '300px',
      margin: 'auto',
    },
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={modalStyle}>
      {userInfo && (
        <div className="ModalBody">
          <div className="modalHeader">
            <img src="src/assets/img/confirma.png" alt="Imagen" className="modalImage" />
            <h2 className="titleConfirmacion">Confirmar nombre</h2>
          </div>
          <p className="text">
            ¿ Podría confirmar si su nombre es
            <span className="name"> {userInfo.nombre}</span>
            <span className="name"> {userInfo.apellido}</span>?
          </p>
          <button className="btnConfirmar" onClick={onConfirm}>
            Confirmar
          </button>
          <button className="btnNo" onClick={onClickModal}>
            No, no lo soy
          </button>
        </div>
      )}
    </Modal>
  );
};

export default ModalConfirmacion;
