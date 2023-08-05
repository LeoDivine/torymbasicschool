import React from 'react'

export default function sectComp({cardTitle, cardImage}) {
  return (
    <>
      <div className="w-[100%] text-center h-[300px] mt-6 bg-gray-800 rounded-[10px] lg:w-[30%] md:w-[90%] md:h-[560px]">
        <img
          className="w-full rounded-t-[10px]"
          src={cardImage}
          alt={cardTitle}
        />
        <h4 className='p-[4px] text-[25px] font-bold text-white md:text-[50px]'>{cardTitle}</h4>
      </div>
    </>
  );
}
