import { useState, useEffect } from "react";

export const usePaginate = (user, quantity) => {
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
  useEffect(() => {
    changePage(currentPage);
  }, [ user, quantity ]);
  return {
    currentPage,
    UserSlice,
    pages,
    nextPage,
    previousPage,
    changePage,
  };
};
