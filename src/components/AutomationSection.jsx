// AutomationSection.jsx
// Drop this file into your src/components/ folder
// Then import and add <AutomationSection /> to your App.jsx or main layout

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Project Data ─────────────────────────────────────────────────────────────
const automationProjects = [
  {
    id: 1,
    slug: "lead-capture",
    title: "Lead Capture → Sheets + Gmail",
    tagline: "Zero-touch lead intake pipeline",
    description:
      "Webhook-triggered workflow that validates incoming form submissions, appends timestamped lead records to Google Sheets, sends branded confirmation emails to prospects, and fires instant admin alerts — all in under 2 seconds.",
    tags: ["Webhook", "Google Sheets", "Gmail", "Lead Gen"],
    metrics: [
      { label: "Response Time", value: "<2s" },
      { label: "Nodes", value: "7" },
      { label: "Emails Sent", value: "2" },
    ],
    color: "#00E5FF",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    nodes: ["Webhook", "IF Validator", "Google Sheets", "Gmail (Lead)", "Gmail (Admin)", "HTTP Response"],
    githubUrl: "https://github.com/Caala21/CLIFF-KIRK-PORTFOLIO/blob/main/n8n-workflows/01-lead-capture-sheets-gmail.json",
  },
  {
    id: 2,
    slug: "invoice-reminder",
    title: "Invoice Reminder Automation",
    tagline: "Never chase a payment manually again",
    description:
      "Scheduled daily workflow that scans your invoice spreadsheet, calculates days until due, and fires precision-timed reminder emails at 7, 3, and 1 day before due date — plus escalating overdue notices at 1, 7, and 14 days past due.",
    tags: ["Scheduler", "Google Sheets", "Gmail", "Finance"],
    metrics: [
      { label: "Reminder Points", value: "7" },
      { label: "Runs Daily", value: "24/7" },
      { label: "Nodes", value: "8" },
    ],
    color: "#FFB800",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    nodes: ["Schedule Trigger", "Read Sheets", "Code Node", "IF Overdue?", "Gmail (Overdue)", "Gmail (Upcoming)", "Update Log"],
    githubUrl: "https://github.com/Caala21/CLIFF-KIRK-PORTFOLIO/blob/main/n8n-workflows/02-invoice-reminder-automation.json",
  },
  {
    id: 3,
    slug: "social-scheduler",
    title: "Social Media Post Scheduler",
    tagline: "Content calendar on autopilot",
    description:
      "Polls a Google Sheets content calendar every 30 minutes, identifies posts due for publishing, routes content by platform, and fires to Twitter/X and LinkedIn simultaneously — then marks posts as published and sends a confirmation email.",
    tags: ["Scheduler", "Twitter/X", "LinkedIn", "Content"],
    metrics: [
      { label: "Check Interval", value: "30min" },
      { label: "Platforms", value: "2+" },
      { label: "Nodes", value: "10" },
    ],
    color: "#A855F7",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    nodes: ["Schedule (30min)", "Read Calendar", "Code Filter", "IF Posts?", "Split by Platform", "Twitter Node", "LinkedIn HTTP", "Mark Posted", "Gmail Confirm"],
    githubUrl: "https://github.com/Caala21/CLIFF-KIRK-PORTFOLIO/blob/main/n8n-workflows/03-social-media-scheduler.json",
  },
  {
    id: 4,
    slug: "job-tracker",
    title: "Job Application Tracker",
    tagline: "Intelligent job search command centre",
    description:
      "Dual-trigger system: a webhook logs new applications instantly with auto-generated IDs and 7-day follow-up dates, while a Monday 9AM schedule generates a complete analytics report showing pipeline stats, overdue follow-ups, and weekly action items.",
    tags: ["Webhook", "Scheduler", "Analytics", "Productivity"],
    metrics: [
      { label: "Triggers", value: "2" },
      { label: "Report Day", value: "Mon 9AM" },
      { label: "Nodes", value: "8" },
    ],
    color: "#00FF87",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    nodes: ["Webhook", "Schedule (Mon 9AM)", "Log to Sheets", "Read Applications", "Code (Stats)", "Confirm Email", "Weekly Report Email"],
    githubUrl: "https://github.com/Caala21/CLIFF-KIRK-PORTFOLIO/blob/main/n8n-workflows/04-job-application-tracker.json",
  },
];

// ─── Mini Canvas Preview ───────────────────────────────────────────────────────
function MiniCanvas({ nodes, color }) {
  const nodeWidth = 90;
  const nodeHeight = 28;
  const hGap = 18;
  const rows = [];
  let perRow = Math.ceil(nodes.length / 2);
  for (let i = 0; i < nodes.length; i += perRow) {
    rows.push(nodes.slice(i, i + perRow));
  }

  return (
    <div
      style={{
        background: "#070C18",
        borderRadius: 8,
        border: "1px solid #1E2A3A",
        padding: "12px 10px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Grid dots */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, #1E2A3A 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          opacity: 0.5,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} style={{ display: "flex", alignItems: "center", gap: hGap, marginBottom: rowIdx < rows.length - 1 ? 10 : 0 }}>
            {row.map((node, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (rowIdx * row.length + i) * 0.07 }}
                  style={{
                    width: nodeWidth,
                    height: nodeHeight,
                    background: "#111827",
                    border: `1px solid ${i === 0 && rowIdx === 0 ? color : "#1E2A3A"}`,
                    borderRadius: 5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 9,
                    color: i === 0 && rowIdx === 0 ? color : "#94A3B8",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    padding: "0 6px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    boxShadow: i === 0 && rowIdx === 0 ? `0 0 8px ${color}33` : "none",
                  }}
                >
                  {node}
                </motion.div>
                {i < row.length - 1 && (
                  <div style={{ width: 16, height: 1, background: "#1E2A3A", position: "relative" }}>
                    <div style={{ position: "absolute", right: -3, top: -3, width: 7, height: 7, borderTop: "1px solid #1E2A3A", borderRight: "1px solid #1E2A3A", transform: "rotate(45deg)" }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, index, isActive, onClick }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      style={{
        background: "#111827",
        border: `1px solid ${isActive ? project.color : "#1E2A3A"}`,
        borderRadius: 12,
        padding: "24px",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        transition: "border-color 0.3s, box-shadow 0.3s",
        boxShadow: isActive ? `0 0 24px ${project.color}22` : "none",
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, ${project.color}, transparent)`,
          opacity: isActive ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />

      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 14 }}>
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: 10,
            background: `${project.color}18`,
            border: `1px solid ${project.color}40`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: project.color,
            flexShrink: 0,
          }}
        >
          {project.icon}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 10, color: project.color, fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 3 }}>
            Project {String(project.id).padStart(2, "0")}
          </div>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#F1F5F9", fontFamily: "Space Grotesk, sans-serif", margin: 0, lineHeight: 1.3 }}>
            {project.title}
          </h3>
          <p style={{ fontSize: 11, color: "#64748B", margin: "3px 0 0", fontFamily: "Inter, sans-serif" }}>{project.tagline}</p>
        </div>
      </div>

      {/* Metrics row */}
      <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
        {project.metrics.map((m) => (
          <div key={m.label} style={{ flex: 1, background: "#0A0F1E", borderRadius: 7, padding: "7px 8px", textAlign: "center" }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: project.color, fontFamily: "Space Grotesk, sans-serif", lineHeight: 1 }}>{m.value}</div>
            <div style={{ fontSize: 9, color: "#475569", marginTop: 2, fontFamily: "Inter, sans-serif" }}>{m.label}</div>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: 10,
              padding: "2px 8px",
              borderRadius: 100,
              background: "#0A0F1E",
              border: "1px solid #1E2A3A",
              color: "#94A3B8",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Expanded Detail Panel ─────────────────────────────────────────────────────
function DetailPanel({ project }) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35 }}
      style={{
        background: "#111827",
        border: `1px solid ${project.color}44`,
        borderRadius: 12,
        padding: "28px",
        height: "100%",
        boxShadow: `0 0 40px ${project.color}11`,
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
        <div style={{ color: project.color }}>{project.icon}</div>
        <span style={{ fontSize: 11, color: project.color, fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
          n8n Workflow
        </span>
      </div>
      <h3 style={{ fontSize: 20, fontWeight: 700, color: "#F1F5F9", fontFamily: "Space Grotesk, sans-serif", margin: "0 0 6px" }}>
        {project.title}
      </h3>
      <p style={{ fontSize: 13, color: "#64748B", margin: "0 0 20px", fontFamily: "Inter, sans-serif", lineHeight: 1.6 }}>
        {project.description}
      </p>

      {/* Canvas preview */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 10, color: "#475569", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "Inter, sans-serif", marginBottom: 8 }}>
          n8n Canvas Preview
        </div>
        <MiniCanvas nodes={project.nodes} color={project.color} />
      </div>

      {/* Node list */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 10, color: "#475569", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "Inter, sans-serif", marginBottom: 10 }}>
          Workflow Nodes
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.nodes.map((node, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontSize: 11,
                color: "#94A3B8",
                background: "#0A0F1E",
                border: "1px solid #1E2A3A",
                borderRadius: 6,
                padding: "4px 10px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: project.color, flexShrink: 0 }} />
              {node}
            </div>
          ))}
        </div>
      </div>

      {/* CTA buttons */}
      <div style={{ display: "flex", gap: 10 }}>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 7,
            padding: "11px 18px",
            borderRadius: 8,
            background: project.color,
            color: "#0A0F1E",
            fontSize: 12,
            fontWeight: 700,
            fontFamily: "Space Grotesk, sans-serif",
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 14, height: 14 }}>
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          View on GitHub
        </a>
        <a
          href="https://n8n.io"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 7,
            padding: "11px 16px",
            borderRadius: 8,
            border: `1px solid ${project.color}40`,
            color: project.color,
            fontSize: 12,
            fontWeight: 600,
            fontFamily: "Space Grotesk, sans-serif",
            textDecoration: "none",
            background: `${project.color}08`,
            transition: "background 0.2s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = `${project.color}18`)}
          onMouseLeave={(e) => (e.currentTarget.style.background = `${project.color}08`)}
        >
          Import in n8n
        </a>
      </div>
    </motion.div>
  );
}

// ─── Main Section Component ────────────────────────────────────────────────────
export default function AutomationSection() {
  const [activeId, setActiveId] = useState(1);
  const activeProject = automationProjects.find((p) => p.id === activeId);

  return (
    <section
      id="automation"
      style={{
        background: "#0A0F1E",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 400,
          background: "radial-gradient(ellipse, #00E5FF08 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 60 }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 14px",
              borderRadius: 100,
              border: "1px solid #00E5FF33",
              background: "#00E5FF08",
              marginBottom: 18,
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#00E5FF", boxShadow: "0 0 8px #00E5FF" }} />
            <span style={{ fontSize: 11, color: "#00E5FF", fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Automation Projects
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              fontFamily: "Space Grotesk, sans-serif",
              color: "#F1F5F9",
              margin: "0 0 16px",
              lineHeight: 1.15,
            }}
          >
            Workflows that work{" "}
            <span style={{ color: "#00E5FF" }}>while you sleep</span>
          </h2>

          <p
            style={{
              fontSize: 16,
              color: "#64748B",
              fontFamily: "Inter, sans-serif",
              maxWidth: 560,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Four production-ready n8n automations eliminating manual busywork across lead management,
            invoicing, content publishing, and job tracking. Built with webhooks, schedulers, and
            real API integrations.
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            display: "flex",
            gap: 1,
            marginBottom: 48,
            background: "#1E2A3A",
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid #1E2A3A",
          }}
        >
          {[
            { label: "Automations Built", value: "4" },
            { label: "Integrations", value: "7+" },
            { label: "Manual Hours Saved", value: "∞" },
            { label: "Tool", value: "n8n" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                background: "#111827",
                padding: "16px",
                textAlign: "center",
                borderRight: i < 3 ? "1px solid #1E2A3A" : "none",
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 800, color: "#00E5FF", fontFamily: "Space Grotesk, sans-serif" }}>{stat.value}</div>
              <div style={{ fontSize: 10, color: "#475569", fontFamily: "Inter, sans-serif", marginTop: 2 }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Main content: cards grid + detail panel */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            alignItems: "start",
          }}
          className="automation-grid"
        >
          {/* Left: cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {automationProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                isActive={activeId === project.id}
                onClick={() => setActiveId(project.id)}
              />
            ))}
          </div>

          {/* Right: detail */}
          <div style={{ position: "sticky", top: 100 }}>
            <AnimatePresence mode="wait">
              {activeProject && <DetailPanel key={activeProject.id} project={activeProject} />}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            marginTop: 56,
            padding: "32px",
            background: "#111827",
            border: "1px solid #1E2A3A",
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#F1F5F9", fontFamily: "Space Grotesk, sans-serif", margin: "0 0 6px" }}>
              Need a custom automation?
            </h3>
            <p style={{ fontSize: 13, color: "#64748B", fontFamily: "Inter, sans-serif", margin: 0 }}>
              I build n8n and Hermes workflows for businesses. Available for hire on Fiverr.
            </p>
          </div>
          <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
            <a
              href="https://www.fiverr.com/kirkklif"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "11px 22px",
                borderRadius: 8,
                background: "#00E5FF",
                color: "#0A0F1E",
                fontSize: 13,
                fontWeight: 700,
                fontFamily: "Space Grotesk, sans-serif",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Hire on Fiverr
            </a>
            <a
              href="https://github.com/Caala21/CLIFF-KIRK-PORTFOLIO"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "11px 22px",
                borderRadius: 8,
                border: "1px solid #1E2A3A",
                color: "#94A3B8",
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "Space Grotesk, sans-serif",
                textDecoration: "none",
                background: "transparent",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#00E5FF40"; e.currentTarget.style.color = "#00E5FF"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1E2A3A"; e.currentTarget.style.color = "#94A3B8"; }}
            >
              View All Code
            </a>
          </div>
        </motion.div>
      </div>

      {/* Responsive style override — injected at runtime */}
      <style>{`
        @media (max-width: 768px) {
          .automation-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
