import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 350);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-xl bg-slate-900/90 border border-cyan-400/50 text-cyan-400 hover:text-white hover:bg-cyan-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 active:translate-y-0 backdrop-blur-md"
      title="Sahifa boshiga qaytish"
      aria-label="Sahifa boshiga qaytish"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
