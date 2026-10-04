import React, { useState } from 'react';
import { MessageSquare, X, Send, PhoneCall, CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NUZUL_CONTACT } from '../../data/nuzulData';

export const ChatModal: React.FC = () => {
  const { isChatOpen, setIsChatOpen, locale, theme } = useApp();
  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'support'; text: string; time: string }>>([
    {
      sender: 'support',
      text: isAr
        ? 'أهلاً بك في نُزول تِك! أنا م. عبد الله سامي من فريق الدعم الهندسي في القاهرة. كيف نقدر نساعدك في تأسيس شبكتك، تجهيز سيرفراتك السحابية، أو حوكمة البريد والأنظمة اليوم؟'
        : 'Welcome to Nuzul Tech! I am Eng. Abdullah from engineering operations in Cairo. How can we assist you with infrastructure, cloud VPS, or bespoke systems today?',
      time: 'الآن',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  if (!isChatOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setMessages((prev) => [...prev, { sender: 'user', text: userText, time: now }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const reply = isAr
        ? 'شكراً لتواصلك! استلمت استفسارك، وفريقنا الهندسي جاهز لمعاينة مقرك أو رفع خوادمك السحابية فوراً. يمكنك أيضاً محادثتي مباشرة عبر واتساب.'
        : 'Thank you! Our engineering team is ready to evaluate your requirements or deploy your servers immediately. You can also message us directly on WhatsApp.';
      setMessages((prev) => [...prev, { sender: 'support', text: reply, time: now }]);
    }, 1100);
  };

  return (
    <div
      className={`fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-[115] w-full max-w-sm overflow-hidden rounded-3xl border shadow-2xl backdrop-blur-xl transition-colors ${
        isDark
          ? 'border-emerald-500/40 bg-[#0a111c] text-white'
          : 'border-slate-300 bg-white text-slate-900 shadow-2xl'
      }`}
    >
      {/* Header */}
      <div
        className={`flex items-center justify-between border-b px-5 py-4 ${
          isDark ? 'border-white/10 bg-[#0d1524]' : 'border-slate-200 bg-slate-50'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500 font-bold border border-emerald-500/40">
            A
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 border border-current" />
          </div>
          <div>
            <div className="text-xs font-bold">
              {isAr ? 'م. عبد الله · نُزول تِك' : 'Eng. Abdullah · Nuzul Tech'}
            </div>
            <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono flex items-center gap-1">
              <span>●</span> {isAr ? 'متصل الآن (القاهرة 24/7)' : 'Cairo HQ Online (24/7)'}
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsChatOpen(false)}
          className="text-slate-400 hover:text-current transition-colors cursor-pointer"
          aria-label="Close Chat"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Messages Feed */}
      <div className="h-72 overflow-y-auto p-4 space-y-3 text-xs">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl p-3 leading-relaxed ${
                m.sender === 'user'
                  ? 'bg-emerald-500 text-white font-medium rounded-br-none rtl:rounded-br-2xl rtl:rounded-bl-none shadow-sm'
                  : isDark
                  ? 'bg-[#0d1524] text-slate-200 border border-white/5 rounded-bl-none rtl:rounded-bl-2xl rtl:rounded-br-none'
                  : 'bg-slate-100 text-slate-800 border border-slate-200 rounded-bl-none rtl:rounded-bl-2xl rtl:rounded-br-none'
              }`}
            >
              {m.text}
            </div>
            <span className="text-[9px] text-slate-400 mt-1 px-1 font-mono">{m.time}</span>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-1.5 text-slate-400 text-[11px] p-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-bounce" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-bounce delay-150" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-bounce delay-300" />
            <span className="ml-1 text-[10px]">{isAr ? 'يكتب رد...' : 'Typing...'}</span>
          </div>
        )}
      </div>

      {/* WhatsApp Quick Link */}
      <div
        className={`border-t px-4 py-2 flex items-center justify-between text-[11px] ${
          isDark ? 'border-white/5 bg-[#070c14]' : 'border-slate-100 bg-slate-50'
        }`}
      >
        <span className="text-slate-400">{isAr ? 'تفضل المحادثة المباشرة؟' : 'Prefer WhatsApp?'}</span>
        <a
          href={NUZUL_CONTACT.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
        >
          <PhoneCall className="h-3 w-3" />
          <span>{isAr ? 'محادثة فورية' : 'Instant Chat'}</span>
        </a>
      </div>

      {/* Input */}
      <form
        onSubmit={handleSend}
        className={`flex items-center gap-2 border-t p-3 ${
          isDark ? 'border-white/10 bg-[#0d1524]' : 'border-slate-200 bg-white'
        }`}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={isAr ? 'اكتب رسالتك للمهندس المناوب...' : 'Type message to on-duty engineer...'}
          className={`flex-1 rounded-xl border px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none ${
            isDark ? 'border-white/10 bg-white/5 text-white placeholder-slate-500' : 'border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400'
          }`}
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500 text-white disabled:opacity-40 transition-colors cursor-pointer"
          aria-label="Send"
        >
          <Send className="h-3.5 w-3.5" />
        </button>
      </form>
    </div>
  );
};
