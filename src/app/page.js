import React from "react";
import Landingpagecomp from "../components/home/landingpagecomp.jsx";
import AboutSect from "@/components/home/aboutSect.jsx";
import FeaturedPrograms from "@/components/home/featuredprograms.jsx";
import Carousel from "@/components/home/carousel.jsx";
import EnrollmentInformation from "@/components/home/enrollmentinfo.jsx";

export default function page() {
	return (
		<div className='pb-4  bg-gray-300'>
			<div>
				<Landingpagecomp />
			</div>
			<div className='px-6 pt-8'>
				<Carousel />
			</div>
			<div className='px-6'>
				<AboutSect />
			</div>
			<div className='px-6'>
				<FeaturedPrograms />
			</div>
			<div className='px-10'>
				<EnrollmentInformation />
			</div>
		</div>
	);
}
