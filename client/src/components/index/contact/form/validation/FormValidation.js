import {FormErrors} from './ErrorsList';
import * as Functions from './Functions';

class FormValidation {
	static validateForm(inputs) {
		const Errors = [];
		const ErrorsHighlight = [];

		if(inputs.name !== '') {
			if(inputs.name.length < 3) Errors.push(FormErrors.NameLetters);
			if(Functions.containNumbers(inputs.name)) Errors.push(FormErrors.NameNumbers);
		}
		else {
			Errors.push(FormErrors.Empty);
			ErrorsHighlight.push("name");
		}

		if(inputs.surname !== '') {
			if(inputs.surname.length < 3) Errors.push(FormErrors.SurnameLetters);
			if(Functions.containNumbers(inputs.surname)) Errors.push(FormErrors.SurnameNumbers);
		}
		else {
			Errors.push(FormErrors.Empty);
			ErrorsHighlight.push("surname");
		}

		if(inputs.countrycode !== '') {
			if(!Functions.startWithPlus(inputs.countrycode)) Errors.push(FormErrors.CountrycodePlus);
			else if(!Functions.countryCode(inputs.countrycode)) Errors.push(FormErrors.CountrycodeIncorrect);
		}
		else {
			Errors.push(FormErrors.Empty);
			ErrorsHighlight.push("countrycode");
		}

		if(inputs.phone !== '') {
			if(!Functions.phoneValidator(inputs.phone)) Errors.push(FormErrors.PhoneIncorrect);
		}
		else {
			Errors.push(FormErrors.Empty);
			ErrorsHighlight.push("phone");
		}

		if(inputs.email !== '') {
			if(!Functions.emailValidator(inputs.email)) Errors.push(FormErrors.EmailIncorrect);
		}
		else {
			Errors.push(FormErrors.Empty);
			ErrorsHighlight.push("email");
		}

		if(inputs.company !== '') {
			if(inputs.company.length < 3) Errors.push(FormErrors.CompanyLetters);
		}

		if(inputs.message !== '') {
			if(inputs.message.length < 20) Errors.push(FormErrors.MessageLetters);
		}
		else {
			Errors.push(FormErrors.Empty);
			ErrorsHighlight.push("message");
		}

		if(!inputs.terms) {
			Errors.push(FormErrors.Terms);
			ErrorsHighlight.push("terms");
		}

		if(inputs.captcha === "notverified") Errors.push(FormErrors.Captcha);

		return {
			valid: Errors.length === 0,
			errors: Functions.removeDuplicates(Errors),
			highlight: ErrorsHighlight
		}
	}
}

export default FormValidation;