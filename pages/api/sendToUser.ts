import { NextApiRequest, NextApiResponse } from "next";
import sendEmail from "@/sendgrid/utils/sendMail";

export default async function sendNotification(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email } = JSON.parse(req.body);

  // Sending email notification
  const emailSubject = `Thanks for subscribing ${name}`;

  await sendEmail({
    to: email,
    subject: emailSubject,
    text: `
      Hello ${name}, thanks for subscribing to our newsletter. \n\n 
      
    Powered By tonnipaul.com
      `,
  });

  return res.status(200).json({ message: "mail sent" });
}
