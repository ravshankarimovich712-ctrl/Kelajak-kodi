import { useState } from 'react';
import { Terminal, Layers, Blocks, Cpu, Compass, CheckCircle } from 'lucide-react';

interface Language {
  id: string;
  name: string;
  level: string;
  shortDesc: string;
  whyNeed: string;
  whereUsed: string;
  idealFor: string;
  accent: string;
  icon: typeof Terminal;
}

export default function CodingWorld() {
  const [activeLang, setActiveLang] = useState<string>("python");

  const languages: Language[] = [
    {
      id: "python",
      name: "Python",
      level: "Oson (yangi boshlovchilar uchun ideal)",
      shortDesc: "Dunyoning 1-raqamli sun'iy intellekt va ma'lumotlar tahlili tili. Ingliz tiliga juda yaqin va o‘qish oson.",
      whyNeed: "Sun'iy intellekt modellarini o‘qitish, neyron tarmoqlar tuzish, Telegram botlar yaratish va ilmiy hisob-kitoblar uchun.",
      whereUsed: "Google, OpenAI, NASA, Netflix, Instagram va dunyo bo‘ylab 80% dan ortiq AI laboratoriyalarida.",
      idealFor: "Sun'iy intellekt, Data Science va botlar yaratmoqchi bo‘lgan o‘quvchilar.",
      accent: "from-blue-400 to-yellow-400",
      icon: Terminal,
    },
    {
      id: "web",
      name: "HTML / CSS / JavaScript",
      level: "O‘rtacha (tezkor vizual natija)",
      shortDesc: "Butun dunyo internet tarmog‘i, zamonaviy veb-saytlar va interaktiv dasturlar aynan shu texnologiyalarga tayanadi.",
      whyNeed: "O‘z g‘oyalaringiz va loyihalaringizni butun dunyoga ko‘rsatadigan chiroyli, harakatlanuvchi veb-sahifalar yaratish uchun.",
      whereUsed: "Internetdagi har bir sayt, YouTube, Google qidiruv, onlayn do‘konlar va veb-ilovalar.",
      idealFor: "Saytlar, dizayn va qiziqarli interaktiv dasturlar yasashga qiziqqanlar.",
      accent: "from-amber-400 to-rose-400",
      icon: Layers,
    },
    {
      id: "scratch",
      name: "Scratch",
      level: "Juda oson (bolalar uchun)",
      shortDesc: "Kod yozmasdan, rang-barang bloklarni bir-biriga ulab dasturlash mantiqini o‘rgatuvchi vizual platforma.",
      whyNeed: "Murakkab sintaksisdan qo‘rqmasdan, o‘yinlar, multfilmlar va interaktiv hikoyalar yaratish orqali dasturchilik tafakkurini rivojlantirish.",
      whereUsed: "Garvard, MIT va dunyoning minglab maktablarida 1-bosqich ta'limida.",
      idealFor: "Dasturlash olamiga endigina qadam qo‘yayotgan yosh maktab o‘quvchilari.",
      accent: "from-orange-400 to-amber-500",
      icon: Blocks,
    },
    {
      id: "cpp",
      name: "C++",
      level: "Murakkab (maksimal tezlik)",
      shortDesc: "Kompyuter apparati (xotira va protsessor) bilan to‘g‘ridan-to‘g‘ri ishlaydigan eng tezkor va qudratli dasturlash tillaridan biri.",
      whyNeed: "Sekundning mingdan bir ulushida ishlaydigan o‘yin dvigatellari, robototexnika, datchiklar va operatsion tizimlar yaratish.",
      whereUsed: "Robotlar, avtomobil kompyuterlari, Unreal Engine (3D o‘yinlar), kosmik kemalar dasturi.",
      idealFor: "Robototexnika, olimpiada masalalari va jiddiy muhandislikka qiziqqanlar.",
      accent: "from-cyan-400 to-indigo-500",
      icon: Cpu,
    },
  ];

  const roadmapSteps = [
    {
      step: "1-qadam",
      title: "Mantiqiy tafakkur va Scratch",
      desc: "Bloklar yordamida sikllar, shartlar va algoritmlar qanday ishlashini ko‘z bilan ko‘rib tushunasiz.",
      timeline: "1-2 oy",
    },
    {
      step: "2-qadam",
      title: "Python va Dasturlash Asoslari",
      desc: "Matnli kod yozishni boshlaysiz: o‘zgaruvchilar, funksiyalar va sodda dasturlar, matematika bilan integratsiya.",
      timeline: "3-4 oy",
    },
    {
      step: "3-qadam",
      title: "Sun'iy intellekt va Ma'lumotlar",
      desc: "Tayyor kutubxonalar (NumPy, Scikit-learn) yordamida rasmlarni tanuvchi sodda AI modellarini qurasiz.",
      timeline: "4-6 oy",
    },
    {
      step: "4-qadam",
      title: "Shaxsiy Loyihalar va Vebga chiqarish",
      desc: "O‘z AI dasturlaringiz uchun HTML/CSS/JS orqali chiroyli interfeys yasab, internetda barchaga taqdim etasiz.",
      timeline: "Doimiy",
    },
  ];

  const currentLang = languages.find((l) => l.id === activeLang) || languages[0];

  return (
    <section id="dasturlash" className="relative py-24 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 mb-3 uppercase">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Kodlash va Texnologiyalar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-orbitron font-extrabold text-white tracking-tight">
            Dasturlash olami
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Dasturlash tili — bu kompyuter bilan so‘zlashish tili. Quyida sun'iy intellekt va zamonaviy texnologiyalarning eng asosiy tillari bilan tanishing.
          </p>
        </div>

        {/* Language Tabs & Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left: Language Selection Cards */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {languages.map((lang) => {
              const Icon = lang.icon;
              const isActive = activeLang === lang.id;

              return (
                <button
                  key={lang.id}
                  onClick={() => setActiveLang(lang.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 border flex items-center justify-between ${
                    isActive
                      ? "bg-slate-900 border-cyan-400 shadow-lg shadow-cyan-500/20"
                      : "glass-panel border-white/5 hover:border-white/20 text-slate-400 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center border ${
                        isActive
                          ? "bg-cyan-500/10 border-cyan-400 text-cyan-400"
                          : "bg-slate-900 border-white/10 text-slate-400"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className={`font-semibold text-base ${isActive ? "text-white" : "text-slate-200"}`}>
                        {lang.name}
                      </div>
                      <div className="text-xs text-slate-400">
                        {lang.level}
                      </div>
                    </div>
                  </div>
                  <div className={`text-xs font-mono font-medium ${isActive ? "text-cyan-400" : "text-slate-500"}`}>
                    {isActive ? "Ko‘rilmoqda" : "Tanlash →"}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Language Inspector */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                    Tanlangan til ma'lumotlari
                  </span>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span>{currentLang.name}</span>
                  </h3>
                </div>
                <div className="text-xs font-medium text-slate-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  {currentLang.level}
                </div>
              </div>

              {/* Description */}
              <p className="text-base text-slate-200 leading-relaxed mb-6">
                {currentLang.shortDesc}
              </p>

              {/* 3 Key Breakdown Blocks */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5">
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>Nimaga kerak?</span>
                  </div>
                  <div className="text-sm text-slate-300 leading-relaxed">
                    {currentLang.whyNeed}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5">
                  <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span>Qayerda ishlatiladi?</span>
                  </div>
                  <div className="text-sm text-slate-300 leading-relaxed">
                    {currentLang.whereUsed}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5">
                  <div className="text-xs font-bold text-pink-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-pink-400" />
                    <span>Kimlar uchun ideal?</span>
                  </div>
                  <div className="text-sm text-slate-300 leading-relaxed">
                    {currentLang.idealFor}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Roadmap: Qaysidan boshlash kerak? */}
        <div className="mt-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-purple-400 mb-2 uppercase">
              <Compass className="w-4 h-4 text-purple-400" />
              <span>Yo‘l xaritasi</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-orbitron font-bold text-white">
              Qaysidan boshlash kerak?
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              O‘quvchilar uchun bosqichma-bosqich tavsiya etiladigan o‘rganish yo‘li
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {roadmapSteps.map((step, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/70 border border-cyan-500/30 px-2.5 py-1 rounded-md">
                      {step.step}
                    </span>
                    <span className="text-xs text-slate-400">
                      {step.timeline}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span>Bosqich {idx + 1}/4</span>
                  <span className="text-cyan-400 font-mono">Tayyorlik →</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
