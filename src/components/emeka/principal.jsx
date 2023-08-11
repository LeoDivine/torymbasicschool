import React from 'react'

const Principal = () => {
  return (
		<>
			<div className='text-center mt-10 text-2xl md:text-4xl font-semibold font-[San-serif]'>
				<h1>School Management</h1>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-4 m-4'>
				<div className='font-[San-serif] bg-gray-500 border border-pink-500 shadow-xl rounded-3xl'>
					<div className='flex flex-col items-center'>
						<img
							src='Image/owner.jpg'
							alt=''
							className='w-[80%] md:w-full mt-4 mb-4 pt-6 rounded-xl hover:scale-105  transition-all duration-500'
						/>
						<h2 className='text-xl md:text-4xl text-white'>
							Proprietor
						</h2>
						<p className='text-lg md:text-2xl text-white'>
							School Principal
						</p>
					</div>
				</div>
				<div className='font-[San-serif] bg-gray-500 border border-pink-500 shadow-xl rounded-3xl'>
					<div className='flex flex-col items-center'>
						<img
							src='Image/owner.jpg'
							alt=''
							className='w-[80%] md:w-full mt-4 mb-4 pt-6 rounded-xl hover:scale-105  transition-all duration-500'
						/>
						<h2 className='text-xl md:text-4xl text-white'>
							Proprietor
						</h2>
						<p className='text-lg md:text-2xl text-white'>
							School Principal
						</p>
					</div>
				</div>
				<div className='font-[San-serif] bg-gray-500 border border-pink-500 shadow-xl rounded-3xl'>
					<div className='flex flex-col items-center'>
						<img
							src='Image/owner.jpg'
							alt=''
							className='w-[50%] md:w-full 
							 mt-4 mb-4 pt-6 rounded-xl hover:scale-105  transition-all duration-500'
						/>
						<h2 className='text-xl md:text-4xl text-white'>
							Proprietor
						</h2>
						<p className='text-lg md:text-2xl text-white'>
							School Principal
						</p>
					</div>
				</div>
			</div>
		</>
  );
}

export default Principal