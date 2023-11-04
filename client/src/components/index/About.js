import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class About extends Component {
	render() {
		return(
			<section id="about">
				<Container className="pt-2">
					<div className="header-container mb-3">
						<h1 className="text-center text-sm-start">O nas</h1>
						<div className="divider" />
					</div>
					<Row>
						<Col lg={8}>
							<p>&raquo; Biuro Rachunkowe Doradztwo Podatkowe Irena Zbylut działa na rynku polskim od 1994 roku. Założycielką firmy jest Irena Zbylut, która zdobyła wieloletnie doświadczenie oraz rzetelną wiedzę w doradztwie podatkowym licencjonowanym przez Ministerstwo Finansów nr wpisu 00272 jak i usługach księgowych prowadząc pełną księgowość dla małych dużych przedsiębiorstw. Pozwala to zagwarantować merytoryczny profesjonalizm w świadczonych usługach doradczych i księgowych.</p>
							<p>&raquo; Wysoko wykwalifikowana kadra pomaga w prowadzeniu kompleksowej obsługi księgowo-kadrowej podmiotów gospodarczych zarówno małych przedsiębiorstw jak i spółek prawa handlowego. Proponujemy Państwu wszechstronną obsługę przedsiębiorstw rozpoczynających swą działalność jak i firm już działających w formie pełnej księgowości, książce przychodów i rozchodów, ryczałcie ewidencjonowanym, karcie podatkowej a wykorzystując całą naszą wiedzę i doświadczenie w każdej sytuacji pomagamy w rozwiązywaniu problemów tak aby wskazać najkorzystniejsze rozwiązanie.</p>
							<p>&raquo; Wychodząc naprzeciw oczekiwaniom naszych klientów stale śledzimy zmiany przepisów podatkowych, wykorzystujemy nowoczesne narzędzia m.in. rzetelne i funkcjonalne programy komputerowe uznanych marek.</p>
							<p>&raquo; Dostosowując się do potrzeb klientów świadczymy usługi w siedzibie klienta poprzez konsultacje oraz dostarczanie i odbiór dokumentów.</p>
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}

export default About;