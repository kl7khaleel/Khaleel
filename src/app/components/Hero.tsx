import { useEffect, useRef } from "react";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const particles: {
      x: number; y: number; vx: number; vy: number;
      size: number; color: string; alpha: number; pulse: number; pulseSpeed: number;
    }[] = [];

    const colors = ["#00e5cc", "#9b30ff", "#ff2d78", "#00bfff", "#ffffff"];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const currentAlpha = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse));
        ctx.save();
        ctx.globalAlpha = currentAlpha;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 14;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080810]"
    >
      {/* Canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Neon grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,229,204,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,204,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,229,204,0.07) 0%, transparent 70%)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(155,48,255,0.07) 0%, transparent 70%)" }} />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,45,120,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center text-center">

        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-['Space_Grotesk'] tracking-[0.2em] uppercase"
          style={{
            background: "rgba(0,229,204,0.08)",
            border: "1px solid rgba(0,229,204,0.25)",
            color: "#00e5cc",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#00e5cc", boxShadow: "0 0 6px #00e5cc" }}
          />
          Graphic Designer & Video Editor
        </div>

        {/* Main heading */}
        <h1
          className="font-['Orbitron'] font-black mb-2 tracking-wide"
          style={{
            fontSize: "clamp(3rem, 10vw, 7rem)",
            background: "linear-gradient(135deg, #ffffff 0%, #00e5cc 40%, #9b30ff 70%, #ff2d78 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 30px rgba(0,229,204,0.25))",
            lineHeight: "1.1",
          }}
        >
          KHALEEL
        </h1>

        <div className="flex items-center gap-4 mb-6">
          <div
            className="h-px w-16"
            style={{ background: "linear-gradient(90deg, transparent, #00e5cc)" }}
          />
          <span
            className="font-['Orbitron'] font-bold tracking-[0.4em] text-sm"
            style={{ color: "#9b30ff", textShadow: "0 0 12px #9b30ff" }}
          >
            AKA KL7
          </span>
          <div
            className="h-px w-16"
            style={{ background: "linear-gradient(90deg, #ff2d78, transparent)" }}
          />
        </div>

        <p className="font-['Space_Grotesk'] text-base leading-relaxed max-w-xl mb-10 text-gray-400">
          I'm a creative designer who loves turning ideas into bold visuals,
          motion and video edits that tell a story and leave a lasting impact.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <button
            onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 rounded-full font-['Space_Grotesk'] font-semibold text-sm text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #00e5cc, #9b30ff)",
              boxShadow: "0 0 24px rgba(0,229,204,0.4), 0 0 48px rgba(155,48,255,0.2)",
            }}
          >
            View Portfolio
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 rounded-full font-['Space_Grotesk'] font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "transparent",
              border: "1px solid rgba(0,229,204,0.4)",
              color: "#00e5cc",
              boxShadow: "0 0 12px rgba(0,229,204,0.1)",
            }}
          >
            Get In Touch
          </button>
        </div>

        {/* Stats row */}
        <div
          className="flex flex-wrap gap-8 sm:gap-16 justify-center px-8 py-5 rounded-2xl"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.05)",
            backdropFilter: "blur(10px)",
          }}
        >
          {[
            { num: "4+", label: "Years Experience" },
            { num: "4", label: "Companies" },
            { num: "50+", label: "Projects Done" },
            { num: "5", label: "Adobe Tools" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="font-['Orbitron'] font-black text-2xl"
                style={{ color: "#00e5cc", textShadow: "0 0 12px #00e5cc80" }}
              >
                {stat.num}
              </p>
              <p className="font-['Space_Grotesk'] text-xs mt-1 tracking-wider text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <p className="text-xs font-['Space_Grotesk'] tracking-[0.3em] text-gray-600">SCROLL</p>
        <div
          className="w-px h-10"
          style={{
            background: "linear-gradient(180deg, #00e5cc, transparent)",
            animation: "pulse 1.5s infinite",
          }}
        />
      </div>
    </section>
  );
}