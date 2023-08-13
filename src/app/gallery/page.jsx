import EventsCalendar from "@/components/gallery/eventsandcal";
import CardList from "@/components/gallery/gallery";
import React from "react";

const Gallery = () => {
	return (
		<div className=' bg-gray-300 mx-auto p-8 '>
			<div>
				<CardList />
			</div>
			<div className='mt-8'>
				<EventsCalendar />
			</div>
		</div>
	);
};

export default Gallery;
