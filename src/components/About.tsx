import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "Laravel",
  "React / Vite",
  "Angular / Ionic",
  "Node.js",
  "MySQL / SQL Server",
  "TypeScript",
  "REST APIs",
  "Firebase",
  "Git / GitHub",
  "Figma",
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-spacing px-6 md:px-12 lg:px-20" ref={ref}>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">

        {/* LEFT SIDE */}
        <motion.div
          className="md:col-span-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
            About
          </h2>

          <p className="text-2xl md:text-3xl font-semibold tracking-tight leading-snug text-foreground">
            Full-stack developer focused on building scalable systems and real-world digital solutions.
          </p>

          <p className="mt-6 text-muted-foreground leading-relaxed">
            I specialize in designing and developing web and mobile applications that solve practical
            business problems — from internal platforms to user-facing systems. My work focuses on
            performance, scalability, and clean architecture.
          </p>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Currently contributing to digital infrastructure at the National Library of South Africa (NLSA),
            where I help build and maintain systems used by thousands of users. I also co-build solutions
            through ROIDENza IT Solutions, focusing on automation and custom business platforms.
          </p>

          {/* OPTIONAL CTA (VERY POWERFUL FOR RECRUITERS) */}
          <div className="mt-6">
            <a
              href="#contact"
              className="text-primary text-sm font-semibold hover:underline"
            >
              Available for opportunities →
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="md:col-span-5 md:col-start-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
            Core Stack
          </h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm border border-white/10 rounded-lg bg-white/5 text-foreground hover:border-primary/40 transition"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* EXTRA TRUST SIGNAL */}
          <div className="mt-8 text-sm text-muted-foreground">
            <p>✔ Real-world systems</p>
            <p>✔ API & backend architecture</p>
            <p>✔ Mobile + web platforms</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;