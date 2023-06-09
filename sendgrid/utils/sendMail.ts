import sgMail from "../sendgrid.config";

interface EmailType {
  to: string;
  subject: string;
  text: string;
}

const sendEmail = async ({ to, subject, text }: EmailType) => {
  const msg = {
    to,
    from: "noreply@tonnipaul.com",
    subject,
    text,
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent");
  } catch (error) {
    console.error("Error sending email", error);
  }
};

export default sendEmail;
