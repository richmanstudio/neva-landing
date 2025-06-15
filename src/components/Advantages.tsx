import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const advantages = [
  { title: 'Низкий уровень аллергенов', Icon: ShieldCheckIcon },
  { title: 'Шелковистая шерсть без колтунов', Icon: SparklesIcon },
  { title: 'Дружелюбный характер', Icon: ChatBubbleLeftRightIcon },
  { title: 'Ум и обучаемость', Icon: LightBulbIcon },
];

const Advantages: React.FC = () => (
  <section className="py-16 bg-secondary/50">
    <h2 className="text-3xl font-bold text-center mb-12">Почему Невская маскарадная</h2>
    <div className="container px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {advantages.map(({ title, Icon }, i) => (
        <motion.div
          key={i}
          className="bg-secondary rounded-2xl p-8 shadow-custom text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
        >
          <Icon className="h-10 w-10 text-accent mb-4 mx-auto" />
          <h3 className="font-semibold text-lg">{title}</h3>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Advantages;