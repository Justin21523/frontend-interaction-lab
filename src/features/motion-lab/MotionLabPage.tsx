import FadeIn from '@/components/motion/FadeIn';
import SlideUp from '@/components/motion/SlideUp';
import ScaleOnHover from '@/components/motion/ScaleOnHover';
import StaggerContainer from '@/components/motion/StaggerContainer';
import { motion } from 'motion/react';

const staggerItems = ['Design', 'Code', 'Test', 'Deploy'];

export default function MotionLabPage() {
  return (
    <div className="space-y-12">
      <FadeIn>
        <h1 className="text-3xl font-bold text-slate-800 border-b pb-4">Motion Playground</h1>
      </FadeIn>

      {/* 1. Fade In */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-slate-700">1. Fade In</h2>
        <FadeIn delay={0.2}>
          <div className="p-6 bg-blue-50 rounded-lg border border-blue-200 text-blue-800">
            This element fades in smoothly upon mounting.
          </div>
        </FadeIn>
      </section>

      {/* 2. Slide Up */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-slate-700">2. Slide Up</h2>
        <SlideUp delay={0.2}>
          <div className="p-6 bg-green-50 rounded-lg border border-green-200 text-green-800">
            This element slides up from the bottom while fading in.
          </div>
        </SlideUp>
      </section>

      {/* 3. Scale on Hover */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-slate-700">3. Scale on Hover</h2>
        <ScaleOnHover>
          <div className="p-6 bg-purple-50 rounded-lg border border-purple-200 text-purple-800 cursor-pointer inline-block">
            Hover me to scale up!
          </div>
        </ScaleOnHover>
      </section>

      {/* 4. Stagger Card Animation */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-slate-700">4. Stagger Animation</h2>
        <StaggerContainer>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {staggerItems.map((item) => (
              <motion.div
                key={item}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="p-6 bg-slate-800 text-white rounded-xl text-center font-bold shadow-lg"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </StaggerContainer>
      </section>
    </div>
  );
}