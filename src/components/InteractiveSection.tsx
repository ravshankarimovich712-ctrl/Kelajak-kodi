import { useState, useRef, useEffect } from 'react';
import { HelpCircle, MessageSquare, Check, X, RotateCcw, Send, Bot, User, Award, Sparkles } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  time: string;
}

export default function InteractiveSection() {
  const [activeTab, setActiveTab] = useState<'quiz' | 'chat'>('quiz');

  // --- QUIZ STATE ---
  const questions: Question[] = [
    {
      id: 1,
      question: "Sun'iy intellekt (AI) ning asosiy maqsadi nima?",
      options: [
        "Inson kabi mantiqiy fikrlash va masalalarni mustaqil yechish",
        "Faqat kompyuter ekranini chiroyli bezash",
        "Kompyuter o‘yinlarida faqat g‘alaba qozonish",
        "Barcha insonlarni ishsiz qoldirish"
      ],
      correctIndex: 0,
      explanation: "AI ning tub maqsadi inson aql-zakovatiga xos xususiyatlarni (o‘rganish, tahlil qilish, muammolarni yechish) kompyuter tizimlarida joriy etishdir."
    },
    {
      id: 2,
      question: "Sun'iy intellekt o‘rganishi uchun eng zarur bo‘lgan asosiy xom-ashyo nima?",
      options: [
        "Qog‘oz va qalam",
        "Katta hajmdagi ma'lumotlar (Data)",
        "Faqat tezkor internet",
        "Plastik qoplamalar"
      ],
      correctIndex: 1,
      explanation: "Mashinali o‘qitish modellari sifatli va katta hajmdagi ma'lumotlar (matn, surat, audio) orqali tajriba to‘playdi va o‘rganadi."
    },
    {
      id: 3,
      question: "Maktab o‘quvchilari dasturlash mantiqini o‘rganishi uchun qaysi vizual platforma tavsiya etiladi?",
      options: [
        "Scratch",
        "Photoshop",
        "Excel",
        "BIOS"
      ],
      correctIndex: 0,
      explanation: "Scratch — MIT laboratoriyasi tomonidan o‘quvchilar uchun maxsus yaratilgan rangli blokli dasturlash muhitidir."
    },
    {
      id: 4,
      question: "Bugungi kunda sun'iy intellekt va neyron tarmoqlarda eng ko‘p qo‘llaniladigan dasturlash tili qaysi?",
      options: [
        "Pascal",
        "Python",
        "HTML",
        "BASIC"
      ],
      correctIndex: 1,
      explanation: "Python o‘zining qulay sintaksisi hamda TensorFlow, PyTorch kabi boy AI kutubxonalari tufayli dunyoda 1-o‘rinda turadi."
    },
    {
      id: 5,
      question: "Mashinali o‘qitish (Machine Learning) nimani anglatadi?",
      options: [
        "Kompyuterni har kuni qo‘lda qayta yig‘ish",
        "Kompyuterga qoidalarni o‘rgatmasdan, ma'lumotlardan mustaqil xulosa chiqarish qobiliyati",
        "Faqat klaviaturada tez yozish",
        "Printerdan qog‘oz chiqarish"
      ],
      correctIndex: 1,
      explanation: "Machine Learning dasturchi har bir vaziyatni kodga yozmasdan, algoritmga ma'lumot berib, undan o‘rganishni talab qiladi."
    },
    {
      id: 6,
      question: "Veb-sahifalarga jonli harakat, interaktivlik va hisob-kitoblar beruvchi til qaysi?",
      options: [
        "CSS",
        "JavaScript",
        "SQL",
        "Notepad"
      ],
      correctIndex: 1,
      explanation: "HTML — skelet, CSS — dizayn va kiyim bo‘lsa, JavaScript — veb-sahifaning harakatlantiruvchi mushaklari va miyasi hisoblanadi."
    },
    {
      id: 7,
      question: "Sun'iy neyron tarmoqlarining tuzilishi nima asosida loyihalangan?",
      options: [
        "Quyosh sistemasining aylanishi",
        "Inson bosh miyasidagi biologik neyronlar va sinapslar",
        "Avtomobil motori tuzilishi",
        "Shaxmat taxtasi kataklari"
      ],
      correctIndex: 1,
      explanation: "Sun'iy neyron tarmoqlari inson miyasidagi milliarlab neyronlarning bir-biriga signal uzatish tamoyilidan ilhomlanib yaratilgan."
    },
    {
      id: 8,
      question: "Kelajakda eng yuqori talabga ega bo‘ladigan IT kasblardan biri qaysi?",
      options: [
        "Faqat disk yozuvchi mutaxassis",
        "Sun'iy intellekt muhandisi (AI Engineer)",
        "Qog‘oz arxivchisi",
        "Peyjer operatori"
      ],
      correctIndex: 1,
      explanation: "Sun'iy intellekt muhandislari va ma'lumotlar tahlilchilari dunyo bo‘ylab eng yuqori maoshli va nufuzli soha vakillari bo‘lib bormoqda."
    }
  ];

  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answersState, setAnswersState] = useState<{ [qId: number]: number }>({});
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleSelectOption = (optIndex: number) => {
    if (selectedAnswer !== null) return; // already answered
    setSelectedAnswer(optIndex);

    const isCorrect = optIndex === questions[currentQIndex].correctIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setAnswersState((prev) => ({ ...prev, [currentQIndex]: optIndex }));
  };

  const handleNextQuestion = () => {
    if (currentQIndex + 1 < questions.length) {
      setCurrentQIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQIndex(0);
    setSelectedAnswer(null);
    setAnswersState({});
    setScore(0);
    setQuizFinished(false);
  };

  // --- AI CHAT DEMO STATE ---
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      sender: 'ai',
      text: "Salom! Men 'Kelajak kodi' interaktiv ta'limiy yordamchisiman. Sun'iy intellekt, Python, Scratch, IT Park yoki maktab loyihangiz haqida xohlagan savolingizni bering!",
      time: "Hozir",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const quickPrompts = [
    "Sun'iy intellekt qanday ishlaydi?",
    "Python nima uchun kerak?",
    "Dasturlashni qayerdan boshlay?",
    "O‘zbekistonda IT qanday rivojlanyapti?",
    "Kelajak kasblari qaysilar?"
  ];

  const getAiResponse = (userInput: string): string => {
    const q = userInput.toLowerCase().trim();

    if (q.includes("salom") || q.includes("assalom") || q.includes("qalaysan") || q.includes("qandaysiz")) {
      return "Assalomu alaykum! Ahvollaringiz yaxshimi? Bugun dasturlash va sun'iy intellektning qaysi qiziqarli jihatini birgalikda o‘rganamiz?";
    }
    if (q.includes("sun'iy intellekt") || q.includes("ai nima") || q.includes("ai qanday") || q.includes("ishlaydi")) {
      return "Sun'iy intellekt — bu kompyuterga inson kabi fikrlash va qaror qabul qilishni o‘rgatish san'ati. U qoidalarni yodlab olmaydi, balki millionlab ma'lumotlar (rasm, matn, tovush) orqali xuddi yosh boladek mustaqil o‘rganadi.";
    }
    if (q.includes("python") || q.includes("payton")) {
      return "Python — bugungi kunda dunyodagi eng mashhur dasturlash tili! U sun'iy intellekt, neyron tarmoqlar, Telegram botlar va ilmiy tahlillarda qo‘llaniladi. Sintaksisi ingliz tiliga juda yaqin bo‘lgani uchun maktab o‘quvchilariga juda tavsiya etiladi.";
    }
    if (q.includes("qayerdan") || q.includes("boshlay") || q.includes("boshlash") || q.includes("o'rganish")) {
      return "Ajoyib intilish! Dasturlashni 1-bosqichda Scratch platformasida rangli bloklar yordamida mantiqni o‘rganishdan boshlang. 2-bosqichda Python tilini o‘rganing, 3-bosqichda esa HTML/CSS orqali o‘z saytlaringizni yarating!";
    }
    if (q.includes("o'zbekiston") || q.includes("it park") || q.includes("prezident") || q.includes("vatan")) {
      return "O‘zbekistonda yoshlarga IT sohasida juda katta imkoniyatlar yaratilmoqda! IT Park orqali xalqaro sertifikat olganlarga 50% gacha xarajat qoplab berilmoqda, 'Bir million o‘zbek dasturchisi' va turli innovatsion startap tanlovlari mavjud.";
    }
    if (q.includes("kasb") || q.includes("kelajak")) {
      return "Kelajakda eng yuqori talabga ega kasblar: 1) Sun'iy intellekt muhandisi, 2) Katta ma'lumotlar tahlilchisi (Data Scientist), 3) Kiberxavfsizlik himoyachisi, 4) Robototexnika muhandisi va 5) Mobil ilovalar dasturchisi.";
    }
    if (q.includes("neyron") || q.includes("tarmoq")) {
      return "Neyron tarmoq — inson miyasidagi nerv hujayralari tamoyili asosida ishlovchi matematik algoritm. Masalan, telefoningiz yuzingizni tanishi yoki ovozingizni tushunishi aynan neyron tarmoqlar orqali amalga oshiriladi.";
    }
    if (q.includes("chatgpt") || q.includes("claude") || q.includes("til modeli")) {
      return "ChatGPT va Claude kabi tizimlar 'Katta til modellari' (LLM) deb ataladi. Ular internetdagi deyarli barcha ilmiy manbalarni o‘qib chiqqan holda, har qanday tilda insondek ravon suhbatlashadi va kod yozishda ko‘maklashadi.";
    }
    if (q.includes("scratch") || q.includes("skretch")) {
      return "Scratch — bu yangi boshlovchilar va maktab o‘quvchilari uchun eng zo‘r vizual dasturlash tili. Unda kod xatolaridan qo‘rqmasdan, rang-barang bloklarni konstruktor kabi yig‘ib o‘yinlar yasash mumkin!";
    }
    if (q.includes("rahmat") || q.includes("tashakkur") || q.includes("zo'r") || q.includes("yaxshi")) {
      return "Arzimaydi, mamnunman! O‘rganishdan va yangi g‘oyalarni amalga oshirishdan hech qachon to‘xtamang. 'Kelajak farzandlari' loyihasida siz kabi iqtidorli yoshlar bor ekan, marra bizniki!";
    }

    return "Ajoyib savol! Men bu mavzuni 'Kelajak kodi' maktab bilimlar bazasiga kiritish ustida ishlayapman. Iltimos, Sun'iy intellekt, Python, Scratch, IT Park yoki kelajak kasblari haqida so‘rab ko‘ring.";
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputVal;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputVal("");
    setIsTyping(true);

    // Simulate AI thinking and reply
    setTimeout(() => {
      const responseText = getAiResponse(text);
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: responseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <section id="interaktiv" className="relative py-24 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 mb-3 uppercase">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Interaktiv laboratoriya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-orbitron font-extrabold text-white tracking-tight">
            Bilimingni sinab ko‘r & AI bilan suhbat
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Test orqali sun'iy intellekt bo‘yicha bilimlaringizni tekshiring yoki maxsus ta'limiy AI modelimiz bilan bevosita muloqot qilib ko‘ring.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="p-1.5 glass-panel rounded-xl border border-white/10 flex items-center gap-1 shadow-lg">
            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'quiz'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>AI Test (8 ta savol)</span>
            </button>
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'chat'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-md shadow-purple-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Mini AI Suhbat (Demo)</span>
            </button>
          </div>
        </div>

        {/* TAB 1: QUIZ */}
        {activeTab === 'quiz' && (
          <div className="max-w-3xl mx-auto">
            {!quizFinished ? (
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl relative">
                
                {/* Quiz Progress & Question Number */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-500/30">
                      Savol {currentQIndex + 1} / {questions.length}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400">
                    To‘g‘ri javoblar: <span className="text-emerald-400 font-bold tabular-nums">{score}</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-6">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300"
                    style={{ width: `${((currentQIndex + 1) / questions.length) * 100}%` }}
                  />
                </div>

                {/* Question Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 leading-snug">
                  {questions[currentQIndex].question}
                </h3>

                {/* 4 Options */}
                <div className="space-y-3 mb-6">
                  {questions[currentQIndex].options.map((option, idx) => {
                    const isSelected = selectedAnswer === idx;
                    const isCorrect = idx === questions[currentQIndex].correctIndex;
                    const isAnswered = selectedAnswer !== null;

                    let btnClass = "border-white/10 glass-panel text-slate-200 hover:border-cyan-400/50 hover:bg-white/5";

                    if (isAnswered) {
                      if (isCorrect) {
                        btnClass = "bg-emerald-950/60 border-emerald-500 text-white shadow-lg shadow-emerald-500/20";
                      } else if (isSelected && !isCorrect) {
                        btnClass = "bg-rose-950/60 border-rose-500 text-white shadow-lg shadow-rose-500/20";
                      } else {
                        btnClass = "border-white/5 text-slate-500 opacity-60";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        disabled={isAnswered}
                        onClick={() => handleSelectOption(idx)}
                        className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between text-sm sm:text-base ${btnClass}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center font-mono text-xs text-slate-400 shrink-0">
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span>{option}</span>
                        </div>
                        {isAnswered && isCorrect && (
                          <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                        )}
                        {isAnswered && isSelected && !isCorrect && (
                          <X className="w-5 h-5 text-rose-400 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Box when answered */}
                {selectedAnswer !== null && (
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 mb-6 animate-in fade-in duration-200">
                    <div className="text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5 text-cyan-400">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Izoh va tushuntirish:</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {questions[currentQIndex].explanation}
                    </p>
                  </div>
                )}

                {/* Next button */}
                <div className="flex justify-end">
                  <button
                    disabled={selectedAnswer === null}
                    onClick={handleNextQuestion}
                    className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                      selectedAnswer === null
                        ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                        : "bg-cyan-400 text-[#070b14] hover:bg-cyan-300 shadow-md shadow-cyan-500/30 active:scale-95"
                    }`}
                  >
                    {currentQIndex + 1 === questions.length ? "Natijani ko‘rish" : "Keyingi savol →"}
                  </button>
                </div>

              </div>
            ) : (
              /* Quiz Finished View */
              <div className="glass-panel rounded-2xl p-8 sm:p-10 border border-cyan-500/30 text-center shadow-2xl animate-in zoom-in-95 duration-300">
                <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-cyan-500/20">
                  <Award className="w-10 h-10 text-cyan-400" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-orbitron font-extrabold text-white mb-2">
                  Test yakunlandi!
                </h3>

                <div className="text-4xl sm:text-5xl font-extrabold text-cyan-300 my-4 tabular-nums">
                  {score} / {questions.length}
                </div>

                <div className="text-base text-slate-300 max-w-md mx-auto mb-6">
                  {score === 8 && "Fantastik natija! Siz chinakam AI bo‘yicha bilimdon va kelajak ixtirochisisiz!"}
                  {score >= 6 && score < 8 && "Ajoyib natija! Sun'iy intellekt va dasturlash asoslarini juda yaxshi o‘zlashtiribsiz."}
                  {score >= 4 && score < 6 && "Yaxshi natija! Bir oz ko‘proq o‘qib, 8/8 qilish imkoniyatingiz bor."}
                  {score < 4 && "Yaxshi boshlanish! Sahifadagi bo‘limlarni yana bir bor o‘qib chiqing va qayta urinib ko‘ring."}
                </div>

                <button
                  onClick={handleRestartQuiz}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 text-[#070b14] font-semibold text-sm hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/25 active:scale-95"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Qayta topshirish</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: MINI AI CHAT DEMO */}
        {activeTab === 'chat' && (
          <div className="max-w-3xl mx-auto">
            <div className="glass-panel rounded-2xl border border-purple-500/30 shadow-2xl overflow-hidden flex flex-col h-[560px]">
              
              {/* Chat Header */}
              <div className="p-4 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <span>Kelajak AI Yordamchisi</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <div className="text-xs text-slate-400">
                      O‘zbek tilidagi ta'limiy simulyatsiya
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setMessages([{
                    id: 'reset',
                    sender: 'ai',
                    text: "Suhbat yangilandi. Yana qanday mavzuda savolingiz bor?",
                    time: "Hozir",
                  }])}
                  className="text-xs text-slate-400 hover:text-white px-2.5 py-1 rounded bg-white/5 border border-white/10 transition-colors"
                >
                  Tozalash
                </button>
              </div>

              {/* Chat Message Stream */}
              <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-3 ${
                      msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
                        msg.sender === 'user'
                          ? 'bg-cyan-500/20 border-cyan-400/40 text-cyan-400'
                          : 'bg-purple-500/20 border-purple-400/40 text-purple-400'
                      }`}
                    >
                      {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>

                    <div
                      className={`max-w-[82%] sm:max-w-[75%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-cyan-500 text-[#070b14] font-medium rounded-tr-none'
                          : 'glass-panel text-slate-200 border border-white/10 rounded-tl-none shadow-md'
                      }`}
                    >
                      <div>{msg.text}</div>
                      <div
                        className={`text-[10px] mt-1.5 ${
                          msg.sender === 'user' ? 'text-[#070b14]/70 text-right' : 'text-slate-500'
                        }`}
                      >
                        {msg.time}
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-400">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="glass-panel px-4 py-3 rounded-2xl rounded-tl-none border border-white/10 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}
                <div ref={chatBottomRef} />
              </div>

              {/* Quick Prompt Chips */}
              <div className="px-4 py-2 border-t border-white/5 bg-slate-900/50 overflow-x-auto flex gap-2">
                {quickPrompts.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(prompt)}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 transition-colors whitespace-nowrap shrink-0"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              {/* Input Bar */}
              <div className="p-3 sm:p-4 bg-slate-900/90 border-t border-white/10 flex items-center gap-2">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Sun'iy intellekt yoki dasturlash haqida savol yozing..."
                  className="flex-1 bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputVal.trim() || isTyping}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    inputVal.trim() && !isTyping
                      ? "bg-cyan-400 text-[#070b14] hover:bg-cyan-300 active:scale-95"
                      : "bg-slate-800 text-slate-500 cursor-not-allowed"
                  }`}
                  aria-label="Savolni yuborish"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
