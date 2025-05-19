import React from "react";
import { Outlet } from "react-router-dom";
import NavbarPage from "../NavbarPage/NavbarPage";
import Footer from '../Footer/Footer';
import './Home.css';

const Home = () => {
	return (
		<div className="page-container"> {/* Wrapper for sticky footer mechanics */}
			<NavbarPage /> {/* Assuming you want the Navbar to be outside the content wrapper but inside the page container */}
			<div className="content-wrapper"> {/* This div helps push footer down */}
				{/* Content rendered by child routes will go into Outlet */}
				<Outlet /> {/* Child routes will render here */}
			</div>
			{/* The Footer is placed outside the content-wrapper but inside the page-container */}
			<Footer />
		</div>
	);
};

export default Home;
