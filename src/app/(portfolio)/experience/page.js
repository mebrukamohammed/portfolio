import Link from "next/link";
import "./experience.css";

const certifications = [
  {
    title: "AI Unipod Timbuktoo",
    category: "Artificial Intelligence",
    description:
      "AI bootcamp for university students arranged by UNDP, EAII, and AAU.",
    pdf: "/pdf/certificates.pdf",
  },
  {
    title: "Udacity Tech Skills",
    category: "Technical Training",
    description:
      "Six-month training program covering programming, Android Development, Data Science, and AI.",
    pdf: "/pdf/certificates.pdf",
  },
  {
    title: "OutSkill GEN-AI Mastermind",
    category: "Generative AI",
    description:
      "Two-day training on generative AI principles, Claude, and n8n automation techniques.",
    pdf: "/pdf/outskill.pdf",
  },
];

export default function Experience() {
  return (
    <main className="experience-page">
      <header className="experience-header">
        <span className="experience-eyebrow">
          MY PROFESSIONAL JOURNEY
        </span>

        <h1>
          EXPERIENCE <span>& GROWTH.</span>
        </h1>

        <p>
          Learning by building meaningful solutions.
          Exploring technology, developing practical skills,
          and growing through real-world experiences.
        </p>
      </header>

      {/* PROFESSIONAL EXPERIENCE */}
      <section className="experience-section">

        <div className="section-heading">
          <span className="section-number">01</span>
          <h2>Professional Experience</h2>
        </div>

        <article className="experience-card">

          <div className="experience-card-top">
            <div>
              <span className="experience-tag">
                CURRENT EXPERIENCE
              </span>

              <h3>Girar System Technology</h3>

              <p className="experience-role">
                Software Engineering & Applied AI Development
              </p>
            </div>

            <span className="experience-date">
              JAN 2025 — PRESENT
            </span>
          </div>

          <div className="experience-divider"></div>

          <p className="experience-description">
            Working with AI products involving supervised learning
            and Natural Language Processing (NLP), alongside
            software testing and software design.

            As part of the company's flagship product,
            <strong> Kokeb Temari</strong>, I contributed to
            developing a children's reading evaluator called
            the Parrot Game, while participating in game
            software design and platform features.
          </p>

          <p className="experience-description">
            Beyond technical engineering, I also took responsibility
            for publicizing and hosting workshops for educational
            stakeholders, including the Addis Ababa Education Bureau.
            I participated in seminars including UNDP AI Unipod
            and KOICA.
          </p>

          <div className="experience-tags">
            <span>Python</span>
            <span>Supervised Learning</span>
            <span>NLP</span>
            <span>Software Testing</span>
            <span>Software Design</span>
          </div>

        </article>
      </section>
      <section className="experience-section learning-section">

        <div className="section-heading">
          <span className="section-number">02</span>
          <h2>Personal Learning & Projects</h2>
        </div>

        <div className="learning-content">

          <div>
            <h3>Beyond the Classroom.</h3>

            <p>
              I continuously develop my capabilities through
              structured training and self-directed projects,
              progressing from web fundamentals to React
              and Next.js.
            </p>

            <p>
              I believe hands-on building is essential to
              mastering technology. Through personal projects,
              I focus on understanding technical concepts,
              designing maintainable architecture, and
              applying software engineering principles.
            </p>
          </div>

          <div className="learning-visual">
            <span className="learning-symbol">&lt;/&gt;</span>
            <p>LEARN. BUILD. IMPROVE.</p>
          </div>

        </div>

        <Link href="/project" className="experience-project-link">
          Explore My Projects <span>↗</span>
        </Link>

      </section>

      {/* CERTIFICATIONS */}
      <section className="experience-section certification-section">

        <div className="section-heading">
          <span className="section-number">03</span>

          <div>
            <h2>Training & Certifications</h2>
            <p>Continuous learning through structured programs.</p>
          </div>
        </div>

        <div className="certification-grid">

          {certifications.map((certificate) => (
            <article
              className="certification-card"
              key={certificate.title}
            >

              <div>
                <span className="certificate-category">
                  {certificate.category}
                </span>

                <h3>{certificate.title}</h3>

                <p>{certificate.description}</p>
              </div>

              <a
                href={certificate.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                View Certificate <span>↗</span>
              </a>

            </article>
          ))}

        </div>

      </section>

      {/* CLOSING */}
      <section className="experience-closing">
        <p>
          Learning is a continuous process.
          <span> I'm just getting started.</span>
        </p>
      </section>

    </main>
  );
}