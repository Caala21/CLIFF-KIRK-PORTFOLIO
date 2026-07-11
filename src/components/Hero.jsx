import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const words = ["web", "people", "the future", "Kenya"];

function Typewriter() {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout;
    if (!deleting) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 90);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 60);
      } else {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % words.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIdx]);

  return (
    <span style={{ color: "#00E5FF", position: "relative" }}>
      {displayed}
      <span
        style={{
          display: "inline-block", width: "3px", height: "1em",
          background: "#00E5FF", marginLeft: "3px", verticalAlign: "middle",
          animation: "cursorBlink 1s step-end infinite",
        }}
      />
      <style>{`@keyframes cursorBlink { 50% { opacity: 0; } }`}</style>
    </span>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const pills = ["React / Redux", "DevOps", "Google Cloud", "Salesforce CRM", "LLB Candidate · UoN"];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "flex-start",
        padding: "8rem 2.5rem 4rem", maxWidth: "900px", margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Grid dots */}
      <div style={{
        position: "absolute", inset: 0, zIndex: -1,
        backgroundImage: "radial-gradient(rgba(30,42,58,0.8) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
        maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
      }} />

      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p
          variants={item}
          style={{
            fontSize: "0.8rem", letterSpacing: "0.18em", textTransform: "uppercase",
            color: "#00E5FF", marginBottom: "1.4rem",
            display: "flex", alignItems: "center", gap: "0.6rem",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          <span style={{ display: "inline-block", width: 24, height: 1, background: "#00E5FF" }} />
          Nairobi, Kenya · Open to opportunities
        </motion.p>

        <motion.h1
          variants={item}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2.6rem, 7vw, 5rem)",
            fontWeight: 700, lineHeight: 1.1,
            letterSpacing: "-0.03em", marginBottom: "1.6rem",
          }}
        >
          Cliff Njogu —<br />
          Building for the <Typewriter />
        </motion.h1>

         <motion.p
  variants={item}
  style={{
    fontSize: "1.1rem", color: "#8892A4",
    maxWidth: "580px", marginBottom: "2rem", lineHeight: 1.7,
  }}
>
  Legal Professional · DevOps Engineer · Front-End Developer.
  Based in Nairobi, serving international clients across web development,
  legal tech, and automation — with 9+ years of professional experience
  and 22+ certifications backing every project.
        </motion.p>

        {/* Pills */}
        <motion.div
          variants={item}
          style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginBottom: "2.5rem" }}
        >
          {pills.map((p) => (
            <motion.span
              key={p}
              whileHover={{ scale: 1.06, borderColor: "#00E5FF", color: "#F0EDE8" }}
              style={{
                fontSize: "0.78rem", padding: "0.3rem 0.9rem",
                border: "1px solid #1E2A3A", borderRadius: "20px",
                color: "#8892A4", fontFamily: "'Space Grotesk', sans-serif",
                cursor: "default", transition: "color 0.2s",
              }}
            >
              {p}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div variants={item} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link to="projects" smooth duration={600} offset={-80}>
            <motion.button
              whileHover={{ scale: 1.03, background: "#00E5FF", color: "#0A0F1E" }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "0.85rem 2rem", background: "transparent",
                border: "1.5px solid #00E5FF", color: "#00E5FF",
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600,
                fontSize: "0.95rem", letterSpacing: "0.04em",
                borderRadius: "3px", cursor: "pointer", transition: "background 0.2s, color 0.2s",
              }}
            >
              View Projects ↓
            </motion.button>
          </Link>
          <Link to="contact" smooth duration={600} offset={-80}>
            <motion.button
              whileHover={{ scale: 1.03, borderColor: "#8892A4", color: "#F0EDE8" }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "0.85rem 2rem", background: "transparent",
                border: "1.5px solid #1E2A3A", color: "#8892A4",
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600,
                fontSize: "0.95rem", borderRadius: "3px", cursor: "pointer",
                transition: "border-color 0.2s, color 0.2s",
              }}
            >
              Get in Touch
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: "absolute", bottom: "2.5rem", left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem",
        }}
      >
        <span style={{ fontSize: "0.7rem", color: "#8892A4", letterSpacing: "0.1em", textTransform: "uppercase" }}>scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          style={{ width: 1, height: 32, background: "linear-gradient(to bottom, #8892A4, transparent)" }}
        />
      </motion.div>
    </section>
  );
}
