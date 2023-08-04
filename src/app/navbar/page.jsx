import Gallery from "@/components/emma/gallery";
import React from "react";

export default function Gallery() {
	return (
		<div className="w-[100%] flex flex-wrap justify-around ">
			<Gallery image="Image/card1.jpg" name={'Emeka Joshua'} position={'Engineer'} />
			<Gallery image="Image/card3.jpg" name={'Emeka Joshua'} position={'Engineer'} />
			<Gallery image="Image/card5.jpg" name={'Emeka Joshua'} position={'Engineer'} />
			<Gallery image="Image/card4.jpg" name={'Emeka Joshua'} position={'Engineer'} />
			<Gallery image="Image/card2.jpg" name={'Emeka Joshua'} position={'Engineer'} />
			<Gallery image="Image/card6.jpg" name={'Emeka Joshua'} position={'Engineer'} />
			<Gallery image="Image/card7.jpg" name={'Emeka Joshua'} position={'Engineer'} />
		</div>
	);
}
