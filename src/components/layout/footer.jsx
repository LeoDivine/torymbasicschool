import { SocialMedia } from "../../../utils/const";
import FooterItems from "./ItemsContainer";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
	return (
		<footer className='bg-gray-800 text-white'>
			<div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-basic py-7'>
				<h1 className='lg:text-3xl text-2xl md:mb-0 mb-6 lg:leading-normal font-semibold font-serif md:w-2/5'>
					<span className='text-pink-300'>{`Tory M-`}</span>{`Basic
					School`}
				</h1>

				<div className='mt-6 md:mt-0'>
					<div className='flex flex-col md:flex-row items-center font-sans'>
						<input
							type='email'
							placeholder='Enter Your Email'
							className='text-black sm:w-72 w-full sm:mr-5 mr-1 mb-4  py-2.5 rounded px-2 focus:outline-none'
						/>
						<button className='bg-pink-400 hover:bg-pink-500 duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-full md:mt-0 mt-2 '>
							{`Subscribe To Our Newsletter`}
						</button>
					</div>
				</div>
			</div>
			<FooterItems />
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 font-bold font-sans gap-10 text-center pt-2 text-gray-400 text-sm pb-8 px-4'>
				<span className='pl-2'>
					{`Copyright Ⓒ 2023 Tory M Basic School. All Rights
					Reserved`}
				</span>
				<span>{`Made by WebSync`}</span>
				
				
				<SocialMediaIcons SocialMedia={SocialMedia} />
			</div>
		</footer>
	);   
};

export default Footer;
