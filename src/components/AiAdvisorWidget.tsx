import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, MessageSquare, Loader2, Compass } from 'lucide-react';

export const AiAdvisorWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: 'user' | 'ai'; text: string; time: string }[]>([
    {
      sender: 'ai',
      text: 'Greetings. I am Anahita’s Event & Concierge Specialist. How may I assist with your wedding planning, luxury travel itineraries, or corporate MICE events today?',
      time: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setMessages((prev) => [...prev, { sender: 'user', text: userMsg, time: nowTime }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg })
      });

      if (response.ok) {
        const data = await response.json();
        setMessages((prev) => [
          ...prev,
          {
            sender: 'ai',
            text: data.reply || 'Anahita Hospitality offers world-class wedding planning, Domestic Destination, international holidays, and corporate MICE summits.',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      } else {
        throw new Error('Fallback response needed');
      }
    } catch {
      // Intelligent fallback answer based on query keywords
      setTimeout(() => {
        let reply = "We specialize in 4 core offerings: Weddings & Celebrations (Wedding), Domestic Travel (Domestic Destination), International Travel (international holidays), and MICE & Corporate Events (MICE).";
        const lower = userMsg.toLowerCase();
        if (lower.includes('wedding') || lower.includes('vivaah') || lower.includes('marriage')) {
          reply = "Our Wedding division crafts royal palace weddings in Udaipur, beachfront ceremonies in the Maldives, and cliffside celebrations in Amalfi with complete catering and decor.";
        } else if (lower.includes('travel') || lower.includes('tour') || lower.includes('holiday') || lower.includes('train')) {
          reply = "We offer bespoke domestic luxury tours (Maharajas' Express, Rajasthan palaces, Kerala houseboats) and international luxury escapes (Maldives, Switzerland, Bali).";
        } else if (lower.includes('mice') || lower.includes('corporate') || lower.includes('conference') || lower.includes('event')) {
          reply = "Through our MICEpro division, we organize executive summits, international sales conferences, product launches, and incentive retreats with full delegate management.";
        } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('email')) {
          reply = "You can reach us at +91 73039 07800 or info.anahitahospitality@gmail.com. You can also click 'Schedule Consultation' to send a request.";
        }

        setMessages((prev) => [
          ...prev,
          {
            sender: 'ai',
            text: reply,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      }, 800);
    } finally {
      setIsLoading(false);
    }
  };

  const quickPrompts = [
    'Plan a palace wedding',
    'India luxury train tours',
    'Corporate MICE events'
  ];

  return (
    <>
      {/* Floating Action Buttons (Right side fixed) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* WhatsApp Floating Icon Button */}
        <a
          id="btn-whatsapp-floating"
          href="https://wa.me/917303907800?text=Hello%20Anahita%20Hospitality%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 border border-white/20"
          title="Chat on WhatsApp (+91 73039 07800)"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.149 4.197 4.292-1.127zm11.305-6.666c-.198-.1-1.171-.578-1.353-.644-.181-.066-.313-.1-.444.1-.131.198-.511.644-.627.776-.115.132-.23.149-.427.05-.198-.099-.836-.308-1.592-.982-.589-.525-.987-1.173-1.103-1.371-.116-.198-.012-.304.087-.403.089-.088.198-.23.297-.346.099-.115.132-.198.198-.33.066-.131.033-.247-.016-.346-.05-.099-.445-1.072-.61-1.467-.16-.384-.324-.332-.444-.338l-.378-.007c-.131 0-.344.049-.525.247-.181.198-.691.676-.691 1.649 0 .973.708 1.914.807 2.046.099.131 1.393 2.128 3.376 2.984.471.203.839.324 1.126.416.474.151.905.13 1.246.079.38-.058 1.171-.478 1.338-.94.165-.462.165-.857.115-.94-.049-.083-.181-.133-.379-.232z"/>
          </svg>
        </a>

        {/* Floating Widget Toggle Button */}
        {!isOpen && (
          <button
            id="btn-open-ai-advisor"
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-3 bg-[#121824] hover:bg-[#1a2233] border border-[#c5a059] text-[#c5a059] px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="w-8 h-8 rounded-full bg-[#c5a059] text-[#0b0f17] flex items-center justify-center font-bold shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-bold text-amber-200 uppercase tracking-wider">Anahita Concierge</span>
              <span className="text-[10px] text-slate-400">Weddings, Travel & MICE</span>
            </div>
          </button>
        )}
      </div>

      {/* Floating Chat Window */}
      {isOpen && (
        <div
          id="ai-advisor-window"
          className="fixed bottom-6 right-6 z-50 w-full max-w-sm sm:max-w-md bg-[#0e1420] border border-[#c5a059]/40 rounded-xs shadow-2xl overflow-hidden flex flex-col h-[520px] animate-in slide-in-from-bottom-5 duration-300"
        >
          {/* Header */}
          <div className="bg-[#121824] border-b border-amber-900/30 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#c5a059] text-[#0b0f17] flex items-center justify-center font-bold shadow-md">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-serif-luxury text-amber-100 font-semibold">Anahita Luxury Concierge</h4>
                <p className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  Weddings, Travel & Corporate AI
                </p>
              </div>
            </div>
            <button
              id="btn-close-ai-advisor"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#080c14] text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-xs text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#c5a059] text-[#0b0f17] font-medium'
                      : 'bg-[#121824] border border-slate-800 text-slate-200'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[9px] text-slate-500 mt-1 px-1">{msg.time}</span>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-slate-400 text-xs bg-[#121824] p-3 rounded-xs border border-slate-800 w-fit">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-[#c5a059]" />
                <span>Checking concierge details...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          <div className="px-3 py-2 bg-[#0e1420] border-t border-slate-800 flex gap-1.5 overflow-x-auto text-[10px]">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setInput(prompt);
                }}
                className="shrink-0 bg-[#121824] hover:bg-[#1c2638] text-amber-200/80 hover:text-amber-200 border border-slate-800 px-2.5 py-1 rounded-xs transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-[#121824] border-t border-amber-900/20 flex gap-2">
            <input
              type="text"
              placeholder="Ask about weddings, travel, or MICE..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-[#080c14] border border-slate-700 focus:border-[#c5a059] text-xs text-slate-100 px-3 py-2 outline-none rounded-xs placeholder-slate-500"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="bg-[#c5a059] hover:bg-[#e2c887] text-[#0b0f17] p-2 rounded-xs disabled:opacity-50 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
