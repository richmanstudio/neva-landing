import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

const faq = [
  {
    q: 'Что если реакция проявится?',
    a: 'Первый месяц — замена или возврат средств.',
  },
  {
    q: 'Сколько стоит содержание?',
    a: 'Около 2000–3000₽ в месяц.',
  },
  {
    q: 'Как ухаживать за шерстью?',
    a: 'Расчёсывать 2–3 раза в неделю, груминг раз в месяц.',
  },
];

const FAQ: React.FC = () => (
  <section className="py-16">
    <h2 className="text-3xl font-bold text-center mb-8">FAQ</h2>
    <div className="container px-6 space-y-4">
      {faq.map(({ q, a }, i) => (
        <Disclosure key={i}>
          {({ open }) => (
            <div className="bg-secondary rounded-2xl shadow-custom overflow-hidden">
              <Disclosure.Button className="w-full flex justify-between items-center px-6 py-4">
                <span className="font-medium">{q}</span>
                <ChevronUpIcon
                  className={`h-6 w-6 text-accent transition-transform ${open ? 'rotate-180' : ''}`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-6 py-4 bg-secondary/50 text-gray-600">
                {a}
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  </section>
);

export default FAQ;