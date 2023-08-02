import React from "react";

const SocialMediaIcons = ({ SocialMedia }) => {
	return (
		<div className='text-teal-500'>
			{SocialMedia.map((SocialMedia) => (
				<span
					key={SocialMedia.name}
					className='p-2 cursor-pointer inline-flex items-center  rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-pink-300 duration-300'
				>
					{SocialMedia.icon}
				</span>
			))}
		</div>
	);
};

export default SocialMediaIcons;
