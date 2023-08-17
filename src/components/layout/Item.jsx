import Link from 'next/link';
import React from 'react';

const Item = ({ links, title }) => {
	return (
		<ul>
			<h1 className='mb-1 font-semibold font-serif'>{title}</h1>
			{links.map((link, i) => (
				<li key={i}>
					<Link
						className='font-sans font-meduim text-gray-400 hover:text-pink-300 duration-300 text-sm cursor-pointer leading-6'
						href={link.link}
					>
						{link.name}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Item;
