const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-20 py-10 border-t border-white/10 mt-20">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">

        {/* Left */}
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm text-muted-foreground">
          <span>© 2023–{new Date().getFullYear()} Simon Shiburi</span>
          <span className="hidden md:block">—</span>
          <span>Full-stack Systems Developer & Automation</span>
        </div>

        {/* Center (optional identity touch) */}
        <div className="text-xs text-muted-foreground/70">
          Built with precision & purpose
        </div>

        {/* Right (important links) */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:shiburisimon2@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;