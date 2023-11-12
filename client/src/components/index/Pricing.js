import React, {Component} from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Pricing extends Component {
	render() {
		return(
			<section id="pricing" className="py-4">
				<Container>
					<Row>
						<Col md={4}>
							<div className="header-container mb-3 mb-md-0">
								<div className="text-container">
									<h1>Cennik</h1>
									<p>Ceny naszych usług zależą od następujących czynników</p>
								</div>
							</div>
						</Col>
						<Col md={8}>
							<div className="list-container">
								<div className="list-element p-2">
									<p>Rodzaju ewidencji księgowych</p>
								</div>
								<div className="list-element p-2 mt-3">
									<p>Formy opodatkowania</p>
								</div>
								<div className="list-element p-2 mt-3">
									<p>Rodzaju i specyfiki działania firmy</p>
								</div>
								<div className="list-element p-2 mt-3">
									<p>Ilości pracowników</p>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}

export default Pricing;