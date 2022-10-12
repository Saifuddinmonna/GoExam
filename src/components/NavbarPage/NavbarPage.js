import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
const NavbarPage = () => {
	return (
		<div>
			<Navbar bg="primary" variant="dark">
				<Container className="flex justify-around">
					<Navbar.Brand href="/">GoExam</Navbar.Brand>
					<Nav className=" ">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/topics">Topics</Nav.Link>
						<Nav.Link href="/Blog">Blog</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavbarPage;
