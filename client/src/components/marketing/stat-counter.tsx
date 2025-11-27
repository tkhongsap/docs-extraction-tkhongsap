import { motion } from 'framer-motion';
import { counterVariants, staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface Stat {
  value: string;
  label: string;
}

interface StatCounterProps {
  stats: Stat[];
  className?: string;
}

export function StatCounter({ stats, className }: StatCounterProps) {
  return (
    <motion.div
      className={cn('grid grid-cols-2 md:grid-cols-4 gap-8', className)}
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={viewportOnce}
    >
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          variants={staggerItem}
          className="text-center"
        >
          <motion.div
            variants={counterVariants}
            className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground"
          >
            {stat.value}
          </motion.div>
          <div className="text-sm text-muted-foreground mt-1">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

interface SingleStatProps {
  value: string | number;
  label: string;
  className?: string;
}

export function SingleStat({ value, label, className }: SingleStatProps) {
  return (
    <motion.div
      className={cn('text-center', className)}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="text-4xl font-semibold tracking-tight tabular-nums">
        {value}
      </div>
      <div className="text-sm text-muted-foreground mt-1">
        {label}
      </div>
    </motion.div>
  );
}
