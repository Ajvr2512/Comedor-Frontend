import React, { useState } from 'react';
import UserCard from './UserCard';
import img from '../assets/img/user_1.jpg';
import { usePaginate } from "../hook/usePaginate";

const UserList = ({ user, handleDeleteUser, loadUserForm }) => {
  const [quantity, setQuantity] = useState(3);
  const { UserSlice, currentPage, pages, nextPage, previousPage, changePage } = usePaginate(user, quantity);

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
