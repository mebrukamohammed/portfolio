import Link from "next/link";

const Experience = () => {
  const certifications = [
    {
      title: "AI Unipod Timbuktoo",
      description: "AI bootcamp for university students arranged by UNDP, EAII, and AAU.",
      pdf: "/pdf/certificates.pdf",
    },
    {
      title: "Udacity Tech Skills",
      description: "6-month training program in programming, Android Development, Data Science, and AI.",
      pdf: "/pdf/certificates.pdf",
    },
    {
      title: "OutSkill GEN-AI Mastermind",
      description: "2-day training on generative AI principles, Claude, and n8n automation techniques.",
      pdf: "/pdf/outskill.pdf",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12 text-zinc-300">
      {/* Intro Section */}
      <section className="space-y-3">
        <h1 className="text-3xl font-bold text-white">Experience & Growth</h1>
        <h2 className="text-lg font-medium text-zinc-400">
          Learning by building meaningful solutions
        </h2>
        <p className="text-zinc-400 text-sm leading-relaxed">
          As a Computer Science major in my 3rd year, I have focused on continuously expanding my technical skill set—ranging from applied AI products and software testing to full-stack web applications.
        </p>
      </section>

      {/* Experience Section */}
      <section className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl space-y-3">
        <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold">
          Current Experience
        </span>
        <h2 className="text-xl font-bold text-white">Girar System Technology</h2>
        <p className="text-sm text-zinc-400 font-medium">
          Software Engineering & Applied AI Development
        </p>
        <span className="text-xs text-zinc-500 block">January 2025 – Present</span>
        
        <p className="text-sm leading-relaxed text-zinc-300 mt-3">
          Working with AI products involving supervised learning and NLP, alongside software testing and architecture design. As part of the company&apos;s flagship product, <strong>Kokeb Temari</strong>, I worked on building a kids&apos; reading evaluator called the Parrot Game, while contributing to game software design and platform features. Beyond technical engineering, I took responsibility for publicizing and hosting workshops for educational stakeholders, including the Addis Ababa Education Bureau, and participated in seminars including UNDP AI Unipod and KOICA.
        </p>
      </section>

      {/* Personal Learning Section */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">Personal Learning & Projects</h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          The current tech paradigm requires developers to be versatile yet specialized. I continuously develop my capabilities through structured training and self-directed projects—progressing from web fundamentals to React and Next.js. Because hands-on building is key to mastery, I design projects that highlight core technical understanding. Beyond writing code, I incorporate analytical specification, maintainable architecture, and project management principles into my workflow.
        </p>
        
        <div className="pt-2">
          <Link
            href="/project"
            className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-sm font-medium border border-zinc-700 transition-colors"
          >
            Explore My Projects &rarr;
          </Link>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-white">Trainings & Certifications</h2>
          <span className="text-xs text-zinc-400">Selected Courses</span>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {certifications.map((certificate, index) => (
            <li
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-white">{certificate.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {certificate.description}
                </p>
              </div>

              {certificate.pdf && (
                <a
                  href={certificate.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center mt-4 py-2 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-medium transition-colors border border-zinc-700"
                >
                  View Certificate (PDF)
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Experience;