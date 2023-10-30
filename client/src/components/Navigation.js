import React, {Component} from 'react'

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Hamburger from "./navigation/Hamburger";
import SectionCreator from "./navigation/SectionCreator";

class Navigation extends Component {
	render() {
		return(
			<Navbar className="py-0 px-2" bg="light" expand="lg" sticky="top" id="navbartop">
				<div className="navbar-fill d-none d-xxl-block" />
				<Navbar.Brand className="ms-0">
					Biuro rachunkowe<br />
					Dorota Życińska
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" className="d-flex d-lg-none flex-column justify-content-around">
					<Hamburger />
				</Navbar.Toggle>
				<Navbar.Collapse>
					<Nav className="ms-auto">
						<SectionCreator />
					</Nav>
				</Navbar.Collapse>
				<div className="navbar-fill d-none d-xxl-block" />
			</Navbar>
		);
	}
}

export default Navigation;