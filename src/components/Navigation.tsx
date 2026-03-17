import { motion } from "framer-motion";

const navItems = [
  { label: "Works", href: "#works" },
  { label: "About", href: "#about" },
  { label: "Archive", href: "#archive" },
  { label: "Inquiry", href: "#contact" },
];

const Navigation = () => {
  return (
    <motion.nav
      className="nav-pill"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center gap-1">
        <span className="meta-text px-4 py-2">SS</span>
        <div className="h-4 w-px bg-border" />
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-full hover:bg-muted"
          >
            {item.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;
