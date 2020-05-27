require('dotenv').config();

const nodemailer = require('nodemailer')

const { SMTP_HOST, SMTP_USER, SMTP_PASS, SMTP_SENDER, MAIL_RECIPIENT } = process.env

let transporter = nodemailer.createTransport({
	host: SMTP_HOST,
	port: 465,
	secure: true,
	auth: {
		user: SMTP_USER,
		pass: SMTP_PASS,
	}
});

export default async (req, res) => {
	try {
		const body = JSON.parse(req.body)

		const mailOptions = {
			from: SMTP_SENDER,
			replyTo: body.email,
			to: MAIL_RECIPIENT,
			subject: `${body.name} vous a contacté`,
			text: body.message
		};

		await transporter.sendMail(mailOptions);

		res.status(200).send('Message envoyé !')
	} catch (e) {
		res.status(400).send('Une erreur est survenue')
	}
}
