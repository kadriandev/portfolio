import { ContactFormFields } from "@/app/contact/ContactForm";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function sendMail({
  name,
  email,
  message,
  company = "",
}: ContactFormFields) {
  "use server";

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    text: message?.toString(),
  };

  return new Promise<string>(async (resolve, reject) => {
    // Send message
    transport.sendMail(mailOptions, async (err) => {
      if (!err) {
        resolve("Email sent");
      } else {
        reject(err.message);
      }
    });
  });
}
