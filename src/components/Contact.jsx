const contactLinks = [
  {
    label: "ktugi2509@gmail.com",
    href: "mailto:ktugi2509@gmail.com",
    primary: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/cliff-njogu-032149113/",
    primary: false,
  },
  {
    label: "GitHub",
    href: "https://github.com/Caala21",
    primary: false,
  },
  {
    label: "💬 WhatsApp +254706509334",
    href: "https://wa.me/254706509334?text=Hi%20Cliff%2C%20I%20found%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project.",
    primary: false,
    whatsapp: true,
  },
  {
    label: "💬 WhatsApp +254111896643",
    href: "https://wa.me/254111896643?text=Hi%20Cliff%2C%20I%20found%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project.",
    primary: false,
    whatsapp: true,
  },
];
export default function Contact() {
  return (
    <section id="contact" style={{ background: "#0A0F1E", padding: "100px 0" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        <div style={{ fontSize: 11, color: "#00E5FF", fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
          Get In Touch
        </div>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, fontFamily: "Space Grotesk, sans-serif", color: "#F1F5F9", margin: "0 0 16px" }}>
          Let's work together
        </h2>
        <p style={{ fontSize: 16, color: "#64748B", fontFamily: "Inter, sans-serif", marginBottom: 40 }}>
          Available for freelance projects, automation builds, and DevOps work.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
          {contactLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              style={{ padding: "12px 24px", borderRadius: 8, background: link.primary ? "#00E5FF" : "#111827", color: link.primary ? "#0A0F1E" : "#94A3B8", border: link.primary ? "none" : "1px solid #1E2A3A", fontSize: 13, fontWeight: 600, fontFamily: "Space Grotesk, sans-serif", textDecoration: "none" }}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
