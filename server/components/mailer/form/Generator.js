"use strict";

require('dotenv').config();

module.exports = {
	company: function(data) {
		return (`
			<!DOCTYPE html>
			<html lang="pl">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
				<title>${process.env.MAILER_SUBJECT_COMPANY}</title>
				<style>
					body {
						font-family: helvetica, sans-serif;
						font-weight: normal;
						padding: 10px;
						margin: 0;
						max-width: 600px;
					}
			
					header {
						text-align: center;
						width: 100%;
						margin: 0;
						padding: 5px 0;
						border-top-left-radius: 10px;
						border-top-right-radius: 10px;
						border-bottom: 3px solid #00baba;
					}
			
					h1 {
						font-weight: normal;
						margin: 0;
					}
			
					h3 {
						font-weight: normal;
						margin: 0;
					}
			
					a {
						text-decoration: none;
						color: #000000 !important;
						transition: 0.5s !important;
					}
			
					a:hover {
						color: #00baba !important;
					}
			
					div.content {
						width: 100%;
						background-color: #f8f9fa;
						border-radius: 10px;
					}
			
					div.contact-message {
						width: calc(100% - 20px);
						padding: 10px;
						overflow-x: auto;
					}
			
					table {
						text-align: start;
						table-layout: fixed;
						width: 100%;
						border-collapse: collapse;
					}
			
					tr {
						padding: 5px;
						border: 1px solid #00baba;
						border-left: none;
						border-right: none;
					}
			
					tr:first-child {
						border-top: none;
					}
			
					tr:last-child {
						border-bottom: none;
					}
			
					th {
						text-align: start;
						vertical-align: middle;
						width: 30%;
						height: 25px;
					}
			
					td {
						width: 70%;
						height: 25px;
					}
			
					footer {
						border-top: 3px solid #00baba;
						width: 100%;
						text-align: center;
						font-weight: bold;
						padding: 5px 0;
						color: #000000 !important
					}
				</style>
			</head>
				<body>
					<div class="content">
						<header>
							<h1>
								<a href="https://biuro-zbylut.pl">Biuro Zbylut</a>
							</h1>
						</header>
						<div class="contact-message">
							<table>
								<tr>
									<th>Imię</th>
									<td>${data.name}</td>
								</tr>
								<tr>
									<th>Nazwisko</th>
									<td>${data.surname}</td>
								</tr>
								<tr>
									<th>E-mail</th>
									<td>${data.email}</td>
								</tr>
								<tr>
									<th>Numer telefonu</th>
									<td>${data.phone}</td>
								</tr>
								${data.company !== '' ? `
									<tr>
										<th>Firma</th>
										<td>${data.company}</td>
									</tr>
								` : ''}
								<tr>
									<th>Wiadomość</th>
									<td>${data.message}</td>
								</tr>
							</table>
						</div>
						<footer style="color: #000000 !important">
							Copyright © <a href="https://biuro-zbylut.pl">biuro-zbylut.pl</a>
						</footer>
					</div>
				</body>
			</html>
		`);
	},
	user: function(data) {
		return(`
			<!DOCTYPE html>
			<html lang="pl">
				<head>
					<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
					<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
					<title>${process.env.MAILER_SUBJECT_USER}</title>
					<style>
						body {
							font-family: helvetica, sans-serif;
							font-weight: normal;
							padding: 10px;
							margin: 0;
							overflow: hidden;
							max-width: 600px;
						}
			
						header {
							text-align: center;
							width: 100%;
							margin: 0;
							padding: 5px 0;
							border-top-left-radius: 10px;
							border-top-right-radius: 10px;
							border-bottom: 3px solid #00baba;
						}
			
						h1 {
							font-weight: normal;
							margin: 0;
						}
			
						h3 {
							font-weight: normal;
							margin: 0;
						}
			
						a {
							text-decoration: none;
							color: #000000 !important;
							transition: 0.5s !important;
						}
			
						a:hover {
							color: #00baba !important;
						}
			
						div.content {
							width: 100%;
							background-color: #f8f9fa;
							border-radius: 10px;
						}
			
						div.contact-message {
							width: calc(100% - 20px);
							padding: 10px;
							overflow-x: auto;
						}
			
						table {
							text-align: start;
							table-layout: fixed;
							width: 100%;
							border-collapse: collapse;
						}
			
						tr {
							padding: 5px;
							border: 1px solid #00baba;
							border-left: none;
							border-right: none;
						}
			
						tr:first-child {
							border-top: none;
						}
			
						tr:last-child {
							border-bottom: none;
						}
			
						th {
							text-align: start;
							vertical-align: middle;
							width: 30%;
							height: 25px;
						}
			
						td {
							width: 70%;
							height: 25px;
						}
			
						footer {
							border-top: 3px solid #00baba;
							width: 100%;
							text-align: center;
							font-weight: bold;
							padding: 5px 0;
							color: #000000 !important;
						}
			
						div.message {
							width: calc(100% - 30px);
							padding: 5px 15px;
							color: #000000 !important;
						}
			
						p.ignore {
							margin-top: 3px;
							margin-bottom: 5px;
							font-weight: normal;
							font-size: 12px;
							color: #000000 !important;
						}
					</style>
				</head>
				<body>
					<div class="content">
						<header>
							<h1>
								<a href="https://biuro-zbylut.pl">Biuro Zbylut</a>
							</h1>
						</header>
						<div class="message"><h3>Drogi kliencie,</h3>
							<p style="margin: 5px 0;">Poniżej przesyłamy kopie formularza kontaktowego, który wysłałeś/aś dzisiaj na naszej stronie</p>
						</div>
						<div class="contact-message">
							<table>
								<tr>
									<th>Imię</th>
									<td>${data.name}</td>
								</tr>
								<tr>
									<th>Nazwisko</th>
									<td>${data.surname}</td>
								</tr>
								<tr>
									<th>E-mail</th>
									<td>${data.email}</td>
								</tr>
								<tr>
									<th>Numer telefonu</th>
									<td>${data.phone}</td>
								</tr>
								${data.company !== '' ? `
									<tr>
										<th>Firma</th>
										<td>${data.company}</td>
									</tr>
								` : ''}
								<tr>
									<th>Wiadomość</th>
									<td>${data.message}</td>
								</tr>
							</table>
						</div>
						<footer>
							<p class="ignore">
								<i>Jeśli nie dotyczy Ciebie ta wiadomość, zignoruj ją</i>
							</p>
							Copyright &copy; <a href="https://biuro-zbylut.pl">biuro-zbylut.pl</a>
						</footer>
					</div>
				</body>
			</html>
		`);
	}
};