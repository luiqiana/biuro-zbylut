import React, {Component} from 'react';

import Main from "./index/Main";
import Services from "./index/Services";
import About from "./index/About";

class Index extends Component {
	render() {
		return(
			<>
				<Main />
				<Services />
				<About />
			</>
		);
	}
}

export default Index;