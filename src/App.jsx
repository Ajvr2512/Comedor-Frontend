import React, { useState, useEffect } from 'react';
import { getUser, updateUser, createUser, deleteUser } from './services/index';
import UserForm from './component/UserForm';
import Loading from './component/Loading';
import UserList from './component/UserList';
import Modal from './component/Modal';
import Navbar from './component/Navbar';
import { useForm } from 'react-hook-form';

const App = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [idUserToUpdate, setIdUserToUpdate] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const loadUser = async () => {
    try {
      setIsLoading(true);
      const UserFromBackend = await getUser();
      setUser(UserFromBackend);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateCreate = async (dataForm) => {
    setIsLoading(true);
    if (idUserToUpdate) await updateUser(idUserToUpdate, dataForm);
    else await createUser(dataForm);
    await loadUser();
    setIdUserToUpdate(null);
    setIsLoading(false);
    setIsFormVisible(false);
  };
  const handleDeleteUser = async (userId) => {
    await deleteUser(userId);
    await loadUser();
  };
  const loadUserForm = (userData) => {
    setIsFormVisible(true);
    const { id, ...data } = userData;
    reset(data);
    setIdUserToUpdate(id);
  };
  const handClickAdd = () => {
    setIsFormVisible(true);
  };
  useEffect(() => {
    loadUser();
  }, []);
  return (
    <div className="bg-neutral-800 min-h-screen flex flex-col justify-center items-center p-10 text-white">
      <div>
        <Modal isFormVisible={isFormVisible}>
          <UserForm
            handleUpdateCreate={handleUpdateCreate}
            reset={reset}
            handleSubmit={handleSubmit}
            idUserToUpdate={idUserToUpdate}
            register={register}
          />
        </Modal>
      </div>
      <section>
        <Navbar handClickAdd={handClickAdd}>
          {isLoading ? (
            <Loading />
          ) : (
            <UserList
              user={user}
              handleDeleteUser={handleDeleteUser}
              loadUserForm={loadUserForm}
            />
          )}
        </Navbar>
      </section>
    </div>
  );
};

export default App;
