'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 's.modak@uni-hohenheim.de',
    href: 'mailto:s.modak@uni-hohenheim.de',
    color: 'primary',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'sourav-modak-a04237157',
    href: 'https://linkedin.com/in/sourav-modak-a04237157',
    color: 'secondary',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'https://github.com/souravMOD',
    href: 'https://github.com/souravMOD',
    color: 'accent',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">// GET IN TOUCH</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
            Let&apos;s{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Connect
            </span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Interested in collaboration, research opportunities, or just want to chat about AI? 
            I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`group p-6 rounded-xl bg-surface border border-white/5 hover:border-${link.color}/30 transition-all duration-300`}
            >
              <div
                className={`w-12 h-12 rounded-lg bg-${link.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <link.icon className={`text-${link.color}`} size={24} />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1">
                {link.label}
              </h3>
              <p className="text-sm text-muted truncate">{link.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 text-muted">
            <MapPin size={16} className="text-primary" />
            <span>Filderstadt, Stuttgart, Germany</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="mailto:s.modak@uni-hohenheim.de"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            <Send size={18} />
            Send me an email
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
