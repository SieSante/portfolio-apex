import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="contact" className="section-spacing px-6 md:px-12 lg:px-20" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="meta-text mb-8">Inquiry</h2>
          <a
            href="mailto:shiburisimon2@gmail.com?subject=Portfolio Inquiry&body=Hi Shiburi, I saw your portfolio..."
            className="display-heading text-[clamp(2rem,6vw,5rem)] text-foreground hover:text-accent transition-colors block"
          >
            Let's work
            <br />
            together<span className="text-accent">.</span>
          </a>
          <div className="mt-12 flex flex-col md:flex-row gap-8">
            <a
              href="mailto:shiburisimon2@gmail.com"
              className="meta-text hover:text-accent transition-colors"
            >
              shiburisimon2@gmail.com
            </a>
            <a
              href="https://wa.me/27693620196"
              target="_blank"
              rel="noopener noreferrer"
              className="meta-text hover:text-accent transition-colors"
            >
              WhatsApp →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
