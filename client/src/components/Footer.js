import React, {Component} from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SectionCreator from "./footer/SectionCreator";

class Footer extends Component {
	render() {
		return(
			<footer className="bg-light text-center text-lg-start text-muted pb-2 pt-2">
				<Container>
					<Row className="mt-3 px-5">
						<Col md={4} className="mx-auto mb-md-0 mb-4">
							<h6 className="text-uppercase fw-bold mb-4">Biuro Rachunkowe Dorota Życińska</h6>
							<p>Dostosowując się do potrzeb klientów świadczymy usługi w siedzibie klienta poprzez konsultacje oraz dostarczanie i odbiór dokumentów.</p>
						</Col>
						<Col md={4} className="mx-auto mb-md-0 mb-4">
							<h6 className="text-uppercase fw-bold mb-4">Strona</h6>
							<SectionCreator />
						</Col>
						<Col md={4} className="mx-auto mb-md-0 mb-4">
							<h6 className="text-uppercase fw-bold mb-4">Kontakt</h6>
							<p>
								<i className="bi bi-envelope-fill me-3" />
								<a href="mailto:biuro@biuro-zbylut.pl" className="text-reset footer-text">biuro@biuro-zbylut.pl</a>
							</p>
							<p>
								<i className="bi bi-telephone-fill me-3" />
								<a href="tel:+48338542086" className="text-reset footer-text">+48 33 854 20 86</a>
							</p>
							<div>
								<i className="bi bi-house me-3" />
								<h6 className="d-inline-block text-uppercase fw-bold">Adres</h6><br />
								Biuro Rachunkowe Dorota Życińska<br />
								ul. Sikorskiego 24<br />
								42-450 Ustroń<br />
							</div>
						</Col>
					</Row>
					<div className="text-center p-4 footer-copyright">
						&copy;<span>{new Date().getFullYear()}</span> Copyright:
						<a href="/" className="text-reset fw-bold footer-text-copyright"> biuro-zbylut.pl</a>
					</div>
				</Container>
			</footer>
		);
	}
}

export default Footer;