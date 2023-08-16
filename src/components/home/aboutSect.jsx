import React from 'react';
import Card from './sectComp';

export default function AboutSect() {
	return (
		<div className='my-[30px] px-[20px] text-center'>
			<h1 className=' text-[20px] py-6 mt-10 font-bold md:text-[30px] font-serif leading-6'>
				{`A Perfect Learning Environment for Your Kids`}
			</h1>
			<p className='md:text-[30px] font-medium underline font-sans'>{`What We offer`}</p>
			<div className='px-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
				<Card
					cardTitle='Guidance'
					cardImage='/imgsrc/guidance.jpeg'
					cardDisc=' Counseling & guidance services provided to help students explore their interests and plan for their future careers.'
				/>
				<Card
					cardTitle='Small Class Sizes:'
					cardImage='/imgsrc/classroom.png'
					cardDisc=' Small class sizes, which allow for personalized attention and better student-teacher interaction.'
				/>
				<Card
					cardTitle='Technology Integration'
					cardImage='/imgsrc/graduate.png'
					cardDisc=' Learning process, including the use of digital tools, online resources, and e-learning platforms.'
				/>
				<Card
					cardTitle='Safe and Peaceful Environment'
					cardImage='/imgsrc/env.jpg'
					cardDisc='Commitment to providing a safe, inclusive, and supportive environment for all students'
				/>
			</div>
		</div>
	);
}
