"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Is your name really only 1 letter?" }),
  email: z
    .string()
    .email({ message: "Use a real email so I can get back in touch." }),
  message: z
    .string()
    .min(20, { message: "Is that all? Try saying a little more." }),
});

export type ContactFormFields = z.infer<typeof formSchema>;

interface ContactFormProps {
  sendMailAction: (values: ContactFormFields) => Promise<string>;
}

export function ContactForm({ sendMailAction }: ContactFormProps) {
  const { toast } = useToast();

  const [pending, setPending] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onSubmit",
  });

  async function handleSubmit(values: ContactFormFields) {
    setPending(true);
    return sendMailAction(values)
      .then(() =>
        toast({
          title: "Email Sent Successfully!",
          description: "I'll get back to you shortly",
        }),
      )
      .catch(() =>
        toast({
          title: "Error sending email.",
          description:
            "You can also reach out to me at kyle.monteiro@gmail.com",
        }),
      )
      .finally(() => setPending(false));
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Kyle" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Kyle Monteiro" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter a message." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={pending}>
          {!pending ? "Send" : "Sending..."}
        </Button>
      </form>
    </Form>
  );
}
