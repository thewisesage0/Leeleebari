import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Facebook, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/Button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Leeleebari" },
      {
        name: "description",
        content: "Contact author Leeleebari for publishing, press, and reader correspondence.",
      },
      { property: "og:title", content: "Contact Leeleebari" },
      {
        property: "og:description",
        content: "Publishing enquiries and reader correspondence for Leeleebari.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

// Replace with the address that should receive contact-form messages.
const AUTHOR_EMAIL = "hello@leeleebari.com";

function ContactPage() {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");

   const body = `${message}\n\n—\n${name}\n${email}`;
  const mailtoUrl = `mailto:leeleenovel@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // Opens the visitor's own email client with the message pre-filled —
    // no backend or third-party service required. The message actually
    // sends only once they hit send in their mail app.
    window.location.href = mailtoUrl;
    setSent(true);
  };

  return (
    <div className="page-shell">
      <section className="section-shell contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">Correspondence</p>
          <h1>Let’s connect.</h1>
          <p className="lead">
            For publishing enquiries, press, collaborations, or a thoughtful note about the books.
          </p>
          <div className="contact-notes">
            <div>
              <Mail />
              <span>
                <strong>Email</strong>
                <small>{'leeleenovel@gmail.com'}</small>
              </span>
            </div>
            <div>
              <span>
                <a href="https://www.facebook.com/profile.php?id=61592585100127" target="_blank" rel="noreferrer">
                  <Facebook />
                  <strong>Facebook</strong>
                </a>
              </span>
            </div>
          </div>
          <p className="contact-disclaimer">
            The form below opens your own email app with the message pre-filled — nothing is sent
            through this site.
          </p>
        </div>
        <form className="contact-form" onSubmit={submit}>
          {sent ? (
            <div className="form-success">
              <p className="eyebrow">Almost done</p>
              <h2>Check your email app.</h2>
              <p>
                Your message is ready to send from there — this page hasn’t sent anything on its
                own.
              </p>
              <Button type="button" variant="outline" onClick={() => setSent(false)}>
                Write another note
              </Button>
            </div>
          ) : (
            <>
              <label>
                Name
                <input name="name" required autoComplete="name" placeholder="Your name" />
              </label>
              <label>
                Email
                <input
                  name="email"
                  required
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </label>
              <label>
                Subject
                <input name="subject" required placeholder="Publishing enquiry" />
              </label>
              <label>
                Message
                <textarea name="message" rows={6} required placeholder="Write your message…" />
              </label>
              <Button type="submit">
                Send Message <ArrowRight size={16} />
              </Button>
            </>
          )}
        </form>
      </section>
    </div>
  );
}
