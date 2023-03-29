import React from 'react';
import UserCard from './UserCard';

const UserList = ({ user, handleDeleteUser, loadUserForm }) => {
  return (
    <div>
      <h2 className="text-2xl text-cyan-400 font-bold text-center mb-5">User List</h2>
      <div className="flex flex-row flex-wrap gap-5 justify-center">
        {user.map((user) => (
          <UserCard
            user={user}
            key={user?.id}
            handleDeleteUser={handleDeleteUser}
            loadUserForm={loadUserForm}
          />
        ))}
      </div>
    </div>
  );
};

export default UserList;
