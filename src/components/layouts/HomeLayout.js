import React from "react";
import { useNavigate } from "react-router-dom";
import NavbarPage from "../NavbarPage/NavbarPage";
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';
import { FaRocket, FaGraduationCap, FaCode, FaUsers } from 'react-icons/fa';
import Home from "../Home/Home";
import { Outlet } from "react-router-dom";
const HomeLayout = () => {
	const navigate = useNavigate();

	const features = [
		{
			icon: <FaRocket />,
			title: "Quick Start",
			description: "Begin your coding journey with our interactive quizzes and challenges"
		},
		{
			icon: <FaGraduationCap />,
			title: "Learn by Doing",
			description: "Practice with real-world coding problems and improve your skills"
		},
		{
			icon: <FaCode />,
			title: "Multiple Topics",
			description: "Explore various programming languages and technologies"
		},
		{
			icon: <FaUsers />,
			title: "Join Community",
			description: "Connect with other learners and share your progress"
		}
	];

	return (
		<div className="min-h-screen flex flex-col">
			<NavbarPage />
         
            <Outlet  />
			<Footer />
		</div>
	);
};

export default HomeLayout;
