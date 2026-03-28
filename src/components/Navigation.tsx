import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Work", href: "#works" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [atFooter, setAtFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;

      const rect = footer.getBoundingClientRect();

      // Detect footer visibility
      setAtFooter(rect.top < window.innerHeight - 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`nav-pill ${atFooter ? "top" : ""}`}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center gap-1">
        
        {/* Logo / Initials */}
        <span className="meta-text px-4 py-2">SS.</span>

        <div className="h-4 w-px bg-border" />

        {/* Links */}
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-full hover:bg-muted"
          >
            {item.label}
          </a>
        ))}

        {/* Hire Me (same as your screenshot) */}
        <a
          href="#contact"
          className="ml-2 px-4 py-2 text-sm font-medium bg-foreground text-background rounded-full"
        >
          Hire Me
        </a>

      </div>
    </motion.nav>
  );
};

export default Navigation;