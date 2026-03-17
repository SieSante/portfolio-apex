import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const archiveItems = [
  { title: "KasiVendorMarketplace", discipline: "WordPress / Strategy", year: "2023", status: "Live" },
  { title: "Mobile Banking Backend", discipline: "Laravel / MySQL", year: "2023", status: "Internal" },
  { title: "NLSA Mobile App", discipline: "Angular / Ionic / Laravel", year: "2024", status: "Live" },
  { title: "NLSA E-Publication", discipline: "PHP / MySQL / Bootstrap", year: "2024", status: "Live" },
];

const Archive = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="archive" className="section-spacing px-6 md:px-12 lg:px-20" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between mb-16">
          <h2 className="meta-text">Archive</h2>
          <div className="h-px flex-1 bg-border ml-6" />
        </div>
        <div>
          {archiveItems.map((item, i) => (
            <motion.div
              key={item.title}
              className="archive-row group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="flex items-center gap-6 flex-1 min-w-0">
                <span className="meta-text shrink-0 w-8">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-lg font-display font-semibold tracking-tight truncate text-foreground">
                  {item.title}
                </span>
              </div>
              <div className="hidden md:flex items-center gap-8">
                <span className="meta-text">{item.discipline}</span>
                <span className="meta-text">{item.year}</span>
                <span className="meta-text text-accent">{item.status}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Archive;
