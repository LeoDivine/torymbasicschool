'use client'
import React, { useState } from "react";


const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
		grade: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		console.log(formData);
	};

	return (
		<div className='max-w-md '>
			<form onSubmit={handleSubmit}>
				<div className='flex py-6 gap-6'>
					<div className='flex-1 font-bold'>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							id='name'
							name='name'
							value={formData.name}
							onChange={handleChange}
							className='w-full border p-2 rounded'
							required
						/>
					</div>
					<div className='flex-1 font-bold'>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							id='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							className='w-full border p-2 rounded'
							required
						/>
					</div>
				</div>
				<div className=' py-2 font-bold'>
					<label htmlFor='subject'>{`Subject`}</label>
					<input
						type='text'
						id='subject'
						name='subject'
						value={formData.subject}
						onChange={handleChange}
						className='w-full border p-2 rounded'
						required
					/>
				</div>
				<div className="className=' font-bold py-2 '">
					<label htmlFor='message'>{`Message`}</label>
					<textarea
						id='message'
						name='message'
						value={formData.message}
						onChange={handleChange}
						className='w-full h-52 border py-2 rounded'
						required
					/>
				</div>
				<div className="className=' py-1 font-bold">
					<label htmlFor='grade'>{`Student's Grade/Class`}</label>
					<input
						type='text'
						id='grade'
						name='grade'
						value={formData.grade}
						onChange={handleChange}
						className='w-full border py-2 rounded'
					/>
				</div>
				<button
					type='submit'
					className='bg-pink-400 text-white px-4 py-2 rounded mt-4'
				>
					{`Submit`}
				</button>
			</form>
		</div>
	);
};

export default ContactForm;


