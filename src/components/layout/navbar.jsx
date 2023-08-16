'use client'
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className='bg-gray-800'>
			<div className='flex items-center justify-between px-4 py-2'>
				<div className='flex items-center'>
					<div className='text-white text-xl'>
						<img
							className='w-16 h-16'
							src='Image/Logo.png'
							alt=''
						/>
					</div>
				</div>
				<div className='hidden md:flex items-center gap-10'>
					<Link href='/' className='text-white'>
						{`Home`}
					</Link>
					<Link href='/about' className='text-white'>
						{`About`}
					</Link>
					<Link href='/gallery' className='text-white'>
						{`Gallery`}
					</Link>
					<Link href='/contact' className='text-white'>
						{`Contact`}
					</Link>
					<Link href='/admission' className='text-white block'>
						<ScrollLink
							to='enrollment-info'
							smooth={true}
							duration={500}
							className='cursor-pointer text-white block'
						>
							{`Admission`}
						</ScrollLink>
					</Link>
				</div>
				<div className='md:hidden flex items-center'>
					<button
						className='text-white focus:outline-none mb-4'
						onClick={toggleNavbar}
					>
						{isOpen ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 6h16M4 12h16m-7 6h7'
								/>
							</svg>
						)}
					</button>
				</div>
			</div>
			<div
				className={`flex flex-col gap-10 text-center overflow-hidden uppercase md:hidden transition-all ${
					isOpen ? "h-72 z-10" : "h-0 z-0 "
				} duration-500 ease-in-out`}
			>
				<Link href='/' className='text-white block'>
					{`Home`}
				</Link>
				<Link href='/about' className='text-white block'>
					{`About`}
				</Link>
				<Link href='/gallery' className='text-white block'>
					{`Gallery`}
				</Link>
				<Link href='/contact' className='text-white block'>
					{`Contact`}
				</Link>
				<Link href='/admission' className='text-white block'>
					<ScrollLink
						to='enrollment-info'
						smooth={true}
						duration={500}
						className='cursor-pointer text-white block'
					>
						{`Admission`}
					</ScrollLink>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
