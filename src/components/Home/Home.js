import React from "react";
import { Outlet } from "react-router-dom";
import ExamSubjects from "../ExamSubjects/ExamSubjects";
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
