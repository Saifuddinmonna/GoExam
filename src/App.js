import logo from "./logo.svg";
import "./App.css";
import { Navbar,Nav,Container  } from "react-bootstrap";

function App() {
	return (
		<div className="App">
			<h2 className="border shadow p-7  text-start ">
				amar assignment start{" "}
			</h2>
			
			<Navbar bg="primary" variant="dark">
				<Container>
					<Navbar.Brand href="#home">Navbar</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
					</Nav>
				</Container>
			</Navbar>

		
		</div>
	);
}

export default App;
