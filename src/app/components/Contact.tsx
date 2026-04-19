import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

// ============================================================
// CONTACT TEMPLATE
// Update contactItems with your real details.
// Update the Behance href to your profile URL.
// ============================================================

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 79940 26486",
    href: "tel:+917994026486",
    color: "#00e5cc",
  },
  {
    icon: Mail,
    label: "Email",
    value: "kl7khaleel@gmail.com",
    href: "mailto:kl7khaleel@gmail.com",
    color: "#9b30ff",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, India",
    href: "#",
    color: "#ff2d78",
  },
];

// ---- BEHANCE URL ----
const behanceUrl = "https://www.behance.net/khaleelkl7";

export function Contact() {
  return (
    <section id="contact" className="py-20 relative bg-[#0a0a14]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 0% 0%, rgba(0,229,204,0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 100% 100%, rgba(255,45,120,0.06) 0%, transparent 50%)
          `,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="font-['Space_Grotesk'] text-xs tracking-[0.3em] uppercase mb-3 text-[#00e5cc]">
            Let's Connect
          </p>
          <h2
            className="font-['Orbitron'] font-bold"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#ffffff",
              textShadow: "0 0 20px rgba(0,229,204,0.2)",
            }}
          >
            Get In Touch
          </h2>
          <div
            className="h-px w-24 mx-auto mt-4"
            style={{ background: "linear-gradient(90deg, transparent, #00e5cc, transparent)" }}
          />
        </div>

        {/* CTA Banner */}
        <div
          className="rounded-3xl p-10 text-center mb-12 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,229,204,0.1) 0%, rgba(155,48,255,0.1) 50%, rgba(255,45,120,0.1) 100%)",
            border: "1px solid rgba(0,229,204,0.2)",
            boxShadow: "0 0 40px rgba(0,229,204,0.08)",
          }}
        >
          <div
            className="absolute top-0 left-1/4 w-32 h-32 rounded-full blur-3xl pointer-events-none"
            style={{ background: "rgba(0,229,204,0.12)" }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-32 h-32 rounded-full blur-3xl pointer-events-none"
            style={{ background: "rgba(155,48,255,0.12)" }}
          />
          <p
            className="font-['Orbitron'] font-semibold text-sm tracking-widest mb-3 relative z-10"
            style={{ color: "#00e5cc" }}
          >
            MUHAMMED KHALEEL K P
          </p>
          <h3
            className="font-['Space_Grotesk'] mb-4 relative z-10 text-white"
            style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)" }}
          >
            Open for Freelance & Full-time Opportunities
          </h3>
          <p className="font-['Space_Grotesk'] text-sm max-w-lg mx-auto relative z-10 text-gray-400">
            Have a project in mind or looking for a creative designer to join
            your team? Let's create something amazing together.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 block"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${item.color}20`,
                boxShadow: `0 0 20px ${item.color}08`,
                textDecoration: "none",
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `rgba(${hexToRgb(item.color)}, 0.15)`,
                  border: `2px solid ${item.color}60`,
                  boxShadow: `0 0 14px ${item.color}40`,
                }}
              >
                <item.icon size={18} style={{ color: item.color }} />
              </div>
              <p className="font-['Space_Grotesk'] text-xs mb-1 text-gray-500">
                {item.label}
              </p>
              <p className="font-['Space_Grotesk'] text-sm font-medium text-gray-200">
                {item.value}
              </p>
            </a>
          ))}
        </div>

        {/* Behance link */}
        <div className="text-center">
          <a
            href={behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-['Space_Grotesk'] font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #1769ff20, #1769ff10)",
              border: "1px solid #1769ff60",
              color: "#1769ff",
              boxShadow: "0 0 16px rgba(23,105,255,0.2)",
            }}
          >
            <span>View on Behance</span>
            <ExternalLink size={14} />
          </a>
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
