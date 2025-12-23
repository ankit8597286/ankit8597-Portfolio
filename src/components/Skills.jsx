import C3d from "../assets/3d/C.png";
import Cpp3d from "../assets/3d/Cpp.png";
import Python3d from "../assets/3d/Python.png";
import HTML3d from "../assets/3d/HTML.png";
import CSS3d from "../assets/3d/CSS.png";
import js3d from "../assets/3d/js.png";
import React3d from "../assets/3d/React.png";
import Nodejs3d from "../assets/3d/Nodejs.png";
import Express3d from "../assets/3d/Express.png";
import PHP3d from "../assets/3d/PHP.png";
import Mongodb3d from "../assets/3d/Mongodb.svg";

const frontendSkills = [
  { img: HTML3d, name: "HTML" },
  { img: CSS3d, name: "CSS" },
  { img: js3d, name: "JavaScript" },
  { img: React3d, name: "React" },
];

const backendSkills = [
  { img: Nodejs3d, name: "Node.js" },
  { img: Express3d, name: "Express.js" },
  { img: PHP3d, name: "PHP" },
  { img: Mongodb3d, name: "MongoDB" },
];

const languageSkills = [
  { img: C3d, name: "C" },
  { img: Cpp3d, name: "C++" },
  { img: Python3d, name: "Python" },
];

export default function Skills() {
  return (
    <section id="skills" style={styles.section} data-aos="fade-up" data-aos-delay="200">
      <h2 style={styles.title}>Technical Skills</h2>
      <p style={styles.desc}>Technologies I work with</p>

      <h3 style={styles.subTitle}>Frontend</h3>
      <div style={styles.grid} data-aos="fade-right" data-aos-delay="300">
        {frontendSkills.map((skill, i) => (
          <Skill key={i} img={skill.img} name={skill.name} />
        ))}
      </div>

      <h3 style={styles.subTitle}>Backend</h3>
      <div style={styles.grid} data-aos="fade-left">
        {backendSkills.map((skill, i) => (
          <Skill key={i} img={skill.img} name={skill.name} />
        ))}
      </div>

     
      <h3 style={styles.subTitle}>Programming Languages</h3>
      <div style={styles.grid} data-aos="fade-up">
        {languageSkills.map((skill, i) => (
          <Skill key={i} img={skill.img} name={skill.name} />
        ))}
      </div>
    </section>
  );
}

function Skill({ img, name }) {
  return (
    <div
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          "rotateX(15deg) rotateY(-15deg) scale(1.1)";
        e.currentTarget.style.boxShadow =
          "0 0 25px rgba(56,189,248,0.9)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "rotateX(0deg) rotateY(0deg) scale(1)";
        e.currentTarget.style.boxShadow =
          "0 10px 30px rgba(0,0,0,0.4)";
      }}
    >
      <img src={img} alt={name} style={styles.icon} />
      <p style={styles.skillName}>{name}</p>
    </div>
  );
}

const styles = {
  section: {
    marginTop: "120px",
    textAlign: "center",
  },

  title: {
    fontSize: "2.5rem",
  },

  desc: {
    color: "#94a3b8",
    marginTop: "5px",
  },

  subTitle: {
    marginTop: "60px",
    marginBottom: "20px",
    fontSize: "1.8rem",
    color: "#38bdf8",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "35px",
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px",
  },

  card: {
    padding: "25px",
    background: "linear-gradient(145deg, #020617, #0f172a)",
    borderRadius: "20px",
    color: "#fff",
    transition: "all 0.4s ease",
    transformStyle: "preserve-3d",
    cursor: "pointer",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },

  icon: {
    width: "90px",
    height: "90px",
    objectFit: "contain",
    marginBottom: "12px",
  },

  skillName: {
    marginTop: "10px",
    fontWeight: "600",
    letterSpacing: "0.5px",
  },
};
