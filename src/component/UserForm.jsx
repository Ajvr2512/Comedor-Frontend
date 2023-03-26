import React from 'react';

const UserForm = ({
  idUserToUpdate,
  handleSubmit,
  register,
  reset,
  handleUpdateCreate,
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
    <form className="flex flex-col gap-4 mb-5" onSubmit={handleSubmit(myHandleSubmit)}>
      <h2>{idUserToUpdate ? 'Edit' : 'Create'} User</h2>
      <div>
        <label htmlFor="nameId">First Name: </label>
        <input type="text" id="nameId" className="text-black" {...register('first_name')} />
      </div>
      <div>
        <label htmlFor="LastName">Last Name: </label>
        <input type="text" id="LastName" className="text-black" {...register('last_name')} />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          className="text-black"
          {...register('email')}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          className="text-black"
          {...register('password')}
        />
      </div>
      <div>
        <label htmlFor="birthday">Birthday: </label>
        <input
          type="date"
          id="birthday"
          className="text-black"
          {...register('birthday')}
        />
      </div>

      <button type="submit" className="border border-transparent hover:border-cyan-400">
        {idUserToUpdate ? 'Edit' : 'Create'} Movie
      </button>
    </form>
  );
};

export default UserForm;
