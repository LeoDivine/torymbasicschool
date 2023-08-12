'use client'
import React, { useState } from "react";
import { ACCORDIONS } from "../../../utils/const";
import AccordionItem from "./accordionitem";

const Accordion = () => {
	const [open, setOpen] = useState(null); 

	const toggle = (index) => {
		setOpen(open === index ? null : index); 
	};

	return (
		<div className='bg-primary h-full'>
			<h1 className='text-center text-2xl font-bold py-6'>
				Frequently Asked Questions
			</h1>
			<div className='max-w-[800px] lg:mx-10 md:mx-10 sm:mx-auto'>
				{ACCORDIONS.map((Accordion, index) => (
					<AccordionItem
						key={index}
						open={index === open}
						title={Accordion.title}
						description={Accordion.description}
						toggle={() => toggle(index)}
					/>
				))}
			</div>
		</div>
	);
};

export default Accordion;
