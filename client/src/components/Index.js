import React, {Component} from 'react';

import Main from "./index/Main";
import Services from "./index/Services";
import About from "./index/About";
import Accountancy from "./index/Accountancy";
import Other from "./index/Other";
import Pricing from "./index/Pricing";
import Contact from "./index/Contact";

class Index extends Component {
	render() {
		return(
			<>
				<Main />
				<Services />
				<About />
				<Accountancy />
				<Other />
				<Pricing />
				<Contact />
			</>
		);
	}
}

export default Index;