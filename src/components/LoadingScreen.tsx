import { useState, useEffect } from 'react';
import { Sparkles, Code2 } from 'lucide-react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#070b14] flex flex-col items-center justify-center transition-opacity duration-500">
      <div className="relative mb-6">
        {/* Glowing spinning ring */}
        <div className="w-20 h-20 rounded-full border-2 border-cyan-500/20 border-t-cyan-400 animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Code2 className="w-8 h-8 text-cyan-400 animate-pulse" />
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm font-orbitron font-bold tracking-widest text-cyan-400">
        <Sparkles className="w-4 h-4 animate-spin" />
        <span>Kelajak yuklanmoqda...</span>
      </div>

      <div className="text-xs text-slate-500 mt-2 font-mono">
        Sun'iy intellekt va dasturlash platformasi
      </div>
    </div>
  );
}
