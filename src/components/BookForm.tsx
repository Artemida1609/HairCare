import emailjs from "@emailjs/browser";
import { useRef } from "react";

export const BookForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }

    emailjs
      .sendForm(
        "service_kg5i1z9",
        "template_q5i3d9v",
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          alert("Лист відправлено успішно!");
        },
        (error) => {
          alert("Помилка при відправці: " + error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 gap-4">
      <input
        type="text"
        name="user_name"
        placeholder="Name"
        className="..."
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="..."
      />
      <textarea name="message" placeholder="Message" className="..." />
      <button type="submit">Send</button>
    </form>
  );
};
