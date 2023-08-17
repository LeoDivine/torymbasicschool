import React from "react";
import SocialMediaIcons from "../layout/SocialMediaIcons";
import { SocialMedia } from "../../../utils/const";

const AdmissionsInfo = () => {
	return (
		<div className='py-8'>
			<h2 className='text-3xl font-bold mb-4'>
				Admissions Information
			</h2>
			<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
				<div>
					<h3 className='py-4 text-lg font-bold'>
						Contact Admissions Office
					</h3>
					<p>Email: akhabuevictory427@gmail.com</p>
					<p>Phone: (+234) 706-0565-838</p>
				</div>
				<div>
					<h3 className='py-4 text-lg font-bold'>
						Application Deadlines
					</h3>
					<p>Early Decision: November 1</p>
					<p>Regular Decision: January 15</p>
				</div>
				<div>
					<h3 className='py-4 text-lg font-bold'>
						Application Requirements
					</h3>
					<ul className='list-disc list-inside pl-4'>
						<li>Completed Application Form</li>
						<li>Transcripts from Previous School</li>
						<li>Letters of Recommendation</li>
						<li>Essay or Personal Statement</li>
						<li>Standardized Test Scores</li>
					</ul>
				</div>
				<div>
					<h3 className='py-4 text-lg font-bold'>
						School Tours
					</h3>
					<p>
						Join us for a guided school tour every Wednesday
						at 10:00 AM.
					</p>
				</div>
			</div>
			<div className='mt-6'>
				<SocialMediaIcons SocialMedia={SocialMedia} />
			</div>
		</div>
	);
};

export default AdmissionsInfo;
