import { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, Mail, MapPin, Sparkles, Heart } from 'lucide-react';

interface ContactFooterProps {
  onOpenExport?: () => void;
}

export default function ContactFooter({ onOpenExport }: ContactFooterProps) {
  const [formData, setFormData] = useState({
    name: '',
    school: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;
    setSubmitted(true);
    setFormData({ name: '', school: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <footer id="aloqa" className="relative pt-24 pb-12 border-t border-slate-800/80 bg-[#04070d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Left: Contact Info & Telegram CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 mb-3 uppercase">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Muloqot va Hamkorlik</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-orbitron font-extrabold text-white tracking-tight">
                Biz bilan bog‘laning
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                "Kelajak farzandlari" loyihasi, yangi g‘oyalar yoki maktab ta'limi bo‘yicha takliflaringiz bo‘lsa, biz bilan bemalol aloqaga chiqing.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Manzil:</div>
                  <div className="font-semibold text-white">Toshkent shahri, O‘zbekiston</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-purple-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Elektron pochta:</div>
                  <div className="font-semibold text-white">kelajak.farzandlari@maktab.uz</div>
                </div>
              </div>
            </div>

            {/* Telegram Channel Button */}
            <div className="pt-2">
              <a
                href="https://t.me/kelajak_farzandlari"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-sky-500/25 active:scale-95 group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Telegram orqali bog‘lanish</span>
              </a>
              <span className="block text-xs text-slate-400 mt-2">
                (Telegram havolasini o‘zingizning kanalingizga osongina o‘zgartirishingiz mumkin)
              </span>
            </div>

            {onOpenExport && (
              <div className="p-4 rounded-xl glass-panel border border-cyan-500/30">
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
                  Loyihani mustaqil fayl qilish:
                </div>
                <p className="text-xs text-slate-300 mb-3">
                  Ushbu saytni internet bo‘lmaganda ham ochiladigan bitta <code>index.html</code> fayl ko‘rinishida yuklab olishingiz mumkin.
                </p>
                <button
                  onClick={onOpenExport}
                  className="px-4 py-2 text-xs font-semibold text-[#070b14] bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
                >
                  index.html faylini yuklab olish
                </button>
              </div>
            )}
          </div>

          {/* Right: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl relative">
              <h3 className="text-xl font-bold text-white mb-2">
                Fikr yoki xabar qoldiring
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Quyidagi shaklni to‘ldiring, siz bilan tez orada bog‘lanamiz.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center animate-in zoom-in-95 duration-200">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                  <div className="text-base font-bold text-white mb-1">
                    Xabaringiz muvaffaqiyatli qabul qilindi!
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-200">
                    "Kelajak farzandlari" loyihasiga qiziqish bildirganingiz uchun tashakkur!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Ism va familiyangiz:
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Masalan: Jasur Alimov"
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Maktabingiz yoki hududingiz:
                    </label>
                    <input
                      type="text"
                      value={formData.school}
                      onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                      placeholder="Masalan: 14-maktab, Samarqand viloyati"
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Xabaringiz yoki taklifingiz:
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Loyiha haqidagi fikrlaringiz yoki savollaringiz..."
                      className="w-full bg-slate-950 border border-white/10 rounded-xl p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-[#070b14] font-semibold text-sm transition-all shadow-lg shadow-cyan-500/25 active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Xabarni yuborish</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Footer Bottom copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© 2026 "Kelajak farzandlari". Barcha huquqlar himoyalangan.</span>
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <span>Yosh dasturchilar va ixtirochilar uchun mehr bilan yaratildi</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>

      </div>
    </footer>
  );
}
