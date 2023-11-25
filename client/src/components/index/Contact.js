import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Map from './contact/Map';
import ContactForm from './contact/ContactForm';

class Contact extends Component {
	render() {
		return(
			<section id="contact" className="p-4">
				<div className="header-container text-center">
					<h1>Kontakt</h1>
					<div className="divider" />
				</div>
				<Container fluid className="mt-3">
					<Row>
						<Col md={6} className="p-0 ps-0 ps-md-2 mt-3 mt-md-0 order-1 order-md-0">
							<div className="section-container p-3">
								<div className="subheader-container text-center">
									<h1>Formularz</h1>
									<div className="divider" />
								</div>
								<div className="form-container mt-3">
									<ContactForm />
								</div>
							</div>
						</Col>
						<Col md={6} className="p-0 ps-0 ps-md-2 mt-0 order-0 order-md-1">
							<div className="section-container p-3">
								<div className="subheader-container text-center">
									<h1>Mapa</h1>
									<div className="divider" />
								</div>
								<div className="map-container mt-3">
									<Map />
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}

export default Contact;