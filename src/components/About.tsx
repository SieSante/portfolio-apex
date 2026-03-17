import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "PHP / Laravel",
  "JavaScript / TypeScript",
  "Angular / Ionic",
  "C++ / C#",
  "Node.js",
  "MySQL / SQL Server",
  "Firebase",
  "Git / GitHub",
  "Figma",
  "Bootstrap / CSS",
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-spacing px-6 md:px-12 lg:px-20" ref={ref}>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
        <motion.div
          className="md:col-span-5"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="meta-text mb-8">About</h2>
          <p className="text-2xl md:text-3xl font-display font-semibold tracking-tight leading-snug text-foreground">
            A passionate Fullstack Software Developer specializing in responsive web and mobile application development.
          </p>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            I thrive on building innovative solutions, enhancing user experiences, and continuously improving my skills across various technologies. Currently contributing to the National Library of South Africa (NLSA), where I design and develop digital infrastructure serving public communities.
          </p>
        </motion.div>

        <motion.div
          className="md:col-span-5 md:col-start-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="meta-text mb-8">Disciplines</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm font-mono border border-border text-foreground hover:bg-foreground hover:text-background transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
