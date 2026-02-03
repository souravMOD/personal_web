'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Languages, Award } from 'lucide-react';

const skills = {
  'Generative AI & LLMs': [
    'LangChain',
    'LangGraph',
    'RAG',
    'Stable Diffusion',
    'FLUX',
    'ControlNet',
    'Hugging Face',
    'Prompt Engineering',
  ],
  'MLOps & Engineering': [
    'Docker',
    'GitOps (CI/CD)',
    'MLflow',
    'Airflow',
    'FastAPI',
    'Kubernetes',
    'SLURM',
  ],
  'Computer Vision': [
    'PyTorch',
    'YOLO',
    'RT-DETR',
    'Segment Anything',
    'Vision Transformers',
    'DETR',
    'ViT',
    'Swin',
    'OpenCV',
  ],
  'Programming': ['Python (Expert)', 'SQL', 'Bash', 'HTML5', 'CSS3', 'LaTeX', 'Git'],
};

const education = [
  {
    degree: 'Ph.D. in Applied Generative AI',
    school: 'University of Hohenheim',
    location: 'Stuttgart, Germany',
    period: '2023 – Present',
    focus: 'Enhancing Data Efficiency and Model Robustness through Generative AI-Based Image Augmentation',
  },
  {
    degree: 'M.Sc. in Agricultural Sciences',
    school: 'University of Hohenheim',
    location: 'Stuttgart, Germany',
    period: '2019 – 2023',
    focus: 'Major: AI in Agriculture · Grade: 1.8',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary font-mono text-sm">{'// ABOUT ME'}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Bridging Research{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              & Industry
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted leading-relaxed mb-6">
                I&apos;m a Doctoral Candidate at the University of Hohenheim, 
                specializing in Generative AI, MLOps, and Computer Vision. My work 
                focuses on engineering end-to-end synthetic data pipelines using 
                cutting-edge models like Segment Anything and Diffusion Models.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                I&apos;m passionate about bridging the gap between cutting-edge AI 
                research and industrial software solutions. I&apos;ve collaborated with 
                industry giants like BOSCH and BASF to translate complex research 
                requirements into intelligent sensor systems.
              </p>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-lg bg-surface border border-white/5">
                <MapPin className="text-primary mb-2" size={20} />
                <p className="text-sm text-muted">Based in</p>
                <p className="text-foreground font-medium">Stuttgart, Germany</p>
              </div>
              <div className="p-4 rounded-lg bg-surface border border-white/5">
                <Languages className="text-secondary mb-2" size={20} />
                <p className="text-sm text-muted">Languages</p>
                <p className="text-foreground font-medium">EN · DE · BN</p>
              </div>
              <div className="p-4 rounded-lg bg-surface border border-white/5">
                <GraduationCap className="text-accent mb-2" size={20} />
                <p className="text-sm text-muted">Education</p>
                <p className="text-foreground font-medium">PhD Candidate</p>
              </div>
              <div className="p-4 rounded-lg bg-surface border border-white/5">
                <Award className="text-primary mb-2" size={20} />
                <p className="text-sm text-muted">Publications</p>
                <p className="text-foreground font-medium">8+ Papers</p>
              </div>
            </div>
          </motion.div>

          {/* Right column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {Object.entries(skills).map(([category, items], catIndex) => (
              <div key={category}>
                <h3 className="text-sm font-mono text-primary mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + catIndex * 0.1 + index * 0.03 }}
                      className="px-3 py-1.5 text-sm rounded-lg bg-surface border border-white/10 text-muted hover:text-foreground hover:border-primary/30 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Education timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-sm font-mono text-primary mb-8">{'// EDUCATION'}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="p-6 rounded-xl bg-surface border border-white/5 card-hover"
              >
                <p className="text-xs text-primary font-mono mb-2">{edu.period}</p>
                <h4 className="text-lg font-display font-semibold text-foreground mb-1">
                  {edu.degree}
                </h4>
                <p className="text-muted text-sm mb-2">{edu.school}</p>
                <p className="text-muted/70 text-sm">{edu.focus}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
