import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './layout.css'

const Layout = () => {
	return (
		<div className='layout'>
			<Header/>
			
			<main>
				<Outlet/>
			</main>

			<Footer/>
		</div>
	)
}

export default Layout
