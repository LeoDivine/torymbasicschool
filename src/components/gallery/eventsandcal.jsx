import React from "react";

const EventsCalendar = () => {
	return (
		<div className='mt-16'>
			<h2 className='text-3xl font-bold mb-4 font-serif'>
				Events and Calendar
			</h2>
			<p className='pb-8 text-xl font-sans'>
				Stay updated on important school events and dates by
				checking our event calendar.
			</p>
			<a
				href='/events'
				target='_blank'
				rel='noopener noreferrer'
				className='text-white border rounded-full p-4 bg-pink-300 hover:text-gray-800 hover:font-bold mt-2 inline-block w-full md:w-auto'
			>
				View Event Calendar
			</a>
		</div>
	);
};

export default EventsCalendar;
