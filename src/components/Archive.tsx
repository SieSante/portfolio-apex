import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const archiveItems = [
  {
    title: "ROIDANza IT Solutions",
    discipline: " JavaScript, HTML, React (TypeScript), Tailwind CSS",
    year: "2026",
    status: "Live",
    link: "#",
  },
  {
    title: "Mobile Banking Backend",
    discipline: "Laravel / MySQL",
    year: "2023",
    status: "Internal",
  },
  {
    title: "NLSA Mobile App",
    discipline: "Angular / Ionic / Laravel",
    year: "2024",
    status: "Live",
    link: "#",
  },
  {
    title: "NLSA E-Publication",
    discipline: "PHP / MySQL / Bootstrap",
    year: "2024",
    status: "Live",
    link: "#",
  },
];

const Archive = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="archive" className="section-spacing px-6 md:px-12 lg:px-20" ref={ref}>
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground">
            Project History
          </h2>
          <div className="h-px flex-1 bg-border ml-6" />
        </div>

        {/* List */}
        <div className="divide-y divide-white/5">
          {archiveItems.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.link || "#"}
              target={item.link ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-6 hover:bg-white/5 px-3 rounded-lg transition"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Left */}
              <div className="flex items-center gap-6 flex-1 min-w-0">
                <span className="text-xs text-muted-foreground w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="text-lg font-semibold truncate text-foreground group-hover:text-primary transition">
                  {item.title}
                </span>
              </div>

              {/* Right */}
              <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">

                <span>{item.discipline}</span>

                <span>{item.year}</span>

                {/* Status Badge */}
                <span
                  className={`px-2 py-1 rounded-md text-xs font-semibold ${
                    item.status === "Live"
                      ? "bg-primary/10 text-primary"
                      : "bg-white/10 text-muted-foreground"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Archive;