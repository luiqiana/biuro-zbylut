import React, {Component} from 'react';

import Nav from "react-bootstrap/Nav";

import SectionsConfig from "./../config/Sections";
const config = SectionsConfig

class SectionCreator extends Component {
	render() {
		const length = Object.keys(config).length;
		const Sections = [];

		for(let i = 0; i < length; i++) {
			Sections.push(
				<Nav.Link key={i} href={config[`s${i}`].url} id={config[`s${i}`].name} className={i === length - 1 ? "" : "me-3"}>{config[`s${i}`].title}</Nav.Link>
			);
		}

		return Sections;
	}
}

export default SectionCreator;