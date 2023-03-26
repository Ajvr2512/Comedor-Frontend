import React from 'react';

const Modal = ({ isVisible, children }) => {
  return (
    <div>
      {isVisible && (
        <div className="text-3xl text-black flex flex-row justify-center items-center absolute inset-0 bg-[rgb(0_0_0_/_0.6)]">
          {children}
        </div>
      )}
    </div>
  );
};

export default Modal;
