import React, { useState } from 'react';

const AdminModalTramiteList = ({ isOpen, closeModal, children }) => {
  const modalClasses = isOpen
    ? 'fixed inset-0 flex items-center justify-center'
    : 'hidden';

  return (
    <div className={modalClasses}>
      <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
      <div className="z-50 bg-white p-4 rounded-md shadow-md" style={{width: "35%"}}>
        <button
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700 cursor-pointer"
          onClick={closeModal}
        >
          &#x2715;
        </button>
        {children}
      </div>
    </div>
  );
};

export default AdminModalTramiteList;
