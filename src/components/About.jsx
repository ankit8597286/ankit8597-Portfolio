export default function About() {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="about-container" data-aos="fade-up">
        <div className="about-card">
          <h3>About Me</h3>
          <p>
            I am Ankit Kumar, currently pursuing a Bachelor of Computer
            Applications (BCA) at GNIOT, Greater Noida. I focus on building a
            strong foundation in programming, data structures and software
            development.
          </p>

          <div className="tags">
            <span>C</span>
            <span>C++</span>
            <span>Python</span>
            <span>DSA</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </div>

        <div className="about-card" >
          <h3>What I Do</h3>
          <p>
            I work on programming, logical problem-solving and small projects
            using C, C++, Python and web technologies to improve my skills.
          </p>
        </div>

        <div className="about-card">
          <h3>Currently Learning</h3>
          <p>
            I am currently strengthening my knowledge of Data Structures,
            OOP concepts and modern web development.
          </p>
        </div>
      </div>
    </section>
  );
}
