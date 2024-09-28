import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="loader">
      <span className="loading loading-bars loading-lg text-teal-300"></span>
      </div>
    </div>
  );
};

export default Loader;
