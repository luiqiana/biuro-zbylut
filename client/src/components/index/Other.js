import React, {Component} from	"react";

import Container from "react-bootstrap/Container";

class Other extends Component {
	render() {
		return(
			<section id="other" className="pt-4 pb-2">
				<Container>
					<div className="header-container">
						<h1>Kadry Płace ZUS</h1>
						<div className="divider" />
					</div>
					<ul className="text-container mt-3">
						<li>sporządzanie miesięcznych deklaracji i rozliczeń do ZUS i US, przekaz elektroniczny</li>
						<li>prowadzenie pełnej dokumentacji kadrowej oraz akt osobowych</li>
						<li>listy płac, karty wynagrodzeń</li>
						<li>umowy cywilno-prawne</li>
						<li>dokumenty, zaświadczenia dla pracowników</li>
						<li>informacje o zmianach przepisów</li>
						<li>reprezentowanie klienta przed US i ZUS</li>
					</ul>
				</Container>
			</section>
		);
	}
}

export default Other;