import { NextApiRequest, NextApiResponse } from "next";
import sendEmail from "@/sendgrid/utils/sendMail";

export default async function sendNotification(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, comment } = JSON.parse(req.body);

  // Sending email notification
  const emailSubject = `New comment from ${name}`;
  const emailBody = comment;

  await sendEmail({
    to: "pauloluwatoni@gmail.com, contact@tonnipaul.com",
    subject: emailSubject,
    text: `
      Name: ${name} \n\n 
      Email:  ${email} \n\n 
      Comment: ${emailBody} 
      `,
  });

  return res.status(200).json({ message: "Notification sent" });
}
