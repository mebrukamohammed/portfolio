import ImageSlider from "./ImageSlider";
import "./about.css";

export default function About() {
  return (
    <main className="about-page">

      <section className="about-container">

        {/* Introduction */}
        <div className="about-content">

          <span className="about-eyebrow">
            GET TO KNOW ME
          </span>

          <h1 className="about-heading">
            WHO <span>I AM.</span>
          </h1>

          <div className="about-text">

            <p>
              I'm Mebruka Mohammed, a third-year Computer Science
              student at Addis Ababa University, with a passion
              for technology, creativity, and building things
              that make a difference.
            </p>

            <p>
              My academic journey began at Alif KG-Primary School
              and continued at Memhir Akalwold Secondary School
              in Dessie, where I joined a special class cohort
              and graduated with highly distinguished marks
              in my national examinations.
            </p>

            <p>
              As technology continues to transform the world,
              and Ethiopia takes bold steps toward digitalization,
              I chose Computer Science as the foundation for
              contributing to that transformation.
            </p>

            <p>
              Since joining university, I've been committed to
              becoming a skilled software developer and a
              collaborative team player. I believe meaningful
              software is built through both technical expertise
              and teamwork.
            </p>

            <p>
              From frontend development with JavaScript and React
              to full-stack development with Next.js and supervised
              machine learning with Python, I'm continuously
              expanding my knowledge toward AI engineering,
              systems engineering, and software project management.
            </p>

          </div>

          <div className="about-signature">
            <span className="signature-line"></span>
            <span>Always learning. Always building.</span>
          </div>

        </div>

        {/* Image Slider */}
        <div className="about-visual">
          <div className="slider-frame">
            <ImageSlider />
          </div>

          <div className="visual-caption">
            <span>MY JOURNEY</span>
            <span>01 — 05</span>
          </div>
        </div>

      </section>

      {/* Closing statement */}
      <section className="about-bottom">
        <p>
          Curious by nature.
          <span> Driven by possibilities.</span>
        </p>
      </section>

    </main>
  );
}