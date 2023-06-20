import { NextApiRequest, NextApiResponse } from "next";
import sendEmail from "@/sendgrid/utils/sendMail";

export default async function sendNotification(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email } = JSON.parse(req.body);

  // Sending email notification
  const emailSubject = `New Subscriber Alert`;
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
            <h1>New Subscriber Alert</h1>
          </div>
          <div class="content">
            <p>A new subscriber has joined your newsletter:</p>
            <ul>
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
            </ul>
          </div>
          <footer class="footer">
            <p>Powered By <a href="https://tonnipaul.com" style="color: #7d44a8;">tonnipaul.com</a></p>
          </footer>
        </div>
      </body>
    </html>
  `;

   await sendEmail({
     to: "info@tonnipaul.com",
     subject: emailSubject,
     //  text: `
     //    Name: ${name},\n
     //    Email: ${email}\n\n\n

     //    Log into your dashboard to see all your subscribers

     //  Powered By tonnipaul.com
     //    `,
     html: htmlContent,
   });

  return res.status(200).json({ message: "mail sent" });
}
