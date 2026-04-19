// ============================================================
// SKILLS TEMPLATE
// To add a tool: add an object to the `tools` array below.
// To add a skill: add a string to `creativeSkills`.
// To add an interest: add a string to `interests`.
// ============================================================

// --- DESIGN TOOLS ---
// Each tool: { name: "short label", full: "full name", color: "#hex" }
const tools = [
  { name: "Ps",  full: "Photoshop",   color: "#31A8FF" },
  { name: "Ai",  full: "Illustrator", color: "#FF9A00" },
  { name: "Id",  full: "InDesign",    color: "#FF3366" },
  { name: "Ae",  full: "After Effects", color: "#9999FF" },
  { name: "Pr",  full: "Premiere Pro", color: "#9999FF" },
];

// --- CREATIVE SKILLS ---
// Add or remove skill tags freely:
const creativeSkills = [
  "Branding",
  "Advertising",
  "Video Editing",
  "Packaging",
  "Social Media Design",
  "Print Design",
  "Typography",
  "Visual Identity",
  "AI Video Creation",
];

// --- INTERESTS ---
// Add or remove interest tags freely:
const interests = [
  "Travelling",
  "Researching",
  "Design Thinking",
  "Gaming",
  "Photography",
];

// ============================================================

export function Skills() {
  return (
    <section id="skills" className="py-20 relative bg-[#0a0a14]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse at 0% 100%, rgba(155,48,255,0.06) 0%, transparent 60%),
            radial-gradient(ellipse at 100% 0%, rgba(0,229,204,0.06) 0%, transparent 60%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-['Space_Grotesk'] text-xs tracking-[0.3em] uppercase mb-3 text-[#00e5cc]">
            Expertise
          </p>
          <h2
            className="font-['Orbitron'] font-bold"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#ffffff",
              textShadow: "0 0 20px rgba(0,229,204,0.2)",
            }}
          >
            Skills & Tools
          </h2>
          <div
            className="h-px w-24 mx-auto mt-4"
            style={{ background: "linear-gradient(90deg, transparent, #00e5cc, transparent)" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Design Suite */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(0,229,204,0.15)",
              boxShadow: "0 0 20px rgba(0,229,204,0.05)",
            }}
          >
            <h3
              className="font-['Orbitron'] font-semibold text-sm mb-5"
              style={{ color: "#00e5cc", textShadow: "0 0 8px #00e5cc60" }}
            >
              Design Suite
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <div key={tool.name} className="group relative">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center cursor-default transition-transform duration-200 hover:scale-110"
                    style={{
                      background: `rgba(${hexToRgb(tool.color)}, 0.15)`,
                      border: `1px solid ${tool.color}40`,
                      boxShadow: `0 0 12px ${tool.color}30`,
                    }}
                  >
                    <span
                      className="font-['Orbitron'] font-black text-sm"
                      style={{ color: tool.color, textShadow: `0 0 8px ${tool.color}` }}
                    >
                      {tool.name}
                    </span>
                  </div>
                  {/* Tooltip */}
                  <div
                    className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs font-['Space_Grotesk'] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10"
                    style={{
                      background: "#1a1a2e",
                      color: "#00e5cc",
                      border: "1px solid rgba(0,229,204,0.3)",
                    }}
                  >
                    {tool.full}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Creative Skills */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(155,48,255,0.15)",
              boxShadow: "0 0 20px rgba(155,48,255,0.05)",
            }}
          >
            <h3
              className="font-['Orbitron'] font-semibold text-sm mb-5"
              style={{ color: "#9b30ff", textShadow: "0 0 8px #9b30ff60" }}
            >
              Creative Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {creativeSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full text-xs font-['Space_Grotesk'] font-medium transition-all duration-200 hover:scale-105 cursor-default"
                  style={{
                    background: "rgba(155,48,255,0.12)",
                    border: "1px solid rgba(155,48,255,0.3)",
                    color: "#bf7fff",
                    boxShadow: "0 0 8px rgba(155,48,255,0.15)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,45,120,0.15)",
              boxShadow: "0 0 20px rgba(255,45,120,0.05)",
            }}
          >
            <h3
              className="font-['Orbitron'] font-semibold text-sm mb-5"
              style={{ color: "#ff2d78", textShadow: "0 0 8px #ff2d7860" }}
            >
              Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1.5 rounded-full text-xs font-['Space_Grotesk'] font-medium transition-all duration-200 hover:scale-105 cursor-default"
                  style={{
                    background: "rgba(255,45,120,0.12)",
                    border: "1px solid rgba(255,45,120,0.3)",
                    color: "#ff7aaa",
                    boxShadow: "0 0 8px rgba(255,45,120,0.15)",
                  }}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
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
