import React from "react";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const AccordionItem = ({ open, toggle, title, description }) => {
	return (
		<div className='pt-[10px]'>
			<div
				className='bg-gray-800 py-[25px] px-[50px] flex justify-between items-center cursor-pointer rounded-2xl'
				onClick={toggle}
			>
				<p className='text-base text-white font-normal lg:text-lg md:text-lg sm:text-sm '>{title}</p>
				<div className='text-[30px]'>
					{open ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</div>
			</div>
			<Collapse isOpened={open}>
				<div className='bg-primary px-[50px] py-[20px] text-[15px] font-bold'>
					{description}
				</div>
			</Collapse>
		</div>
	);
};

export default AccordionItem;
