import { TrendingUp, Award, Building2, Quote, Sparkles } from 'lucide-react';

export default function UzbekistanIt() {
  const stats = [
    {
      value: "1,000,000+",
      label: "Yosh dasturchilar",
      desc: "'Bir million dasturchi' va IT akademiyalar bitiruvchilari",
      icon: TrendingUp,
      color: "from-cyan-400 to-blue-500",
    },
    {
      value: "$300M+",
      label: "IT xizmatlari eksporti",
      desc: "O‘zbekistonlik mutaxassislar yaratgan dasturlar dunyo bozorida",
      icon: Award,
      color: "from-purple-400 to-pink-500",
    },
    {
      value: "2,000+",
      label: "IT Park rezidentlari",
      desc: "Xalqaro IT kompaniyalar va mahalliy startaplar",
      icon: Building2,
      color: "from-pink-400 to-rose-500",
    },
    {
      value: "2030",
      label: "Raqamli O‘zbekiston",
      desc: "Mintaqadagi eng yirik IT xabga aylanish strategiyasi",
      icon: Sparkles,
      color: "from-cyan-300 to-emerald-400",
    },
  ];

  return (
    <section id="it-kelajak" className="relative py-24 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 mb-3 uppercase">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Milliy yuksalish</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-orbitron font-extrabold text-white tracking-tight">
            O‘zbekistonda IT kelajagi
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Bugun yurtimizda yoshlarning zamonaviy texnologiyalarni egallashi, xalqaro maydonga chiqishi va raqamli innovatsiyalar yaratishi uchun keng shart-sharoitlar yaratilmoqda.
          </p>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className={`text-3xl font-orbitron font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent tabular-nums mb-1`}>
                    {item.value}
                  </div>
                  <div className="text-sm font-bold text-white mb-2">
                    {item.label}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Inspirational Quote Card */}
        <div className="relative glass-panel rounded-3xl p-8 sm:p-12 border border-cyan-500/30 overflow-hidden shadow-2xl">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-600/20 blur-3xl pointer-events-none rounded-full" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-cyan-600/20 blur-3xl pointer-events-none rounded-full" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Quote className="w-8 h-8" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <blockquote className="text-lg sm:text-2xl font-medium text-white italic leading-relaxed mb-4">
                "Kelajakni bashorat qilishning eng yaxshi va ishonchli usuli — uni bugun o‘z qo‘llarimiz bilan yaratishdir!"
              </blockquote>
              <div className="text-sm font-semibold text-cyan-400">
                Piter Druker · <span className="text-slate-400 font-normal">Zamonaviy menejment va innovatsiyalar nazariyotchisi</span>
              </div>
            </div>

            <a
              href="#interaktiv"
              className="px-6 py-3 rounded-xl text-sm font-semibold text-[#070b14] bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/25 shrink-0 whitespace-nowrap active:scale-95"
            >
              Kelajakka qo‘shilish
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
