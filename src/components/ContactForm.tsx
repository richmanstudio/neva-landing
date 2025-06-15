import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().email().required(),
  time: yup.string().required(),
}).required();

type FormData = yup.InferType<typeof schema>;

const ContactForm: React.FC = () => {
  const [ok, setOk] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } =
    useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = async (d: FormData) => {
    // ваш POST...
    setOk(true);
    reset();
  };

  if (ok) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Спасибо за заявку!</h2>
        <p className="text-gray-600">Мы свяжемся в течение часа.</p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-secondary/50">
      <h2 className="text-3xl font-bold text-center mb-8">Записаться на встречу</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container px-6 max-w-lg mx-auto space-y-6"
      >
        {[
          { name: 'name', label: 'Имя', type: 'text' },
          { name: 'phone', label: 'Телефон', type: 'tel' },
          { name: 'email', label: 'E-mail', type: 'email' },
          { name: 'time', label: 'Удобное время', type: 'text', placeholder: 'с 18:00 до 20:00' },
        ].map(({ name, label, type, placeholder }, i) => (
          <div key={i}>
            <label className="block mb-1">{label}</label>
            <input
              {...register(name as keyof FormData)}
              type={type}
              placeholder={placeholder}
              className={`w-full border ${
                errors[name as keyof FormData] ? 'border-red-400' : 'border-gray-300'
              } rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent`}
            />
            {errors[name as keyof FormData] && (
              <p className="text-red-500 mt-1 text-sm">
                {errors[name as keyof FormData]?.message as string}
              </p>
            )}
          </div>
        ))}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent hover:bg-teal text-white rounded-2xl py-3 font-medium shadow-custom disabled:opacity-50"
        >
          {isSubmitting ? 'Отправка...' : 'Отправить'}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;