
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Cpu, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
// import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Initialize system... Success. I am ArulBot. I have direct access to Arul\'s engineering logs and legacy data. How can I assist your technical evaluation?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      chatContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // const handleSend = async () => {
  //   if (!input.trim()) return;

  //   const userMessage: ChatMessage = { role: 'user', text: input };
  //   setMessages(prev => [...prev, userMessage]);
  //   setInput('');
  //   setIsLoading(true);

  //   setTimeout(scrollToBottom, 100);

  //   const responseText = await sendMessageToGemini(input);
    
  //   setMessages(prev => [...prev, { role: 'model', text: responseText }]);
  //   setIsLoading(false);
  // };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[250] flex flex-col items-end pointer-events-auto">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[90vw] md:w-96 bg-[#0a0a0a]/98 backdrop-blur-3xl border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,1)] border-t-cyan-400/30"
          >
            {/* Header */}
            <div className="bg-white/5 p-5 flex justify-between items-center border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[10px] text-white tracking-[0.3em] uppercase leading-none">ArulBot</h3>
                  <p className="text-[8px] font-mono text-cyan-400/60 uppercase tracking-widest mt-1">Status: Active</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors">
                <X className="w-4 h-4 text-white/50" />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={chatContainerRef}
              className="h-[400px] overflow-y-auto p-6 space-y-6 scroll-smooth scrollbar-hide"
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl text-sm ${
                      msg.role === 'user'
                        ? 'bg-cyan-400 text-black font-bold rounded-tr-none'
                        : 'bg-white/5 text-white/80 rounded-tl-none border border-white/5 leading-relaxed'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none flex gap-1.5 border border-white/5">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-5 bg-white/[0.02] border-t border-white/5">
              <div className="flex gap-3 bg-white/5 rounded-xl p-1 pr-1.5 border border-white/5">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      // handleSend();
                    }
                  }}
                  placeholder="Ask for system specs..."
                  className="flex-1 bg-transparent text-white placeholder-white/20 text-xs px-3 focus:outline-none"
                />
                <button
                  // onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-cyan-400 p-2.5 rounded-lg text-black hover:scale-105 active:scale-95 transition-all disabled:opacity-20 disabled:scale-100"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-[1.5rem] bg-white text-black flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-[260] group border border-white/10 hover:bg-cyan-400 transition-colors"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <div className="relative">
             <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
             <span className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full border-2 border-white group-hover:border-cyan-400" />
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default AIChat;
