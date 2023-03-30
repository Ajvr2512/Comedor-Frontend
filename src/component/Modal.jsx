import React from 'react';

const Modal = ({ isFormVisible, children }) => {
  return (
    <div>
      {isFormVisible && (
        <div className="text-3xl text-black flex flex-row justify-center items-center absolute inset-0 bg-[rgb(0_0_0_/_0.6)]">
          {children}
        </div>
      )}
    </div>
  );
};

export default Modal;
