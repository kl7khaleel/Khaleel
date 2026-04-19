import { Briefcase } from "lucide-react";

// ============================================================
// EXPERIENCE TEMPLATE
// Add or remove jobs in the `experiences` array below.
// Each entry: { company, role, period, current, color }
// Set current: true for your present job.
// ============================================================
const experiences = [
  {
    company: "Curefoods India",
    role: "Graphic Designer | Video Editor",
    period: "2025 April – Present",
    current: true,
    color: "#00e5cc",
  },
  {
    company: "Purplemango India",
    role: "Graphic Designer | Video Editor",
    period: "2024 April – 2025 April",
    current: false,
    color: "#9b30ff",
  },
  {
    company: "Analytix",
    role: "Graphic Designer",
    period: "2023 September – 2024 March",
    current: false,
    color: "#ff2d78",
  },
  {
    company: "OUTTHERE Communications",
    role: "Junior Graphic Designer",
    period: "2022 June – 2023 August",
    current: false,
    color: "#00bfff",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-[#080810]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse at 50% 0%, rgba(0,229,204,0.05) 0%, transparent 60%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="font-['Space_Grotesk'] text-xs tracking-[0.3em] uppercase mb-3 text-[#00e5cc]">
            Work History
          </p>
          <h2
            className="font-['Orbitron'] font-bold"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#ffffff",
              textShadow: "0 0 20px rgba(0,229,204,0.2)",
            }}
          >
            Experience
          </h2>
          <div
            className="h-px w-24 mx-auto mt-4"
            style={{ background: "linear-gradient(90deg, transparent, #00e5cc, transparent)" }}
          />
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(180deg, #00e5cc, #9b30ff, #ff2d78, rgba(0,191,255,0.3))",
            }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-16 group">
                {/* Timeline dot */}
                <div
                  className="absolute left-0 w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `rgba(${hexToRgb(exp.color)}, 0.15)`,
                    border: `2px solid ${exp.color}`,
                    boxShadow: `0 0 16px ${exp.color}60`,
                  }}
                >
                  <Briefcase size={18} style={{ color: exp.color }} />
                </div>

                {/* Card */}
                <div
                  className="rounded-2xl p-6 transition-all duration-300 group-hover:scale-[1.02]"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid ${exp.color}20`,
                    boxShadow: `0 0 20px ${exp.color}08`,
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3
                        className="font-['Space_Grotesk'] font-semibold text-base"
                        style={{ color: exp.color, textShadow: `0 0 8px ${exp.color}60` }}
                      >
                        {exp.company}
                      </h3>
                      <p className="font-['Space_Grotesk'] text-sm mt-1 text-gray-300">
                        {exp.role}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      {exp.current && (
                        <span
                          className="px-2 py-0.5 rounded-full text-xs font-['Space_Grotesk'] font-semibold"
                          style={{
                            background: "rgba(0,229,204,0.15)",
                            color: "#00e5cc",
                            border: "1px solid rgba(0,229,204,0.4)",
                          }}
                        >
                          Current
                        </span>
                      )}
                      <span className="text-xs font-['Space_Grotesk'] text-gray-500">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
