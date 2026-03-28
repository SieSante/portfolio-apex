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

          {/* Label */}
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
            Contact
          </h2>

          {/* Headline */}
          <h1 className="display-heading text-[clamp(2rem,6vw,5rem)] text-foreground leading-tight">
            Let’s build something{" "}
            <span className="text-primary">impactful</span>.
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-xl text-muted-foreground">
            I'm currently open to full-time roles, freelance projects, and collaborations.
            If you're looking for a developer who can build scalable systems and real-world solutions,
            let’s connect.
          </p>

          {/* Contact Options */}
          <div className="mt-10 flex flex-col md:flex-row gap-6 text-sm">

            <a
              href="mailto:shiburisimon2@gmail.com?subject=Opportunity&body=Hi Simon, I came across your portfolio..."
              className="px-5 py-3 border border-white/10 rounded-lg hover:border-primary/40 transition"
            >
              📧 shiburisimon2@gmail.com
            </a>

            <a
              href="https://wa.me/27693620196"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border border-white/10 rounded-lg hover:border-primary/40 transition"
            >
              💬 Chat on WhatsApp
            </a>

          </div>

          {/* Availability Tag */}
          <div className="mt-8 text-sm text-muted-foreground">
            ✔ Available for opportunities
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;