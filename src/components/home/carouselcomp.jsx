'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

export default function Carouselcomp({ children: slides }) {
	const [curr, setcurr] = useState(0);

	const prev = () =>
		setcurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
	const next = () =>
		setcurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
	return (
		<div className='rounded-[10px] overflow-hidden w-full lg:w-[30%] lg:h-[400px]'>
			<div
				className='flex transition-transform ease-in-out duration-500'
				style={{ transform: `translateX(-${curr * 100}%)` }}
			>
				{slides}
			</div>
			<div className='absolute flex inset-0 justify-between p-6 mt-[60rem] items-center lg:w-[32%] lg:ml-[28px] md:mt-[100rem]'>
				<button
					onClick={prev}
					className='bg-white/80 rounded-full shadow hover:bg-white'
					size={40}
				>
					<ChevronLeft />
				</button>
				<button
					onClick={next}
					className='bg-white/80 rounded-full shadow hover:bg-white'
					size={40}
				>
					<ChevronRight />
				</button>
			</div>
			<div className='relative -mt-[20px] pb-[60px]  right-0 left-0'>
				<div className='flex items-center justify-center gap-2'>
					{slides.map((_, i) => (
						<div
							key={i}
							className={`transition-all w-3 h-3 bg-white rounded-full lg:hidden ${
								curr === i ? 'p-2' : 'bg-opacity-50'
							}`}
						></div>
					))}
				</div>
			</div>
		</div>
	);
}
