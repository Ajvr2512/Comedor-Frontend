import React from 'react';

const UserForm = ({
  handleUpdateCreate,
  reset,
  handleSubmit,
  idUserToUpdate,
  register,
  cerrarModal,
}) => {
  const emptyValueForm = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    birthday: '',
  };
  const myHandleSubmit = async (data) => {
    await handleUpdateCreate(data);
    reset(emptyValueForm);
  };
  return (
    <form
      className="formVisible flex flex-col gap-4"
      onSubmit={handleSubmit(myHandleSubmit)}
    >
      <h2>{idUserToUpdate ? 'Edit' : 'Create'} User</h2>
      <div>
        <label htmlFor="nameId">
          <span>First Name: </span>
        </label>
        <input
          type="text"
          id="nameId"
          className="text-black"
          {...register('first_name')}
        />
      </div>
      <div>
        <label htmlFor="LastName">
          <span>Last Name:</span>
        </label>
        <input
          type="text"
          id="LastName"
          className="text-black"
          {...register('last_name')}
        />
      </div>
      <div>
        <label htmlFor="email">
          <span>Email: </span>
        </label>
        <input type="email" id="email" className="text-black" {...register('email')} />
      </div>
      <div>
        <label htmlFor="password">
          <span>Password: </span>
        </label>
        <input
          type={idUserToUpdate ? 'text' : 'password'}
          id="password"
          className="text-black"
          {...register('password')}
        />
      </div>
      <div>
        <label htmlFor="birthday">
          <span>Birthday: </span>
        </label>
        <input
          type="date"
          id="birthday"
          className="text-black"
          {...register('birthday')}
        />
      </div>
      <div className="flex flex-row justify-center gap-3 items-center">
        <button type="submit" className="BtnCreUp">
          {idUserToUpdate ? 'Edit' : 'Create'} User
        </button>
        <button type="text" className="BtnCreUp" onClick={cerrarModal}>
          cerrar
        </button>
      </div>
    </form>
  );
};

export default UserForm;
