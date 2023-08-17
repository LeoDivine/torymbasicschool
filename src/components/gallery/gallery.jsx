import React from "react";
import Card from "./card";

const CardList = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
			<Card
				image='/Image/card1.jpg'
				// name={"Emeka Joshua"}
				// position={"Engineer"}
			/>
			<Card
				image='/Image/card3.jpg'
				// name={"Emeka Joshua"}
				// position={"Engineer"}
			/>
			<Card
				image='/Image/card5.jpg'
				// name={"Emeka Joshua"}
				// position={"Engineer"}
			/>
			<Card
				image='/Image/card4.jpg'
				// name={"Emeka Joshua"}
				// position={"Engineer"}
			/>
			<Card
				image='/Image/card2.jpg'
				// name={"Emeka Joshua"}
				// position={"Engineer"}
			/>
			<Card
				image='/Image/card6.jpg'
				// name={"Emeka Joshua"}
				// position={"Engineer"}
			/>
			<Card
				image='/Image/card7.jpg'
				// name={"Emeka Joshua"}
				// position={"Engineer"}
			/>
		</div>
	);
};

export default CardList;
