import Link from "next/link";
import {
  WhatsappIcon,
  LinkedinIcon,
  GlobeIcon,
  TelegramIcon,
  GithubIcon,
} from "@/app/icons";

import "./footer.css";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/mebrukamohammed",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mebrukamohammed",
    icon: LinkedinIcon,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/251993092854",
    icon: WhatsappIcon,
  },
  {
    name: "Telegram",
    href: "https://t.me/Mebubliss",
    icon: TelegramIcon,
  },
];

const quickLinks = [
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand section */}
        <div className="footer-brand">
          <h2>Mebruka Mohammed</h2>

          <p>
           junior Software developer building towards leveraging industrial skills.
            Passionate about creating meaningful technology
            and solving real-world problems.
          </p>
        </div>

        {/* Navigation */}
        <nav className="footer-navigation" aria-label="Footer navigation">
          <h3>Quick Links</h3>

          <ul>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social links */}
        <div className="footer-socials">
          <h3>Let's Connect</h3>

          <div className="social-links">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

      </div>

      {/* Bottom section */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Mebruka Mohammed.
          All rights reserved.
        </p>

        <p>Designed & built with passion.</p>
      </div>

    </footer>
  );
}