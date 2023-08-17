"use client";
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
					<div className='text-xl'>
						<img
							className='w-16 h-16'
							src='Image/Logo.png'
							alt=''
						/>
					</div>
				</div>
				<div className='text-white hidden md:flex items-center gap-10'>
					<Link
						onClick={() => setIsOpen(false)}
						href='/'
					>{`Home`}</Link>
					<Link
						onClick={() => setIsOpen(false)}
						href='/about'
					>{`About`}</Link>
					<Link
						onClick={() => setIsOpen(false)}
						href='/gallery'
					>{`Gallery`}</Link>
					<Link
						onClick={() => setIsOpen(false)}
						href='/contact'
					>{`Contact`}</Link>
					<Link
						onClick={() => setIsOpen(false)}
						href='/#enrollment-info'
					>{`Admission`}</Link>
					<ScrollLink
						to='enrollment-info'
						smooth={true}
						duration={500}
						className='cursor-pointer '
					>
					</ScrollLink> 
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
				className={`text-white absolute z-50 top-0 left-0 w-full mt-[80px] bg-gray-800 flex flex-col gap-10 text-center overflow-hidden uppercase md:hidden transition-all ${
					isOpen ? "h-[100vh]" : "h-0"
				} duration-500 ease-in-out`}
			>
				<Link
					onClick={() => setIsOpen(false)}
					href='/'
					className=''
				>
					{`Home`}
				</Link>
				<Link
					onClick={() => setIsOpen(false)}
					href='/about'
					className=''
				>
					{`About`}
				</Link>
				<Link
					onClick={() => setIsOpen(false)}
					href='/gallery'
					className=''
				>
					{`Gallery`}
				</Link>
				<Link
					onClick={() => setIsOpen(false)}
					href='/contact'
					className=''
				>
					{`Contact`}
				</Link>
				<Link
						onClick={() => setIsOpen(false)}
						href='/#enrollment-info'
					>{`Admission`}</Link>
				<ScrollLink
					to='enrollment-info'
					smooth={true}
					duration={500}
					className='cursor-pointer'
				>
				</ScrollLink>
			</div>
		</nav>
	);
};

export default Navbar;
