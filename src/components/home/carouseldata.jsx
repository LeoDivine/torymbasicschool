"use client";
import Image from "next/image";
import React, { useEffect } from "react";

const CarouselData = () => {
	const images = [
		"/imgsrc/bgimg.jpg",
		"/imgsrc/firstImg.jpg",
		"/imgsrc/thirdImg.jpg",
	];

	const [currentSlide, setCurrentSlide] = React.useState(0);

	const goToSlide = (index) => {
		setCurrentSlide(index);
	};

	const nextSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prevSlide) =>
			prevSlide === 0 ? images.length - 1 : prevSlide - 1
		);
	};

	const autoplayInterval = 5000;

	useEffect(() => {
		const autoplayTimer = setInterval(() => {
			nextSlide();
		}, autoplayInterval);

		return () => {
			clearInterval(autoplayTimer);
		};
	}, [currentSlide]);

	return (
		<div className='relative overflow-hidden rounded-lg h-64 w-full md:w-96'>
			<div className='carousel '>
				{images.map((image, index) => (
					<Image
						key={index}
						src={image}
						width={384}
						height={288}
						alt={`Slide ${index}`}
						className={`absolute top-0 left-0 object-cover   h-full w-full transition-opacity duration-300 ${
							index === currentSlide
								? "opacity-100"
								: "opacity-0"
						}`}
					/>
				))}
			</div>
			<div className='absolute bottom-0 left-0 w-full flex justify-center py-2'>
				<div className='flex items-center'>
					<button
						onClick={prevSlide}
						className='bg-white/50 rounded-full shadow text-white px-4 py-2 ml-2'
					>
						<span className='sr-only'>{`Previous`}</span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							className='h-6 w-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M15 19l-7-7 7-7'
							/>
						</svg>
					</button>
					{images.map((_, index) => (
						<button
							key={index}
							onClick={() => goToSlide(index)}
							className={`${
								index === currentSlide
									? "bg-gray-800"
									: "bg-gray-300 hover:bg-gray-400"
							} text-white w-3 h-3 rounded-full mx-1 focus:outline-none object-contain `}
						></button>
					))}
					<button
						onClick={nextSlide}
						className='bg-white/50 rounded-full shadow text-white px-4 py-2 mr-2'
					>
						<span className='sr-only'>{`Next`}</span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							className='h-6 w-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M9 5l7 7-7 7'
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default CarouselData;
