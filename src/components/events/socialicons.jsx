import React from "react";

const SocialLinks = () => {
	return (
		<div className='p-4 cursor-pointer inline-flex items-center gap-4 font-sans rounded-full bg-inherit mx-1.5 text-xl hover:text-gray-100 hover:bg-gray-700 duration-300'>
			<a
				href='https://wa.me/+2347060565838'
				target='_blank'
				rel='noopener noreferrer'
			>
				<img
					src='/Image/whatsapp.png'
					alt='WhatsApp'
					className='w-10 h-10 border rounded-full '
				/>
			</a>
			<a
				href='https://www.instagram.com/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<img
					src='/Image/instagram.png'
					alt='Instagram'
					className='w-10 h-10  border rounded-full '
				/>
			</a>
			<a href='mailto:akhabuevictory427@gmail.com'>
				<img
					src='/Image/email.png'
					alt='Email'
					className='w-10 h-10  border rounded-full'
				/>
			</a>
			<a href='tel:07060565838'>
				<img
					src='/Image/phone.png'
					alt='Phone'
					className='w-6 h-7  border rounded-full '
				/>
			</a>
		</div>
	);
};

export default SocialLinks;
