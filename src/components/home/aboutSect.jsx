import React from 'react';
import Card from './sectComp';

export default function AboutSect() {
	return (
		<div className='my-[30px] h-screen px-[20px] text-center'>
			<h1 className=' text-[30px] pt-6 font-bold md:text-[40px] font-serif'>
				A Perfect Learning Environment for Your Kids
			</h1>
			<p className='md:text-[30px] font-sans'>What We offer</p>
			<div className='px-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
				<Card
					cardTitle='Guidance'
					cardImage='/imgsrc/guidance.jpeg'
				/>
				<Card
					cardTitle='Character Development'
					cardImage='/imgsrc/characterdev.webp' 
				/>
				<Card
					cardTitle='Interesting Classroom'
					cardImage='/imgsrc/interestingclass.webp'
				/>
				<Card
					cardTitle='Peaceful Environment'
					cardImage='/imgsrc/env.jpg'
				/>
				<Card
					cardTitle='Interesting Classroom'
					cardImage='/imgsrc/interestingclass.webp'
				/>
				<Card
					cardTitle='Peaceful Environment'
					cardImage='/imgsrc/env.jpg'
				/>
			</div>
		</div>
	);
}
