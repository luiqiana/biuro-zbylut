import React, {Component} from 'react';

import ReCAPTCHA from "react-google-recaptcha";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import FormValidation from './form/validation/FormValidation';
import ErrorsCreator from './form/ErrorsCreator';

class ContactForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			surname: "",
			countrycode: "",
			phone: "",
			email: "",
			company: "",
			terms: false,
			message: "",
			captcha: "notverified",
			nameHighlight: false,
			surnameHighlight: false,
			countrycodeHighlight: false,
			phoneHighlight: false,
			emailHighlight: false,
			termsHighlight: false,
			messageHighlight: false,
			loader: false,
			errors: <></>
		};

		this.recaptchaRef = React.createRef();
	}

	componentDidMount() {
		this.changeInput = this.changeInput.bind(this);
		this.changeTerms = this.changeTerms.bind(this);
		this.changeCaptcha = this.changeCaptcha.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.validateForm = this.validateForm.bind(this);
	}

	changeInput(e) {
		this.setState({
			[((e.target.name).slice(11, -5)).toLowerCase()]: e.target.value
		});
	}

	changeTerms(e) {
		this.setState({
			terms: e.target.checked
		});
	}

	changeCaptcha = (value) => {
		this.setState({
			captcha: value === null ? "notverified" : value
		}, () => {
			if(this.state.captcha !== "notverified") this.submitForm();
		});
	}

	validateForm = () => {
		this.setState({
			nameHighlight: false,
			surnameHighlight: false,
			countrycodeHighlight: false,
			phoneHighlight: false,
			emailHighlight: false,
			termsHighlight: false,
			messageHighlight: false,
			errors: <></>
		});

		const inputs = {
			name: this.state.name,
			surname: this.state.surname,
			countrycode: this.state.countrycode,
			phone: this.state.phone,
			email: this.state.email,
			company: this.state.company,
			terms: this.state.terms,
			message: this.state.message,
			captcha: this.state.captcha
		}

		const validate = FormValidation.validateForm(inputs);

		if(!validate.valid) {
			for(let i = 0; i < validate.highlight.length; i ++) {
				this.setState({
					[validate.highlight[i] + "Highlight"]: true,
				});
			}

			this.setState({
				errors: (
					<ErrorsCreator
						key={1}
						errors={validate.errors}
					/>
				)
			});
		}

		return validate.valid;
	}

	submitForm = () => {
		if(this.validateForm()) {
		}
		else {
			//console.log("Form not submitted!");
		}
	}

	render() {
		return(
			<>
				<Form className="contact-form" id="contactForm">
					<Container fluid>
						<Row>
							<Col md={6} className="p-0 pe-0 pe-md-2">
								<Form.Group className="contact-text-container">
									<input type="text" className={`contact-info-text-input ps-1 ${this.state.nameHighlight ? "highlight" : ""}`} id="contactFormNameInput" name="contactFormNameInput" spellCheck="false" placeholder="Imię" title="Imię" value={this.state.name} onChange={(e) => this.changeInput(e)} />
								</Form.Group>
							</Col>
							<Col md={6} className="p-0 ps-0 ps-md-2 mt-2 mt-md-0">
								<Form.Group className="contact-text-container">
									<input type="text" className={`contact-info-text-input ps-1 ${this.state.surnameHighlight ? "highlight" : ""}`} id="contactFormSurnameInput" name="contactFormSurnameInput" spellCheck="false" placeholder="Nazwisko" title="Nazwisko" value={this.state.surname} onChange={(e) => this.changeInput(e)} />
								</Form.Group>
							</Col>
						</Row>
						<Row className="mt-2">
							<Col md={6} className="p-0 pe-0 pe-md-2">
								<Form.Group className="contact-phone-container">
									<div className="contact-info-phone-container w-100 h-100">
										<div className="countrycode-container">
											<input type="text" className={`contact-info-countrycode-input ps-1 ${this.state.countrycodeHighlight ? "highlight" : ""}`} id="contactFormCountrycodeInput" name="contactFormCountrycodeInput" spellCheck="false" placeholder="+48" title="Kod państwa" value={this.state.countrycode} onChange={(e) => this.changeInput(e)} />
										</div>
										<div className="phone-container">
											<input type="text" className={`contact-info-phone-input ps-1 ${this.state.phoneHighlight ? "highlight" : ""}`} id="contactFormPhoneInput" name="contactFormPhoneInput" spellCheck="false" placeholder="Telefon" title="Telefon" value={this.state.phone} onChange={(e) => this.changeInput(e)} />
										</div>
									</div>
								</Form.Group>
							</Col>
							<Col md={6} className="p-0 ps-0 ps-md-2 mt-2 mt-md-0">
								<Form.Group className="contact-text-container">
									<input type="email" className={`contact-info-text-input ps-1 ${this.state.emailHighlight ? "highlight" : ""}`} id="contactFormEmailInput" name="contactFormEmailInput" spellCheck="false" placeholder="E-mail" title="E-mail" value={this.state.email} onChange={(e) => this.changeInput(e)} />
								</Form.Group>
							</Col>
						</Row>
						<Row className="mt-2">
							<Col xs={12} className="p-0">
								<Form.Group className="contact-text-container">
									<input type="text" className="contact-info-text-input ps-1 w-100" id="contactFormCompanyInput" name="contactFormCompanyInput" spellCheck="false" placeholder="Firma (opcjonalnie)" title="Firma (opcjonalnie)" value={this.state.company} onChange={(e) => this.changeInput(e)} />
								</Form.Group>
							</Col>
						</Row>
						<Row className="mt-2">
							<Col xs={12} className="p-0">
								<Form.Group className="contact-message-container">
									<textarea className={`contact-info-textarea-input ps-1 w-100 ${this.state.messageHighlight ? "highlight" : ""}`} id="contactFormMessageInput" name="contactFormMessageInput" spellCheck="true" placeholder="Wiadomość" value={this.state.message} onChange={(e) => this.changeInput(e)} />
								</Form.Group>
							</Col>
						</Row>
						<Row className="mt-2">
							<Col xs={12} className="p-0">
								<Form.Group className="contact-submit-container">
									<span className={`contact-submit-loader spinner-border spinner-border-md ${!this.state.loader ? "text" : "loader"}`} role="status" aria-hidden="true"/>
									<button type="button" className={`contact-submit-button ${!this.state.loader ? "text" : "loader"}`} onClick={() => {this.state.captcha !== "notverified" ? this.submitForm() : this.recaptchaRef.current.execute()}}>Wyślij</button>
								</Form.Group>
							</Col>
						</Row>
						<Row className="mt-2">
							<Col xs={12} className="p-0">
								<Form.Group className="contact-terms-container">
									<input className={`contact-terms-checkbox me-1 ${this.state.termsHighlight}`} type="checkbox" id="contactFormTerms" name="contactFormTerms" checked={this.state.terms} onChange={(e) => this.changeTerms(e)}/>
									<label className={`contact-terms-label ${this.state.termsHighlight}`} htmlFor="contactFormTerms" id="contactFormTermsLabel" title="Akceptuję">
										Akceptuje <a href="/legals/terms" className="contact-terms-a">politykę prywatności</a>.
									</label>
								</Form.Group>
							</Col>
						</Row>
						<Row className="mt-2">
							<Col xs={12} className="p-0">
								<Form.Group className="contact-recaptcha-container">
									<ReCAPTCHA
										className="recaptcha-element"
										sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
										onChange={this.changeCaptcha}
										size="invisible"
										ref={this.recaptchaRef}
									/>
								</Form.Group>
							</Col>
						</Row>
						<Row className="mt-2">
							<Col xs={12} className="p-0">
								<Form.Group className="contact-errors-container mt-0">
									<p className="m-0">{this.state.errors}</p>
								</Form.Group>
							</Col>
						</Row>
					</Container>
				</Form>
			</>
		);
	}
}

export default ContactForm;