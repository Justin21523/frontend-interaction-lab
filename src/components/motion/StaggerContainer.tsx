import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface StaggerContainerProps {
  children: ReactNode;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function StaggerContainer({ children }: StaggerContainerProps) {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      {children}
    </motion.div>
  );
}