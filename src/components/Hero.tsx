import { motion } from "framer-motion";

const reveal = {
  initial: { clipPath: "inset(100% 0% 0% 0%)", y: 40 },
  animate: { clipPath: "inset(0% 0% 0% 0%)", y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

const Hero = () => {
  return (
    <section className="relative h-[70vh] flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-12">
      <div className="max-w-[1400px] w-full mx-auto">
        <motion.p
          className="meta-text mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Fullstack Developer — South Africa
        </motion.p>
        <motion.h1
          className="display-heading text-[clamp(3rem,12vw,10rem)] text-foreground"
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.4 }}
        >
          Shiburi
        </motion.h1>
        <motion.h1
          className="display-heading text-[clamp(3rem,12vw,10rem)] text-foreground"
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.55 }}
        >
          Simon<span className="text-accent">.</span>
        </motion.h1>
        <motion.p
          className="mt-8 max-w-lg text-muted-foreground font-body tracking-tight leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Building digital systems that bridge users and technology.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
