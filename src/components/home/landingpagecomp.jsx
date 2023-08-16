// @react-server
'use client'
import React from 'react';




export default function Landingpagecomp() {
	return (
		<main>
			<div
				style={{ backgroundImage: "url('/imgsrc/bgimg.jpg')" }}
				className='h-screen w-full bg-fixed bg-center bg-cover bg-no-repeat bg-gradient-to-t from-red-500 to-blue-500'
			>
				<div className='absolute top-0 mt-20 h-full left-0 right-0 bottom-0 bg-black/70 z-[2]'></div>
				<div className='relative text-white z-[4] text-center lg:text-left lg:w-[70%] px-8'>
					<h1 className='text-[35px] font-bold  font-serif pt-[14rem] md:text-[60px] md:pt-[25rem] lg:pt-[10rem]'>
						{`A Building with Four Walls and Tommorrow Inside`}
					</h1>
					<p className='md:text-[26px] font-serif'>
						{`We cultivate intelligence and acedemic excellence`}
					</p>
					<button className='border-gray-300 border-2 rounded-2xl p-2 mt-[16px] text-[20px] hover:bg-black/75 transition md:text-[30px] font-normal font-sans'>
						{`Get Started`}
					</button>
				</div>
			</div>
			
		
		</main>
	);
}




