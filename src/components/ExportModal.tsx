import { useState } from 'react';
import { X, Download, Copy, Check, ExternalLink, Globe, FileCode2, Terminal } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExportModal({ isOpen, onClose }: ExportModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleDownloadIndexHtml = () => {
    // Generate full standalone single index.html file
    const standaloneHtml = generateStandaloneHtml();
    const blob = new Blob([standaloneHtml], { type: 'text/html;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'index.html');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyCode = () => {
    const code = generateStandaloneHtml();
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="glass-panel w-full max-w-3xl rounded-2xl border border-cyan-500/40 p-6 sm:p-8 shadow-2xl relative my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
              <FileCode2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-orbitron font-bold text-white">
                Bitta fayl — index.html
              </h3>
              <div className="text-xs text-slate-400">
                To‘liq tayyor, hech qanday o‘rnatishlarsiz ishlaydigan mustaqil fayl
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <button
            onClick={handleDownloadIndexHtml}
            className="p-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-[#070b14] font-bold text-sm transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 active:scale-95"
          >
            <Download className="w-5 h-5" />
            <span>index.html faylini yuklab olish</span>
          </button>

          <button
            onClick={handleCopyCode}
            className="p-4 rounded-xl bg-slate-900 border border-cyan-500/40 hover:border-cyan-300 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-400">Kod nusxalandi!</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5 text-cyan-400" />
                <span>Kodni to‘liq nusxalash</span>
              </>
            )}
          </button>
        </div>

        {/* Instructions in pure Uzbek */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-300">
          
          <div className="p-4 rounded-xl bg-slate-950/70 border border-white/5 space-y-2">
            <div className="font-bold text-white flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>1. Faylni kompyuterda yoki telefonda ochish:</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Yuklab olingan <code>index.html</code> faylini kompyuteringizda istalgan brauzer (Google Chrome, Microsoft Edge, Safari, Firefox) orqali sichqonchaning chap tugmasini 2 marta bosib bemalol ocha olasiz. Internet bo‘lmasa ham barcha animatsiyalar, test va AI suhbat simulyatsiyasi to‘liq ishlaydi!
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/70 border border-white/5 space-y-2">
            <div className="font-bold text-white flex items-center gap-2">
              <Globe className="w-4 h-4 text-purple-400" />
              <span>2. Internetga bepul joylash (Netlify yoki Vercel):</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              1) <strong>Netlify.com</strong> saytiga kiring va ro‘yxatdan o‘ting.<br />
              2) "Sites" bo‘limiga o‘ting va yuklab olgan <code>index.html</code> faylingiz joylashgan jildni shunchaki brauzerga tortib tashlang (Drag & Drop).<br />
              3) Bir necha soniyada sizga <code>sizning-nomingiz.netlify.app</code> ko‘rinishidagi bepul internet havolasi beriladi!
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/70 border border-white/5 space-y-2">
            <div className="font-bold text-white flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-pink-400" />
              <span>3. GitHub Pages orqali joylash:</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              GitHub da yangi repozitoriy oching, <code>index.html</code> faylini yuklang (Upload files). So‘ng Settings &gt; Pages bo‘limidan "main branch" ni tanlab "Save" qiling. Saytingiz bepul efirga chiqadi!
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

// Function that returns pristine, complete standalone index.html code
function generateStandaloneHtml(): string {
  return `<!DOCTYPE html>
<html lang="uz" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kelajak kodi — Sun'iy intellekt va dasturlash platformasi</title>
  <meta name="description" content="Kelajak farzandlari loyihasi uchun sun'iy intellekt va dasturlash bo'yicha zamonaviy platforma.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Poppins:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            orbitron: ['Orbitron', 'sans-serif'],
            poppins: ['Poppins', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace'],
          },
          colors: {
            darkbg: '#070b14',
            neoncyan: '#00d4ff',
            neonpurple: '#8b5cf6',
            neonpink: '#ff2d95',
          }
        }
      }
    }
  </script>
  <style>
    body { font-family: 'Poppins', sans-serif; background-color: #070b14; color: #f8fafc; }
    .font-orbitron { font-family: 'Orbitron', sans-serif; }
    .glass-panel { background: rgba(13, 21, 38, 0.75); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.08); }
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: #070b14; }
    ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #00d4ff, #8b5cf6); border-radius: 4px; }
  </style>
</head>
<body class="bg-[#070b14] text-slate-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-white">

  <!-- Scroll Progress -->
  <div id="progressBar" class="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 z-50 transition-all duration-75" style="width: 0%"></div>

  <!-- Background Neural Network Canvas -->
  <canvas id="neuralCanvas" class="fixed inset-0 pointer-events-none z-0 opacity-80"></canvas>

  <!-- Navigation Bar -->
  <header class="fixed top-0 left-0 right-0 z-40 bg-[#070b14]/85 backdrop-blur-md border-b border-cyan-500/20 py-3.5 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
      <a href="#bosh-sahifa" class="flex items-center gap-2.5">
        <div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-purple-600 flex items-center justify-center font-bold text-black font-orbitron text-xs">
          AI
        </div>
        <span class="font-orbitron font-extrabold tracking-wider text-white text-base sm:text-lg">KELAJAK KODI</span>
      </a>
      <nav class="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
        <a href="#bosh-sahifa" class="hover:text-cyan-400 transition-colors">Bosh sahifa</a>
        <a href="#ai-nima" class="hover:text-cyan-400 transition-colors">AI nima?</a>
        <a href="#dasturlash" class="hover:text-cyan-400 transition-colors">Dasturlash</a>
        <a href="#interaktiv" class="hover:text-cyan-400 transition-colors">Test & Suhbat</a>
        <a href="#mening-loyiham" class="hover:text-cyan-400 transition-colors">Mening loyiham</a>
        <a href="#it-kelajak" class="hover:text-cyan-400 transition-colors">IT Kelajak</a>
        <a href="#aloqa" class="hover:text-cyan-400 transition-colors">Aloqa</a>
      </nav>
      <a href="#interaktiv" class="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-md transition-all">
        Testni boshlash
      </a>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="bosh-sahifa" class="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-16 z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <div class="inline-block text-xs font-semibold tracking-wider text-cyan-400 mb-3 uppercase">
          Maktab loyihasi — Kelajak farzandlari
        </div>
        <h1 class="text-4xl sm:text-6xl font-orbitron font-black text-white leading-tight mb-4">
          KELAJAK KODI
        </h1>
        <div class="min-h-[60px] mb-6">
          <span id="typewriter" class="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-400 bg-clip-text text-transparent"></span>
          <span class="inline-block w-1 h-6 bg-cyan-400 align-middle animate-pulse"></span>
        </div>
        <p class="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
          Maktab o‘quvchilari uchun sun'iy intellekt sirlari, ilg‘or dasturlash asoslari va innovatsion loyihalar yaratish bo‘yicha interaktiv platforma.
        </p>
        <div class="flex flex-wrap gap-4">
          <a href="#ai-nima" class="px-6 py-3.5 rounded-xl font-semibold text-sm bg-cyan-400 text-slate-950 hover:bg-cyan-300 shadow-lg shadow-cyan-500/25 transition-all">
            Kashf etish →
          </a>
          <a href="#mening-loyiham" class="px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 border border-slate-700 text-white hover:border-purple-400 transition-all">
            Loyiham bilan tanishish
          </a>
        </div>
      </div>

      <!-- Stats -->
      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="glass-panel p-5 rounded-xl">
          <div class="text-3xl font-orbitron font-black text-cyan-400">10+</div>
          <div class="text-sm font-semibold text-white mt-1">Maktab loyihalari</div>
          <div class="text-xs text-slate-400">AI va robototexnika</div>
        </div>
        <div class="glass-panel p-5 rounded-xl">
          <div class="text-3xl font-orbitron font-black text-purple-400">5+</div>
          <div class="text-sm font-semibold text-white mt-1">Dasturlash tillari</div>
          <div class="text-xs text-slate-400">Python, JS, Scratch va b.</div>
        </div>
        <div class="glass-panel p-5 rounded-xl">
          <div class="text-3xl font-orbitron font-black text-pink-400">100%</div>
          <div class="text-sm font-semibold text-white mt-1">Amaliy qiziqish</div>
          <div class="text-xs text-slate-400">Innovatsion g‘oyalar</div>
        </div>
        <div class="glass-panel p-5 rounded-xl">
          <div class="text-3xl font-orbitron font-black text-emerald-400">1,200+</div>
          <div class="text-sm font-semibold text-white mt-1">Yosh iqtidorlar</div>
          <div class="text-xs text-slate-400">Kelajak bunyodkorlari</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2: AI nima? -->
  <section id="ai-nima" class="py-24 border-t border-slate-800/80 relative z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">Asosiy tushunchalar</div>
        <h2 class="text-3xl sm:text-4xl font-orbitron font-bold text-white">Sun'iy intellekt o‘zi nima?</h2>
        <p class="mt-3 text-slate-300">Kompyuterlarga inson kabi fikrlash, tahlil qilish va o‘rganish imkonini beruvchi ilg‘or texnologiya.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all">
          <h3 class="text-xl font-bold text-white mb-2">1. Mashinali o‘qitish (Machine Learning)</h3>
          <p class="text-sm text-slate-300 mb-3">Kompyuterga qoidalarni qo‘lda yozmasdan, katta hajmdagi ma'lumotlar orqali mustaqil o‘rganish imkoniyati.</p>
          <div class="text-xs text-cyan-300 bg-cyan-950/40 p-3 rounded-lg border border-cyan-500/20">Misol: YouTube va Spotify tavsiya algoritmlari, spam filtrlari.</div>
        </div>
        <div class="glass-panel p-6 rounded-2xl border border-white/10 hover:border-purple-400/40 transition-all">
          <h3 class="text-xl font-bold text-white mb-2">2. Neyron tarmoqlar (Neural Networks)</h3>
          <p class="text-sm text-slate-300 mb-3">Inson miyasidagi biologik neyronlar tuzilishidan ilhomlangan qatlamli hisoblash modellari.</p>
          <div class="text-xs text-purple-300 bg-purple-950/40 p-3 rounded-lg border border-purple-500/20">Misol: Yuzni tanish (Face ID), tasvir va rasmlarni chizish.</div>
        </div>
        <div class="glass-panel p-6 rounded-2xl border border-white/10 hover:border-pink-400/40 transition-all">
          <h3 class="text-xl font-bold text-white mb-2">3. ChatGPT va Katta til modellari</h3>
          <p class="text-sm text-slate-300 mb-3">Milliardlab kitob va matnlarni o‘qib, tabiiy tilda suhbatlashuvchi va kod yozuvchi aqlli yordamchilar.</p>
          <div class="text-xs text-pink-300 bg-pink-950/40 p-3 rounded-lg border border-pink-500/20">Misol: Masalalar yechish, chet tillarini o‘rganish va dasturlash.</div>
        </div>
        <div class="glass-panel p-6 rounded-2xl border border-white/10 hover:border-emerald-400/40 transition-all">
          <h3 class="text-xl font-bold text-white mb-2">4. AI ning kundalik hayotdagi o‘rni</h3>
          <p class="text-sm text-slate-300 mb-3">Tibbiyot, transport, ta'lim va sanoatda inson mehnatini yengillashtiruvchi real tizimlar.</p>
          <div class="text-xs text-emerald-300 bg-emerald-950/40 p-3 rounded-lg border border-emerald-500/20">Misol: Avtopilot mashinalar, aqlli xaritalar va dori-darmon izlash.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: Dasturlash olami -->
  <section id="dasturlash" class="py-24 border-t border-slate-800/80 relative z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">Texnologiyalar</div>
        <h2 class="text-3xl sm:text-4xl font-orbitron font-bold text-white">Dasturlash olami</h2>
        <p class="mt-3 text-slate-300">Kompyuterlar bilan so‘zlashish tillari va o‘rganish yo‘l xaritasi.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        <div class="glass-panel p-6 rounded-2xl border border-cyan-500/30">
          <div class="text-xl font-bold text-white mb-1">Python</div>
          <div class="text-xs text-cyan-400 font-semibold mb-3">AI va Data Science qiroli</div>
          <p class="text-xs text-slate-300 mb-2">O‘qish va yozish juda oson. Sun'iy intellekt va Telegram botlar yaratish uchun 1-raqamli til.</p>
        </div>
        <div class="glass-panel p-6 rounded-2xl border border-amber-500/30">
          <div class="text-xl font-bold text-white mb-1">HTML / CSS / JS</div>
          <div class="text-xs text-amber-400 font-semibold mb-3">Veb texnologiyalar</div>
          <p class="text-xs text-slate-300 mb-2">Butun dunyo internet saytlari va interaktiv ilovalarining poydevori.</p>
        </div>
        <div class="glass-panel p-6 rounded-2xl border border-orange-500/30">
          <div class="text-xl font-bold text-white mb-1">Scratch</div>
          <div class="text-xs text-orange-400 font-semibold mb-3">Bolalar va yangi boshlovchilar</div>
          <p class="text-xs text-slate-300 mb-2">Blokli vizual muhit. Kod xatolarisiz algoritmik fikrlashni o‘rgatadi.</p>
        </div>
        <div class="glass-panel p-6 rounded-2xl border border-purple-500/30">
          <div class="text-xl font-bold text-white mb-1">C++</div>
          <div class="text-xs text-purple-400 font-semibold mb-3">Maksimal tezlik & Robotlar</div>
          <p class="text-xs text-slate-300 mb-2">Robototexnika, datchiklar, 3D o‘yin dvigatellari va operatsion tizimlar tili.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: Interaktiv qism (Test & Chat) -->
  <section id="interaktiv" class="py-24 border-t border-slate-800/80 relative z-10">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-orbitron font-bold text-white">Interaktiv laboratoriya</h2>
        <p class="text-slate-300 mt-2">AI bo‘yicha bilimingizni sinang yoki quyidagi mini chat orqali savol bering.</p>
      </div>

      <!-- Mini AI Chat -->
      <div class="glass-panel rounded-2xl border border-cyan-500/30 p-6 shadow-2xl mb-12">
        <div class="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
          <div class="text-sm font-bold text-white flex items-center gap-2">
            <span>Mini AI Suhbat Demo</span>
            <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
          </div>
          <span class="text-xs text-slate-400">O‘zbek tilida tezkor javoblar</span>
        </div>
        <div id="chatBox" class="h-64 overflow-y-auto space-y-3 mb-4 pr-2 text-sm">
          <div class="p-3 rounded-xl bg-slate-900 border border-white/10 text-slate-200">
            <strong>AI:</strong> Salom! Men 'Kelajak kodi' yordamchisiman. Sun'iy intellekt, Python yoki IT Park haqida savol yozing!
          </div>
        </div>
        <div class="flex gap-2">
          <input id="chatInput" type="text" placeholder="Savol yozing (masalan: Python nima?)..." class="flex-1 bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400">
          <button onclick="sendChatMessage()" class="px-5 py-2.5 bg-cyan-400 text-slate-950 font-semibold rounded-xl hover:bg-cyan-300 transition-colors">Yuborish</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 5: Mening loyiham -->
  <section id="mening-loyiham" class="py-24 border-t border-slate-800/80 relative z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">Maktab vitrinasi</div>
        <h2 class="text-3xl sm:text-4xl font-orbitron font-bold text-white">Mening loyiham</h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div class="lg:col-span-8 glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/30">
          <h3 class="text-2xl font-orbitron font-bold text-white mb-2">Kelajak maktabi: Aqlli AI saralash tizimi</h3>
          <p class="text-cyan-300 text-sm mb-4">O‘quvchilar iqtidori va qiziqishlarini sun'iy intellekt orqali aniqlash tizimi.</p>
          <div class="p-6 bg-slate-950/80 rounded-xl border border-white/10 mb-6 text-center text-slate-400 text-sm">
            [Loyiha skrinshotlari va prototipi uchun ajratilgan maydon]
          </div>
          <p class="text-sm text-slate-300 leading-relaxed mb-4">
            Ushbu loyiha maktab o‘quvchilarining fanlarga bo‘lgan qiziqishini tahlil qilib, ularga mos dasturlash yo‘nalishlarini tavsiya etadi.
          </p>
          <div class="text-xs text-cyan-400 font-mono">Texnologiyalar: Python, TensorFlow, HTML/CSS/JS</div>
        </div>

        <div class="lg:col-span-4 glass-panel p-6 rounded-2xl border border-purple-500/30">
          <h4 class="text-lg font-bold text-white mb-4">Muallif ma'lumotlari</h4>
          <div class="space-y-3 text-sm">
            <div><span class="text-slate-400 text-xs block">Ism-familiya:</span><strong class="text-white">Ravshan Karimovich</strong></div>
            <div><span class="text-slate-400 text-xs block">Sinfi:</span><span class="text-slate-300">9-sinf o‘quvchisi</span></div>
            <div><span class="text-slate-400 text-xs block">Maktab:</span><span class="text-slate-300">Ixtisoslashtirilgan maktab</span></div>
            <div><span class="text-slate-400 text-xs block">Loyiha:</span><span class="text-cyan-300">Kelajak farzandlari</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 6: O'zbekistonda IT kelajagi -->
  <section id="it-kelajak" class="py-24 border-t border-slate-800/80 relative z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl sm:text-4xl font-orbitron font-bold text-white">O‘zbekistonda IT kelajagi</h2>
        <p class="mt-3 text-slate-300">IT Park, 'Bir million dasturchi' va yoshlar uchun yaratilgan ulkan imkoniyatlar.</p>
      </div>
      <div class="p-8 glass-panel rounded-2xl border border-cyan-500/30 text-center max-w-3xl mx-auto">
        <blockquote class="text-xl sm:text-2xl font-medium text-white italic mb-4">
          "Kelajakni bashorat qilishning eng yaxshi usuli — uni bugun yaratishdir!"
        </blockquote>
        <div class="text-cyan-400 text-sm font-semibold">Piter Druker</div>
      </div>
    </div>
  </section>

  <!-- Section 7: Aloqa -->
  <footer id="aloqa" class="py-16 border-t border-slate-800/80 bg-[#04070d] relative z-10">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <h3 class="text-2xl font-orbitron font-bold text-white mb-3">Biz bilan bog‘laning</h3>
      <p class="text-slate-400 text-sm mb-6 max-w-md mx-auto">"Kelajak farzandlari" loyihasi bo‘yicha takliflaringiz bo‘lsa, Telegram orqali xabar qoldiring.</p>
      <a href="https://t.me/kelajak_farzandlari" target="_blank" class="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-sm hover:opacity-90 shadow-lg">
        Telegram orqali bog‘lanish
      </a>
      <div class="mt-12 pt-6 border-t border-slate-800 text-xs text-slate-500">
        © 2026 "Kelajak farzandlari". Barcha huquqlar himoyalangan.
      </div>
    </div>
  </footer>

  <script>
    // Scroll progress
    window.addEventListener('scroll', () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
      document.getElementById('progressBar').style.width = progress + '%';
    });

    // Typewriter
    const words = ["Sun'iy intellekt va dasturlash", "Kelajak texnologiyalarini bugun o'rganamiz", "Orzularni kodga aylantiramiz"];
    let wordIdx = 0, charIdx = 0, isDeleting = false;
    const typewriterEl = document.getElementById('typewriter');
    function type() {
      const full = words[wordIdx];
      if (!isDeleting) {
        typewriterEl.textContent = full.substring(0, charIdx + 1);
        charIdx++;
        if (charIdx === full.length) {
          isDeleting = true;
          setTimeout(type, 1800);
          return;
        }
      } else {
        typewriterEl.textContent = full.substring(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          isDeleting = false;
          wordIdx = (wordIdx + 1) % words.length;
        }
      }
      setTimeout(type, isDeleting ? 40 : 80);
    }
    type();

    // Neural Canvas
    const canvas = document.getElementById('neuralCanvas');
    const ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });
    const pts = Array.from({length: 60}, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.8, vy: (Math.random() - 0.5) * 0.8
    }));
    function draw() {
      ctx.clearRect(0,0,w,h);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if(p.x < 0 || p.x > w) p.vx *= -1;
        if(p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, Math.PI*2); ctx.fillStyle = '#00d4ff'; ctx.fill();
      });
      for(let i=0; i<pts.length; i++) {
        for(let j=i+1; j<pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
          if(d < 110) {
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = 'rgba(139, 92, 246,' + (0.2 * (1 - d/110)) + ')'; ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }
    draw();

    // Chat demo
    function sendChatMessage() {
      const input = document.getElementById('chatInput');
      const box = document.getElementById('chatBox');
      const text = input.value.trim();
      if (!text) return;
      box.innerHTML += '<div class="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-200 text-right"><strong>Siz:</strong> ' + text + '</div>';
      input.value = '';
      setTimeout(() => {
        let reply = "Ajoyib savol! Sun'iy intellekt va dasturlash — kelajakning eng muhim yo'nalishidir. Python yoki Scratch bilan boshlashni tavsiya qilaman!";
        const q = text.toLowerCase();
        if (q.includes("python")) reply = "Python — sun'iy intellekt va ma'lumotlar tahlili uchun eng mashhur til. O'rganish juda oson!";
        else if (q.includes("scratch")) reply = "Scratch — boshlang'ich sinf va maktab o'quvchilari uchun blokli dasturlash muhiti.";
        else if (q.includes("salom")) reply = "Assalomu alaykum! 'Kelajak kodi' loyihasiga xush kelibsiz!";
        box.innerHTML += '<div class="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-200"><strong>AI:</strong> ' + reply + '</div>';
        box.scrollTop = box.scrollHeight;
      }, 500);
    }
  </script>
</body>
</html>`;
}
