import { GOOGLE_EMAIL } from "$env/static/private";
import mail from "$lib/mailConfig";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({
	request,
}: {
	request: Request;
}) => {
	try {
		const body = await request.json();
		console.log("Received request:", body);
		
		const message = {
			from: body.email,
			to: GOOGLE_EMAIL,
			subject: body.subject,
			body: body.message,
		};
		const sendEmail = async (message: any) => {
			await new Promise((resolve, reject) => {
				mail.sendMail(message, (err, info) => {
					if (err) {
						reject(err);
					} else {
						resolve(info);
					}
				});
			});
		};
		await sendEmail(message);
		return new Response(JSON.stringify({ message: "Email sent" }), {
			status: 200,
		});
	} catch (error) {
		console.log(error);
		return new Response(JSON.stringify({ message: "Request failed" }), {
			status: 500,
		});
	}
};
