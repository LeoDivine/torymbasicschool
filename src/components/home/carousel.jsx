import React from "react";
import CarouselData from "./carouseldata";

const Carousel = () => {
	return (
		<div className='flex flex-col md:flex-row p-8'>
			<div className='w-full md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0'>
				<CarouselData />
			</div>
			<div className='w-full md:w-1/2'>
				<h1 className='text-3xl font-serif font-bold mb-4'>
					{`Tory M. Basic School`}
				</h1>
				<p className='text-black font-sans font-semibold text-lg'>
					{`Welcome to Tory M Basic School, where we are dedicated
					to fostering a nurturing environment for young
					learners. Our mission is to provide a safe and
					supportive space where children can thrive
					academically, creatively, and socially. With a focus on
					core values such as kindness, respect, and curiosity,
					we aim to inspire a lifelong love for learning. Join us
					in creating a foundation for your child's success and
					growth.`}
				</p>
			</div>
		</div>
	);
};

export default Carousel;
