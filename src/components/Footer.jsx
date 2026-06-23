import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid #1E2A3A",
      padding: "2rem 2.5rem",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: "1rem",
    }}>
      <p style={{ fontSize: "0.82rem", color: "#8892A4" }}>
        Cliff Kirk Mutugi Njogu · Nairobi, Kenya · {new Date().getFullYear()}
      </p>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        {[
          { label: "GitHub",   href: "https://github.com/yourusername" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/cliff-njogu-032149113/" },
          { label: "Email",    href: "mailto:ktugi2509@gmail.com" },
        ].map((l) => (
          <motion.a
            key={l.label}
            href={l.href}
            target="_blank" rel="noopener noreferrer"
            whileHover={{ color: "#F0EDE8" }}
            style={{
              fontSize: "0.82rem", color: "#8892A4",
              textDecoration: "none", transition: "color 0.2s",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {l.label}
          </motion.a>
        ))}
      </div>
    </footer>
  );
}
