import React, { useState } from "react";
import Logo from "./Logo";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, LINKEDIN, FACEBOOK } from "../data/contact";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [error, setError] = useState("");

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Add your name, email and a few lines about the project, then send again.");
      return;
    }
    setError("");
    const subject = `Project enquiry from ${form.name}${form.company ? ` (${form.company})` : ""}`;
    const body = `${form.message}\n\n${form.name}\n${form.email}${form.company ? `\n${form.company}` : ""}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="z-trench contact" data-tone="dark">
      <div className="wrap">
        <h2 className="display">Tell us what you want to build.</h2>
        <p className="lede" style={{ marginTop: "1.4rem" }}>
          Send a few lines about the problem and the data you have. We'll reply with questions and
          suggested next steps.
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <a className="mail" href={`mailto:${EMAIL}?subject=Project%20enquiry`}>{EMAIL}</a>
            <dl className="facts">
              <div>
                <dt>Phone and WhatsApp</dt>
                <dd><a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></dd>
              </div>
              <div>
                <dt>Based in</dt>
                <dd>Lahore, Pakistan</dd>
              </div>
              <div>
                <dt>Follow us</dt>
                <dd>
                  <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  {" and "}
                  <a href={FACEBOOK} target="_blank" rel="noopener noreferrer">Facebook</a>
                </dd>
              </div>
            </dl>
          </div>

          <form className="form" onSubmit={submit} noValidate>
            <div className="row2">
              <label>
                Name
                <input name="name" autoComplete="name" value={form.name} onChange={update} required />
              </label>
              <label>
                Email
                <input name="email" type="email" autoComplete="email" value={form.email} onChange={update} required />
              </label>
            </div>
            <label>
              Company (optional)
              <input name="company" autoComplete="organization" value={form.company} onChange={update} />
            </label>
            <label>
              What do you want to build?
              <textarea name="message" value={form.message} onChange={update} required />
            </label>
            {error && <p className="err" role="alert">{error}</p>}
            <button className="btn" type="submit">Send enquiry</button>
            <p className="hint">This opens your email app with the message filled in.</p>
          </form>
        </div>

        <footer>
          <Logo light className="foot-brand" />
          <span>© {new Date().getFullYear()} Orca Valley. Founded 2023.</span>
          <a href="#top">Back to the surface</a>
        </footer>
      </div>
    </section>
  );
}
