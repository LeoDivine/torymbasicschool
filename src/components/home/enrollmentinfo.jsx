import Link from "next/link";
import React from "react";

const EnrollmentInformation = () => {
	return (
		<section id='enrollment-info' className=' py-10'>
			<div className='mx-auto'>
				<h2 className='text-3xl font-serif font-bold mb-4'>
					{`Enrollment Information`}
				</h2>
				<p className='text-lg font-semibold font-sans mb-8'>
					{`We're excited to welcome new students to Tory M Basic
					School! Follow the steps below to enroll your child.`}
				</p>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					<div>
						<h3 className='text-xl font-semibold font-serif mb-2'>
							{`Enrollment Steps:`}
						</h3>
						<ol className='list-decimal list-inside font-semibold font-sans'>
							<li>
								{`Complete the enrollment application
								form.`}
							</li>
							<li>
								{`Gather required documents, including
								birth certificate, immunization records,
								and proof of residence.`}
							</li>
							<li>
								{`Submit the completed application and
								documents to the school office.`}
							</li>
							<li>{`Attend an orientation session.`}</li>
							<li>{`Pay the enrollment fee.`}</li>
						</ol>
						<p className='mt-4 font-sans font-semibold'>
							{`Enrollment Dates: September 10th 2023`}
						</p>
					</div>
					<div>
						<h3 className='text-xl font-semibold mb-2'>
							{`Enrollment Packet:`}
						</h3>
						<p className='mb-4 font-sans font-semibold'>
							{`Download our enrollment packet for detailed
							information and forms:`}
						</p>
						<Link
							href='/enrollment-packet.pdf'
							className='bg-pink-400 text-white py-2 px-4 rounded hover:bg-pink-500 transition'
							download
						>
							{`Download Enrollment Packet`}
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EnrollmentInformation;
