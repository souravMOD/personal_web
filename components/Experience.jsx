'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Research Assistant (AI & Computer Vision)',
    company: 'University of Hohenheim',
    location: 'Stuttgart, Germany',
    period: 'Aug 2023 – Present',
    description: [
      'Engineered robust Generative AI workflows using Stable Diffusion and Segment Anything to synthesize high-fidelity training data',
      'Led engineering and deployment of lightweight deep learning models (YOLO, ViT) onto edge devices (NVIDIA Jetson, Raspberry Pi)',
      'Developed active-learning system to automate data annotation, integrating Docker containers',
      'Collaborated with industry partners (BOSCH, BASF) on intelligent sensor systems',
    ],
    tags: ['Stable Diffusion', 'SAM', 'YOLO', 'Edge AI', 'Docker', 'MLOps'],
  },
  {
    title: 'Computer Vision Intern',
    company: 'Plantix (PEAT GmbH)',
    location: 'Berlin, Germany (Remote)',
    period: 'May 2023 – July 2023',
    description: [
      'Supported end-to-end ML engineering lifecycle from data preprocessing to model validation',
      'Managed large-scale annotated datasets (200,000+ images) ensuring quality and consistency',
      'Automated data validation steps, reducing manual overhead for the data science team',
    ],
    tags: ['Computer Vision', 'Data Engineering', 'ML Pipeline', 'Python'],
  },
  {
    title: 'AI Researcher (Project NalamKI)',
    company: 'University of Hohenheim',
    location: 'Stuttgart, Germany',
    period: 'Jan 2023 – June 2023',
    description: [
      'Executed full-stack Computer Vision tasks including data curation and model architecture selection',
      'Performed hyperparameter optimization for segmentation and detection tasks',
    ],
    tags: ['Computer Vision', 'Hyperparameter Tuning', 'Segmentation', 'Detection'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary font-mono text-sm">{'// EXPERIENCE'}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Where I&apos;ve{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              Worked
            </span>
          </h2>
        </motion.div>

        {/* Experience timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent opacity-20 hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%]'
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`hidden md:block absolute top-6 w-4 h-4 rounded-full bg-primary border-4 border-background ${
                  index % 2 === 0 ? 'right-[-8px] md:right-auto md:left-[calc(50%-8px)]' : 'left-[calc(50%-8px)]'
                }`}
              />

              {/* Card */}
              <div
                className={`p-6 md:p-8 rounded-xl bg-surface border border-white/5 card-hover ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}
              >
                {/* Period badge */}
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono mb-4 ${
                    index % 2 === 0 ? 'md:float-right md:ml-4' : ''
                  }`}
                >
                  <Calendar size={12} />
                  {exp.period}
                </div>

                {/* Title & Company */}
                <h3 className="text-xl font-display font-semibold text-foreground mb-2 clear-both">
                  {exp.title}
                </h3>
                <div
                  className={`flex items-center gap-2 text-muted mb-4 ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}
                >
                  <Building2 size={14} />
                  <span>{exp.company}</span>
                  <span className="text-white/20">·</span>
                  <span>{exp.location}</span>
                </div>

                {/* Description */}
                <ul
                  className={`space-y-2 mb-6 ${
                    index % 2 === 0 ? 'md:text-right' : ''
                  }`}
                >
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-muted/80 text-sm leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div
                  className={`flex flex-wrap gap-2 ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}
                >
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
