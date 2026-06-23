import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";
import { apps, websites } from "../data/projects";

const TABS = [
  { id: "apps",     label: "📱 Apps" },
  { id: "websites", label: "🌐 Websites" },
];

function EmptyState({ category }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        gridColumn: "1 / -1", padding: "4rem 2rem",
        border: "1px dashed #1E2A3A", borderRadius: "8px",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", gap: "0.8rem",
        color: "#8892A4",
      }}
    >
      <span style={{ fontSize: "2.5rem" }}>{category === "apps" ? "📱" : "🌐"}</span>
      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: "#F0EDE8" }}>
        Coming soon
      </p>
      <p style={{ fontSize: "0.88rem", maxWidth: "300px" }}>
        Projects will appear here once added to{" "}
        <code style={{ color: "#00E5FF", fontSize: "0.82rem" }}>src/data/projects.js</code>
      </p>
    </motion.div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("apps");
  const current = activeTab === "apps" ? apps : websites;

  return (
    <section
      id="projects"
      style={{ padding: "5rem 2.5rem", maxWidth: "1100px", margin: "0 auto" }}
    >
      <ScrollReveal>
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "0.4rem",
        }}>
          Projects
        </h2>
        <p style={{ color: "#8892A4", marginBottom: "2.5rem", fontSize: "0.95rem" }}>
          Apps and websites I've designed and built.
        </p>
      </ScrollReveal>

      {/* Tabs */}
      <ScrollReveal delay={0.1}>
        <div style={{
          display: "flex", borderBottom: "1px solid #1E2A3A", marginBottom: "2.5rem",
        }}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "0.7rem 1.8rem", position: "relative",
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600,
                fontSize: "0.95rem",
                color: activeTab === tab.id ? "#F0EDE8" : "#8892A4",
                transition: "color 0.2s",
              }}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="tab-underline"
                  style={{
                    position: "absolute", bottom: -1, left: 0, right: 0,
                    height: "2px", background: "#00E5FF",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {current.length === 0
            ? <EmptyState category={activeTab} />
            : current.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)
          }
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
