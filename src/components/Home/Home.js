import React from "react";
import { Outlet } from "react-router-dom";

import NavbarPage from "../NavbarPage/NavbarPage";


const Home = () => {
	return (
		<div>
			<NavbarPage></NavbarPage>
			
			<Outlet></Outlet>
		</div>
	);
};

export default Home;
