import { ContactFormFields } from "@/app/contact/ContactForm";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import supabase from "./supabase/server";

export async function sendMail({
  name,
  email,
  company = "",
  message,
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
    try {
      // Does contact already exist
      const exists = await supabase
        .from("contacts")
        .select()
        .eq("email", email);
      console.log("exists " + JSON.stringify(exists));
      if (true && exists.data && exists.data?.length > 0) {
        return { error: "Whoa slow down, give me a chance to respond." };
      }

      // Insert contact into db
      const { data, error } = await supabase
        .from("contacts")
        .insert({
          name,
          email,
          company,
        })
        .select();

      if (error) {
        return { error: "Couldn't insert contact" };
        return;
      }
    } catch (e) {
      console.log("Error supabase");
    }

    // Send message
    // transport.sendMail(mailOptions, async (err) => {
    //   if (!err) {
    //     resolve("Email sent");
    //   } else {
    //     reject(err.message);
    //   }
    // });
  });
}
