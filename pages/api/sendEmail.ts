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
    to: "ariyoadeoyepaul@gmail.com",
    subject: emailSubject,
    text: `
      Name: ${name} \n\n 
      Email:  ${email} \n\n 
      Comment: ${emailBody} \n\n\n\n\n\n\n
      
      Powered By tonnipaul.com
      `,
  });

  return res.status(200).json({ message: "Notification sent" });
}
