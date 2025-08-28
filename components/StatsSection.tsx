'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const stats = [
  {
    number: 500,
    suffix: '+',
    label: 'Clients Served',
    description: 'Families and individuals trust us'
  },
  {
    number: 10,
    suffix: '+',
    label: 'Years Experience',
    description: 'Proven track record in financial planning'
  },
  {
    number: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Consistently high satisfaction ratings'
  },
  {
    number: 50,
    suffix: 'M+',
    label: 'Assets Managed',
    description: 'Portfolio value under management'
  },
];

function Counter({ target, suffix, duration = 2 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const startTime = Date.now();
      const endTime = startTime + duration * 1000;

      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (duration * 1000), 1);
        const currentCount = Math.floor(progress * target);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      updateCount();
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="text-4xl lg:text-5xl font-montserrat font-bold text-emerald-custom">
      {count}{suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 gradient-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-white mb-6">
            Trusted by Hundreds of Families
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Numbers that reflect our commitment to excellence and the trust our clients place in us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all duration-300"
            >
              <Counter target={stat.number} suffix={stat.suffix} />
              <h3 className="text-xl font-montserrat font-semibold text-white mt-4 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-300">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}