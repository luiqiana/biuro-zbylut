import React, {Component}  from "react";

import Container from "react-bootstrap/Container";

class Accountancy extends Component {
	render() {
		return(
			<section id="accountancy" className="p-4">
				<Container>
					<div className="header-container">
						<h1>Księgowość</h1>
						<div className="divider" />
					</div>
					<ul className="text-container mt-3 right">
						<h4>Pełna księgowość (księga handlowa):</h4>
						<li>opracowywanie planu kont</li>
						<li>sprawdzanie dokumentów źródłowych pod kątem ustawy o rachunkowości</li>
						<li>prowadzenie rejestrów VAT</li>
						<li>tworzenie deklaracji CIT, PIT, VAT oraz składanie do Urzędów Skarbowych (również elektronicznie)</li>
						<li>prowadzenie dodatkowych ewidencji, wyposażenia, środków trwałych</li>
						<li>sporządzanie sprawozdań: bilansu, rachunek zysków i strat, rachunek przepływów pieniężnych (Cash flow)</li>
						<li>rozliczanie operacji na bankowych rachunkach złotówkowych oraz walutowych</li>
						<li>rozliczanie transakcji międzynarodowych (deklaracje VAT-UE, import-eksport poza kraje Unii Europejskiej)</li>
						<li>odbiór i dostarczanie dokumentów do podatnika</li>
					</ul>
					<ul className="text-container mt-4 mt-lg-5 left">
						<h4>Książka przychodów i rozchodów:</h4>
						<li>sprawdzanie dokumentów źródłowych</li>
						<li>prowadzenie rejestrów VAT</li>
						<li>dodatkowe ewidencje: wyposażenia, środki trwałe</li>
						<li>obliczanie zaliczek na podatek dochodowy</li>
						<li>prowadzenie dodatkowych ewidencji, wyposażenia, środków trwałych</li>
						<li>sporządzanie zeznań rocznych, rozliczanie właścicieli</li>
						<li>przekazywanie do Urzędów Skarbowych deklaracji VAT, PIT (również elektronicznie) przygotowywanie przelewów bankowych</li>
						<li>rozliczanie transakcji międzynarodowych (deklaracje VAT-UE, import-eksport poza kraje Unii Europejskiej)</li>
						<li>dostarczanie i odbiór dokumentów z siedziby podatnika</li>
					</ul>
				</Container>
			</section>
		);
	}
}

export default Accountancy;