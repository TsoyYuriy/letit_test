import React from 'react'
import AccordionBlock from '../AccordionBlock/AccordionBlock'
import Promo from '../Promo/Promo'
import './home.css'

const Home = () => {
	return (
		<div className='home'>
			<Promo/>
			<AccordionBlock/>
		</div>
	)
}

export default Home
