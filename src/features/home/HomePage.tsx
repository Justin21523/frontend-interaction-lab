import FadeIn from '@/components/motion/FadeIn';
import SlideUp from '@/components/motion/SlideUp';
import { motion } from 'motion/react';

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto py-12 text-center">
      <FadeIn>
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4">
          Frontend Interaction <span className="text-blue-600">Lab</span>
        </h1>
      </FadeIn>
      
      <SlideUp delay={0.2}>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          A playground to master modern React, TypeScript, Animations, and Data Visualization.
        </p>
      </SlideUp>

      <SlideUp delay={0.4}>
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: '#1d4ed8' }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg shadow-blue-500/30 transition-all"
        >
          Start Exploring
        </motion.button>
      </SlideUp>

      <FadeIn delay={0.6}>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {['React 18+', 'TypeScript', 'Tailwind CSS'].map((tech, i) => (
            <div key={tech} className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-800">{tech}</h3>
              <p className="text-sm text-slate-500 mt-2">Core foundation of this lab.</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}