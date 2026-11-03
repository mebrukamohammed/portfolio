"use client";

import Image from "next/image";
import { useState } from "react";
import { GithubIcon } from "../../icons";
import "./project.css";

const allProjects = [
  {
    id: 1,
    title: "SocialHub",
    description:
      "A social networking application where users can share thoughts, publish posts, and interact with other people.",
    image: "/Arteta.png",
    category: "React",
    href: "https://github.com/mebrukamohammed",
  },
  {
    id: 2,
    title: "GitHub User Finder",
    description:
      "A web application that allows users to search GitHub profiles and explore their public statistics.",
    image: "/github-finder.jpg",
    category: "HTML/CSS/JS",
    href: "https://github.com/mebrukamohammed/github-user-founder",
  },
  {
    id: 3,
    title: "Expense Tracker",
    description:
      "An expense tracking application that records and calculates expenses and deposits.",
    image: "/expense-tracker.jpg",
    category: "HTML/CSS/JS",
    href: "https://github.com/mebrukamohammed/expense-tracker",
  },
  {
    id: 4,
    title: "Color Palette Generator",
    description:
      "A simple application for generating and exploring color hex codes.",
    image: "/Arteta.png",
    category: "HTML/CSS/JS",
    href: "https://github.com/mebrukamohammed/color-pallete-generator",
  },
  {
    id: 5,
    title: "Quiz App",
    description:
      "A quiz platform that presents general knowledge questions and evaluates user answers.",
    image: "/Arteta.png",
    category: "HTML/CSS/JS",
    href: "https://github.com/mebrukamohammed/quiz-app",
  },
  {
    id: 6,
    title: "Kanban Board",
    description:
      "A task management board for organizing activities and tracking daily progress.",
    image: "/kanban-board.jpg",
    category: "HTML/CSS/JS",
    href: "https://github.com/mebrukamohammed/kanban-board-sample",
  },
  {
    id: 7,
    title: "Movie Base",
    description:
      "A React application for searching movies and saving favorites.",
    image: "/Arteta.png",
    category: "React",
    href: "https://github.com/mebrukamohammed/movie-app-react",
  },
  {
    id: 8,
    title: "Reading Evaluation — NVIDIA",
    description:
      "A children's reading evaluator using speech recognition and pronunciation assessment.",
    image: "/Arteta.png",
    category: "Python",
    href: "https://gist.github.com/mebrukamohammed/270b94a51afee66f7c0f8739720bd257",
  },
  {
    id: 9,
    title: "Reading Evaluation — Meta",
    description:
      "A children's reading evaluator using Meta's Wav2Vec model with engineered scoring layers.",
    image: "/Arteta.png",
    category: "Python",
    href: "https://gist.github.com/mebrukamohammed/e4e3f97ee2b9b049043e0ba7516f6f0f",
  },
  {
    id: 10,
    title: "Next Game Level Predictor",
    description:
      "A supervised learning engine that predicts the appropriate game level for a student.",
    image: "/Arteta.png",
    category: "Supervised Learning",
    href: "https://gist.github.com/mebrukamohammed/110df967fcd26a7b84a0a854c2a7cf9b",
  },
  {
    id: 11,
    title: "Churn Predictor",
    description:
      "An XGBoost classification model that categorizes churn probability as high, medium, or low.",
    image: "/Arteta.png",
    category: "Supervised Learning",
    href: "https://gist.github.com/mebrukamohammed/ea7df510e1e6208a0421c56cc497dc81",
  },
  {
    id: 12,
    title: "E-learning Adoption Predictor",
    description:
      "A Random Forest classifier that predicts the probability of a school adopting e-learning.",
    image: "/Arteta.png",
    category: "Supervised Learning",
    href: "https://gist.github.com/mebrukamohammed/1f51dca7df7c3649535cb976cef06b3b",
  },
  {
    id: 13,
    title: "Nginx Data Analysis",
    description:
      "An analytical project exploring production application Nginx report logs.",
    image: "/Arteta.png",
    category: "Data Analysis",
    href: null,
  },
  {
    id: 14,
    title: "Mama Africa",
    description:
      "A children's geography game exploring African countries and their cultures.",
    image: "/Arteta.png",
    category: "Game Design",
    href: "https://docs.google.com/document/d/1QR9IQgnW2aW_eT_0IKZSz_46KAeoWit1Ttsehp4NLnw/edit?usp=sharing",
  },
  {
    id: 15,
    title: "Parrot Game",
    description:
      "A children's reading and pronunciation evaluation game integrated into the Kokeb Temari learning platform.",
    image: "/Arteta.png",
    category: "Python",
    href: "https://play.google.com/store/apps/details?id=com.kokebtemari.app&pli=1",
  },
];

const technologies = [
  "All Technologies",
  ...new Set(allProjects.map((project) => project.category)),
];

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState("All Technologies");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedTech === "All Technologies"
      ? allProjects
      : allProjects.filter(
          (project) => project.category === selectedTech
        );

  function handleCardClick(projectId) {
    setSelectedProject((current) =>
      current === projectId ? null : projectId
    );
  }

  function handleFilterChange(e) {
    setSelectedTech(e.target.value);
    setSelectedProject(null);
  }

  return (
    <main className="projects-page">

     
      <header className="projects-header">
        <span className="projects-eyebrow">
          MY CREATIVE WORK
        </span>

        <h1>
          SELECTED <span>PROJECTS.</span>
        </h1>

        <p>
          A collection of things I've built, explored,
          and learned along my development journey.
        </p>
      </header>

    
      <section className="projects-toolbar">
        <div>
          <h2>Featured Work</h2>
          <span>
            {filteredProjects.length} projects
          </span>
        </div>

        <select
          value={selectedTech}
          onChange={handleFilterChange}
          aria-label="Filter projects by technology"
        >
          {technologies.map((technology) => (
            <option key={technology} value={technology}>
              {technology}
            </option>
          ))}
        </select>
      </section>

      {/* PROJECT GRID */}
      <section
        className={`projects-grid ${
          selectedProject !== null ? "has-selection" : ""
        }`}
      >
        {filteredProjects.map((project) => {
          const isSelected = selectedProject === project.id;
          const isDimmed =
            selectedProject !== null && !isSelected;

          return (
            <article
              key={project.id}
              className={`project-card ${
                isSelected ? "selected" : ""
              } ${isDimmed ? "dimmed" : ""}`}
              onClick={() => handleCardClick(project.id)}
              onKeyDown={(e) => {
                if (
                  e.target === e.currentTarget &&
                  (e.key === "Enter" || e.key === " ")
                ) {
                  e.preventDefault();
                  handleCardClick(project.id);
                }
              }}
              tabIndex={0}
              role="button"
              aria-pressed={isSelected}
              aria-label={`Focus ${project.title} project`}
            >
              {/* IMAGE */}
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw"
                />

                <span className="project-category">
                  {project.category}
                </span>

                {isSelected && (
                  <button
                    className="project-close"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(null);
                    }}
                    aria-label="Close focused project"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* CONTENT */}
              <div className="project-content">
                <div>
                  <span className="project-number">
                    PROJECT / {String(project.id).padStart(2, "0")}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>
                </div>

                <div className="project-actions">
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="project-link"
                    >
                      <GithubIcon />
                      <span>
                        {project.href.includes("github.com")
                          ? "View source"
                          : "Explore project"}
                      </span>
                      <span className="arrow">↗</span>
                    </a>
                  )}

                  <span className="focus-hint">
                    {isSelected ? "Focused" : "Click to focus ↗"}
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {filteredProjects.length === 0 && (
        <p className="projects-empty">
          No projects found for this technology.
        </p>
      )}

      {/* BOTTOM */}
      <footer className="projects-footer">
        <p>
          Every project is another step forward.
          <span> More to come.</span>
        </p>
      </footer>

    </main>
  );
}