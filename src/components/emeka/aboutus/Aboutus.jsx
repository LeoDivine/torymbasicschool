"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function Aboutus() {
	const [containerRef, containerInView] = useInView({
		// triggerOnce: true,
		threshold: 0.5,
	});

	// console.log(containerInView);
	// const [missionRef, missionInView] = useInView({
	//   triggerOnce : true,
	//   threshold: 0.2,
	// });

	// const [visionRef, visionInView] = useInView({
	//   triggerOnce : true,
	//   threshold : 0.2,
	// })

	return (
		<div className='pb-4 bg-gray-300'>
			{/* /* About Us */}
			<div className='mx-4 md:mx-24 mt-10'>
				<h1 className='text-4xl md:text-6xl font-[San-serif] pb-6'>
					About us
				</h1>
				<p className='text-xl md:text-2xl font-[San-serfi] pb-10'>
					Founded in 2021, Tory M Basic School has been providing
					quality early childhood education for four years. Our
					nurturing and stimulating learning environment fosters
					a love for learning, creativity, and critical thinking.
					We celebrate diversity and are committed to empowering
					young minds for a brighter future. With a focus on
					excellence, integrity, and compassion, we continue to
					inspire and shape the leaders of tomorrow.
				</p>
			</div>

			<div ref={containerRef}>
				{/* Mission Section */}
				<div
					// ref={missionRef}
					className={` transition-all duration-500 mt-10 flex flex-col md:flex-row justify-between w-full ${
						// missionInView ? "fade-in visible" : "hidden"
						containerInView
							? " opacity-100 translate-y-0"
							: " opacity-0 translate-y-10"
					}`}
				>
					<div className='mx-4 md:mx-24 w-full md:w-[50%]'>
						<h1 className='font-bold text-2xl md:text-4xl font-[San-serif]'>
							Our Mission
						</h1>
						<p className='pt-4 md:pt-6 text-xl md:text-2xl font-[San-serif]'>
							To provide a nurturing and stimulating
							learning environment that empowers young
							minds to explore, discover, and grow. We are
							committed to fostering a love for learning,
							creativity, and critical thinking, while
							instilling strong values and a sense of
							social responsibility. At Tory M Basic
							School, we strive to lay a strong foundation
							for each child's holistic development,
							equipping them with the skills and knowledge
							to excel in a dynamic world.
						</p>
					</div>
					<div className='md:w-[50%] mt-6 md:mt-0'>
						<img
							src='Image/third.jpg'
							alt=''
							className='w-[80%] md:w-[80%] mx-auto h-full object-cover border border-gray-800 shadow-xl rounded-3xl'
						/>
					</div>
				</div>

				{/* Vision Section */}
				<div
					// ref={visionRef}
					className={`flex flex-col md:flex-row sm:flex-col-reverse justify-between pt-10 w-full ${
						// visionInView ? "fade-in visible" : "hidden"
						containerInView
							? " opacity-100 translate-y-0"
							: " opacity-0 translate-y-10"
					}`}
				>
					<div className='md:w-[40%]'>
						<img
							src='Image/second.jpg'
							alt=''
							className='w-full md:w-[80%] mx-auto h-full object-cover border border-gray-800 shadow-xl rounded-3xl'
						/>
					</div>
					<div className='mx-4 md:mx-24 w-full md:w-[60%]'>
						<h1 className='font-bold text-2xl md:text-4xl font-[San-serif]'>
							Our Vision
						</h1>
						<p className='pt-4 md:pt-6 text-xl md:text-2xl font-[San-serif]'>
							To be a leading pre-school that sets the
							standard for excellence in early childhood
							education. Our vision is to create a safe and
							inclusive community where every child's
							unique potential is recognized and
							celebrated. Tory M Basic School envisions a
							future where our graduates embrace challenges
							with resilience, embrace diversity with
							empathy, and contribute positively to
							society.
						</p>
					</div>
				</div>
			</div>

			{/* Principal Section */}
			<div className='text-center mt-10 text-2xl md:text-4xl font-semibold font-[San-serif]'>
				<h1>School Management</h1>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-4 m-4'>
				<div className='font-[San-serif] bg-gray-500 border border-pink-500 shadow-xl rounded-3xl'>
					<div className='flex flex-col items-center'>
						<img
							src='Image/owner.jpg'
							alt=''
							className='w-[80%] md:w-full mt-4 mb-4 pt-6 rounded-xl hover:scale-105  transition-all duration-500'
						/>
						<h2 className='text-xl md:text-4xl text-white'>
							Proprietor
						</h2>
						<p className='text-lg md:text-2xl text-white'>
							School Principal
						</p>
					</div>
				</div>
				<div className='font-[San-serif] bg-gray-500 border border-pink-500 shadow-xl rounded-3xl'>
					<div className='flex flex-col items-center'>
						<img
							src='Image/owner.jpg'
							alt=''
							className='w-[80%] md:w-full mt-4 mb-4 pt-6 rounded-xl hover:scale-105  transition-all duration-500'
						/>
						<h2 className='text-xl md:text-4xl text-white'>
							Proprietor
						</h2>
						<p className='text-lg md:text-2xl text-white'>
							School Principal
						</p>
					</div>
				</div>
				<div className='font-[San-serif] bg-gray-500 border border-pink-500 shadow-xl rounded-3xl'>
					<div className='flex flex-col items-center'>
						<img
							src='Image/owner.jpg'
							alt=''
							className='w-[50%] md:w-full 
							 mt-4 mb-4 pt-6 rounded-xl hover:scale-105  transition-all duration-500'
						/>
						<h2 className='text-xl md:text-4xl text-white'>
							Proprietor
						</h2>
						<p className='text-lg md:text-2xl text-white'>
							School Principal
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
