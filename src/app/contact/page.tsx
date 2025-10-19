"use client";

import { useState } from "react";
import styles from "../page.module.css";
import Link from "next/link";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  function update(field: keyof FormState, value: string) {
    setForm((s) => ({ ...s, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);

    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg("Por favor completa todos los campos.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setErrorMsg("Introduce un correo válido.");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || `Error ${res.status}`);
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Error al enviar el mensaje.");
    }
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <h2>Contact</h2>
        </div>
        <div>
          <h2>Contact form</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              required
            />

            <label htmlFor="message">Question / Message:</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              required
              rows={6}
            />

            <div style={{ marginTop: 8 }}>
              <button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send"}
              </button>
            </div>

            {status === "success" && <p style={{ color: "green" }}>Message sended. Thank you!</p>}
            {errorMsg && <p style={{ color: "crimson" }}>{errorMsg}</p>}
          </form>
        </div>

      </main>
      <footer className={styles.footer}>
        <Link href="/">Return to main page</Link>
      </footer>
    </div>
  );
}