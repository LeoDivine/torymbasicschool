import React from "react";

const SchoolHours = () => {
	return (
		<div className='py-16'>
			<h2 className='text-3xl font-bold mb-4'>School Hours</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
				<div>
					<h3 className='py-4 text-lg font-bold'>
						Monday - Friday
					</h3>
					<p>Classes Start: 7:30 AM</p>
					<p>Classes End: 2:00 PM</p>
				</div>
				<div>
					<h3 className='py-4 text-lg font-bold'>Saturday</h3>
					<p>Classes Start: 9:00 AM</p>
					<p>Classes End: 12:00 PM</p>
				</div>
				<div>
					<h3 className='py-4 text-lg font-bold'>Sunday</h3>
					<p>Closed</p>
				</div>
				<div>
					<h3 className='py-4 text-lg font-bold'>
						Holidays & Breaks
					</h3>
					<p>{`New Year's Day: January 1`}</p>
					<p>{`Spring Break: March 15 - 19`}</p>
					<p>{`Summer Break: June 1 - August 31`}</p>
				</div>
			</div>
		</div>
	);
};

export default SchoolHours;
