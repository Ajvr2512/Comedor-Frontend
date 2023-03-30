import React from 'react';

const Navbar = ({ handClickAdd, children }) => {
  return (
    <div>
      <nav className="w-full flex flex-row justify-around items-center mb-5">
        <h1 className="text-3xl font-bold"> User Admin</h1>
        <button onClick={handClickAdd}>
          <i className="bx bx-add-to-queue"></i>
          <span>Add new user</span>
        </button>
        <div>{children}</div>
      </nav>
    </div>
  );
};

export default Navbar;
