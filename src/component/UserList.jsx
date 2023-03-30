import React, { useState } from 'react';
import UserCard from './UserCard';

const UserList = ({ user, handleDeleteUser, loadUserForm }) => {
  const [quantity, setQuantity] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(user.length / quantity);
  const lowerLimit = (currentPage - 1) * quantity;
  const upperLimit = currentPage * quantity - 1;

  const ResidentSlice = user.slice(lowerLimit, upperLimit + 1);
  const nextPage = () => {
    const newPage = currentPage + 1;
    if (newPage <= totalPages) setCurrentPage(newPage);
  };

  const previousPage = () => {
    const newPage = currentPage - 1;
    if (newPage >= 1) setCurrentPage(newPage);
  };

  const changePage = (newPage) => {
    if (newPage < 1) setCurrentPage(1);
    else if (newPage > totalPages) setCurrentPage(totalPages);
    else setCurrentPage(newPage);
  };
  const pages = Array(totalPages).fill().map((_, i) => i + 1);
  return (
    <div>
      <h2 className="text-2xl text-cyan-400 font-bold text-center mb-5">User List</h2>
      <div className="flex flex-row flex-wrap gap-5 justify-center">
        {user.length > 0
          ? user.map((user) => (
              <UserCard
                user={user}
                key={user?.id}
                handleDeleteUser={handleDeleteUser}
                loadUserForm={loadUserForm}
              />
            ))
        : 'There are no users!!!'}
      </div>
    </div>
  );
};

export default UserList;
