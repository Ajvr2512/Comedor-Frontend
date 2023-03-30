import React from 'react';

const UserCard = ({ user, handleDeleteUser, loadUserForm }) => {
  return (
    <div>
      <article className="text-black infoCard">
        <h2>
          <span>{user?.first_name} </span>
          <span>{user?.last_name} </span>
          <hr></hr>
        </h2>
        <ul>
          <li>
            <p>Email: </p>
            {user?.email}
          </li>
          <li>
            <p>Birthday: </p>
            {user?.birthday}
          </li>
        </ul>
        <div className="BtnUser flex flex-row justify-center gap-3 items-center">
          <button onClick={() => handleDeleteUser(user?.id)}> 🚨Borrar </button>
          <button onClick={() => loadUserForm(user)}> ✏Edit </button>
        </div>
      </article>
    </div>
  );
};

export default UserCard;
