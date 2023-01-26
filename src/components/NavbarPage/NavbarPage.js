import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavbarPage.css";

const NavbarPage = () => {
	return (
		<div className=" min-widthheader">
			<Navbar bg="primary" variant="dark">
				<Container className="flex justify-around font-size-aut">
					<Navbar.Brand href="/">GoExam</Navbar.Brand>
					<Nav className=" ">
						<NavLink
							className="text-white p-2 mr-2 text-decoration-none active-color"
							to="/">
							Home
						</NavLink>
						<NavLink
							className="text-white p-2 mr-2 text-decoration-none active-color"
							to="/topics">
							Topics
						</NavLink>
						<NavLink
							
							className="text-white p-2 mr-2 text-decoration-none active-color"
							to="/statistics">
							Statistics
						</NavLink>
						<NavLink
							className="text-white p-2 mr-2 text-decoration-none active-color"
							to="/Blog">
							Blog
						</NavLink>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavbarPage;
