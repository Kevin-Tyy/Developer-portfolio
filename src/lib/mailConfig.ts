import nodemailer from "nodemailer";
import { GOOGLE_EMAIL, GOOGLE_EMAIL_PASSWORD } from "$env/static/private";

let mail = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 587,
	secure: false,
	auth: {
		user: GOOGLE_EMAIL,
		pass: GOOGLE_EMAIL_PASSWORD,
	},
});

mail.verify((error, success) => {
	if (error) {
		console.log(error);
	} else {
		console.log("Server ready to send email");
	}
});

export default mail;
 