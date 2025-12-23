export default function Contact() {
  return (
    <section
      id="contact"
      style={{ marginTop: "120px", textAlign: "center" }} data-aos="fade-up"
    >
      <h2>Contact Me</h2>
      <p style={{ color: "#9ca3af" }}>
        Let’s work together
      </p>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        style={styles.form} data-aos="fade-up"
      >
        
        <input
          type="hidden"
          name="access_key"
          value="63b6e8cc-19cd-4aa2-9eaa-1dd30ebc3a32"
        />

        <input
          type="hidden"
          name="subject"
          value="New Contact Form Submission"
        />
        <input
          type="hidden"
          name="from_name"
          value="Portfolio Website"
        />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={styles.input}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          required
          style={styles.input}
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          style={styles.textarea}
        />

        <button
          type="submit"
          style={styles.button}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 0 25px rgba(56,189,248,0.9)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

const styles = {
  form: {
    maxWidth: "500px",
    margin: "40px auto",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "0 20px",
  },

  input: {
    padding: "12px 14px",
    borderRadius: "10px",
    border: "1px solid #1f2937",
    background: "#020617",
    color: "#fff",
    outline: "none",
    fontSize: "0.95rem",
  },

  textarea: {
    padding: "12px 14px",
    borderRadius: "10px",
    border: "1px solid #1f2937",
    background: "#020617",
    color: "#fff",
    outline: "none",
    resize: "none",
    fontSize: "0.95rem",
  },

  button: {
    padding: "12px",
    borderRadius: "25px",
    border: "none",
    background: "#38bdf8",
    color: "#020617",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: "10px",
  },
};
