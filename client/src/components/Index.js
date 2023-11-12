import React, {Component} from 'react';

import Main from "./index/Main";
import Services from "./index/Services";
import About from "./index/About";
import Accountancy from "./index/Accountancy";
import Other from "./index/Other";

class Index extends Component {
	render() {
		return(
			<>
				<Main />
				<Services />
				<About />
				<Accountancy />
				<Other />
			</>
		);
	}
}

export default Index;