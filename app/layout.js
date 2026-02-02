import './globals.css';

// Metadata for SEO
export const metadata = {
  title: 'Sourav Modak | AI Researcher',
  description: 'AI Researcher and Doctoral Candidate specializing in Generative AI, MLOps, and Computer Vision. Building intelligent systems at the intersection of research and production.',
  keywords: ['AI Researcher', 'Generative AI', 'Computer Vision', 'MLOps', 'Machine Learning', 'Deep Learning', 'PhD Candidate'],
  authors: [{ name: 'Sourav Modak' }],
  openGraph: {
    title: 'Sourav Modak | AI Researcher',
    description: 'AI Researcher specializing in Generative AI, MLOps, and Computer Vision',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="gradient-bg grid-pattern min-h-screen antialiased">
        {/* Noise overlay for texture */}
        <div className="noise-overlay" />
        
        {/* Main content */}
        {children}
      </body>
    </html>
  );
}
