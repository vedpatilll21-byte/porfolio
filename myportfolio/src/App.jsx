import React from "react";

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        html{
          scroll-behavior:smooth;
        }

        body{
          font-family:'Inter', sans-serif;
          background:#0b1220;
          color:white;
        }

        /* BACKGROUND GLOW */
        body::before{
          content:"";
          position:fixed;
          width:600px;
          height:600px;
          background:radial-gradient(circle,#7c3aed,transparent 60%);
          top:-150px;
          right:-150px;
          opacity:.5;
          filter:blur(60px);
          z-index:-1;
        }

        body::after{
          content:"";
          position:fixed;
          width:600px;
          height:600px;
          background:radial-gradient(circle,#2563eb,transparent 60%);
          bottom:-150px;
          left:-150px;
          opacity:.4;
          filter:blur(60px);
          z-index:-1;
        }

        /* NAV (FIXED) */
        nav{
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:18px 8%;

          position:fixed;
          top:0;
          left:0;
          width:100%;

          background:rgba(11,18,32,0.6);
          backdrop-filter:blur(12px);
          -webkit-backdrop-filter:blur(12px);

          border-bottom:1px solid rgba(255,255,255,0.08);
          z-index:1000;
        }

        .logo{
          font-family:'Space Grotesk', sans-serif;
          font-size:18px;
          font-weight:700;
          color:#e2e8f0;
        }

        nav ul{
          display:flex;
          list-style:none;
          gap:20px;
        }

        nav a{
          color:#cbd5e1;
          text-decoration:none;
          font-size:14px;
        }

        nav a:hover{
          color:white;
        }

        /* HERO */
        .hero{
          height:100vh;
          display:flex;
          flex-direction:column;
          justify-content:center;
          padding:100px 8% 0 8%;
          gap:10px;
        }

        .name{
          font-family:'Space Grotesk', sans-serif;
          font-size:clamp(3.5rem,6vw,5.5rem);
          font-weight:800;
          line-height:1.05;
          background:linear-gradient(90deg,#a78bfa,#60a5fa,#22d3ee);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .role{
          font-size:16px;
          color:#cbd5e1;
          max-width:750px;
          line-height:1.7;
        }

        .sub{
          font-size:14px;
          color:#94a3b8;
          max-width:700px;
        }

        /* SECTIONS */
        section{
          padding:80px 8%;
        }

        .title{
          font-size:22px;
          font-weight:700;
          margin-bottom:15px;
          color:#e2e8f0;
        }

        /* CARDS */
        .card{
          background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.08);
          padding:18px;
          border-radius:12px;
          margin-bottom:12px;
          transition:.2s;
        }

        .card:hover{
          transform:translateY(-4px);
          border-color:#7c3aed;
        }

        .card h3{
          color:#a78bfa;
          margin-bottom:6px;
        }

        .card p{
          color:#cbd5e1;
          font-size:14px;
          line-height:1.6;
        }

        /* FOOTER */
        footer{
          text-align:center;
          padding:30px 8%;
          color:#94a3b8;
          font-size:13px;
          border-top:1px solid rgba(255,255,255,0.08);
          margin-top:40px;
        }

        @media(max-width:768px){
          nav ul{display:none;}
        }
      `}</style>

      {/* NAV */}
      <nav>
        <div className="logo">Vedika Patil</div>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <div id="home" className="hero">
        <div className="name">Vedika Patil</div>

        <div className="role">
          Computer Engineering Student • Learning Full Stack Development
          (Frontend + Backend)
        </div>

        <div className="sub">
          Passionate about UI/UX design and building clean, user-friendly interfaces.
        </div>
      </div>

      {/* ABOUT */}
      <section id="about">
        <div className="title">About</div>

        <div className="card">
          <h3>Who I Am</h3>
          <p>
            I am a 3rd-year Computer Engineering student learning full stack
            development and exploring UI/UX design as a creative interest.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="title">Skills</div>

        <div className="card">
          <h3>Frontend</h3>
          <p>HTML, CSS, JavaScript, React basics</p>
        </div>

        <div className="card">
          <h3>Backend</h3>
          <p>Node.js, Express, APIs basics</p>
        </div>

        <div className="card">
          <h3>UI/UX Interest</h3>
          <p>Figma basics, layout design, clean UI thinking</p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="title">Projects</div>

        <div className="card">
          <h3>Beauty & Bloom</h3>
          <p>https://beauty-bloom.vercel.app</p>
          <p>E-commerce website project</p>
        </div>

        <div className="card">
          <h3>StudyFlow AI</h3>
          <p>https://studyflow-ai.vercel.app</p>
          <p>Startup MVP idea for student productivity</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="title">Contact Me</div>

        <div className="card">
          <h3>Email</h3>
          <p style={{ color: "#cbd5e1", fontSize: "15px" }}>
            📧 ved.patilll21@gmail.com
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Vedika Patil. All rights reserved.</p>
        <p style={{ marginTop: "6px", color: "#64748b" }}>
          Built with React • UI/UX Inspired Design • Full Stack Learning Journey
        </p>
      </footer>
    </>
  );
}