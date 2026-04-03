import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'vision-distill',
    number: '01',
    category: 'COMPUTER VISION',
    title: 'VisionDistill',
    description: 'Lightweight Computer Vision framework utilizing Knowledge Distillation to compress large models for edge deployment without significant accuracy loss.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    tech: ['PYTORCH', 'OPENCV', 'PYTHON'],
    color: 'primary',
    github: 'https://github.com/rahulbharathi1921/VisionDistill',
    metrics: [
        { label: 'Compression', value: '4x' },
        { label: 'Accuracy Drop', value: '<1.2%' }
    ]
  },
  {
    id: 'trading-rag-bot',
    number: '02',
    category: 'NLP & RAG',
    title: 'Trading-RAG-Bot',
    description: 'A free, unlimited personal trading and finance assistant powered by RAG (Retrieval-Augmented Generation). Chat with your trading/finance PDF books using natural language. Runs entirely locally with Ollama.',
    image: 'https://images.unsplash.com/photo-1761850167081-473019536383?auto=format&fit=crop&q=80&w=1200',
    tech: ['LANGCHAIN', 'OLLAMA', 'FAISS'],
    color: 'secondary',
    github: 'https://github.com/rahulbharathi1921/Trading-RAG-Bot'
  },
  {
    id: 'stockmind-ai',
    number: '03',
    category: 'MACHINE LEARNING',
    title: 'StockMind-AI',
    description: 'AI-powered stock market analysis dashboard with real-time data, machine learning predictions, and interactive visualizations using XGBoost and Plotly.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1200',
    tech: ['XGBOOST', 'PLOTLY', 'STREAMLIT'],
    color: 'tertiary',
    github: 'https://github.com/rahulbharathi1921/StockMind-AI'
  },
  {
    id: 'voice-distill',
    number: '04',
    category: 'SPEECH AI',
    title: 'VoiceDistill',
    description: 'Real-time speech command recognition system using knowledge distillation to achieve high performance on low-resource hardware.',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=1200',
    tech: ['PYTORCH', 'SPEECHBRAIN', 'PYTHON'],
    color: 'primary',
    github: 'https://github.com/rahulbharathi1921/VoiceDistill'
  },
  {
    id: 'miui-decryptor',
    number: '05',
    category: 'SECURITY & UTILITY',
    title: 'MIUI-Media-Decryptor',
    description: 'Batch decryption tool for MIUI encrypted media files with configurable cleanup behavior and secure file handling.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
    tech: ['PYTHON', 'CRYPTOGRAPHY', 'CLI'],
    color: 'secondary',
    github: 'https://github.com/rahulbharathi1921/MIUI-Media-Decryptor'
  }
];

export const SKILLS: Skill[] = [
  {
    domain: '01',
    title: 'NLP & RAG',
    description: 'Building retrieval-augmented generation systems with LangChain, Ollama, and vector databases like FAISS.',
    icon: 'Brain',
    tags: ['LANGCHAIN', 'OLLAMA', 'FAISS']
  },
  {
    domain: '02',
    title: 'COMPUTER VISION',
    description: 'Model compression and knowledge distillation for lightweight vision models. Real-time object detection.',
    icon: 'Eye',
    tags: ['OPENCV', 'PYTORCH', 'DISTILLATION']
  },
  {
    domain: '03',
    title: 'MACHINE LEARNING',
    description: 'Predictive modeling, time-series analysis, and classification using XGBoost, scikit-learn, and Logistic Regression.',
    icon: 'BarChart',
    tags: ['XGBOOST', 'SCIKIT-LEARN', 'PANDAS']
  },
  {
    domain: '04',
    title: 'DEEP LEARNING',
    description: 'Generative AI with Stable Diffusion and speech recognition models with knowledge distillation.',
    icon: 'Cpu',
    tags: ['STABLE DIFFUSION', 'TENSORFLOW', 'SPEECH']
  },
  {
    domain: '05',
    title: 'ENTERPRISE WEB',
    description: 'Developing modular, responsive web platforms with enterprise-grade architecture and PWA support.',
    icon: 'Globe',
    tags: ['HTML5', 'CSS3', 'VANILLA JS']
  },
  {
    domain: '06',
    title: 'UTILITY & SECURITY',
    description: 'Developing decryption tools, media collectors, and system-level automation scripts in Python.',
    icon: 'Shield',
    tags: ['PYTHON', 'SECURITY', 'AUTOMATION']
  }
];
