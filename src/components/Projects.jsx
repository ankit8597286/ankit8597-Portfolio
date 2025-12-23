import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ marginTop: "120px", textAlign: "center" }} data-aos="fade-up"
    >
      <h2>Projects</h2>
      <p style={{ color: "#9ca3af" }}>
        Some things I have built recently
      </p>

      <div style={styles.grid}>
        <ProjectCard
          img={project1}
          title="Shop Website"
          link="https://jkplyhardware.github.io/JKPlyHardware/"
        />

        <ProjectCard
          img={project2}
          title="Project 2"
          link="https://vaishnavi-728.github.io/vashnavi/"
        />
      </div>
    </section>
  );
}


function ProjectCard({ img, title, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      style={styles.card} data-aos="zoom-in"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          "translateY(-12px) scale(1.05)";
        e.currentTarget.style.boxShadow =
          "0 0 30px rgba(56,189,248,0.9)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow =
          "0 10px 30px rgba(0,0,0,0.4)";
      }}
    >
      <img src={img} alt={title} style={styles.image} />
      <div style={styles.info}>
        <h3 style={styles.title}>{title}</h3>
      </div>
    </a>
  );
}

const styles = {
  grid: {
    display: "grid",

    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",

    gap: "30px",
    maxWidth: "1000px",
    margin: "40px auto",
    padding: "0 20px",

    placeItems: "center",
  },

  card: {
    width: "100%",
    maxWidth: "320px",
    background: "linear-gradient(145deg, #020617, #0f172a)",
    borderRadius: "18px",
    overflow: "hidden",
    textDecoration: "none",
    color: "#fff",
    transition: "all 0.4s ease",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },

  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },

  info: {
    padding: "16px",
  },

  title: {
    fontSize: "1.2rem",
    fontWeight: "600",
  },
};
