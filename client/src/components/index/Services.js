import React, {Component} from "react";

import Container from "react-bootstrap/Container";

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
						<ul className="text-container">
							<li className="header mt-2">Usługi księgowe:</li>
							<li className="point">pełna księgowość</li>
							<li className="point">książki przychodów i rozchodów</li>
						</ul>
						<ul className="text-container mt-3">
							<li className="header mt-2">Inne:</li>
							<li className="point">kadry</li>
							<li className="point">płace</li>
							<li className="point">ZUS</li>
						</ul>
					</div>
				</div>
				<div className="small-container p-3 text-end" ref={this.SmallContainerRef}>
					<Container>
						<div className="header-container">
							<h1>Nasze usługi</h1>
							<div className="divider" />
						</div>
						<ul className="text-container mt-3">
							<li className="header">Usługi księgowe:</li>
							<li className="point">pełna księgowość</li>
							<li className="point">książki przychodów i rozchodów</li>
						</ul>
						<ul className="text-container">
							<li className="header">Inne:</li>
							<li className="point">kadry</li>
							<li className="point">płace</li>
							<li className="point">ZUS</li>
						</ul>
					</Container>
				</div>
			</section>
		);
	}
}

export default Services;