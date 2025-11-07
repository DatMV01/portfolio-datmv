"use client";

import clsx from "clsx";
import emailjs from "emailjs-com";
import { ChangeEvent, FormEvent, useState } from "react";
import { FiSend } from "react-icons/fi";
import { ImSpinner2 } from "react-icons/im";
import { TiTick } from "react-icons/ti";

interface FormData {
  name: string;
  email: string;
  message: string;
  [key: string]: string;
}

type Status = "" | "sending" | "success" | "error";

const SendMessageForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const templateParams: Record<string, unknown> = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus(""), 3000);
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("error");
          setTimeout(() => setStatus(""), 3000);
        }
      );
  };

  const inputStyle =
    "border-border bg-background focus:border-primary w-full rounded-md border p-3 transition outline-none text-foreground";

  return (
    <form
      className="flex w-full flex-col items-center gap-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className={inputStyle}
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className={inputStyle}
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className={clsx(inputStyle, "h-40 md:h-60")}
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className={clsx(
          "block h-12 w-40",
          "flex items-center justify-center gap-x-2 rounded-full text-white",
          "bg-gradient-to-r from-orange-600 to-purple-500",
          "hover:scale-105 hover:shadow-md",
          "cursor-pointer transition-transform duration-300",
          status === "sending" && "cursor-not-allowed opacity-70"
        )}
      >
        {status === "sending" ? (
          <>
            <ImSpinner2 className="h-5 w-5 animate-spin" />
            <span>Sending...</span>
          </>
        ) : status === "success" ? (
          <span className="flex items-center justify-center gap-1">
            <TiTick className="fill-green-500 size-6" /> Sent!
          </span>
        ) : status === "error" ? (
          <span>❌ Error!</span>
        ) : (
          <>
            <span>Send Message</span>
            <FiSend className="transition-transform duration-200  group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
};

export default SendMessageForm;
