import React, {Component} from "react";

import BAlert from 'react-bootstrap/Alert';

import {AlertText} from './AlertText';

class Alert extends Component {
	constructor(props) {
		super(props);

		this.state = {
			type: "",
			show: false
		};
	}

	componentDidMount() {
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = () => {
		this.setState({
			show: false
		});
	}

	render() {
		let type = "failed";
		let variant = "danger";
		let icon = "exclamation-triangle";
		let text = "";

		if(this.state.type === "true") {
			type = "success";
			variant = "success";
			icon = "check-circle";
			text = AlertText.success;
		}
		else if(this.state.type === "notuser") {
			type = "notuser";
			variant = "warning";
			icon = "info-circle";
			text = AlertText.notuser;
		}
		else if(this.state.type === "false") {
			type = "failed";
			variant = "danger";
			icon = "exclamation-triangle";
			text = AlertText.failed;
		}

		return(
			<BAlert key={1} variant={variant} className={`position-fixed contact-alert contact-alert-${type} ${this.state.show ? "contact-alert-active" : ""}`}>
				<button type="button" className="btn-close contact-alert-close" aria-label="Close alert" onClick={this.handleClick} />
				<i className={`bi bi-${icon} display-inline-block pe-1`} />
				{text}
			</BAlert>
		);
	}
}

export default Alert;