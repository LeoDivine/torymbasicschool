// @react-server
import React from 'react';
import Carousel from './carouselcomp';

import Image from 'next/image';
import AboutSect from './aboutSect';

const slides = [
	'/imgsrc/firstImg.jpg',
	'/imgsrc/thirdImg.jpg',
	'/imgsrc/bgimg.jpg',
];

export default function Landingpagecomp() {
	return (
		<main>
			<div
				style={{ backgroundImage: "url('/imgsrc/bgimg.jpg')" }}
				className='h-screen w-full bg-fixed bg-center bg-cover bg-no-repeat bg-gradient-to-t from-red-500 to-blue-500'
			>
				<div className='absolute top-0 mt-20 h-full left-0 right-0 bottom-0 bg-black/70 z-[2]'></div>
				<div className='relative text-white z-[4] text-center lg:text-left lg:w-[50%] px-5'>
					<h1 className='text-[35px] font-bold  pt-[14rem] md:text-[60px] md:pt-[25rem] lg:pt-[10rem]'>
						A Building with Four Walls and Tommorrow Inside
					</h1>
					<p className='md:text-[26px]'>
						We cultivate intelligence and acedemic excellence
					</p>
					<button className='border-white border-2 p-2 mt-[16px] text-[20px] hover:bg-black/75 transition md:text-[40px]'>
						Get Started
					</button>
				</div>
			</div>
			<div className='pt-[10px]'>
				<h1 className='text-center text-[30px] py-5 font-bold md:text-[40px]'>
					Meet Tory M. Basic School
				</h1>
				<div className='px-4  flex justify-around'>
					<Carousel>
						{slides.map((s, i) => (
							<Image
								height={300}
								width={400}
								key={i}
								className='object-cover w-full h-full'
								src={s}
								alt='s'
							/>
						))}
					</Carousel>
					<p className='hidden lg:w-[60%] lg:inline'>
						momifgfivifvnfivnfinvfivnfivnfvrbobjmtihy50ihnt
						tjo ttimobntj tjnijtnj ijnjtnutnonornhrhithjtohnth
						hnhtuhruhntrntj tjnhutnjntruht rthjtruhtr hjrt
						hutrn htr huth jtrh
						utnhtjunhtrnhithnirthihjitinhitnirng rjgt tngtrjtr
						jinrtnigtrognrotrognrtngrijgnrtinrtj rnj
					</p>
				</div>
			</div>
		<AboutSect/>
		</main>
	);
}
