# Project only for learning purposes. It's a simple client-server application that allows to send messages between clients.

## Application made in React.js and Node.js with Express.js

## Do not use for commercial purposes. Owned by [Biuro Rachunkowe Dorota Życińska](https://biuro-zbylut.pl) and [Hannah Potępa](https://facebook.com/hannahxxcute/). All rights reserved.

## Made by [Hannah Potępa](https://facebook.com/hannahxxcute/) for [Biuro Rachunkowe Dorota Życińska](https://biuro-zbylut.pl)

## Application has hidden Google Recaptcha v3. You must earn min. 0.4 score to send message. Score is calculated by Google Recaptcha v3 in server-side. You can change score in `server/components/functions/mailer/Captcha.js` -> `Line 22`

# To run client-side application:
1. Run `cd client && npm run start`
2. The client will be running on port `3000`

# To build the client-side application:
1. Run `cd client && npm run build`
2. The build will be located in `client/build` directory

# To run server-side application:
1. Run `cd server && npm run start` or `cd server && node Server`
2. The server will be running on port `3002` (you can change it in `server/Server.js` -> `Line 24`)

# To run server-side application in development mode:
1. Run `cd server && npm run dev` or `cd server && nodemon Server`
2. The server will be running on port `3002` (you can change it in `server/Server.js` -> `Line 24`)

# You must have .env files in both `client` and `server` directories.
## In .env file in `client` directory:
1. `REACT_APP_GOOGLE_MAPS_API_KEY=Your Google Maps public api key`
2. `REACT_APP_RECAPTCHA_KEY=Your Google Recaptcha site key` (Google give development site key: `6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI`)
3. `REACT_APP_API_DOMAIN=Your server-side domain` (for development: `http://localhost:3002`)

## In .env file in `server` directory:
1. `MAILER_HOST=Your sender host` (e. g. `smtp.gmail.com`)
2. `MAILER_PORT=Your sender port` (e. g. `587`)
3. `MAILER_USER=Your sender user` (e. g. `email@gmail.com`)
4. `MAILER_PASS=Your sender password`
5. `MAILER_MAIL_COMPANY=Where contact form must be sent` (e. g. `contact@your-company.com`)
6. `MAILER_FROM_COMPANY=From where contact form is sent (version for company)` (e. g. `"Sender from website" email@gmail.com`)
7. `MAILER_FROM_USER=From where contact form is sent (version for user)` (e. g. `"Sender from website where you send contact form" email@gmail.com`)
8. `MAILER_SUBJECT_COMPANY=Subject of email (version for company)` (e. g. `"Your company's website (Contact Form)"`)
9. `MAILER_SUBJECT_USER=Subject of email (version for user)` (e. g. `"A form copy from company"`)
10. `CAPTCHA_SECRET_KEY=Your Google Recaptcha private key` (Google give development private key: `6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe`)