import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const data = [
  { name: 'Анна', text: 'Я никогда не чихаю рядом...' },
  { name: 'Иван', text: 'Моя аллергия почти исчезла...' },
  { name: 'Мария', text: 'Сначала сомневались...' },
];

const Testimonials: React.FC = () => (
  <section className="py-16 bg-secondary/50">
    <h2 className="text-3xl font-bold text-center mb-8">Отзывы владельцев</h2>
    <div className="container px-6 overflow-x-auto no-scrollbar">
      <div className="flex space-x-6">
        {data.map((t, i) => (
          <motion.div
            key={i}
            className="min-w-[300px] bg-secondary p-6 rounded-2xl shadow-custom"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <FaUserCircle className="text-accent text-4xl mx-auto mb-4" />
            <p className="italic text-gray-600 mb-4">“{t.text}”</p>
            <h4 className="text-center font-semibold">{t.name}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;