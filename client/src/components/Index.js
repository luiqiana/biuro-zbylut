import React, {Component} from 'react';

import Main from "./index/Main";
import About from "./index/About";

class Index extends Component {
	render() {
		return(
			<>
				<Main />
				<About />
			</>
		);
	}
}

export default Index;