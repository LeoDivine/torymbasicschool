import React from 'react'
import { Accodians } from '../../../utils/const';

const Accordion = () => {
  return (
		<div className='bg-gray-800 h-96 grid place-items-center'>
			<div className='px-[40px] max-w-[800px]'>
				 {Accodians.map((data, index) => {
					return null
				})} 
			</div>
		</div>
  );
}

export default Accordion