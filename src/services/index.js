import axios from 'axios';

const BASE_URL = 'http://localhost:8080/comedor';

export const getPersonaId = async (idPersona) => {
  try {
    const res = await axios.get(BASE_URL + '/consultar/' + idPersona);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const insertComida = async (dataUser) => {
  try {
    await axios.post(BASE_URL + '/insertar-comida', dataUser);

    console.log('Se creo existosamente');
  } catch (error) {
    console.error(error);
  }
};
