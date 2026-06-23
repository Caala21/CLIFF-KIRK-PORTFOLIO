import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import ScrollReveal from "./ScrollReveal";

// 👇 Replace these with your real EmailJS credentials from emailjs.com
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";

const inputStyle = {
  width: "100%", background: "rgba(255,255,255,0.04)",
  border: "1px solid #1E2A3A", borderRadius: "5px",
  padding: "0.7rem 1rem", color: "#F0EDE8",
  fontFamily: "'Inter', sans-serif", fontSize: "0.9rem",
  outline: "none", transition: "border-color 0.2s",
};

function Field({ label, children }) {
  return (
    <div style={{ marginBottom: "1.1rem" }}>
      <label style={{
        display: "block", fontSize: "0.78rem", color: "#8892A4",
        marginBottom: "0.4rem", fontFamily: "'Space Grotesk', sans-serif",
        letterSpacing: "0.06em", textTransform: "uppercase",
      }}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" style={{ padding: "5rem 2.5rem" }}>
      <div style={{ maxWidth: "620px", margin: "0 auto" }}>
        <ScrollReveal>
          <div style={{
            background: "#111827", border: "1px solid #1E2A3A",
            borderRadius: "10px", padding: "3rem",
          }}>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.02em",
              marginBottom: "0.5rem",
            }}>
              Let's connect
            </h2>
            <p style={{ color: "#8892A4", marginBottom: "2rem", fontSize: "0.95rem" }}>
              Have a project in mind or want to collaborate?
            </p>

            {/* Direct links */}
            <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
              {[
                { label: "ktugi2509@gmail.com", href: "mailto:ktugi2509@gmail.com", primary: true },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/cliff-njogu-032149113/", primary: false },
                { label: "+254 721 986 606", href: "tel:+254721986606", primary: false },
              ].map((l) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, opacity: 0.88 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    padding: "0.6rem 1.3rem", borderRadius: "4px",
                    textDecoration: "none", fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600, fontSize: "0.88rem",
                    ...(l.primary
                      ? { background: "#00E5FF", color: "#0A0F1E" }
                      : { border: "1px solid #1E2A3A", color: "#8892A4" }),
                  }}
                >
                  {l.label}
                </motion.a>
              ))}
            </div>

            {/* Divider */}
            <div style={{
              display: "flex", alignItems: "center", gap: "1rem",
              marginBottom: "2rem", color: "#8892A4", fontSize: "0.82rem",
            }}>
              <div style={{ flex: 1, height: 1, background: "#1E2A3A" }} />
              or send a message
              <div style={{ flex: 1, height: 1, background: "#1E2A3A" }} />
            </div>

            {/* Form */}
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    padding: "2rem", textAlign: "center",
                    border: "1px solid rgba(0,229,255,0.2)", borderRadius: "8px",
                    background: "rgba(0,229,255,0.05)",
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "0.8rem" }}>✅</div>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: "#F0EDE8" }}>
                    Message sent!
                  </p>
                  <p style={{ color: "#8892A4", fontSize: "0.9rem", marginTop: "0.4rem" }}>
                    I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    style={{
                      marginTop: "1.2rem", background: "none", border: "none",
                      color: "#00E5FF", cursor: "pointer", fontSize: "0.88rem",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <Field label="Your Name">
                    <input
                      name="user_name"
                      type="text"
                      required
                      placeholder="John Doe"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "#00E5FF"}
                      onBlur={e => e.target.style.borderColor = "#1E2A3A"}
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      name="user_email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "#00E5FF"}
                      onBlur={e => e.target.style.borderColor = "#1E2A3A"}
                    />
                  </Field>
                  <Field label="Message">
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell me about your project..."
                      style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
                      onFocus={e => e.target.style.borderColor = "#00E5FF"}
                      onBlur={e => e.target.style.borderColor = "#1E2A3A"}
                    />
                  </Field>

                  {status === "error" && (
                    <p style={{ color: "#F87171", fontSize: "0.85rem", marginBottom: "1rem" }}>
                      Something went wrong. Please email me directly at ktugi2509@gmail.com
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      width: "100%", padding: "0.85rem",
                      background: status === "sending" ? "#00B8CC" : "#00E5FF",
                      border: "none", borderRadius: "4px",
                      color: "#0A0F1E", fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700, fontSize: "0.95rem", cursor: status === "sending" ? "wait" : "pointer",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {status === "sending" ? "Sending…" : "Send Message →"}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
