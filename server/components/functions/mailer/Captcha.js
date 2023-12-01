"use strict";

require('dotenv').config();

module.exports = {
	validate: async function(data) {
		try {
			let success, score;

			await fetch("https://www.google.com/recaptcha/api/siteverify", {
				method: "POST",
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: `secret=${process.env.CAPTCHA_SECRET_KEY}&response=${data.captcha}`
			}).then(
				response => response.json()
			).then(
				data => {
					success = data.success;
				}
			).catch(
				() => {
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