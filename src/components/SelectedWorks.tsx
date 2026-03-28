import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-abstract.jpg";

interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
  status: string;
  tech: string[];
  colSpan: string;
  live?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "NLSA Mobile App",
    description:
      "Cross-platform mobile application delivering National Library services through a scalable API architecture.",
    year: "2024",
    status: "Live",
    tech: ["Angular", "Ionic", "Laravel", "MySQL"],
    colSpan: "md:col-span-6",
    live: "#",
  },
  {
    id: "02",
    title: "NLSA E-Publication",
    description:
      "Full-stack digital publishing system enabling structured content management and distribution.",
    year: "2024",
    status: "Live",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    colSpan: "md:col-span-6",
    live: "#",
  },
  {
    id: "03",
    title: "Mobile Banking Backend",
    description:
      "Secure backend architecture for financial transactions and user account management.",
    year: "2023",
    status: "Internal",
    tech: ["Laravel", "MySQL", "API Security"],
    colSpan: "md:col-span-6",
  },
  {
    id: "04",
    title: "Kasi Vendor Marketplace",
    description:
      "Marketplace platform enabling local vendors to manage products and orders efficiently.",
    year: "2023",
    status: "Live",
    tech: ["WordPress", "WooCommerce"],
    colSpan: "md:col-span-6",
    live: "#",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const Wrapper = project.live ? "a" : "div";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={project.colSpan}
    >
      <Wrapper
        href={project.live || "#"}
        target={project.live ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className="group block h-full"
      >
        <div className="h-full bg-card rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)]">

          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={heroImage}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />

            {/* Status */}
            <div className="absolute top-3 right-3">
              <span
                className={`px-2 py-1 text-xs rounded-md font-semibold ${
                  project.status === "Live"
                    ? "bg-primary text-white"
                    : "bg-white/10 text-white"
                }`}
              >
                {project.status}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col gap-3">
            <div className="text-xs text-muted-foreground">
              [ {project.id} / Case Study ]
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition">
              {project.title}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-4 text-sm">
              <span className="text-muted-foreground">{project.year}</span>

              <div className="flex gap-4">
                {project.live && (
                  <span className="text-primary group-hover:underline">
                    View Project →
                  </span>
                )}
                {project.github && (
                  <span className="text-muted-foreground group-hover:underline">
                    Code
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </motion.div>
  );
};

const SelectedWorks = () => {
  return (
    <section id="selectedworks" className="section-spacing px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">

        <div className="flex items-center justify-between mb-16">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground">
            Selected Work
          </h2>
          <div className="h-px flex-1 bg-border ml-6" />
        </div>

        {/* Balanced grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;