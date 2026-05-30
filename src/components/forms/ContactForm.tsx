"use client";
import { useState } from "react";

type ContactFormValues = { name: string; email: string; phone: string; message: string };

const initialState: ContactFormValues = { name: "", email: "", phone: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      // Frontend demo: ma'lumotlar serverga yuborilmaydi (backend yo'q)
      console.log("Bog'lanish murojaati (demo):", values);
      await new Promise((resolve) => setTimeout(resolve, 400));
      setSubmitted(true);
      setValues(initialState);
    } catch {
      setErrorMessage("Murojaat yuborilmadi. Iltimos, qayta urinib ko'ring.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
      {submitted && (
        <p className="rounded-lg bg-emerald-50 p-3 text-sm text-emerald-700">
          Xabaringiz yuborildi. Tez orada Siz bilan bog'lanamiz.
        </p>
      )}
      {errorMessage && <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{errorMessage}</p>}

      <div>
        <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-slate-700">
          Ismingiz
        </label>
        <input
          id="contact-name"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-slate-300 px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-slate-700">
          Elektron pochta
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-slate-300 px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className="mb-1 block text-sm font-medium text-slate-700">
          Telefon
        </label>
        <input
          id="contact-phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-slate-300 px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-slate-700">
          Xabar
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={values.message}
          onChange={handleChange}
          rows={5}
          required
          className="w-full rounded-lg border border-slate-300 px-3 py-2"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-[#0F2747] px-6 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Yuborilmoqda..." : "Yuborish"}
      </button>
    </form>
  );
}
