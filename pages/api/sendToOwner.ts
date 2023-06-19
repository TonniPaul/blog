import { NextApiRequest, NextApiResponse } from "next";
import sendEmail from "@/sendgrid/utils/sendMail";

export default async function sendNotification(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email } = JSON.parse(req.body);

  // Sending email notification
  const emailSubject = `New Subscriber Alert`;

  await sendEmail({
    to: "info@tonnipaul.com",
    subject: emailSubject,
    text: `
      Name: ${name},\n
      Email: ${email}\n\n\n

      Log into your dashboard to see all your subscribers

      
    Powered By tonnipaul.com
      `,
  });

  return res.status(200).json({ message: "mail sent" });
}
