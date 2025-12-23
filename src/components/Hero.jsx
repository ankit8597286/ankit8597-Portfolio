// import profile from "../assets/profile.png";
// export default function Hero() {
//   return (
//     <section id="home" className="home">
//       <div className="home-content">
//         <h1>
//           Hi, I Am <span>Ankit Kumar</span>
//         </h1>
//         <h2>
//           And I'm a <span className="highlight">Programmer</span>
//         </h2>

//         <p>
//           I am a dedicated BCA student with strong interest in programming,
//           problem-solving and web development. I work with C, C++, Python,
//           HTML, CSS and JavaScript.
//         </p>

//         <div className="home-buttons">
//           <a href="#projects" className="btn-primary">
//             View Projects
//           </a>
//           <a href="#contact" className="btn-secondary">
//             Contact
//           </a>
//         </div>
//       </div>

//       <div className="home-image">
//         <div className="profile-container">
//           <img src={profile} alt="Ankit Kumar" />
//         </div>
//       </div>
//     </section>
//   );
// }

import profile from "../assets/profile.png";

export default function Hero() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const resetTilt = (e) => {
    e.currentTarget.style.transform =
      "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section id="home" className="home">
      <div className="home-content" data-aos="fade-right">
        <h1>
          Hi, I Am <span>Ankit Kumar</span>
        </h1>
        <h2>
          And I'm a <span className="highlight">Programmer</span>
        </h2>

        <p>
          I am a dedicated BCA student with strong interest in programming,
          problem-solving and web development. I work with C, C++, Python,
          HTML, CSS and JavaScript.
        </p>

        <div className="home-buttons" data-aos="fade-right">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Contact
          </a>
        </div>
      </div>

      <div className="home-image" data-aos="zoom-in">
        <div
          className="profile-tilt"
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
        >
          <img src={profile} alt="Ankit Kumar" />
        </div>
      </div>
    </section>
  );
}
