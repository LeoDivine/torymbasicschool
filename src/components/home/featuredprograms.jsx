import Image from "next/image";
import React from "react";

const FeaturedPrograms = () => {
	const programs = [
		{
			title: "Early Literacy",
			icon: "/imgsrc/earlyliteracy.png",
			description:
				"Our engaging literacy program lays the foundation for strong reading and language skills.",
		},
		{
			title: "Creative Arts",
			icon: "/imgsrc/creativearts.png",
			description:
				"Explore the world of creativity through arts, music, and imaginative expression.",
		},
		{
			title: "Physical Education",
			icon: "/imgsrc/physicaleducation.png",
			description:
				"Stay active and healthy with our dynamic physical education activities and sports.",
		},
		{
			title: "Character Development",
			icon: "/imgsrc/characterdevelopment.png",
			description:
				"Nurture values, ethics, and empathy in our comprehensive character development program.",
		},
	];

	return (
		<div className='py-10'>
			<div className='max-w-6xl mx-auto px-4'>
				<h2 className='text-3xl font-bold font-serif text-center mb-8'>
					{`Featured Programs`}
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{programs.map((program, index) => (
						<div
							key={index}
							className='bg-gray-300 p-6 rounded-lg shadow-xl text-center'
						>
							<Image
								width={64}
								height={64}
								src={program.icon}
								alt={program.title}
								className='w-16 h-16 mx-auto mb-4'
							/>
							<h3 className='text-lg font-serif font-bold mb-2'>
								{program.title}
							</h3>
							<p className='text-gray-700 font-semibold font-sans '>
								{program.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FeaturedPrograms;
