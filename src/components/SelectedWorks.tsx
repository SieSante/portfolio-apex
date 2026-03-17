import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-abstract.jpg";

interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
  status: string;
  discipline: string;
  colSpan: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "NLSA Mobile App",
    description:
      "Angular & Ionic front-end with a Laravel-powered API serving National Library services to thousands of users.",
    year: "2024",
    status: "Live",
    discipline: "Engineering",
    colSpan: "md:col-span-8",
  },
  {
    id: "02",
    title: "NLSA E-Publication",
    description:
      "Full-stack publishing platform — HTML/CSS/JS front-end, PHP backend, MySQL data layer.",
    year: "2024",
    status: "Live",
    discipline: "Engineering",
    colSpan: "md:col-span-4",
  },
  {
    id: "03",
    title: "Mobile Banking App",
    description:
      "Secure banking backend built with Laravel & MySQL at InvesthoodIT.",
    year: "2023",
    status: "Internal",
    discipline: "Backend",
    colSpan: "md:col-span-12",
  },
  {
    id: "04",
    title: "KasiVendorMarketplace",
    description:
      "WordPress marketplace enabling local vendors to register and manage food & product catalogs.",
    year: "2023",
    status: "Live",
    discipline: "Strategy",
    colSpan: "md:col-span-6",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={`project-card ${project.colSpan}`}
      initial={{ clipPath: "inset(100% 0% 0% 0%)", y: 60 }}
      animate={
        isInView
          ? { clipPath: "inset(0% 0% 0% 0%)", y: 0 }
          : { clipPath: "inset(100% 0% 0% 0%)", y: 60 }
      }
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="meta-text mb-3 flex items-center gap-3">
        <span>[ {project.id} / Case Study ]</span>
        <span className="text-accent">{project.status}</span>
      </div>
      <div className="relative aspect-[16/10] bg-muted overflow-hidden mb-4">
        <img
          src={heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
          style={{ border: "1px solid rgba(0,0,0,0.05)" }}
        />
        <div className="absolute inset-0 bg-foreground/0 hover:bg-foreground/5 transition-colors" />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl md:text-2xl font-display font-semibold tracking-tight text-foreground">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md">
            {project.description}
          </p>
        </div>
        <span className="meta-text shrink-0">{project.year}</span>
      </div>
    </motion.div>
  );
};

const SelectedWorks = () => {
  return (
    <section id="works" className="section-spacing px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between mb-16">
          <h2 className="meta-text">Selected Works</h2>
          <div className="h-px flex-1 bg-border ml-6" />
        </div>
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
