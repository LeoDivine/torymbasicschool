import React from 'react'

const Principal = () => {
  return (
		<>
			<div className='text-center mt-10 text-2xl md:text-4xl font-semibold font-[San-serif]'>
				<h1>School Management</h1>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-4  m-10'>
				<div className='bg-gray-800 p-6 shadow-xl rounded-3xl  flex flex-col items-center'>
					<img
						src='Image/owner.jpg'
						alt='Proprietor'
						className='w-full h-full md:w-50 md:h-50 rounded-xl hover:scale-105 transition-all duration-500'
					/>
					<h2 className='text-xl md:text-3xl text-white font-medium pt-4'>
						Proprietor
					</h2>
					<p className='text-lg md:text-lg text-white font-normal pt-2'>
						School Principal
					</p>
				</div>

				<div className='bg-gray-800 p-6 shadow-xl rounded-3xl  flex flex-col items-center'>
					<img
						src='Image/owner.jpg'
						alt='Proprietor'
						className='w-full h-full md:w-50 md:h-50 rounded-xl hover:scale-105 transition-all duration-500'
					/>
					<h2 className='text-xl md:text-3xl text-white font-medium pt-4'>
						Proprietor
					</h2>
					<p className='text-lg md:text-lg text-white font-normal pt-2'>
						School Principal
					</p>
				</div>

				<div className='bg-gray-800 p-6 shadow-xl rounded-3xl  flex flex-col items-center'>
					<img
						src='Image/owner.jpg'
						alt='Proprietor'
						className='w-full h-full md:w-50 md:h-50 rounded-xl hover:scale-105 transition-all duration-500'
					/>
					<h2 className='text-xl md:text-3xl text-white font-medium pt-4'>
						Proprietor
					</h2>
					<p className='text-lg md:text-lg text-white font-normal pt-2'>
						School Principal
					</p>
				</div>
			</div>
		</>
  );
}

export default Principal