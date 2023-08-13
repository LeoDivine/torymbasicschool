import AdmissionsInfo from "@/components/contact/admissioninfo";
import EmbeddedMap from "@/components/contact/embeddedmap";
import ContactForm from "@/components/contact/form";
import SchoolHours from "@/components/contact/schoolhours";
import React from "react";

const ContactPage = () => {
	return (
		<div className=' bg-gray-300 mx-auto p-8'>
			<h1 className='text-3xl font-bold font-serif'>Contact Us</h1>
			<p className='text-lg font-medium pt-8 font-sans'>{`For Admission and enquiry, please enter your information below.`}</p>
			<div className='grid md:grid-cols-2 gap-8'>
				<div>
					<ContactForm />
				</div>
				<div>
					<EmbeddedMap />
				</div>
			</div>
			<div className='px-4'>
				<SchoolHours />
			</div>
			<div className='px-4'>
				<AdmissionsInfo />
			</div>
		</div>
	);
};

export default ContactPage;
