import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Brain, Cpu, Rocket, Terminal } from 'lucide-react';

export default function Hero() {
  const words = [
    "Sun'iy intellekt va dasturlash",
    "Kelajak texnologiyalarini bugun o'rganamiz",
    "Orzularni kodga aylantiramiz",
    "Innovatsiyalar sari dadil qadam"
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[currentWordIndex];
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(80);
        if (currentText.length + 1 === fullWord.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(45);
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    <section
      id="bosh-sahifa"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/20 via-purple-600/20 to-pink-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and calls to action */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Project subtitle mark */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 mb-4 uppercase">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Maktab loyihasi — Kelajak farzandlari</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-orbitron font-black tracking-tight text-white leading-[1.1] mb-6">
              KELAJAK KODI
            </h1>

            {/* Typewriter Subtitle Box */}
            <div className="min-h-[64px] sm:min-h-[72px] mb-6">
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                {currentText}
              </span>
              <span className="inline-block w-1 h-7 ml-1 bg-cyan-400 animate-pulse align-middle" />
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-8">
              Maktab o‘quvchilari uchun sun'iy intellekt sirlari, ilg‘or dasturlash asoslari va innovatsion IT loyihalar yaratish bo‘yicha zamonaviy interaktiv platforma.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#ai-nima"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#070b14] bg-cyan-400 rounded-xl hover:bg-cyan-300 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Kashf etish</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#mening-loyiham"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-purple-500/60 rounded-xl transition-all duration-300 shadow-md shadow-black/40 hover:-translate-y-0.5"
              >
                <Rocket className="w-4 h-4 text-purple-400" />
                <span>Loyiham bilan tanishish</span>
              </a>
            </div>

            {/* Quick highlight tags */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Brain className="w-4 h-4 text-cyan-400" />
                <span>Neyron tarmoqlar</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-purple-400" />
                <span>Python & Veb kodlash</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-pink-400" />
                <span>Interaktiv sinov</span>
              </span>
            </div>
          </div>

          {/* Right Column: Cyber visual preview card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative">
              {/* Glow backdrop */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-purple-500/20 to-pink-500/30 rounded-3xl blur-xl opacity-75" />

              {/* Main Visual Glass Card */}
              <div className="relative glass-panel rounded-2xl p-6 sm:p-7 border border-cyan-500/30 shadow-2xl overflow-hidden">
                
                {/* Window header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-xs font-mono text-cyan-400/80 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>kelajak_farzandlari.py</span>
                  </div>
                </div>

                {/* Simulated futuristic code snippet */}
                <div className="space-y-3 font-mono text-xs sm:text-sm text-slate-300">
                  <div className="text-slate-400 italic">
                    # Kelajak kodi: Sun'iy intellekt modeli
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-pink-400">import</span>
                    <span className="text-cyan-300">kelajak_ai</span>
                    <span className="text-pink-400">as</span>
                    <span className="text-purple-300">ai</span>
                  </div>
                  <div>
                    <span className="text-purple-400">loyiha</span> = ai.<span className="text-cyan-300">Yaratish</span>(
                  </div>
                  <div className="pl-4 space-y-1">
                    <div>
                      <span className="text-slate-400">mavzu:</span>{" "}
                      <span className="text-emerald-300">"Kelajak farzandlari"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">yo'nalish:</span>{" "}
                      <span className="text-emerald-300">"Sun'iy intellekt & Dasturlash"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">maqsad:</span>{" "}
                      <span className="text-emerald-300">"Yangi avlod ixtirochilari"</span>
                    </div>
                  </div>
                  <div>)</div>
                  
                  <div className="pt-2 flex items-center gap-2 text-cyan-400">
                    <span className="text-purple-400">await</span> loyiha.<span className="text-cyan-300">ishga_tushur</span>()
                  </div>

                  <div className="mt-4 p-3 rounded-lg bg-[#050914] border border-cyan-500/20 text-xs">
                    <div className="text-emerald-400 font-semibold mb-1 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>Tizim faol: 100% tayyor!</span>
                    </div>
                    <div className="text-slate-400">
                      Neyron tarmoqlar o‘quvchi fikrlari bilan uyg‘unlashmoqda...
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* 4-Item Statistics Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { value: "10+", label: "Maktab loyihalari", desc: "AI va robototexnika", color: "from-cyan-400 to-blue-500" },
            { value: "5+", label: "Dasturlash tillari", desc: "Python, JS, Scratch va boshqalar", color: "from-purple-400 to-indigo-500" },
            { value: "100%", label: "Amaliy qiziqish", desc: "Innovatsion g‘oyalar", color: "from-pink-400 to-rose-500" },
            { value: "1,200+", label: "Yosh iqtidorlar", desc: "Kelajak bunyodkorlari", color: "from-cyan-300 to-emerald-400" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className={`text-2xl sm:text-3xl font-orbitron font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent tabular-nums`}>
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
