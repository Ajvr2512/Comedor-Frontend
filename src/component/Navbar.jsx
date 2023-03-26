import React from 'react';

const Navbar = ({ ActionAddBtn }) => {
  return (
    <div>
      <nav className="w-full flex flex-row justify-around items-center mb-5">
        <h1 className="text-3xl font-bold"> User Admin</h1>
        <button onClick={ActionAddBtn}>
          <i className="bx bx-add-to-queue"></i>
          <span>Add new user</span>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
