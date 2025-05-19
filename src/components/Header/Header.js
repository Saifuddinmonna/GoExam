import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ExamSubjects from "../ExamSubjects/ExamSubjects";
import Topics4 from "../ExamSubjects/Topics4";
import Statistics from "../Statistics/Statistics";
import Statisticstable from "../Statistics/Statisticstable";

import "./Header.css";

const Header = () => {
	const navigate = useNavigate();
	const Navigating = () => {
		navigate("/topics");
	};
	return (
		<div className="header-container min-widthheader"> {/* Main container */}
			<div className="banner"> {/* Container for image and overlay */}
				<div className="banner-image-container"> {/* Wrapper for image and overlay */}
					<img
						className="banner-image"
						src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // New modern coding image
						alt="Coding background"
					/>
					<div className="banner-overlay"></div> {/* Optional overlay for text readability */}
					<div className="banner-text">
						<p>
							Come with Us To Learn Code
						</p>
					</div>
				</div>
			</div>
			{/* The Outlet renders content below the banner */}
			<Outlet></Outlet>
		</div>
	);
};

export default Header;
