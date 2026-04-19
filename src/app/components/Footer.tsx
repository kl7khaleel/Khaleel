export function Footer() {
  return (
    <footer className="py-8 border-t bg-[#080810] border-[#00e5cc]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span
            className="font-['Orbitron'] font-black text-lg tracking-widest"
            style={{
              background: "linear-gradient(90deg, #00e5cc, #9b30ff, #ff2d78)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 6px #00e5cc80)",
            }}
          >
            KL7
          </span>
          <p className="font-['Space_Grotesk'] text-xs text-center text-gray-600">
            © {new Date().getFullYear()} Muhammed Khaleel K P · Designed with passion
          </p>
          <p className="font-['Space_Grotesk'] text-xs text-gray-600">
            Bangalore, India
          </p>
        </div>
      </div>
    </footer>
  );
}
