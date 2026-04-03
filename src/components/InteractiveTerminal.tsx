import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Terminal as TerminalIcon, X, Minus, Square } from 'lucide-react';

const COMMANDS = {
  help: 'Available commands: about, skills, research, contact, clear, help',
  about: 'Rahul: AI & DS Engineer specializing in Computer Vision and RAG systems. Passionate about model compression and edge intelligence.',
  skills: 'Core Tech: PyTorch, TensorFlow, LangChain, Ollama, React, TypeScript, Python.',
  research: 'Focus: Knowledge Distillation, Retrieval-Augmented Generation, Edge AI optimization.',
  contact: 'Email: rahul@example.com | GitHub: rahulbharathi1921',
};

export default function InteractiveTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>(['Welcome to RahulOS v1.0.0', 'Type "help" to see available commands.']);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    
    if (cmd === 'clear') {
      setHistory([]);
    } else if (cmd in COMMANDS) {
      setHistory([...history, `> ${input}`, (COMMANDS as any)[cmd]]);
    } else if (cmd !== '') {
      setHistory([...history, `> ${input}`, `Command not found: ${cmd}. Type "help" for assistance.`]);
    }
    
    setInput('');
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-[#0f172a] rounded-lg overflow-hidden shadow-2xl border border-slate-800 font-mono text-sm relative">
      {/* Terminal Header */}
      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex items-center gap-2 ml-2">
            <TerminalIcon size={14} className="text-secondary" />
            <span className="text-slate-400 text-xs tracking-tight font-bold">RAHUL_TERMINAL_V1</span>
          </div>
        </div>
        <div className="text-[10px] text-slate-500 uppercase tracking-widest">bash</div>
      </div>

      {/* Terminal Body */}
      <div 
        ref={scrollRef}
        className="h-[400px] p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent bg-[#0f172a]/95"
      >
        {history.map((line, i) => (
          <div key={i} className={line.startsWith('>') ? "text-secondary font-bold mb-2" : "text-slate-300 mb-4 leading-relaxed"}>
            {line}
          </div>
        ))}
        
        <form onSubmit={handleCommand} className="flex items-center gap-3 mt-2">
          <span className="text-secondary font-bold">rahul@portfolio:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-white caret-secondary placeholder:text-slate-600"
            placeholder="type 'help'..."
            autoFocus
          />
        </form>
      </div>
    </div>
  );
}
