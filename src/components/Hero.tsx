import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const reveal = {
  initial: { clipPath: "inset(100% 0% 0% 0%)", y: 40 },
  animate: { clipPath: "inset(0% 0% 0% 0%)", y: 0 },
};

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-16">
      <div className="max-w-[1400px] w-full mx-auto">

        {/* Top Tag */}
        <motion.p
          className="meta-text mb-6 text-primary tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Systems Developer — South Africa
        </motion.p>

        {/* Name */}
        <motion.h1
          className="display-heading text-[clamp(3rem,12vw,10rem)] text-foreground"
          {...reveal}
          transition={{ duration: 0.8, ease, delay: 0.4 }}
        >
          Shiburi
        </motion.h1>

        <motion.h1
          className="display-heading text-[clamp(3rem,12vw,10rem)] text-foreground"
          {...reveal}
          transition={{ duration: 0.8, ease, delay: 0.55 }}
        >
          Simon<span className="text-primary">.</span>
        </motion.h1>

        {/* Value Statement */}
        <motion.p
          className="mt-8 max-w-xl text-muted-foreground font-body tracking-tight leading-relaxed text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease }}
        >
          I design and build scalable digital systems — from business platforms
          to automation tools — helping organizations streamline operations,
          improve efficiency, and grow faster.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-8 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <a
            href="#selectedworks"
            className="px-6 py-3 bg-primary text-white rounded-lg text-sm font-semibold hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-white/20 rounded-lg text-sm font-semibold hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;