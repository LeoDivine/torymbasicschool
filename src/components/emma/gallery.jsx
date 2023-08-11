import React from 'react'
import Card from './card'

const CardList= () => {
  return (
    
<div className='w-[100%] flex flex-wrap justify-around '>
	<Card
		image='Image/card1.jpg'
		name={"Emeka Joshua"}
		position={"Engineer"}
	/>
	<Card
		image='Image/card3.jpg'
		name={"Emeka Joshua"}
		position={"Engineer"}
	/>
	<Card
		image='Image/card5.jpg'
		name={"Emeka Joshua"}
		position={"Engineer"}
	/>
	<Card
		image='Image/card4.jpg'
		name={"Emeka Joshua"}
		position={"Engineer"}
	/>
	<Card
		image='Image/card2.jpg'
		name={"Emeka Joshua"}
		position={"Engineer"}
	/>
	<Card
		image='Image/card6.jpg'
		name={"Emeka Joshua"}
		position={"Engineer"}
	/>
	<Card
		image='Image/card7.jpg'
		name={"Emeka Joshua"}
		position={"Engineer"}
	/>
</div>
  )
}

export default CardList