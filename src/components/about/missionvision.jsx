'use client'
import React from "react";
import { useInView } from "react-intersection-observer";

const Mission = () => {
	const [missionRef, missionInView] = useInView({
		triggerOnce: false,
		threshold: 0.5,
	});

	const [visionRef, visionInView] = useInView({
		triggerOnce: false,
		threshold: 0.5,
	});
	return (
		<div>
			{/* Mission Section */}
			<div
				ref={missionRef}
				className={`transition-all duration-500 mt-10 flex flex-col-reverse md:flex-row justify-between w-full ${
					missionInView
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-10"
				}`}
			>
				<div className='mx-4 md:mx-24 w-full md:w-[50%]'>
					<h1 className='font-bold text-xl md:text-4xl font-serif'>
						Our Mission
					</h1>
					<p className='pt-4 md:pt-6 text-md md:text-lg font-sans'>
						{`To provide a nurturing and stimulating learning
						environment that empowers young minds to explore,
						discover, and grow. We are committed to fostering
						a love for learning, creativity, and critical
						thinking, while instilling strong values and a
						sense of social responsibility. At Tory M Basic
						School, we strive to lay a strong foundation for
						each child's holistic development, equipping them
						with the skills and knowledge to excel in a
						dynamic world.`}
					</p>
				</div>
				<div className='md:w-[50%] mt-6 md:mt-0 p-6'>
					<img
						src='Image/third.jpg'
						alt=''
						className='w-full mx-auto h-full object-cover border border-gray-800 shadow-xl rounded-3xl'
					/>
				</div>
			</div>

			{/* Vision Section */}
			<div
				ref={visionRef}
				className={`transition-all duration-500 flex flex-col-reverse md:flex-row pt-10 w-full ${
					visionInView
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-10"
				}`}
			>
				<div className='md:w-[40%] p-6'>
					<img
						src='Image/second.jpg'
						alt=''
						className='w-full mx-auto h-full object-cover border border-gray-800 shadow-xl rounded-3xl'
					/>
				</div>
				<div className='mx-4 md:mx-24 w-full md:w-[60%]'>
					<h1 className='font-bold text-xl md:text-4xl font-serif'>
						Our Vision
					</h1>
					<p className='pt-4 md:pt-6 text-md md:text-lg font-sans'>
						{`To be a leading pre-school that sets the standard
						for excellence in early childhood education. Our
						vision is to create a safe and inclusive community
						where every child's unique potential is recognized
						and celebrated. Tory M Basic School envisions a
						future where our graduates embrace challenges with
						resilience, embrace diversity with empathy, and
						contribute positively to society.`}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Mission;
