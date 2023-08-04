import Gallery from "@/components/emma/page";
import React from "react";

export default function Home() {
	return (
		<div className="w-[100%] flex flex-wrap justify-around ">
			<Gallery image="Image/card1.jpg" />
			<Gallery image="Image/card3.jpg" />
			<Gallery image="Image/card5.jpg" />
			<Gallery image="Image/card4.jpg" />
			<Gallery image="Image/card2.jpg" />
			<Gallery image="Image/card6.jpg" />
			<Gallery image="Image/card7.jpg" />
		</div>
	);
}
