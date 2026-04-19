import { GraduationCap } from "lucide-react";

// ============================================================
// EDUCATION TEMPLATE
// Add or remove entries in the `education` array below.
// Each entry: { institution, degree, type, color }
// ============================================================
const education = [
  {
    institution: "EVOKA School of Advertising",
    degree: "Diploma in Visualizing and Corporate Advertising",
    type: "Diploma",
    color: "#00e5cc",
  },
  {
    institution: "WOHSS PINANGODE",
    degree: "Higher Secondary",
    type: "Higher Secondary",
    color: "#9b30ff",
  },
  {
    institution: "GHSS KUZHIMANNA",
    degree: "SSLC",
    type: "Secondary",
    color: "#ff2d78",
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 relative bg-[#080810]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse at 50% 100%, rgba(155,48,255,0.06) 0%, transparent 60%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="font-['Space_Grotesk'] text-xs tracking-[0.3em] uppercase mb-3 text-[#00e5cc]">
            Academic Background
          </p>
          <h2
            className="font-['Orbitron'] font-bold"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#ffffff",
              textShadow: "0 0 20px rgba(0,229,204,0.2)",
            }}
          >
            Education
          </h2>
          <div
            className="h-px w-24 mx-auto mt-4"
            style={{ background: "linear-gradient(90deg, transparent, #9b30ff, transparent)" }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {education.map((edu, i) => (
            <div
              key={i}
              className="group rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${edu.color}20`,
                boxShadow: `0 0 20px ${edu.color}08`,
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `rgba(${hexToRgb(edu.color)}, 0.15)`,
                  border: `2px solid ${edu.color}60`,
                  boxShadow: `0 0 16px ${edu.color}40`,
                }}
              >
                <GraduationCap size={22} style={{ color: edu.color }} />
              </div>
              <span
                className="inline-block px-2 py-0.5 rounded-full text-xs font-['Space_Grotesk'] font-medium mb-3"
                style={{
                  background: `rgba(${hexToRgb(edu.color)}, 0.12)`,
                  color: edu.color,
                  border: `1px solid ${edu.color}40`,
                }}
              >
                {edu.type}
              </span>
              <h3 className="font-['Space_Grotesk'] font-semibold text-sm leading-snug mb-2 text-white">
                {edu.institution}
              </h3>
              <p className="font-['Space_Grotesk'] text-xs leading-relaxed text-gray-400">
                {edu.degree}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "0,0,0";
  return `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`;
}
