import { Phone, Mail, MapPin } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-20 relative bg-[#080810]"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse at 30% 50%, rgba(0,229,204,0.05) 0%, transparent 60%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="font-['Space_Grotesk'] text-xs tracking-[0.3em] uppercase mb-3 text-[#00e5cc]">
            Who I Am
          </p>
          <h2
            className="font-['Orbitron'] font-bold"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#ffffff",
              textShadow: "0 0 20px rgba(0,229,204,0.2)",
            }}
          >
            About Me
          </h2>
          <div
            className="h-px w-24 mx-auto mt-4"
            style={{ background: "linear-gradient(90deg, transparent, #00e5cc, transparent)" }}
          />
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Name & title */}
          <div className="mb-6 text-center">
            <h3
              className="font-['Orbitron'] font-bold text-2xl mb-1"
              style={{ color: "#ffffff", textShadow: "0 0 12px rgba(255,255,255,0.1)" }}
            >
              MUHAMMED KHALEEL K P
            </h3>
            <p
              className="font-['Space_Grotesk'] font-medium text-sm"
              style={{ color: "#00e5cc", textShadow: "0 0 8px #00e5cc60" }}
            >
              Graphic Designer & Video Editor
            </p>
          </div>

          <p className="font-['Space_Grotesk'] text-sm leading-relaxed mb-10 text-gray-300 text-center max-w-2xl mx-auto">
            I'm a creative designer who loves turning ideas into bold visuals,
            motion and video edits that tell a story and leave a lasting impact. With over
            4 years of experience across leading companies, I specialize in
            branding, social media design, print works, packaging, and video editing that
            make brands shine.
          </p>

          {/* Contact info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Phone, value: "+91 79940 26486", href: "tel:+917994026486", color: "#00e5cc" },
              { icon: Mail, value: "kl7khaleel@gmail.com", href: "mailto:kl7khaleel@gmail.com", color: "#9b30ff" },
              { icon: MapPin, value: "Bangalore, India", href: "#", color: "#ff2d78" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex items-center gap-3 rounded-xl p-4 transition-all duration-300 hover:scale-105 group"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${item.color}20`,
                  textDecoration: "none",
                }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `rgba(${hexToRgb(item.color)}, 0.12)`,
                    border: `1px solid ${item.color}40`,
                    boxShadow: `0 0 10px ${item.color}30`,
                  }}
                >
                  <item.icon size={15} style={{ color: item.color }} />
                </div>
                <span className="font-['Space_Grotesk'] text-sm text-gray-300">
                  {item.value}
                </span>
              </a>
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
