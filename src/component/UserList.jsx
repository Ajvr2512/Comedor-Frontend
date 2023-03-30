import React, { useState } from 'react';
import UserCard from './UserCard';
import img from '../assets/img/user_1.jpg';

const UserList = ({ user, handleDeleteUser, loadUserForm }) => {
  const [quantity, setQuantity] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(user.length / quantity);
  const lowerLimit = (currentPage - 1) * quantity;
  const upperLimit = currentPage * quantity - 1;

  const UserSlice = user.slice(lowerLimit, upperLimit + 1);
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
        {user.length > 0 ? (
          UserSlice.map((user) => (
            <UserCard
              user={user}
              key={user?.id}
              handleDeleteUser={handleDeleteUser}
              loadUserForm={loadUserForm}
            />
          ))
        ) : (
          <div className="noUser">
            <h3 className="text-1xl text-cyan-400 text-center mb-5">
              There are no users!!!
            </h3>
            <img src={img} alt="ImgUsuarios" />
          </div>
        )}
      </div>
      <div className="ContainerButton">
        <button className="ButtonPreNext" onClick={previousPage}>Previous </button>
        {pages.map((page) => (
          <button
            onClick={() => changePage(page)}
            className={"buttonPage " + (page === currentPage ? "ButtonAct" : "")}
            key={page}
          >
            {page}
          </button>
        ))}
        <button className="ButtonPreNext" onClick={nextPage}> Next</button>
      </div>
    </div>
  );
};

export default UserList;
