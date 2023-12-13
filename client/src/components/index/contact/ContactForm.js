import React, {Component} from 'react';

import ReCAPTCHA from "react-google-recaptcha";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import FormValidation from './form/validation/FormValidation';
import ErrorsCreator from './form/ErrorsCreator';
import {removeDash} from './form/validation/Functions';

import Alert from './form/Alert';

const failureTime = 20 * 1000;
const successTime = 2 * 60 * 1000;

class ContactForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			surname: "",
			countrycode: "+48",
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
			errors: <></>,
			sent: "",
			lastSentStatus: "",
			remainingTime: "Wyślij",
			intervalId: null,
			messageState: false,
		};

		this.recaptchaRef = React.createRef();
		this.AlertRef = React.createRef();
	}

	componentDidMount() {
		this.changeInput = this.changeInput.bind(this);
		this.changeTerms = this.changeTerms.bind(this);
		this.changeCaptcha = this.changeCaptcha.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.validateForm = this.validateForm.bind(this);
		this.highlightInputs = this.highlightInputs.bind(this);
		this.loader = this.loader.bind(this);
		this.showAlert = this.showAlert.bind(this);
		this.closeAlert = this.closeAlert.bind(this);
		this.getAlert = this.getAlert.bind(this);
		this.resetForm = this.resetForm.bind(this);
		this.changePhone = this.changePhone.bind(this);
		this.pastePhone = this.pastePhone.bind(this);
		this.changeCountryCode = this.changeCountryCode.bind(this);
		this.canSubmitForm = this.canSubmitForm.bind(this);
		this.formSubmittedStorage = this.formSubmittedStorage.bind(this);
		this.updateRemainingTime = this.updateRemainingTime.bind(this);
		this.remainingTimeUpdator = this.remainingTimeUpdator.bind(this);
		this.messageState = this.messageState.bind(this);
	}

	componentWillUnmount() {
		clearInterval(this.state.intervalId);
	}

	getAlert() {
		return this.AlertRef.current;
	}

	canSubmitForm() {
		const currentTime = new Date().getTime();
		const lastSentTime = localStorage.getItem("lastSentTime");

		if(this.state.lastSentStatus === "failure") {
			if(currentTime - lastSentTime > failureTime) return {canSubmit: true, remainingTime: 0};
			else {
				const remainingTime = failureTime - (currentTime - parseInt(lastSentTime));
				return {canSubmit: false, remainingTime: remainingTime};
			}
		}
		else if(this.state.lastSentStatus === "success") {
			if(currentTime - lastSentTime > successTime) return {canSubmit: true, remainingTime: 0};
			else {
				const remainingTime = successTime - (currentTime - parseInt(lastSentTime));
				return {canSubmit: false, remainingTime: remainingTime};
			}
		}
		else return {canSubmit: true, remainingTime: 0};
	}

	formSubmittedStorage() {
		const currentTime = new Date().getTime();
		localStorage.setItem("lastSentTime", currentTime.toString());
		this.remainingTimeUpdator();
	}

	remainingTimeUpdator() {
		this.updateRemainingTime();
		const intervalId = setInterval(() => {
			setInterval(this.updateRemainingTime, 1000);
		}, 1000);

		this.setState({
			intervalId: intervalId
		});
	}

	updateRemainingTime() {
		const result = this.canSubmitForm();
		if(result.canSubmit) {
			clearInterval(this.state.intervalId);
			this.setState({
				remainingTime: "Wyślij",
				intervalId: null
			});
		}
		else {
			const remainingMinutes = Math.floor(result.remainingTime / (60 * 1000));
			const remainingSeconds = Math.floor((result.remainingTime % (60 * 1000)) / 1000);
			this.setState({
				remainingTime: `${remainingMinutes}:${((remainingSeconds.toString()).length > 1 ? "" : "0") + remainingSeconds.toString()}`
			});
		}
	}

	changeInput(e) {
		this.setState({
			[((e.target.name).slice(11, -5)).toLowerCase()]: e.target.value
		});
		
		if(((e.target.name).slice(11, -5)).toLowerCase() === "countrycode") this.changeCountryCode(e.target.value);
	}

	changePhone(e) {
		if(e.target.value.length <= 11 && /^\d+$/.test(removeDash(e.target.value))) {
			if(e.target.value.length > this.state.phone.length) {
				const lastThreeChars = e.target.value.slice(-4, -1);
				if((/^\d{3}$/.test(lastThreeChars) && e.target.value.length === 4) || (/^\d{3}$/.test(lastThreeChars) && e.target.value.includes('-'))) {
					this.setState({
						phone: e.target.value.slice(0, -1) + (e.target.value.slice(-1) === '-' ? "" : "-") + e.target.value.slice(-1)
					});
				}
				else {
					this.setState({
						phone: e.target.value
					});
				}
			}
			else {
				if(/^\d+$/.test(removeDash(e.target.value))) {
					if(removeDash(this.state.phone).length > 9 && !this.state.phone.includes('-')) {
						const cleaned = removeDash(e.target.value);
						let phone = "";
						const modulo  = cleaned.length % 3;

						if (cleaned.length <= 3 || cleaned.length > 9) {
							phone = cleaned;
						}
						else if (cleaned.length > 3 && cleaned.length < 6) {
							const match = cleaned.match(/^(\d{3})$/);
							phone = `${match[1]}-${cleaned.slice(-modulo)}`;
						}
						else if (cleaned.length === 6) {
							const match = cleaned.match(/^(\d{3})(\d{3})$/);
							phone = `${match[1]}-${match[2]}`;
						}
						else if (cleaned.length > 6 && cleaned.length < 9) {
							const match = cleaned.match(/^(\d{3})(\d{3})$/);
							phone = `${match[1]}-${match[2]}-${cleaned.slice(-modulo)}`;
						}
						else if (cleaned.length === 9) {
							const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})$/);
							phone = `${match[1]}-${match[2]}-${match[3]}`;
						}

						this.setState({
							phone: phone
						});
					}
					else if(removeDash(this.state.phone).length <= 9) {
						if(!/^\d+$/.test(removeDash(this.state.phone)) && /^\d+$/.test(removeDash(e.target.value))) {
							const cleaned = removeDash(e.target.value);
							let phone = "";
							const modulo  = cleaned.length % 3;

							if (cleaned.length <= 3 || cleaned.length > 9) {
								phone = cleaned;
							}
							else if (cleaned.length > 3 && cleaned.length < 6) {
								const match = (cleaned.slice(0, -modulo)).match(/^(\d{3})$/);
								phone = `${match[1]}-${cleaned.slice(-modulo)}`;
							}
							else if (cleaned.length === 6) {
								const match = cleaned.match(/^(\d{3})(\d{3})$/);
								phone = `${match[1]}-${match[2]}`;
							}
							else if (cleaned.length > 6 && cleaned.length < 9) {
								const match = (cleaned.slice(0, -modulo)).match(/^(\d{3})(\d{3})$/);
								phone = `${match[1]}-${match[2]}-${cleaned.slice(-modulo)}`;
							}
							else if (cleaned.length === 9) {
								const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})$/);
								phone = `${match[1]}-${match[2]}-${match[3]}`;
							}

							this.setState({
								phone: phone
							});
						}
						else if(/^\d+$/.test(removeDash(this.state.phone)) && /^\d+$/.test(removeDash(e.target.value))) {
							const lastChar = e.target.value.slice(-1);
							if(lastChar === '-') {
								this.setState({
									phone: e.target.value.slice(0, -1)
								});
							}
							else {
								this.setState({
									phone: e.target.value
								});
							}
						}
						else {
							this.setState({
								phone: e.target.value
							});
						}
					}
				}
				else {
					this.setState({
						phone: e.target.value
					});
				}
			}
		}
		else {
			this.setState({
				phone: e.target.value.replace(/-/g, '')
			});
		}
	}

	pastePhone(e) {
		e.preventDefault();
		const fullString = (e.target.value + e.clipboardData.getData('text')).toString();
		if(/^\d+$/.test(removeDash(fullString))) {
			const cleaned = removeDash(fullString);
			let phone = "";
			const modulo  = cleaned.length % 3;

			if (cleaned.length <= 3 || cleaned.length > 9) {
				phone = cleaned;
			}
			else if (cleaned.length > 3 && cleaned.length < 6) {
				const match = (cleaned.slice(0, -modulo)).match(/^(\d{3})$/);
				phone = `${match[1]}-${cleaned.slice(-modulo)}`;
			}
			else if (cleaned.length === 6) {
				const match = cleaned.match(/^(\d{3})(\d{3})$/);
				phone = `${match[1]}-${match[2]}`;
			}
			else if (cleaned.length > 6 && cleaned.length < 9) {
				const match = (cleaned.slice(0, -modulo)).match(/^(\d{3})(\d{3})$/);
				phone = `${match[1]}-${match[2]}-${cleaned.slice(-modulo)}`;
			}
			else if (cleaned.length === 9) {
				const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})$/);
				phone = `${match[1]}-${match[2]}-${match[3]}`;
			}

			this.setState({
				phone: phone
			});
		}
		else {
			this.setState({
				phone: fullString
			});
		}
	}
	
	changeCountryCode(value) {
		if(value === "+48") {
			const phoneStr = removeDash(this.state.phone);
			if(/^\d+$/.test(phoneStr)) {
				const cleaned = removeDash(phoneStr);
				let phone = "";
				const modulo  = cleaned.length % 3;

				if (cleaned.length <= 3 || cleaned.length > 9) {
					phone = cleaned;
				}
				else if (cleaned.length > 3 && cleaned.length < 6) {
					const match = (cleaned.slice(0, -modulo)).match(/^(\d{3})$/);
					phone = `${match[1]}-${cleaned.slice(-modulo)}`;
				}
				else if (cleaned.length === 6) {
					const match = cleaned.match(/^(\d{3})(\d{3})$/);
					phone = `${match[1]}-${match[2]}`;
				}
				else if (cleaned.length > 6 && cleaned.length < 9) {
					const match = (cleaned.slice(0, -modulo)).match(/^(\d{3})(\d{3})$/);
					phone = `${match[1]}-${match[2]}-${cleaned.slice(-modulo)}`;
				}
				else if (cleaned.length === 9) {
					const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})$/);
					phone = `${match[1]}-${match[2]}-${match[3]}`;
				}

				this.setState({
					phone: phone
				});
			}
			else {
				this.setState({
					phone: phoneStr
				});
			}
		}
		else {
			this.setState({
				phone: removeDash(this.state.phone)
			});
		}
	}


	changeTerms(e) {
		this.setState({
			terms: e.target.checked
		});
	}

	loader(loading) {
		this.setState({
			loader: loading
		});
	}

	changeCaptcha = (value) => {
		this.setState({
			captcha: value === null ? "notverified" : value
		}, () => {
			if(this.state.captcha !== "notverified") this.validateForm();
		});
	}

	showAlert(type) {
		const AlertState = this.getAlert();

		AlertState.setState({
			type: type,
			show: true
		});
	}

	closeAlert = () => {
		const AlertState = this.getAlert();

		AlertState.setState({
			show: false
		});
	}

	resetForm() {
		this.loader(false);

		this.setState({
			name: "",
			surname: "",
			countrycode: "+48",
			phone: "",
			email: "",
			company: "",
			message: "",
			terms: false
		});

		setTimeout(() => {
			this.closeAlert();
			this.setState({
				sent: ""
			});
		}, 5000);
	}

	highlightInputs(type, inputs) {
		if(type === "set") {
			const NoE = Object.keys(inputs).length;

			for(let i = 0; i < NoE; i++) {
				this.setState({
					[`${inputs[i]}Highlight`]: true
				});
			}
		}
		else {
			this.setState({
				nameHighlight: false,
				surnameHighlight: false,
				countrycodeHighlight: false,
				phoneHighlight: false,
				emailHighlight: false,
				termsHighlight: false,
				messageHighlight: false
			});
		}
	}

	submitForm(inputs) {
		this.loader(true);

		const data = {
			name: inputs.name,
			surname: inputs.surname,
			phone: (inputs.countrycode + inputs.phone).toString(),
			email: inputs.email,
			company: inputs.company,
			message: inputs.message,
			terms: inputs.terms,
			captcha: inputs.captcha
		};

		fetch(`${process.env.REACT_APP_API_DOMAIN}/api/mailer/form`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify(data)
		}).then(
			response => response.json()
		).then(
			data => {
				this.setState({
					sent: data.sent,
					captcha: "notverified"
				});

				this.showAlert(data.sent);
				this.recaptchaRef.current.reset();

				if(data.sent === "true" || data.sent === "notuser") {
					this.setState({
						lastSentStatus: "success"
					}, () => this.formSubmittedStorage());
				}
				else {
					this.setState({
						lastSentStatus: "failure"
					}, () => this.formSubmittedStorage());
				}

				if(data.sent !== "false") this.resetForm();
				else {
					this.loader(false);

					setTimeout(() => {
						this.closeAlert();
						this.setState({
							sent: ""
						});
					}, 5000);
				}
			}
		).catch(
			() => {
				this.setState({
					captcha: "notverified",
					sent: "false",
					lastSentStatus: "failure"
				}, () => this.formSubmittedStorage());

				this.showAlert("false");
				this.loader(false);

				setTimeout(() => {
					this.closeAlert();
					this.setState({
						sent: ""
					});
				}, 5000);
				this.recaptchaRef.current.reset();
			}
		);
	}

	validateForm = () => {
		if(!this.canSubmitForm().canSubmit) return;

		this.setState({
			errors: <></>
		});

		this.highlightInputs("clear", []);

		const inputs = {
			name: this.state.name,
			surname: this.state.surname,
			countrycode: this.state.countrycode,
			phone: removeDash(this.state.phone),
			email: this.state.email,
			company: this.state.company,
			message: this.state.message,
			terms: this.state.terms,
			captcha: this.state.captcha
		}

		const validate = FormValidation.validateForm(inputs);

		if(!validate.valid) {
			this.highlightInputs("set", validate.highlight);

			this.setState({
				errors: (
					<ErrorsCreator
						key={1}
						errors={validate.errors}
					/>
				)
			});
		}
		else this.submitForm(inputs);
	}

	messageState(state) {
		this.setState({
			messageState: state
		});
	}

	render() {
		return(
			<>
				<Alert
					key={1}
					ref={this.AlertRef}
				/>
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
											<input type="text" className={`contact-info-phone-input ps-1 ${this.state.phoneHighlight ? "highlight" : ""}`} id="contactFormPhoneInput" name="contactFormPhoneInput" spellCheck="false" placeholder="Telefon" title="Telefon" value={this.state.phone} onChange={(e) => this.changePhone(e)} onPaste={(e) => this.pastePhone(e)} />
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
									<textarea className={`contact-info-textarea-input ps-1 w-100 ${this.state.messageHighlight ? "highlight" : ""}`} id="contactFormMessageInput" name="contactFormMessageInput" spellCheck="true" placeholder="Wiadomość" value={this.state.message} onChange={(e) => this.changeInput(e)} onFocus={() => this.messageState(true)} onBlur={() => this.messageState(false)} />
									<div className="contact-info-counter-container">
										<div className={`contact-info-counter-wrapper px-2 ${this.state.messageState ? "focus" : ""}`}>
											<span className={this.state.message.length < 50 ? "red" : "green"}>{this.state.message.length}/50</span>
										</div>
									</div>
								</Form.Group>
							</Col>
						</Row>
						<Row className="mt-2">
							<Col xs={12} className="p-0">
								<Form.Group className="contact-submit-container">
									<span className={`contact-submit-loader spinner-border spinner-border-md ${!this.state.loader ? "text" : "loader"}`} role="status" aria-hidden="true"/>
									<button type="button" className={`contact-submit-button ${!this.state.loader ? "text" : "loader"}`} onClick={() => {this.state.captcha !== "notverified" ? this.validateForm() : this.recaptchaRef.current.execute()}}>{this.state.remainingTime}</button>
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