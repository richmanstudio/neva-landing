import React from 'react';
import { motion } from 'framer-motion';
import kittenHero from '../assets/images/kitten-hero.png';

const Hero: React.FC = () => (
  <section className="relative overflow-hidden py-24">
    <div className="container px-6 flex flex-col-reverse lg:flex-row items-center">
      {/* Текст */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <motion.h1
          className="text-5xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Заведи котёнка без страха аллергии
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Невская маскарадная — один из самых гипоаллергенных котов
        </motion.p>
        <motion.button
          className="inline-block bg-accent hover:bg-teal text-white font-medium py-3 px-8 rounded-2xl shadow-custom"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Записаться на встречу
        </motion.button>
      </div>
      {/* Картинка */}
      <motion.div
        className="w-full lg:w-1/2 mb-12 lg:mb-0 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <img
          src={kittenHero}
          alt="Невская маскарадная"
          className="max-w-full rounded-2xl"
        />
      </motion.div>
    </div>
  </section>
);

export default Hero;