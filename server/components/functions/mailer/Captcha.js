"use strict";

require('dotenv').config();

module.exports = {
	validate: async function(captcha) {
		try {
			let success;

			await fetch("https://www.google.com/recaptcha/api/siteverify", {
				method: "POST",
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: `secret=${process.env.CAPTCHA_SECRET_KEY}&response=${captcha}`
			}).then(
				response => response.json()
			).then(
				data => {
					console.log("Recaptcha validation: " + data.success);
					if(data.success) {
						success = data.success && data.score >= 0.4;
					}
				}
			).catch(
				err => {
					console.error("Recaptcha validation catch: " + err);
					success = false;
				}
			);

			return success;
		}
		catch(err) {
			console.error(err);
			return false;
		}
	}
};