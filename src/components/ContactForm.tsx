// src/components/ContactForm.tsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import type {SubmitHandler} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Схема валидации формы
const schema = yup
  .object({
    name: yup.string().required('Пожалуйста, введите имя'),
    phone: yup
      .string()
      .matches(/^[0-9()+\- ]{7,15}$/, 'Введите корректный телефон')
      .required('Пожалуйста, введите телефон'),
    email: yup.string().email('Введите корректный e-mail').required('Пожалуйста, введите e-mail'),
    time: yup.string().required('Укажите удобное время'),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  // Обработчик отправки формы: используем поле `data`, чтобы не возникало TS6133
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await fetch(`${import.meta.env.VITE_API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
      reset();
    } catch (err) {
      console.error('Ошибка при отправке формы:', err);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Спасибо за заявку!</h2>
        <p className="text-gray-700">Мы свяжемся с вами в течение часа.</p>
      </section>
    );
  }

  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Записаться на ознакомительную встречу</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto space-y-6"
        noValidate
      >
        {/* Имя */}
        <div>
          <label className="block text-gray-700 mb-1">Имя</label>
          <input
            type="text"
            {...register('name')}
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && (
            <p className="text-red-500 mt-1 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Телефон */}
        <div>
          <label className="block text-gray-700 mb-1">Телефон</label>
          <input
            type="tel"
            {...register('phone')}
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 mt-1 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* E-mail */}
        <div>
          <label className="block text-gray-700 mb-1">E-mail</label>
          <input
            type="email"
            {...register('email')}
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && (
            <p className="text-red-500 mt-1 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Удобное время */}
        <div>
          <label className="block text-gray-700 mb-1">Удобное время</label>
          <input
            type="text"
            placeholder="например, «с 18:00 до 20:00»"
            {...register('time')}
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 ${
              errors.time ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.time && (
            <p className="text-red-500 mt-1 text-sm">{errors.time.message}</p>
          )}
        </div>

        {/* Кнопка отправки */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-teal-400 hover:bg-teal-500 text-white font-semibold py-3 rounded-lg shadow-lg disabled:opacity-50"
        >
          {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;