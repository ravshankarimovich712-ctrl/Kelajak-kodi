import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Code2 } from 'lucide-react';

interface NavbarProps {
  onOpenExport?: () => void;
}

export default function Navbar({ onOpenExport }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Bosh sahifa", href: "#bosh-sahifa" },
    { label: "AI nima?", href: "#ai-nima" },
    { label: "Dasturlash", href: "#dasturlash" },
    { label: "Interaktiv test & Chat", href: "#interaktiv" },
    { label: "Mening loyiham", href: "#mening-loyiham" },
    { label: "IT Kelajak", href: "#it-kelajak" },
    { label: "Aloqa", href: "#aloqa" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070b14]/85 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark */}
          <a
            href="#bosh-sahifa"
            className="flex items-center gap-2.5 text-lg sm:text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px] flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-400/40 transition-shadow">
              <div className="w-full h-full bg-[#070b14] rounded-[11px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <span className="font-orbitron font-extrabold tracking-wider bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              KELAJAK KODI
            </span>
          </a>

          {/* Zone 2: Single-line concise nav links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-cyan-400 after:to-purple-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action button & mobile trigger */}
          <div className="flex items-center gap-3 shrink-0">
            {onOpenExport && (
              <button
                onClick={onOpenExport}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 rounded-lg hover:bg-cyan-900/60 hover:border-cyan-400 transition-colors whitespace-nowrap shrink-0"
                title="Loyiha faylini kompyuterga saqlash"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Yuklab olish</span>
              </button>
            )}

            <a
              href="#interaktiv"
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-[#070b14] bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-lg hover:from-cyan-300 hover:to-white shadow-md shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-200 whitespace-nowrap shrink-0 active:scale-95"
            >
              Testni boshlash
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-cyan-400 focus:outline-none"
              aria-label="Menyuni ochish yoki yopish"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 glass-panel rounded-2xl border border-cyan-500/20 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              {onOpenExport && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenExport();
                  }}
                  className="mt-2 text-left px-3 py-2 text-sm font-medium text-cyan-300 bg-cyan-950/50 border border-cyan-500/30 rounded-lg"
                >
                  Yuklab olish (index.html)
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
