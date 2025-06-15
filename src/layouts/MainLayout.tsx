import React from 'react';
import { FaInstagram, FaVk } from 'react-icons/fa';

interface Props { children: React.ReactNode; }
const MainLayout: React.FC<Props> = ({ children }) => (
  <>
    <header className="fixed top-0 w-full bg-secondary/70 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="container px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold">Mi Destino</a>
        {/* Здесь можно навигацию или язык */}
      </div>
    </header>

    <main className="pt-20">{children}</main>

    <footer className="bg-secondary py-8 mt-16">
      <div className="container px-6 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Daniel Bogachev. Все права защищены.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" aria-label="Instagram" className="text-primary hover:text-accent">
            <FaInstagram size={20}/>
          </a>
          <a href="#" aria-label="VK" className="text-primary hover:text-accent">
            <FaVk size={20}/>
          </a>
        </div>
      </div>
    </footer>
  </>
);

export default MainLayout;