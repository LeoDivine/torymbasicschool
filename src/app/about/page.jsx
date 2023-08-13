import Accordion from "@/components/about/accordion";
import Mission from "@/components/about/missionvision";
import Principal from "@/components/about/principal";
import React from "react";

const About = () => {
	return (
		<div className='pb-4 bg-gray-300'>
			<div className='mx-4 md:mx-24'>
				<h1 className='text-4xl md:text-6xl font-serif pb-6 pt-10'>
					About us
				</h1>
				<p className='text-lg md:text-xl font-sans pb-10'>
					{`Founded in 2021, Tory M Basic School has been providing
					quality early childhood education for four years. Our
					nurturing and stimulating learning environment fosters
					a love for learning, creativity, and critical thinking.
					We celebrate diversity and are committed to empowering
					young minds for a brighter future. With a focus on
					excellence, integrity, and compassion, we continue to
					inspire and shape the leaders of tomorrow.`}
				</p>
			</div>
			<Mission />

			<Principal />

			<Accordion />
		</div>
	);
};

export default About;
