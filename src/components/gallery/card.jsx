import React from "react";

const Card = ({ image, name, position }) => {
	return (
		<div className='md:w-96 md:h-96 w-full border items-center rounded-lg shadow-2xl mt-4 p-6 shadow-black bg-slate-500'>
			<img
				className='w-full h-40 md:h-60 rounded-t-lg object-cover'
				src={image}
				alt=''
			/>
			<div className='text-center p-2 font-sans'>
				<div className='text-white font-serif'>{name}</div>
				{position}
			</div>
		</div>
	);
};

export default Card;
