import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const techStack = [
  "HTML5 / CSS3", "JavaScript", "React / Redux", "DevOps",
  "Google Cloud", "AWS", "Azure", "Salesforce CRM",
  "Node.js", "Cybersecurity", "Digital Marketing", "Google Workspace",
];

const stats = [
  { value: "22+", label: "Certifications" },
  { value: "5+",  label: "Years experience" },
  { value: "2",   label: "Degrees (LLB + DevOps)" },
  { value: "∞",   label: "Bugs squashed" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "rgba(17,24,39,0.5)",
        borderTop: "1px solid #1E2A3A",
        borderBottom: "1px solid #1E2A3A",
        padding: "5rem 0",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2.5rem" }}>

        <ScrollReveal>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "0.4rem",
          }}>
            About Me
          </h2>
          <p style={{ color: "#8892A4", marginBottom: "2.5rem", fontSize: "0.95rem" }}>
            Multi-disciplinary professional. Builder at heart.
          </p>
        </ScrollReveal>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "3rem",
          alignItems: "start",
        }}>
          {/* Text */}
          <div>
            <ScrollReveal direction="left">
              <p style={{ color: "#8892A4", lineHeight: 1.8, marginBottom: "1rem" }}>
                I'm a detail-oriented professional with a strong foundation in DevOps engineering,
                front-end development, billing &amp; administrative operations, and legal compliance.
                I thrive in remote, high-pressure environments and care deeply about shipping quality work.
              </p>
              <p style={{ color: "#8892A4", lineHeight: 1.8, marginBottom: "2rem" }}>
                My background spans Salesforce CRM, Google Cloud, React, and legal documentation —
                which means I bring both technical depth and operational precision to every project.
                Currently completing my LLB at the University of Nairobi (expected 2026).
              </p>
            </ScrollReveal>

            {/* Skills */}
            <ScrollReveal delay={0.1}>
              <p style={{
                color: "#F0EDE8", fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.82rem", letterSpacing: "0.12em",
                textTransform: "uppercase", marginBottom: "0.9rem",
              }}>
                Tech &amp; Tools
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {techStack.map((t, i) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                    whileHover={{ borderColor: "#00E5FF", color: "#F0EDE8", scale: 1.04 }}
                    style={{
                      fontSize: "0.82rem", padding: "0.3rem 0.85rem",
                      border: "1px solid #1E2A3A", borderRadius: "3px",
                      color: "#8892A4", fontFamily: "'Space Grotesk', sans-serif",
                      cursor: "default", transition: "all 0.2s",
                    }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.08} direction="right">
                <motion.div
                  whileHover={{ borderColor: "#00E5FF", y: -3 }}
                  style={{
                    padding: "1.4rem", background: "#111827",
                    border: "1px solid #1E2A3A", borderRadius: "8px",
                    transition: "border-color 0.2s, transform 0.2s",
                  }}
                >
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "2rem", fontWeight: 700, color: "#00E5FF",
                  }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "#8892A4", marginTop: "0.2rem" }}>
                    {s.label}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
