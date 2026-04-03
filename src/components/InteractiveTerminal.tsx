import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

const COMMANDS: Record<string, string> = {
  about: 'Rahul Bharathi — AI & DS Engineer. Focus: Computer Vision, RAG, Knowledge Distillation.',
  skills: 'Python, PyTorch, LangChain, Ollama, FAISS, React, TypeScript, XGBoost, Streamlit.',
  research: 'Knowledge Distillation, Privacy-First RAG, Real-Time Inference, Financial ML.',
  contact: 'Email: rahulbharathi1921@gmail.com | GitHub: github.com/rahulbharathi1921',
  repos: '41+ public repos: VisionDistill, VoiceDistill, Trading-RAG-Bot, MIUI-decryptors, and more.',
  help: 'Commands: about, skills, research, contact, repos, clear, help',
};

export default function InteractiveTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    'Welcome to RahulOS v1.0 — type "help" to begin.',
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    if (!cmd) return;
    const lines = COMMANDS[cmd]
      ? [`> ${cmd}`, COMMANDS[cmd]]
      : cmd === 'clear'
      ? (setHistory(['Cleared. Type "help" to begin.']), [])
      : [`> ${cmd}`, `Unknown: "${cmd}". Type "help".`];
    setHistory(lines.length ? [...history, ...lines] : []);
    setInput('');
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-surface-variant rounded-sm overflow-hidden border border-primary/10 font-mono text-sm relative">
      {/* Header */}
      <div className="px-4 py-3 flex items-center justify-between border-b border-primary/5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-slate-300" />
            <span className="w-3 h-3 rounded-full bg-slate-300" />
            <span className="w-3 h-3 rounded-full bg-slate-300" />
          </div>
          <TerminalIcon size={14} className="text-secondary ml-2" />
          <span className="text-on-surface-variant/50 text-xs tracking-tight font-bold">RAHUL_TERMINAL</span>
        </div>
        <span className="text-[10px] text-on-surface-variant/40 uppercase tracking-widest">bash</span>
      </div>

      {/* Body */}
      <div className="h-[360px] p-6 overflow-y-auto" role="log">
        {history.map((line, i) => (
          <p key={i} className={line.startsWith('>') ? 'text-secondary font-bold mt-3' : 'text-on-surface-variant/70 mb-2 leading-relaxed'}>
            {line}
          </p>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-3">
          <span className="text-secondary font-bold shrink-0">{`rahul@portfolio:~$`}</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-on-surface caret-secondary placeholder:text-on-surface-variant/30 text-sm"
            placeholder="type 'help'..."
            autoFocus
          />
        </form>
        <div ref={scrollRef} />
      </div>
    </div>
  );
}
