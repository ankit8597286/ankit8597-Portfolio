export default function Certificates() {
  return (
    <section
      id="certificates"
      style={{ marginTop: "120px", textAlign: "center" }} data-aos="fade-up"
    >
      <h2>Certifications</h2>
      <p style={{ color: "#9ca3af" }}>
        Courses & certifications I’ve completed
      </p>

      <div style={styles.grid}>
        <Card
          img="/certificates/html.jpg"
          title="HTML"
          link="/certificates/html.pdf"
        />

        <Card
          img="/certificates/neptel.jpg"
          title="NPTEL Python"
          link="/certificates/Python for Data Science.pdf"
        />

        <Card
          img="/certificates/C programming.jpg"
          title="C Basic"
          link="/certificates/C programming.pdf"
        />

        <Card
          img="/certificates/Generative AI.jpg"
          title="Generative AI"
          link="/certificates/Generative AI.pdf"
        />

        <Card
          img="/certificates/digital.jpg"
          title="Digital"
          link="/certificates/digital.jpg"
        />

        <Card
          img="/certificates/photo.jpg"
          title="Introduction to Data Science"
          link="/certificates/photo.jpg"
        />

        <Card
          img="/certificates/Web Development.jpg"
          title="Web Development with MERN"
          link="/certificates/Web Development.pdf"
        />

        <Card
          img="/certificates/IKS.jpeg"
          title="Indian Knowledge Systems"
          link="/certificates/IKS.jpeg"
        />

        <Card
          img="/certificates/JavaScript.jpg"
          title="JavaScript"
          link="/certificates/JavaScript.pdf"
        />

      </div>
    </section>
  );
}

function Card({ img, title, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      style={styles.card} data-aos="flip-left"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px) scale(1.05)";
        e.currentTarget.style.boxShadow =
          "0 0 30px rgba(56,189,248,0.9)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
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

    /* 🔥 MAGIC LINE — handles single card centering */
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",

    gap: "30px",
    maxWidth: "1100px",
    margin: "40px auto",
    padding: "0 20px",

    /* 🔥 THIS ensures last single card stays centered */
    placeItems: "center",
  },

  card: {
    width: "100%",
    maxWidth: "300px",
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
    height: "170px",
    objectFit: "cover",
  },

  info: {
    padding: "16px",
  },

  title: {
    fontSize: "1.1rem",
    fontWeight: "600",
  },
};

