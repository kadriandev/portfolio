import { ContactForm } from "./ContactForm";
import { sendMail } from "@/lib/actions";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-4 md:w-1/3  mx-auto">
      <h1 className="text-xl font-bold">Send me a message!</h1>
      <ContactForm sendMailAction={sendMail} />
    </div>
  );
}
