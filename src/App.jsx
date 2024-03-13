import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ModalConfirmacion from './component/Modal';
import ReactModal from 'react-modal';
import './index.css';
import ModalPrint from './component/ModalPrint';
const App = () => {
  const [code, setCode] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImpre, setModalImpre] = useState(false);
  const [confirmationResponse, setConfirmationResponse] = useState('');
  const BASE_URL = 'http://localhost:8080/comedor';

  useEffect(() => {
    ReactModal.setAppElement('#root');
  }, []);

  const checkCode = async () => {
    try {
      const response = await axios.get(BASE_URL + `/consultar/${code}`);
      console.log(response);
      setUserInfo(response.data[0]);
      setModalIsOpen(true);
    } catch (error) {
      alert('El código ingresado no existe');
      setCode('');
    }
  };

  const handleConfirmation = async () => {
    try {
      const response = await axios.post(BASE_URL + '/insertar-comida', {
        idPersona: code,
      });
      setConfirmationResponse(response.data[0]);
      setModalIsOpen(false);
      setModalImpre(true);
      setTimeout(() => {
        setModalImpre(false);
      }, 4000);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        const errorMessage = error.response.data.error;
        alert(`Error: ${errorMessage}`);
      } else {
        alert('Error al procesar la solicitud. Por favor, intenta nuevamente.');
      }
      console.error(error);
    }
    setCode('');
    setModalIsOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    checkCode();
  };

  return (
    <div className="App">
      <div className="contenedor">
        <h1 className="titulo">COMEDOR</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputContainer">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Ingrese su código"
            />
            <button type="submit" className="buttonVerificar">
              Verificar Código
            </button>
          </div>
        </form>
        <ModalConfirmacion
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          userInfo={userInfo}
          onConfirm={handleConfirmation}
          setCode={setCode}
        />
        <ModalPrint userInfo={userInfo} isOpen={modalImpre} />
        {confirmationResponse && <p>{confirmationResponse}</p>}
      </div>
    </div>
  );
};

export default App;
