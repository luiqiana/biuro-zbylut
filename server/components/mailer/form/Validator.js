"use strict";

const FormFunctions = require("../../functions/mailer/FormFunctions");
const Captcha = require("../../functions/mailer/Captcha");

module.exports = {
	validate: async function(data) {
		try {
			if(data.name.length < 3) return false;
			if(FormFunctions.containNumbers(data.name)) return false;
			if(data.surname.length < 3) return false;
			if(FormFunctions.containNumbers(data.surname)) return false;
			if(data.phone === '') return false;
			if(!FormFunctions.phoneValidator(data.phone)) return false;
			if(data.email === '') return false;
			if(!FormFunctions.emailValidator(data.email)) return false;
			if(data.company !== '') {
				if(data.company.length < 3) return false;
			}
			if(data.message.length < 20) return false;
			if(!data.terms) return false;
			return await Captcha.validate(data.captcha);
		}
		catch(err) {
			console.error(err);
			return false;
		}
	}
};