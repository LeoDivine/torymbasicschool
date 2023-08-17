// @react-server
"use client";
import React from "react";
import Image from "next/image";

export default function Landingpagecomp() {
	const handleGetStartedClick = () => {
		const url = "/contact#getstarted";
		window.location.href = url;
	};

	return (
		<main>
			<div className='h-screen w-full bg-fixed bg-center bg-cover bg-no-repeat bg-gradient-to-t from-red-500 to-blue-500 relative'>
				<Image
					src='/imgsrc/bgimg.jpg' 
					alt='Background'
					layout='fill'
					objectFit='cover'
					
				/>
				<div className='absolute top-0  h-screen left-0 right-0 bottom-0 bg-black/70'></div>
				<div className='relative text-white text-center lg:text-left lg:w-[70%] px-8'>
					<h1 className='text-[35px] font-bold  font-serif pt-[14rem] md:text-[60px] md:pt-[25rem] lg:pt-[10rem]'>
						{`A Building with Four Walls and Tommorrow Inside`}
					</h1>
					<p className='md:text-[26px] font-serif'>
						{`We cultivate intelligence and academic excellence`}
					</p>
					<button
						onClick={handleGetStartedClick}
						className='border-gray-300 border-2 rounded-2xl p-2 mt-[16px] text-[20px] hover:bg-black/75 transition md:text-[30px] font-normal font-sans'
					>
						{`Get Started`}
					</button>
				</div>
			</div>
		</main>
	);
}
