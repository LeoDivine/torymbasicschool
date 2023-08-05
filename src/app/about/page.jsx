import Gallery from '@/components/emma/gallery'
import React from 'react'

const About = () => {
  return (
    <div className="w-full flex flex-wrap gap-5 py-10 justify-around">
			<Gallery image="Image/card1.jpg" name={'Emeka Joshua'} position={'Engineer'} />
			<Gallery image="Image/card3.jpg" name={'Emeka Joshua'} position={'Engineer'} />
			<Gallery image="Image/card5.jpg" name={'Emeka Joshua'} position={'Engineer'} />
			<Gallery image="Image/card4.jpg" name={'Emeka Joshua'} position={'Engineer'} />
			<Gallery image="Image/card2.jpg" name={'Emeka Joshua'} position={'Engineer'} />
			<Gallery image="Image/card6.jpg" name={'Emeka Joshua'} position={'Engineer'} />
			<Gallery image="Image/card7.jpg" name={'Emeka Joshua'} position={'Engineer'} />
			<Gallery image="Image/card8.jpg" name={'Emeka Joshua'} position={'Engineer'} />
		</div>
  )
}

export default About