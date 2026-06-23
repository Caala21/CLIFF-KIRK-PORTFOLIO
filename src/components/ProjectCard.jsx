import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      style={{
        background: "#111827", border: "1px solid #1E2A3A",
        borderRadius: "8px", padding: "1.6rem",
        display: "flex", flexDirection: "column",
        position: "relative", overflow: "hidden",
        cursor: "default",
      }}
    >
      {/* Glow on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(circle at 50% 0%, rgba(0,229,255,0.06), transparent 60%)",
          borderRadius: "8px",
        }}
      />

      {/* Top border glow */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "2px",
          background: "linear-gradient(to right, transparent, #00E5FF, transparent)",
          transformOrigin: "left",
        }}
      />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
        <motion.div
          whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
          style={{
            width: 44, height: 44, borderRadius: "10px",
            background: "rgba(0,229,255,0.08)", border: "1px solid rgba(0,229,255,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.3rem",
          }}
        >
          {project.icon}
        </motion.div>
        <span style={{
          fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase",
          padding: "0.2rem 0.7rem", borderRadius: "20px",
          background: "rgba(0,229,255,0.08)", color: "#00E5FF",
          border: "1px solid rgba(0,229,255,0.18)",
          fontFamily: "'Space Grotesk', sans-serif",
        }}>
          {project.badge}
        </span>
      </div>

      <h3 style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem",
        letterSpacing: "-0.01em", color: "#F0EDE8",
      }}>
        {project.title}
      </h3>

      <p style={{ fontSize: "0.9rem", color: "#8892A4", lineHeight: 1.6, flex: 1 }}>
        {project.description}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", margin: "1rem 0" }}>
        {project.tags.map((tag) => (
          <span key={tag} style={{
            fontSize: "0.72rem", padding: "0.22rem 0.65rem",
            background: "rgba(255,255,255,0.04)", borderRadius: "3px",
            color: "#8892A4",
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div style={{
        display: "flex", gap: "1rem", marginTop: "auto",
        paddingTop: "1rem", borderTop: "1px solid #1E2A3A",
      }}>
        {project.live && (
          <motion.a
            href={project.live} target="_blank" rel="noopener noreferrer"
            whileHover={{ x: 2, color: "#F0EDE8" }}
            style={{
              fontSize: "0.82rem", fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600, textDecoration: "none", color: "#00E5FF",
              display: "flex", alignItems: "center", gap: "0.3rem",
            }}
          >
            ↗ Live
          </motion.a>
        )}
        {project.github && (
          <motion.a
            href={project.github} target="_blank" rel="noopener noreferrer"
            whileHover={{ x: 2, color: "#F0EDE8" }}
            style={{
              fontSize: "0.82rem", fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600, textDecoration: "none", color: "#8892A4",
              display: "flex", alignItems: "center", gap: "0.3rem",
            }}
          >
            GitHub →
          </motion.a>
        )}
      </div>
    </motion.article>
  );
}
