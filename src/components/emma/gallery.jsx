import React from 'react';

const Gallery = ({ image, name, position }) => {
  return (
      <div className="w-96 h-56 border items-center rounded-lg shadow-2xl shadow-black bg-slate-500">
        <img className="w-full h-40 rounded-lg object-top  object-cover" src={image} alt="" />
        <div className="text-center">
          <div className="text-white">{name}</div>{position}
        </div>
      </div>
  );
};

export default Gallery;
