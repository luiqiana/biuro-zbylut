import React, {Component} from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Services extends Component {
	constructor(props) {
		super(props);

		this.resize = this.resize.bind(this);

		this.BigContainerRef = React.createRef();
		this.SectionRef = React.createRef();
		this.BigWrapperRef = React.createRef();
		this.SmallContainerRef = React.createRef();
	}

	componentDidMount() {
		this.resize();

		window.addEventListener("resize", this.resize);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.resize);
	}

	resize() {
		const bigContainerHeight = this.BigContainerRef.current.offsetHeight;
		const bigWrapperWidth = this.BigWrapperRef.current.offsetWidth;

		if(document.getElementsByTagName("body")[0].offsetWidth > 1500) {
			this.SmallContainerRef.current.style.display = "none";
			this.BigContainerRef.current.style.display = "block";
			this.BigContainerRef.current.style.top = `-${bigContainerHeight / 2}px`;
			this.BigContainerRef.current.style.width = `${bigWrapperWidth * 1.5}px`;
			this.SectionRef.current.style.scrollMarginTop = `${(bigContainerHeight / 2) + 70}px`;
		}
		else {
			this.SectionRef.current.style.scrollMarginTop = "70px";
			this.BigContainerRef.current.style.display = "none";
			this.SmallContainerRef.current.style.display = "block";
		}
	}

	render() {
		return (
			<section id="services" ref={this.SectionRef}>
				<div className="big-container p-0" ref={this.BigContainerRef}>
					<div className="big-wrapper p-3" ref={this.BigWrapperRef}>
						<h2>Nasze usługi:</h2>
						<div className="divider" />
						<div className="text-container">
							<h4 className="mt-2">&nbsp;» Usługi księgowe:</h4>
							<div className="subtext-container">
								<h5>&nbsp;&nbsp;- pełna księgowość</h5>
								<h5>&nbsp;&nbsp;- książki przychodów i rozchodów</h5>
							</div>
						</div>
						<div className="text-container mt-3">
							<h4>&nbsp;» Inne:</h4>
							<div className="subtext-container">
								<h5>&nbsp;&nbsp;- kadry</h5>
								<h5>&nbsp;&nbsp;- płace</h5>
								<h5>&nbsp;&nbsp;- ZUS</h5>
							</div>
						</div>
					</div>
				</div>
				<div className="small-container p-3 text-end" ref={this.SmallContainerRef}>
					<Container>
						<div className="header-container">
							<h1>Nasze usługi</h1>
							<div className="divider" />
						</div>
						<div className="text-container mt-3">
							<h4>Usługi księgowe: «</h4>
							<div className="subtext-container">
								<h5>pełna księgowość -&nbsp;</h5>
								<h5>książki przychodów i rozchodów -&nbsp;</h5>
							</div>
						</div>
						<div className="text-container">
							<h4>Inne: «</h4>
							<div className="subtext-container">
								<h5>kadry -&nbsp;</h5>
								<h5>płace -&nbsp;</h5>
								<h5>ZUS -&nbsp;</h5>
							</div>
						</div>
					</Container>

				</div>
			</section>
		);
	}
}

export default Services;