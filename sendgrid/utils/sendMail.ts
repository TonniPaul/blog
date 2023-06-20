import sgMail from "../sendgrid.config";

interface EmailType {
  to: string;
  subject: string;
  html: string;
}

const sendEmail = async ({ to, subject, html }: EmailType) => {
  const msg = {
    to,
    from: "noreply@tonnipaul.com",
    subject,
    html,
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent");
  } catch (error) {
    console.error("Error sending email", error);
  }
};

export default sendEmail;
