import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar?: string;
  rating?: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
  className?: string;
}

export function TestimonialCarousel({
  testimonials,
  autoPlayInterval = 5000,
  className,
}: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (autoPlayInterval <= 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlayInterval, testimonials.length]);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <div className={cn('relative', className)}>
      <div className="max-w-3xl mx-auto text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* Quote */}
            <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
              "{testimonial.quote}"
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-col items-center gap-3">
              {/* Avatar */}
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                {testimonial.avatar ? (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                ) : (
                  testimonial.author.charAt(0)
                )}
              </div>

              <div>
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.title}, {testimonial.company}
                </div>
              </div>

              {/* Star Rating */}
              {testimonial.rating && (
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'h-4 w-4',
                        i < testimonial.rating!
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-muted text-muted'
                      )}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={prev}
          className="h-8 w-8 rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={cn(
                'h-2 w-2 rounded-full transition-all duration-200',
                i === current
                  ? 'bg-primary w-6'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              )}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={next}
          className="h-8 w-8 rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
