"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { contactInfo } from "@/data/contact";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Field({ label, id, type = "text", placeholder, value, onChange, required, textarea, rows = 5 }: {
  label: string; id: string; type?: string; placeholder: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean; textarea?: boolean; rows?: number;
}) {
  const baseClass = cn(
    "w-full px-4 py-3 rounded-xl text-sm text-stone-900 placeholder:text-stone-400 dark:text-stone-100 dark:placeholder:text-stone-500",
    "bg-white border border-stone-200 outline-none dark:bg-stone-950 dark:border-stone-700",
    "focus:border-stone-400 focus:ring-2 focus:ring-stone-900/6 dark:focus:border-stone-500",
    "transition-all duration-150 font-light"
  );
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-medium text-stone-600 tracking-wide dark:text-stone-300">
        {label}{required && <span className="text-stone-400 ml-0.5 dark:text-stone-500">*</span>}
      </label>
      {textarea ? (
        <textarea id={id} name={id} placeholder={placeholder} value={value} onChange={onChange} required={required} rows={rows} className={cn(baseClass, "resize-none")} />
      ) : (
        <input id={id} name={id} type={type} placeholder={placeholder} value={value} onChange={onChange} required={required} className={baseClass} />
      )}
    </div>
  );
}

const contactLinks = [
  { label: "Email", value: contactInfo.email, href: "mailto:" + contactInfo.email, icon: "✉️" },
  { label: "Phone", value: contactInfo.phone, href: "tel:" + contactInfo.phone, icon: "📞" },
  { label: "LinkedIn", value: "linkedin.com/in/pshkai", href: contactInfo.linkedin, icon: "💼", external: true },
  { label: "GitHub", value: "github.com/pshkai", href: contactInfo.github, icon: "🐙", external: true },
];

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 bg-stone-50 dark:bg-stone-900">
      <div className="section-container">
        <SectionHeading
          label="Contact"
          title="Let us work together."
          subtitle="Open to internships, junior backend roles, and interesting projects. Feel free to reach out."
        />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="glass-card p-4 flex items-center gap-4 hover:shadow-glass-hover transition-all duration-200 group"
                >
                  <span className="text-xl shrink-0" aria-hidden="true">{link.icon}</span>
                  <div className="min-w-0">
                    <p className="text-xs text-stone-400 font-medium tracking-wide dark:text-stone-500">{link.label}</p>
                    <p className="text-sm text-stone-700 font-medium truncate group-hover:text-stone-900 transition-colors dark:text-stone-300 dark:group-hover:text-stone-50">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
            <Button href={contactInfo.resume} variant="secondary" size="md" download className="w-full justify-center">
              Download Resume
            </Button>
            <div className="glass-card p-4 flex items-start gap-3">
              <span className="mt-0.5 w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-stone-900 dark:text-stone-100">Currently available</p>
                <p className="text-xs text-stone-500 font-light mt-0.5 leading-relaxed dark:text-stone-400">{contactInfo.availability}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-7">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                >
                  <span className="text-4xl" aria-hidden="true">✅</span>
                  <h3 className="font-serif text-2xl text-stone-900 dark:text-stone-50">Message received.</h3>
                  <p className="text-stone-500 text-sm font-light max-w-xs dark:text-stone-400">Thanks for reaching out. I will get back to you as soon as I can.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-2 text-xs text-stone-400 hover:text-stone-700 underline underline-offset-4 transition-colors dark:text-stone-500 dark:hover:text-stone-200"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Name" id="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
                    <Field label="Email" id="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                  </div>
                  <Field label="Subject" id="subject" placeholder="What is this about?" value={form.subject} onChange={handleChange} required />
                  <Field label="Message" id="message" placeholder="Tell me about the role, project, or anything else..." value={form.message} onChange={handleChange} required textarea rows={5} />
                  <div className="flex items-center justify-between gap-4 pt-1">
                    <Button type="submit" variant="primary" size="md">Send Message</Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
