import { motion } from "framer-motion";

const bubbleData = [
  { size: 320, x: "10%",  y: "15%",  color: "rgba(0,229,255,0.04)",  duration: 18, delay: 0 },
  { size: 200, x: "75%",  y: "8%",   color: "rgba(124,58,237,0.05)", duration: 22, delay: 3 },
  { size: 150, x: "55%",  y: "60%",  color: "rgba(0,229,255,0.03)",  duration: 16, delay: 1 },
  { size: 250, x: "85%",  y: "50%",  color: "rgba(236,72,153,0.04)", duration: 20, delay: 5 },
  { size: 100, x: "20%",  y: "75%",  color: "rgba(0,229,255,0.05)",  duration: 14, delay: 2 },
  { size: 180, x: "40%",  y: "30%",  color: "rgba(124,58,237,0.04)", duration: 25, delay: 7 },
  { size: 120, x: "65%",  y: "85%",  color: "rgba(0,229,255,0.03)",  duration: 19, delay: 4 },
];

export default function Bubbles() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      {bubbleData.map((b, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            left: b.x,
            top: b.y,
            width: b.size,
            height: b.size,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${b.color}, transparent 70%)`,
            border: `1px solid ${b.color.replace(/[\d.]+\)$/, "0.08)")}`,
          }}
          animate={{
            y: [0, -40, 20, -20, 0],
            x: [0, 15, -10, 5, 0],
            scale: [1, 1.05, 0.97, 1.02, 1],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
