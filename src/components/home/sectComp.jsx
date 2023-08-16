import Image from "next/image";
import React from "react";

export default function Card({ cardTitle, cardImage, cardDisc }) {
	return (
		<>
			<div className='w-[100%] pb-2 text-center h-[450px] mt-6 bg-gray-800 rounded-xl overflow-hidden'>
				<Image
					height={300}
					width={400}
					className='w-full h-[300px] object-cover object-center'
					src={cardImage}
					alt={cardTitle}
				/>
				<h4 className='p-2 text-[20px] font-bold text-white object-cover font-serif'>
					{cardTitle}
				</h4>
				<p className='px-2 text-[13px] font-sans font-medium text-white  '>
					{cardDisc}
				</p>
			</div>
		</>
	);
}
