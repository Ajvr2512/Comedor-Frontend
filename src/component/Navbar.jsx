import React from 'react';

const Navbar = ({ handClickAdd, children, handleUpdateCreate, reset, handleSubmit }) => {
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
    handClickAdd();
  };
  return (
    <div>
      <nav className="w-full flex flex-row justify-around items-center mb-5 gap-40">
        <h1 className="text-3xl font-bold"> User Admin</h1>
        <button className="BtnAdd" onClick={handleSubmit(myHandleSubmit)}>
          <i className="bx bx-add-to-queue"></i>
          <span>Add new user</span>
        </button>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default Navbar;
