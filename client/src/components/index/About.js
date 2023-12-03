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
							<ul>
								<li>Biuro Rachunkowe Dorota Życińska działa na rynku polskim od 2019r. Założycielką firmy jest mgr Dorota Życińska.  Wieloletnie doświadczenie oraz rzetelną wiedzę zdobyła pracując w biurze jednego z pierwszych doradców podatkowych w Polsce.  Nabyta wiedza na Uniwersytecie Ekonomicznym  w Katowicach oraz  doświadczenie  prowadząc  księgowość dla małych , średnich i dużych przedsiębiorstw pozwala zagwarantować merytoryczny profesjonalizm w świadczonych usługach.</li>
								<li className="mt-2">Wysoko wykwalifikowana kadra pomaga w prowadzeniu kompleksowej obsługi księgowo-kadrowej podmiotów gospodarczych zarówno małych przedsiębiorstw jak i spółek prawa handlowego. Proponujemy Państwu wszechstronną obsługę przedsiębiorstw rozpoczynających swą działalność jak i firm już działających w formie pełnej księgowości, książce przychodów i rozchodów, ryczałcie ewidencjonowanym, karcie podatkowej a wykorzystując całą naszą wiedzę i doświadczenie w każdej sytuacji pomagamy w rozwiązywaniu problemów tak aby wskazać najkorzystniejsze rozwiązanie.</li>
								<li className="mt-2">Wychodząc naprzeciw oczekiwaniom naszych klientów stale śledzimy zmiany przepisów podatkowych, wykorzystujemy nowoczesne narzędzia m.in. rzetelne i funkcjonalne programy komputerowe uznanych marek.</li>
								<li className="mt-2">Dostosowując się do potrzeb klientów świadczymy usługi w siedzibie klienta poprzez konsultacje oraz dostarczanie i odbiór dokumentów.</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}

export default About;