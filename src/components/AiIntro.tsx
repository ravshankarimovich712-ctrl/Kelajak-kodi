import { useState } from 'react';
import { Brain, Cpu, MessageSquareText, Globe2, ChevronRight, CheckCircle2, Zap } from 'lucide-react';

interface AiCard {
  id: string;
  title: string;
  shortDesc: string;
  details?: string;
  analogy: string;
  examples: string[];
  icon: typeof Brain;
  accent: string;
  borderGlow: string;
}

export default function AiIntro() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const cards: AiCard[] = [
    {
      id: "machine-learning",
      title: "Mashinali o‘qitish (Machine Learning)",
      shortDesc: "Kompyuterga har bir qoidani qo‘lda yozmasdan, katta hajmdagi ma'lumotlar orqali o‘z-o‘zidan o‘rganish imkonini beruvchi texnologiya.",
      analogy: "Bolakayga minglab mushuk va it suratlarini ko‘rsatib, keyin yangi rasmdagi hayvonni o‘zi mustaqil tanib olishiga o‘xshaydi.",
      examples: [
        "Spam xabarlarni avtomatik saralash",
        "YouTube va Spotify tavsiya tizimlari",
        "Kasalliklarni rentgen suratidan aniqlash",
      ],
      icon: Cpu,
      accent: "from-cyan-400 to-blue-500",
      borderGlow: "hover:border-cyan-400/50 hover:shadow-cyan-500/20",
    },
    {
      id: "neural-networks",
      title: "Neyron tarmoqlar (Neural Networks)",
      shortDesc: "Inson bosh miyasidagi biologik neyronlar tuzilishidan ilhomlangan, murakkab qatlamlardan iborat hisoblash tizimi.",
      analogy: "Bir nechta qavatdan iborat jamoa: 1-qavat oddiy chiziqlarni, 2-qavat shakllarni, oxirgi qavat esa butun inson qiyofasini taniydi.",
      examples: [
        "Inson yuzini tanish (Face ID)",
        "Ovozli buyruqlarni matnga aylantirish",
        "Rasm va san'at asarlarini generatsiya qilish",
      ],
      icon: Brain,
      accent: "from-purple-400 to-indigo-500",
      borderGlow: "hover:border-purple-400/50 hover:shadow-purple-500/20",
    },
    {
      id: "llm-assistants",
      title: "Katta til modellari & ChatGPT, Claude",
      shortDesc: "Milliardlab kitoblar, maqolalar va kodlarni tahlil qilib, inson tilida tabiiy suhbatlashadigan va savollarga javob beradigan aqlli yordamchilar.",
      analogy: "Butun dunyo kutubxonalarini bir soniyada o‘qib chiqqan va sizga har qanday tilda maslahat bera oladigan bilimdon do‘st.",
      examples: [
        "Dasturlashda xatolarni topish va kod yozish",
        "Chet tillarini tez va erkin o‘rganish",
        "Murakkab mavzularni sodda so‘zlar bilan tushuntirish",
      ],
      icon: MessageSquareText,
      accent: "from-pink-400 to-rose-500",
      borderGlow: "hover:border-pink-400/50 hover:shadow-pink-500/20",
    },
    {
      id: "real-world-ai",
      title: "AI ning kundalik hayotdagi o‘rni",
      shortDesc: "Sun'iy intellekt bugun fantastika emas — u har birimizning telefonimizda, transportda, tibbiyotda va ta'limda faol xizmat qilmoqda.",
      analogy: "Kechayu-kunduz charchamaydigan, millionlab odamlarga bir vaqtda yordam beradigan ko‘rinmas yordamchi kuch.",
      examples: [
        "Haydovchisiz harakatlanuvchi avtomobillar (Tesla)",
        "Tirbandlikni oldindan aytib beruvchi aqlli xaritalar",
        "Har bir o‘quvchi tezligiga moslashuvchi ta'lim platformalari",
      ],
      icon: Globe2,
      accent: "from-cyan-300 to-teal-400",
      borderGlow: "hover:border-teal-400/50 hover:shadow-teal-500/20",
    },
  ];

  return (
    <section id="ai-nima" className="relative py-24 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 mb-3 uppercase">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>Asosiy tushunchalar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-orbitron font-extrabold text-white tracking-tight">
            Sun'iy intellekt o‘zi nima?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Sun'iy intellekt (AI) — bu kompyuterlarga inson kabi fikrlash, tahlil qilish, o‘rganish va mustaqil qaror qabul qilish imkonini beruvchi ilg‘or texnologiyadir.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            const isOpen = selectedCard === card.id;

            return (
              <div
                key={card.id}
                className={`glass-panel rounded-2xl p-6 sm:p-7 border border-white/10 transition-all duration-300 flex flex-col justify-between shadow-xl ${card.borderGlow}`}
              >
                <div>
                  {/* Top Bar: Icon + Category */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      AI Moduli
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {card.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {card.shortDesc}
                  </p>

                  {/* Expandable details */}
                  {isOpen && (
                    <div className="mt-4 pt-4 border-t border-white/10 space-y-4 animate-in fade-in duration-200">
                      {/* Analogy */}
                      <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-xs text-cyan-200 leading-relaxed">
                        <span className="font-semibold text-cyan-300 block mb-1">
                          Hayotiy o‘xshatish:
                        </span>
                        {card.analogy}
                      </div>

                      {/* Examples */}
                      <div>
                        <div className="text-xs font-semibold text-slate-300 mb-2">
                          Amaliy misollar:
                        </div>
                        <ul className="space-y-1.5">
                          {card.examples.map((ex, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                              <span>{ex}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card footer trigger */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedCard(isOpen ? null : card.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>{isOpen ? "Qisqartirish" : "Batafsil o‘rganish"}</span>
                    <ChevronRight
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  <span className="text-[11px] text-slate-500">
                    Maktab dasturi uchun
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Informative summary banner */}
        <div className="mt-12 p-6 glass-panel rounded-2xl border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
              <Brain className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <div className="text-base font-bold text-white">
                AI insonning o‘rnini bosadimi?
              </div>
              <div className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Yo‘q! AI insonni almashtirmaydi, balki AI dan foydalanishni bilgan insonlar boshqalardan ancha ilgarilab ketadi.
              </div>
            </div>
          </div>
          <a
            href="#dasturlash"
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 border border-cyan-500/40 hover:border-cyan-400 rounded-xl transition-all whitespace-nowrap shrink-0 hover:bg-slate-800"
          >
            Dasturlashni o‘rganish
          </a>
        </div>

      </div>
    </section>
  );
}
