import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import vet1 from '../assets/images/vet1.jpg';
import vet2 from '../assets/images/vet2.jpg';
import vet3 from '../assets/images/vet3.jpg';
import vet4 from '../assets/images/vet4.jpg';

const facts = [
  { value: 95, suffix: '%', label: 'меньше аллергенов' },
  { value: 2, suffix: '×', label: 'снижение реакции' },
];

const Facts: React.FC = () => (
  <section className="py-16">
    <h2 className="text-3xl font-bold text-center mb-12">Научные факты</h2>
    <div className="container px-6 flex flex-col lg:flex-row items-center justify-between">
      <div className="flex flex-col sm:flex-row gap-12 mb-12 lg:mb-0">
        {facts.map(({ value, suffix, label }, i) => (
          <motion.div
            key={i}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.3 }}
          >
            <div className="text-5xl font-extrabold text-accent">
              <CountUp end={value} suffix={suffix} duration={1.5} />
            </div>
            <p className="mt-2 text-gray-600">{label}</p>
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6">
        {[vet1, vet2, vet3, vet4].map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`Ветеринар ${i + 1}`}
            className="h-32 object-cover w-full rounded-2xl shadow-custom"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 * i }}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Facts;