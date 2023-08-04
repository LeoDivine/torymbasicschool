import React from 'react';

const Gallery = ({ image }) => {
  return (
    <div className=" p-2">
      <div className="w-full h-56 border items-center rounded-lg mt-7 shadow-2xl shadow-black bg-slate-500">
        <img className="w-full h-40 rounded-lg" src={image} alt="" />
        <p className="text-center">
          <span className="text-white">Emeka Joshua<br /></span>Staff Engineer
        </p>
      </div>
    </div>
  );
};

export default Gallery;
