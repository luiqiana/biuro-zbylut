import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class E404 extends Component {
	render() {
		return(
			<section id="error">
				<Container className="h-100">
					<Row className="h-100">
						<Col md={6} className="d-none d-md-block">
							<div className="img-container h-100">
								<img src={require("../../imgs/error/404.webp")} alt="Błąd" />
							</div>
						</Col>
						<Col md={6} className="h-100">
							<div className="text-container h-100">
								<div className="text-wrapper">
									<div className="header-container">
										<h1>Wystąpił błąd 404</h1>
									</div>
									<div className="subtext-container">
										<h4>Jeśli przekierował Cię tu któryś z odnosników zgłoś to poprzez nasz <a href="/#contact">formularz kontaktowy</a> lub na maila <a href="mailto:biuro@biuro-zbylut.pl">biuro@biuro-zbylut.pl</a></h4>
									</div>
									<div className="button-container">
										<button type="button" className="btn btn-outline-danger" onClick={() => window.location.href="/"}>Powrót na stronę główna</button>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}

export default E404;