import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface ScaleOnHoverProps {
  children: ReactNode;
}

export default function ScaleOnHover({ children }: ScaleOnHoverProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      {children}
    </motion.div>
  );
}