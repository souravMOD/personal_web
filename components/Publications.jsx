'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, ExternalLink, BookOpen, Award } from 'lucide-react';

const publications = [
  {
    title: 'Exploring Model Quantization in GenAI-based Weed Inpainting and Detection',
    venue: 'Journal of Systems Architecture',
    year: '2025',
    status: 'In Press',
    type: 'journal',
    authors: 'S. Modak, A. O. Saltık, and A. Stein',
  },
  {
    title: 'Improving Lightweight Weed Detection via Knowledge Distillation',
    venue: 'IEEE/CVF ICCV Workshops',
    year: '2025',
    status: 'Published',
    type: 'conference',
    authors: 'A. O. Saltık, M. Voigt, S. Modak, M. Beckworth, and A. Stein',
    pages: 'pp. 7160-7169',
  },
  {
    title: 'Generative AI-based pipeline architecture for increasing training efficiency in intelligent weed control systems',
    venue: 'Journal of Systems Architecture',
    year: '2025',
    status: 'Published',
    type: 'journal',
    authors: 'S. Modak and A. Stein',
  },
  {
    title: 'Exploring model quantization in GenAI-based image inpainting and detection of arable plants',
    venue: 'ARCS Conference',
    year: '2025',
    status: 'Published',
    type: 'conference',
    authors: 'S. Modak, A. O. Saltık, and A. Stein',
    pages: 'pp. 314-329',
  },
  {
    title: 'Enhancing weed detection performance by means of GenAI-based image augmentation',
    venue: 'ECCV',
    year: '2025',
    status: 'Published',
    type: 'conference',
    authors: 'S. Modak and A. Stein',
    pages: 'pp. 252-266',
  },
  {
    title: 'Synthesizing training data for intelligent weed control systems using generative AI',
    venue: 'ARCS Conference',
    year: '2024',
    status: 'Published',
    type: 'conference',
    authors: 'S. Modak and A. Stein',
    pages: 'pp. 112-126',
  },
  {
    title: 'Pansharpening low-altitude multispectral images of potato plants using a generative adversarial network',
    venue: 'Remote Sensing',
    year: '2024',
    status: 'Published',
    type: 'journal',
    authors: 'S. Modak, J. Heil, and A. Stein',
    volume: 'vol. 16, no. 5',
  },
];

const conferences = [
  { name: 'ICCV 2025', full: 'International Conference on Computer Vision' },
  { name: 'ECCV 2024', full: 'European Conference on Computer Vision' },
  { name: 'ARCS 2024/25', full: 'Architecture of Computing Systems Conference' },
];

export default function Publications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="publications" className="py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary font-mono text-sm">// RESEARCH</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Publications &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Papers
            </span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl">
            Peer-reviewed publications in top-tier venues including ICCV, ECCV, and leading journals in computer vision and systems architecture.
          </p>
        </motion.div>

        {/* Conference badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {conferences.map((conf) => (
            <div
              key={conf.name}
              className="px-4 py-2 rounded-lg bg-surface border border-primary/20 flex items-center gap-2"
            >
              <Award size={16} className="text-primary" />
              <span className="font-mono text-sm text-foreground">{conf.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Publications list */}
        <div className="space-y-4">
          {publications.map((pub, index) => (
            <motion.article
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="group p-6 rounded-xl bg-surface border border-white/5 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      pub.type === 'journal'
                        ? 'bg-primary/10 text-primary'
                        : 'bg-secondary/10 text-secondary'
                    }`}
                  >
                    {pub.type === 'journal' ? (
                      <BookOpen size={20} />
                    ) : (
                      <FileText size={20} />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-primary">{pub.year}</span>
                    <span className="text-white/20">·</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        pub.status === 'In Press'
                          ? 'bg-accent/10 text-accent'
                          : 'bg-green-500/10 text-green-400'
                      }`}
                    >
                      {pub.status}
                    </span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        pub.type === 'journal'
                          ? 'bg-primary/10 text-primary'
                          : 'bg-secondary/10 text-secondary'
                      }`}
                    >
                      {pub.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                    {pub.title}
                  </h3>

                  <p className="text-sm text-muted mb-2">{pub.authors}</p>

                  <p className="text-sm text-muted/70">
                    <span className="font-medium text-muted">{pub.venue}</span>
                    {pub.pages && `, ${pub.pages}`}
                    {pub.volume && `, ${pub.volume}`}
                  </p>
                </div>

                {/* Link icon */}
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={18} className="text-muted" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* In Progress section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 p-6 rounded-xl border border-dashed border-white/10"
        >
          <h3 className="text-sm font-mono text-accent mb-4">// IN PROGRESS</h3>
          <ul className="space-y-3">
            <li className="text-muted text-sm flex items-start gap-2">
              <span className="text-accent mt-1">→</span>
              Enhancing Weed Detection Robustness Using Generative AI-Based Synthetic Data
            </li>
            <li className="text-muted text-sm flex items-start gap-2">
              <span className="text-accent mt-1">→</span>
              Exploring Self-Supervised Learning for Improving the Robustness of Weed Detection
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
