import sgMail from "@sendgrid/mail";

const apiKey = process.env.SENDGRID_API_KEY as string;

sgMail.setApiKey(apiKey);

export default sgMail;
