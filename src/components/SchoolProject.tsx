import { useState, useEffect } from 'react';
import { FolderGit2, Edit3, Save, User, GraduationCap, School, Award, Sparkles, Image as ImageIcon } from 'lucide-react';

interface ProjectData {
  projectName: string;
  projectTagline: string;
  description: string;
  technologies: string;
  authorName: string;
  grade: string;
  school: string;
  supervisor: string;
  goals: string;
}

const DEFAULT_PROJECT: ProjectData = {
  projectName: "Kelajak maktabi: Aqlli AI yordamchi va saralash tizimi",
  projectTagline: "O‘quvchilar iqtidori va dars o‘zlashtirishini tahlil qiluvchi innovatsion maktab modeli",
  description: "Ushbu maktab ilmiy loyihasi o‘quvchilarning tabiiy va aniq fanlarga qiziqishini sun'iy intellekt orqali aniqlash, ularga mos dasturlash va robototexnika kurslarini tavsiya etish hamda fan o‘qituvchilariga tahliliy ma'lumotlar berish uchun ishlab chiqilgan.",
  technologies: "Python, TensorFlow, HTML/CSS/JS, SQLite ma'lumotlar bazasi",
  authorName: "Ravshan Karimovich",
  grade: "9-'A' sinf o‘quvchisi",
  school: "Ixtisoslashtirilgan maktab",
  supervisor: "Informatika va axborot texnologiyalari fani o‘qituvchisi",
  goals: "1. Maktabda sun'iy intellekt madaniyatini oshirish. 2. Har bir o‘quvchining kuchli tomonlarini AI orqali aniqlash. 3. O‘zbekistonda yosh ixtirochilar safini kengaytirish.",
};

export default function SchoolProject() {
  const [data, setData] = useState<ProjectData>(() => {
    try {
      const saved = localStorage.getItem('kelajak_kodi_project_data');
      return saved ? JSON.parse(saved) : DEFAULT_PROJECT;
    } catch {
      return DEFAULT_PROJECT;
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('kelajak_kodi_project_data', JSON.stringify(data));
    } catch {
      // storage quota or disabled
    }
  }, [data]);

  const handleSave = () => {
    setIsEditing(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <section id="mening-loyiham" className="relative py-24 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 mb-3 uppercase">
              <FolderGit2 className="w-4 h-4 text-cyan-400" />
              <span>Maktab vitrinasi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-orbitron font-extrabold text-white tracking-tight">
              Mening loyiham
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-2xl leading-relaxed">
              "Kelajak farzandlari" ko‘rgazmasi uchun tayyorlangan ilmiy va amaliy dasturiy loyiha namunasi.
            </p>
          </div>

          {/* Edit toggle button */}
          <div className="flex items-center gap-3">
            {savedSuccess && (
              <span className="text-xs text-emerald-400 font-semibold animate-in fade-in">
                Muvaffaqiyatli saqlandi!
              </span>
            )}
            <button
              onClick={() => {
                if (isEditing) {
                  handleSave();
                } else {
                  setIsEditing(true);
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-slate-900 border border-cyan-500/40 hover:border-cyan-400 rounded-xl transition-all shadow-md active:scale-95"
            >
              {isEditing ? (
                <>
                  <Save className="w-4 h-4 text-emerald-400" />
                  <span>O‘zgarishlarni saqlash</span>
                </>
              ) : (
                <>
                  <Edit3 className="w-4 h-4 text-cyan-400" />
                  <span>Ma'lumotlarni tahrirlash</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Project Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Showcase (Left 8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl relative">
              
              {/* Project Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ilmiy-amaliy ish</span>
                </span>
                <span className="text-xs text-slate-500">2026-yil</span>
              </div>

              {/* Title Input or View */}
              {isEditing ? (
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-slate-400 mb-1">
                    Loyiha nomi:
                  </label>
                  <input
                    type="text"
                    value={data.projectName}
                    onChange={(e) => setData({ ...data, projectName: e.target.value })}
                    className="w-full bg-slate-950 border border-cyan-500/50 rounded-xl px-4 py-2.5 text-lg font-bold text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              ) : (
                <h3 className="text-2xl sm:text-3xl font-orbitron font-bold text-white mb-2 leading-snug">
                  {data.projectName}
                </h3>
              )}

              {/* Tagline */}
              {isEditing ? (
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-slate-400 mb-1">
                    Qisqa shior / tavsif:
                  </label>
                  <input
                    type="text"
                    value={data.projectTagline}
                    onChange={(e) => setData({ ...data, projectTagline: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2 text-sm text-cyan-300 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              ) : (
                <p className="text-sm sm:text-base font-medium text-cyan-300 mb-6">
                  {data.projectTagline}
                </p>
              )}

              {/* Project Visual / Screenshot Area */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-950 via-[#0a1122] to-slate-900 mb-6 p-6 sm:p-8 flex flex-col items-center justify-center text-center group min-h-[240px]">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mb-4 text-cyan-400 group-hover:scale-105 transition-transform">
                  <ImageIcon className="w-8 h-8" />
                </div>
                <div className="text-base font-bold text-white mb-1">
                  Loyihaning interfeysi va skrinshotlari
                </div>
                <p className="text-xs text-slate-400 max-w-md">
                  (Bu joyga loyihangiz dasturi, prototipi yoki maktab ko‘rgazmasi fotosurati joylashtiriladi)
                </p>
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                  <span>Status: Prototip sinovdan o‘tmoqda</span>
                </div>
              </div>

              {/* Full Description */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                  Loyiha haqida to‘liq ma'lumot:
                </h4>
                {isEditing ? (
                  <textarea
                    rows={4}
                    value={data.description}
                    onChange={(e) => setData({ ...data, description: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl p-3 text-sm text-slate-300 focus:outline-none focus:border-cyan-400"
                  />
                ) : (
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {data.description}
                  </p>
                )}
              </div>

              {/* Goals */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                  Asosiy maqsad va vazifalar:
                </h4>
                {isEditing ? (
                  <textarea
                    rows={3}
                    value={data.goals}
                    onChange={(e) => setData({ ...data, goals: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl p-3 text-sm text-slate-300 focus:outline-none focus:border-cyan-400"
                  />
                ) : (
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {data.goals}
                  </p>
                )}
              </div>

              {/* Technologies Used */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold text-slate-400 uppercase">
                  Texnologiyalar:
                </span>
                {isEditing ? (
                  <input
                    type="text"
                    value={data.technologies}
                    onChange={(e) => setData({ ...data, technologies: e.target.value })}
                    className="flex-1 bg-slate-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-cyan-300 focus:outline-none focus:border-cyan-400"
                  />
                ) : (
                  <span className="text-xs font-mono text-cyan-300">
                    {data.technologies}
                  </span>
                )}
              </div>

            </div>
          </div>

          {/* Author & School Card (Right 4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-purple-500/30 shadow-2xl">
              
              <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-400">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    Muallif va Ilmiy rahbar
                  </h4>
                  <div className="text-xs text-slate-400">
                    Maktab ma'lumotlari
                  </div>
                </div>
              </div>

              {/* Author Fields */}
              <div className="space-y-4">
                
                <div>
                  <div className="text-xs text-slate-400 mb-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Loyiha muallifi:</span>
                  </div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={data.authorName}
                      onChange={(e) => setData({ ...data, authorName: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white"
                    />
                  ) : (
                    <div className="text-sm font-bold text-white">
                      {data.authorName}
                    </div>
                  )}
                </div>

                <div>
                  <div className="text-xs text-slate-400 mb-1 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                    <span>Sinfi:</span>
                  </div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={data.grade}
                      onChange={(e) => setData({ ...data, grade: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white"
                    />
                  ) : (
                    <div className="text-sm text-slate-300">
                      {data.grade}
                    </div>
                  )}
                </div>

                <div>
                  <div className="text-xs text-slate-400 mb-1 flex items-center gap-1.5">
                    <School className="w-3.5 h-3.5 text-pink-400" />
                    <span>Ta'lim muassasasi:</span>
                  </div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={data.school}
                      onChange={(e) => setData({ ...data, school: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white"
                    />
                  ) : (
                    <div className="text-sm text-slate-300">
                      {data.school}
                    </div>
                  )}
                </div>

                <div>
                  <div className="text-xs text-slate-400 mb-1 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>Ilmiy rahbar:</span>
                  </div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={data.supervisor}
                      onChange={(e) => setData({ ...data, supervisor: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white"
                    />
                  ) : (
                    <div className="text-sm text-slate-300">
                      {data.supervisor}
                    </div>
                  )}
                </div>

              </div>

              {/* Exhibition stamp */}
              <div className="mt-6 p-4 rounded-xl bg-purple-950/40 border border-purple-500/30 text-xs text-purple-200">
                <span className="font-semibold block mb-1">
                  "Kelajak farzandlari" loyihasi
                </span>
                Respublika yosh dasturchilar va o‘quvchilar ilmiy-amaliy anjumani uchun tavsiya etilgan.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
