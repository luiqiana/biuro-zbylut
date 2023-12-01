"use strict";

const nodemailer = require("nodemailer");
require('dotenv').config();

const Generator = require("./Generator");
const Validator  = require("./Validator");

module.exports = {
	sendEmail: async function(data) {
		let sent;
		if(!await Validator.validate(data)) return "false";

		const transporter = nodemailer.createTransport({
			host: process.env.MAILER_HOST,
			port: parseInt(process.env.MAILER_PORT),
			secure: false,
			auth: {
				user: process.env.MAILER_USER,
				pass: process.env.MAILER_PASS
			}
		});

		try {
			const info = await transporter.sendMail({
				from: process.env.MAILER_FROM_COMPANY,
				to: process.env.MAILER_MAIL_COMPANY,
				subject: process.env.MAILER_SUBJECT_COMPANY,
				html: Generator.company(data)
			});

			console.log("Message sent to company: %s", info.messageId);
			sent = "true";
		}
		catch(err) {
			console.error(err);
			return "false";
		}

		try {
			const info = await transporter.sendMail({
				from: process.env.MAILER_FROM_USER,
				to: data.email,
				subject: process.env.MAILER_SUBJECT_USER,
				html: Generator.user(data)
			});

			console.log("Message sent to user: %s", info.messageId);
		}
		catch(err) {
			console.error(err);
			sent = "notuser";
		}

		return sent;
	}
};