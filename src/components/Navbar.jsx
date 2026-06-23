import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const links = ["Projects", "About", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "1.1rem 2.5rem",
        background: scrolled ? "rgba(10,15,30,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #1E2A3A" : "1px solid transparent",
        transition: "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
      }}
    >
      {/* Logo */}
      <motion.a
        href="#"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700, fontSize: "1.2rem",
          color: "#F0EDE8", textDecoration: "none", letterSpacing: "-0.02em",
        }}
        whileHover={{ scale: 1.04 }}
      >
        cliff<span style={{ color: "#00E5FF" }}>.</span>dev
      </motion.a>

      {/* Desktop links */}
      <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }} className="nav-desktop">
        {links.map((l) => (
          <li key={l}>
            <Link
              to={l.toLowerCase()}
              smooth duration={600}
              offset={-80}
              style={{
                color: "#8892A4", textDecoration: "none", fontSize: "0.9rem",
                cursor: "pointer", fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500, transition: "color 0.2s",
              }}
              onMouseEnter={e => e.target.style.color = "#F0EDE8"}
              onMouseLeave={e => e.target.style.color = "#8892A4"}
            >
              {l}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        style={{
          display: "none", background: "none", border: "none",
          color: "#F0EDE8", cursor: "pointer", fontSize: "1.4rem",
        }}
        className="nav-hamburger"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: "absolute", top: "100%", left: 0, right: 0,
              background: "rgba(10,15,30,0.98)", backdropFilter: "blur(16px)",
              borderBottom: "1px solid #1E2A3A", padding: "1.5rem 2.5rem",
              display: "flex", flexDirection: "column", gap: "1.2rem",
            }}
          >
            {links.map((l) => (
              <Link
                key={l}
                to={l.toLowerCase()}
                smooth duration={600}
                offset={-80}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "#8892A4", textDecoration: "none",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600, fontSize: "1rem", cursor: "pointer",
                }}
              >
                {l}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
}
