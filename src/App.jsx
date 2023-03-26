import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import UserCard from './components/UserCard';
import UserForm from './components/UserForm';
import { createUser, getUser, updateUser, deleteUser } from './services';

const App = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [idUserToUpdate, setIdUserToUpdate] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const formRef = useRef(null);

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
  };

  const handleDeleteUser = async (userId) => {
    await deleteUser(userId);
    await loadUser();
  };

  const loadUserForm = (userData) => {
    const { id, ...data } = userData;

    reset({
      firt_name: userData.firt_name,
      last_name: userData.last_name,
      email: userData.email,
      password: userData.password,
      birthday: userData.birthday,
    });
    reset(data);

    setIdUserToUpdate(id);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="bg-neutral-800 min-h-screen flex flex-col justify-center items-center p-10 text-white">
     
      <UserForm
        handleUpdateCreate={handleUpdateCreate}
        idUserToUpdate={idUserToUpdate}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
      />

      <section>
        <h2 className="text-2xl text-cyan-400 font-bold text-center mb-5">User List</h2>
        <div className="flex flex-row flex-wrap gap-5 justify-center">
          {isLoading ? (
            <Loading/>
          ) : (
            user.map((user) => (
              <UserCard
                user={user}
                key={user.id}
                deleteUser={handleDeleteUser}
                loadUserToForm={loadUserForm}
              />
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default App;
