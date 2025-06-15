import React from 'react';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Facts from './components/Facts';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';

const App: React.FC = () => (
  <MainLayout>
    <Hero />
    <Advantages />
    <Facts />
    <Testimonials />
    <FAQ />
    <ContactForm />
  </MainLayout>
);

export default App;