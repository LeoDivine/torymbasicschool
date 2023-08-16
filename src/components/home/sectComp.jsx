import Image from 'next/image';
import React from 'react';

export default function Card({ cardTitle, cardImage , cardDisc}) {
	return (
		<>
			<div className='w-[100%] text-center h-[350px] mt-6 bg-gray-800 rounded-xl overflow-hidden'>
				<Image
					height={300}
					width={400}
					className='w-full h-[300px]'
					src={cardImage}
					alt={cardTitle}
				/>
				<h4 className='p-1 text-[25px] font-bold text-white object-cover font-serif'>
					{cardTitle}
				</h4>
				<p className='p-2 text-[15px] font-sans text-white object-cover '>{cardDisc}</p>
			</div>
		</>
	);
}
