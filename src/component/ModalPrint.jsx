import Modal from 'react-modal';
import '../index.css';

const ModalPrint = ({ userInfo, isOpen }) => {
  const modalStyle = {
    content: {
      maxWidth: '400px',
      maxHeight: '300px',
      margin: 'auto',
    },
  };

  return (
    <Modal style={modalStyle} isOpen={isOpen}>
      {userInfo && (
        <div className="ModalBody">
          <div className="modalHeader">
            <img src="src/assets/img/confirma.png" alt="Imagen" className="modalImage" />
            <h2 className="titleConfirmacion">Imprimiendo ticket.....</h2>
          </div>
          <p className="text">
            Bienenido al comedor de Pascua 2024
            <span className="name"> {userInfo.nombre}</span>
            <span className="name"> {userInfo.apellido}</span>
          </p>
        </div>
      )}
    </Modal>
  );
};

export default ModalPrint;
