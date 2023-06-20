import { NextApiRequest, NextApiResponse } from "next";
import sendEmail from "@/sendgrid/utils/sendMail";
import { MailDataRequired } from "@sendgrid/mail";

export default async function sendNotification(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email } = JSON.parse(req.body);

  // Sending email notification
  const emailSubject = `Thanks for subscribing ${name}`;
  const htmlContent = `
    <html>
      <head>
        <style>
          body {
            background-color: #e0e0e0;
            color: #7d44a8;
            font-family: Arial, sans-serif;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background-color: #7d44a8;
            color: #e0e0e0;
            padding: 20px;
            text-align: center;
          }
          .content {
            margin-top: 20px;
          }
          .footer {
            margin-top: 50px;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thanks for subscribing!</h1>
          </div>
          <div class="content">
            <p>Hello ${name},</p>
            <p>Thanks for subscribing to our newsletter.</p>
          </div>
          <footer class="footer">
            <p>Powered By <a href="https://tonnipaul.com" style="color: #7d44a8;">tonnipaul.com</a></p>
          </footer>
        </div>
      </body>
    </html>
  `;

  await sendEmail({
    to: email,
    subject: emailSubject,
    html: htmlContent,
  });

  return res.status(200).json({ message: "mail sent" });
}
