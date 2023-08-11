import { SocialMedia } from '../../../utils/const';
import FooterItems from './ItemsContainer';

import ItemsContainer from './ItemsContainer';
import SocialMediaIcons from './SocialMediaIcons';

const Footer = () => {
	return (
		<footer className='bg-gray-800 text-white'>
			<div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#00000019] py-7'>
				<h1 className='lg:text-3xl text-2xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
					<span className='text-pink-300'>Tory M-</span>Basic
					School
				</h1>

				<div>
					<input
						type='email'
						placeholder='Enter Your Email'
						className=' text-black-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none  '
					/>
					<button
						className='bg-pink-300 hover:bg-pink-500 duration-300 px-5 py-2.5 
                    rounded-md text-white md:w-auto w-full font-[Poppins]'
					>
						Subcribe To Our Newsletter
					</button>
				</div>
			</div>
			<div className='bg-red-500'>
				<FooterItems />
			</div>

			<div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8'>
				<span>
					Copyright Ⓒ 2023 Tory M Basic School. All Rights
					Reserved
				</span>
				<span>Terms . Privacy Policy</span>
				<SocialMediaIcons SocialMedia={SocialMedia} />
			</div>
		</footer>
	);
};
export default Footer;
