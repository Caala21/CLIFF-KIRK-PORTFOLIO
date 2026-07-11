import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const techStack = [
  "HTML5 / CSS3", "JavaScript", "React / Redux",
  "Next.js", "Node.js", "DevOps", "Google Cloud",
  "AWS", "Azure", "Salesforce CRM", "Cybersecurity",
  "Digital Marketing", "Legal Documentation",
  "Billing & RCM", "Google Workspace", "Microsoft Office",
];

const stats = [
  { value: "9+",  label: "Years experience" },
  { value: "22+", label: "Certifications" },
  { value: "3",   label: "Industries mastered" },
  { value: "2",   label: "Degrees in progress" },
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
            fontSize: "2rem", fontWeight: 700,
            letterSpacing: "-0.02em", marginBottom: "0.4rem",
          }}>
            About Me
          </h2>
          <p style={{ color: "#8892A4", marginBottom: "2.5rem", fontSize: "0.95rem" }}>
            Legal professional. DevOps engineer. Builder.
          </p>
        </ScrollReveal>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "3rem", alignItems: "start",
        }}>
          {/* Bio */}
          <div>
            <ScrollReveal direction="left">
              <p style={{ color: "#8892A4", lineHeight: 1.8, marginBottom: "1rem" }}>
                I'm a multi-disciplinary professional combining DevOps engineering,
                front-end development, and active legal practice. Currently working
                as a Legal Assistant at W Mungai Law Advocates while completing
                my LLB at the University of Nairobi — expected 2026.
              </p>
              <p style={{ color: "#8892A4", lineHeight: 1.8, marginBottom: "1rem" }}>
                My background spans 9+ years across legal services, billing operations,
                CRM management, and software development. I've worked with international
                clients at OnQ Kenya managing high-volume Salesforce records with 100%
                accuracy, and I bring that same precision to every project I ship.
              </p>
              <p style={{ color: "#8892A4", lineHeight: 1.8, marginBottom: "2rem" }}>
                With 22+ certifications including 12 Google Cloud AI credentials,
                IBM Cybersecurity, and a Moringa School DevOps Engineering certificate,
                I offer a rare blend of technical depth, legal understanding, and
                operational excellence — ideal for clients who need more than just code.
              </p>
            </ScrollReveal>

            {/* Experience highlights */}
            <ScrollReveal delay={0.1}>
              <p style={{
                color: "#F0EDE8", fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.82rem", letterSpacing: "0.12em",
                textTransform: "uppercase", marginBottom: "0.9rem",
              }}>
                Currently
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "2rem" }}>
                {[
                  { role: "Legal Assistant", place: "W Mungai Law Advocates", period: "2026 – Present" },
                  { role: "LLB Candidate", place: "University of Nairobi", period: "Expected 2026" },
                  { role: "DevOps Certified", place: "Moringa School", period: "2024" },
                ].map((e) => (
                  <div key={e.role} style={{
                    display: "flex", justifyContent: "space-between",
                    alignItems: "center", padding: "0.7rem 1rem",
                    background: "#111827", border: "1px solid #1E2A3A",
                    borderRadius: "6px",
                  }}>
                    <div>
                      <div style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600, fontSize: "0.88rem", color: "#F0EDE8",
                      }}>
                        {e.role}
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "#8892A4" }}>{e.place}</div>
                    </div>
                    <span style={{
                      fontSize: "0.72rem", color: "#00E5FF",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}>
                      {e.period}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Skills */}
            <ScrollReveal delay={0.15}>
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
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
              {stats.map((s, i) => (
                <ScrollReveal key={s.label} delay={i * 0.08} direction="right">
                  <motion.div
                    whileHover={{ borderColor: "#00E5FF", y: -3 }}
                    style={{
                      padding: "1.4rem", background: "#111827",
                      border: "1px solid #1E2A3A", borderRadius: "8px",
                      transition: "border-color 0.2s",
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

            {/* Certifications highlight */}
            <ScrollReveal delay={0.3} direction="right">
              <div style={{
                padding: "1.4rem", background: "#111827",
                border: "1px solid rgba(0,229,255,0.2)", borderRadius: "8px",
                marginTop: "0.5rem",
              }}>
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.82rem", letterSpacing: "0.1em",
                  textTransform: "uppercase", color: "#00E5FF",
                  marginBottom: "0.8rem",
                }}>
                  Top Certifications
                </p>
                {[
                  "Google Cloud — Generative AI (x12)",
                  "IBM Cybersecurity Fundamentals",
                  "DevOps Engineering — Moringa School",
                  "Microsoft & LinkedIn — Generative AI",
                  "Project Management Essentials (PMEC)",
                  "Diploma in Human Resources — Alison",
                ].map((c) => (
                  <div key={c} style={{
                    fontSize: "0.82rem", color: "#8892A4",
                    padding: "0.35rem 0",
                    borderBottom: "1px solid #1E2A3A",
                    display: "flex", alignItems: "center", gap: "0.5rem",
                  }}>
                    <span style={{ color: "#00E5FF", fontSize: "0.6rem" }}>▶</span>
                    {c}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}