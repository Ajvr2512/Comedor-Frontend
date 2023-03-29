import React from 'react';

const UserCard = ({ user, handleDeleteUser, loadUserForm }) => {
  return (
    <div>
      <article className="text-black">
        <h2>
          {user?.first_name}
          {user?.last_name}
        </h2>
        <ul>
          <li>
            <span>Email: </span>
            {user?.email}
          </li>
          <li>
            <span>Password: </span>
            {user?.password}
          </li>
          <li>
            <span>Birthday: </span>
            {user?.birthday}
          </li>
        </ul>
        <div className="flex flex-row justify-center gap-3 items-center">
          <button
            className="border border-transparent hover:border-red-500 hover:text-red-500 rounded p-1 bg-gray-900"
            onClick={() => handleDeleteUser(user?.id)}
          >
            🚨Borrar🚨
          </button>
          <button
            className="border border-transparent hover:border-amber-400 hover:text-amber-400 rounded p-1 bg-gray-900"
            onClick={() => loadUserForm(user)}
          >
            ✏Edit✏
          </button>
        </div>
      </article>
    </div>
  );
};

export default UserCard;
