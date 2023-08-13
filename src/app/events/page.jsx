'use client'
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import SocialLinks from "@/components/events/socialicons";

const EventsCalendarPage = () => {
	const events = [
		// Add your events data here
		{ title: "Event 1", date: "2023-08-10" },
		{ title: "Event 2", date: "2023-08-15" },
		{ title: "Children's Day", date: "2024-05-29" },
		// ...
	];

	const dayCellDidMount = (info) => {
		// Customize the style of the active day cell
		if (info.date.getDate() === new Date().getDate()) {
			info.el.style.backgroundColor = "#6B7280"; // Set your desired background color
		}
	};

	return (
		<div className='bg-gray-300 mx-auto p-8'>
			<div className='w-full mb-4'>
				<h2 className='text-3xl font-bold mb-4 font-serif'>
					Event Calendar
				</h2>
				<FullCalendar
					plugins={[dayGridPlugin]}
					initialView='dayGridMonth'
					events={events}
					dayCellDidMount={dayCellDidMount}
				/>
			</div>
			<div className='mt-8'>
				<SocialLinks />
			</div>
		</div>
	);
};

export default EventsCalendarPage;
