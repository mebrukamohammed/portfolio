"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/app/components/footer";
import "./page.css"

import {
  WhatsappIcon,
  LinkedinIcon,
  TelegramIcon,
  GithubIcon,
} from "@/app/icons";

import "./page.css";

const email = "mebrukamohammedahmed@gmail.com";

const contactMethods = [
  {
    name: "LinkedIn",
    description: "Let's connect professionally",
    href: "https://www.linkedin.com/in/mebrukamohammed",
    icon: LinkedinIcon,
  },
  {
    name: "WhatsApp",
    description: "Have a quick conversation",
    href: "https://wa.me/251993092854",
    icon: WhatsappIcon,
  },
  {
    name: "Telegram",
    description: "Reach me on Telegram",
    href: "https://t.me/Mebubliss",
    icon: TelegramIcon,
  },
  {
    name: "GitHub",
    description: "Explore my work and projects",
    href: "https://github.com/mebrukamohammed",
    icon: GithubIcon,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Unable to copy email:", error);
    }
  }

  return (
    <main className="contact-page">

      {/* INTRODUCTION */}
      <section className="contact-hero">

        <span className="contact-eyebrow">
          HAVE SOMETHING IN MIND?
        </span>

        <h1>
          LET'S <span>CONNECT.</span>
        </h1>

        <p>
          Whether you have an interesting project, an opportunity,
          a collaboration idea, or simply want to say hello,
          I'd be happy to hear from you.
        </p>

      </section>

      {/* EMAIL SECTION */}
      <section className="contact-email-section">

        <div className="contact-email-heading">
          <span className="contact-icon">✉</span>

          <div>
            <h2>Drop me an email</h2>
            <p>The best way to reach me directly.</p>
          </div>
        </div>

        <div className="email-card">

          <a href={`mailto:${email}`} className="email-address">
            {email}
          </a>

          <button
            type="button"
            onClick={handleCopy}
            className={`copy-button ${copied ? "copied" : ""}`}
          >
            {copied ? "Copied ✓" : "Copy email"}
          </button>

        </div>

        <a href={`mailto:${email}`} className="email-action">
          Send me a message <span>↗</span>
        </a>

      </section>

      {/* SOCIAL CONNECTIONS */}
      <section className="contact-social-section">

        <div className="contact-section-heading">
          <span>01 / SOCIAL CONNECTIONS</span>
          <h2>Find me elsewhere.</h2>
        </div>

        <div className="contact-methods">

          {contactMethods.map((method, index) => {
            const Icon = method.icon;

            return (
              <a
                href={method.href}
                key={method.name}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method-card"
                style={{ "--card-index": index }}
              >
                <div className="contact-method-icon">
                  <Icon />
                </div>

                <div className="contact-method-info">
                  <h3>{method.name}</h3>
                  <p>{method.description}</p>
                </div>

                <span className="contact-arrow">↗</span>
              </a>
            );
          })}

        </div>

      </section>

      {/* CLOSING MESSAGE */}
      <section className="contact-closing">
        <p>
          Good things begin with a conversation.
          <span> Let's make something meaningful.</span>
        </p>
      </section>

    </main>
  );
}