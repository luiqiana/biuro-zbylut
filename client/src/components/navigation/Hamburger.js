import React, {Component} from 'react';

class Hamburger extends Component {
	render() {
		return (
			<>
				<span className="toggler-icon top-bar" />
				<span className="toggler-icon middle-bar" />
				<span className="toggler-icon bottom-bar" />
			</>
		);
	}
}

export default Hamburger;