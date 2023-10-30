import React, {Component} from 'react';

import SectionsConfig from "./../config/Sections";
const config = SectionsConfig;

class SectionCreator extends Component {
	render() {
		const length = Object.keys(config).length;
		const Sections = [];

		for(let i = 0; i < length; i++) {
			Sections.push(
				<p key={i}>
					<a href={config[`s${i}`].url} className="text-reset footer-text">{config[`s${i}`].title}</a>
				</p>
			);
		}

		return Sections;
	}
}

export default SectionCreator;