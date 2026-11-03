import Link from "next/link";
import Image from "next/image";
import "./home.css";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/project" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <main className="home-page">

      <header className="home-header">
        <Link href="/" className="home-logo">
          Mebruka<span>.</span>
        </Link>

        
      </header>

      {/* Hero */}
      <section className="hero-section">

        <div className="hero-content">
          <span className="hero-intro">
            HELLO, I'M MEBRUKA
          </span>

          <h1>
            Building things
            <br />
            that <span>matter.</span>
          </h1>

          <p className="hero-description">
            I'm a software developer building toward implementing technology for the coomon good of the society.
            I enjoy turning ideas into meaningful digital experiences
            and solving real-world problems through technology.
          </p>

          <div className="hero-actions">
            <Link href="/project" className="primary-action">
              See my projects <span>↗</span>
            </Link>

            <Link href="/contact" className="secondary-action">
              Let's talk <span>→</span>
            </Link>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="image-decoration"></div>

          <Image
            src="/Arteta.png"
            alt="Mebruka's profile picture"
            width={440}
            height={440}
            priority
            className="hero-image"
          />

          <span className="image-caption">
            SOFTWARE DEVELOPER · AI ENTHUSIAST
          </span>
        </div>

      </section>

      {/* Bottom accent */}
      <div className="home-bottom">
        <span>CREATIVE THINKING. MEANINGFUL BUILDING.</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>

    </main>
  );
}