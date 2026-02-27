/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { 
  Banana, 
  Cpu, 
  Image as ImageIcon, 
  Upload, 
  Zap, 
  Play, 
  ChevronRight, 
  Sparkles,
  Layers,
  Globe,
  Github,
  Twitter,
  Instagram,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass">
    <div className="flex items-center gap-2">
      <div className="bg-brand-yellow p-1.5 rounded-lg">
        <Banana className="w-6 h-6 text-brand-charcoal" />
      </div>
      <span className="text-xl font-bold tracking-tighter font-display">NANO BANANA</span>
    </div>
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
      <a href="#vision" className="hover:text-brand-yellow transition-colors">Vision</a>
      <a href="#masterpiece" className="hover:text-brand-yellow transition-colors">Masterpiece</a>
      <a href="#studio" className="hover:text-brand-yellow transition-colors">Studio</a>
      <a href="#community" className="hover:text-brand-yellow transition-colors">Community</a>
    </div>
    <button className="bg-brand-yellow text-brand-charcoal px-5 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform">
      Get Started
    </button>
  </nav>
);

const Hero = () => {
  return (
    <section id="vision" className="relative min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-yellow/10 rounded-full blur-[120px] -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-black mb-6 font-display tracking-tight">
          Nano Banana:<br />
          <span className="text-brand-yellow">모바일 비전의 미래</span>
        </h1>
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          나노 기술과 인공지능의 결합으로 탄생한 차세대 모바일 경험. 
          당신의 상상력을 현실로 만드는 나노 바나나의 세계에 오신 것을 환영합니다.
        </p>
      </motion.div>

      {/* Smartphone Mockup */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative w-full max-w-[320px] md:max-w-[400px] aspect-[9/19] bg-brand-gray rounded-[3rem] border-8 border-white/10 shadow-2xl overflow-hidden"
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-brand-charcoal rounded-b-2xl z-20" />
        
        {/* Video Player Placeholder */}
        <div className="relative w-full h-full bg-black flex items-center justify-center">
          <img 
            src="https://picsum.photos/seed/nanobanana/1080/1920" 
            alt="Ad Video Placeholder" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="z-10 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-brand-yellow flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-brand-charcoal fill-current ml-1" />
            </div>
            <span className="text-xs font-bold tracking-widest uppercase text-brand-yellow">Watch Advertisement</span>
          </div>
          
          {/* UI Overlay */}
          <div className="absolute bottom-10 left-6 right-6 flex flex-col gap-2">
            <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-brand-yellow" />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-white/50">
              <span>01:24</span>
              <span>02:10</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Gallery = () => {
  const masterpieces = [
    { id: 1, title: 'Neon Jungle', url: 'https://picsum.photos/seed/nano1/800/800' },
    { id: 2, title: 'Cyber Desert', url: 'https://picsum.photos/seed/nano2/800/800' },
    { id: 3, title: 'Liquid Gold', url: 'https://picsum.photos/seed/nano3/800/800' },
    { id: 4, title: 'Abstract Flow', url: 'https://picsum.photos/seed/nano4/800/800' },
    { id: 5, title: 'Nano Structure', url: 'https://picsum.photos/seed/nano5/800/800' },
    { id: 6, title: 'Digital Bloom', url: 'https://picsum.photos/seed/nano6/800/800' },
    { id: 7, title: 'Future City', url: 'https://picsum.photos/seed/nano7/800/800' },
    { id: 8, title: 'Organic Tech', url: 'https://picsum.photos/seed/nano8/800/800' },
    { id: 9, title: 'Prism Light', url: 'https://picsum.photos/seed/nano9/800/800' },
  ];

  return (
    <section id="masterpiece" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-bold font-display mb-4">나노 마스터피스</h2>
          <p className="text-white/50 max-w-xl">
            나노 바나나의 강력한 AI 엔진으로 생성된 예술적 샘플들입니다. 
            정교한 디테일과 미래지향적인 색채의 조화를 경험해보세요.
          </p>
        </div>
        <button className="flex items-center gap-2 text-brand-yellow font-bold group">
          전체 보기 <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {masterpieces.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative aspect-square rounded-2xl overflow-hidden glass"
          >
            <img 
              src={item.url} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
              <span className="text-brand-yellow text-xs font-bold tracking-widest uppercase mb-1">Masterpiece #{item.id}</span>
              <h3 className="text-xl font-bold">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const NanoStudio = () => {
  const [prompt, setPrompt] = useState('');
  const [creativity, setCreativity] = useState(75);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt) return;
    setIsGenerating(true);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            { text: `A futuristic, high-tech, artistic image based on: ${prompt}. Style: Nano Banana tech aesthetic, yellow and charcoal gray accents, sleek, professional.` },
          ],
        },
        config: {
          imageConfig: {
            aspectRatio: "1:1",
          }
        }
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          setGeneratedImage(`data:image/png;base64,${part.inlineData.data}`);
          break;
        }
      }
    } catch (error) {
      console.error("Image generation failed:", error);
      // Fallback for demo if API fails
      setGeneratedImage(`https://picsum.photos/seed/${encodeURIComponent(prompt)}/800/800`);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="studio" className="py-24 px-6 bg-brand-gray/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3 h-3" /> Nano Studio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight">
              당신의 상상을<br />
              <span className="text-brand-yellow">현실로 만드세요</span>
            </h2>
            <p className="text-white/50 mt-6 text-lg">
              프롬프트를 입력하고 나노 바나나의 AI 엔진이 만들어내는 
              놀라운 결과물을 확인해보세요.
            </p>
          </div>

          <div className="space-y-6 glass p-8 rounded-3xl">
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/70">프롬프트 입력</label>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="예: 네온 사인이 가득한 미래 도시의 바나나 나무..."
                className="w-full h-32 bg-brand-charcoal border border-white/10 rounded-2xl p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-yellow/50 transition-colors resize-none"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-white/70">창의성 수치</label>
                <span className="text-brand-yellow font-mono font-bold">{creativity}%</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={creativity}
                onChange={(e) => setCreativity(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-yellow"
              />
            </div>

            <button 
              onClick={handleGenerate}
              disabled={isGenerating || !prompt}
              className="w-full py-4 bg-brand-yellow text-brand-charcoal rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <div className="w-5 h-5 border-2 border-brand-charcoal/30 border-t-brand-charcoal rounded-full animate-spin" />
                  생성 중...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5 fill-current" /> 생성하기
                </>
              )}
            </button>
          </div>
        </div>

        <div className="relative aspect-square">
          <div className="absolute inset-0 bg-brand-yellow/5 rounded-[2rem] blur-3xl -z-10" />
          <div className="w-full h-full rounded-[2rem] border-2 border-white/5 glass overflow-hidden flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              {generatedImage ? (
                <motion.img 
                  key={generatedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  src={generatedImage} 
                  alt="Generated" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="flex flex-col items-center gap-4 text-white/20">
                  <ImageIcon className="w-20 h-20 stroke-[1px]" />
                  <p className="text-sm font-medium">생성된 결과가 여기에 표시됩니다</p>
                </div>
              )}
            </AnimatePresence>
            
            {isGenerating && (
              <div className="absolute inset-0 bg-brand-charcoal/60 backdrop-blur-sm flex flex-col items-center justify-center gap-4">
                <div className="w-12 h-12 border-4 border-brand-yellow/20 border-t-brand-yellow rounded-full animate-spin" />
                <p className="text-brand-yellow font-bold animate-pulse">AI가 이미지를 렌더링하고 있습니다...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const CommunityShowcase = () => {
  const [uploads, setUploads] = useState([
    { id: 1, user: 'NanoLover', url: 'https://picsum.photos/seed/user1/400/400' },
    { id: 2, user: 'FutureArt', url: 'https://picsum.photos/seed/user2/400/400' },
    { id: 3, user: 'BananaTech', url: 'https://picsum.photos/seed/user3/400/400' },
    { id: 4, user: 'CyberPixel', url: 'https://picsum.photos/seed/user4/400/400' },
  ]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    // In a real app, we would handle file upload here
    const newId = Date.now();
    setUploads(prev => [{ id: newId, user: 'You', url: `https://picsum.photos/seed/${newId}/400/400` }, ...prev]);
  };

  return (
    <section id="community" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-display mb-4">커뮤니티 쇼케이스</h2>
        <p className="text-white/50 max-w-2xl mx-auto">
          전 세계 나노 바나나 사용자들이 만든 작품들을 만나보세요. 
          당신의 작품도 이곳에 전시될 수 있습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Dropzone */}
        <div 
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="lg:col-span-1 h-full min-h-[300px] border-2 border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center gap-4 hover:border-brand-yellow/50 hover:bg-brand-yellow/5 transition-all group cursor-pointer"
        >
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-yellow/20 transition-colors">
            <Upload className="w-8 h-8 text-white/30 group-hover:text-brand-yellow transition-colors" />
          </div>
          <div className="text-center">
            <p className="font-bold text-white/70">이미지를 드래그하여 업로드</p>
            <p className="text-xs text-white/30 mt-1">또는 클릭하여 파일 선택</p>
          </div>
        </div>

        {/* Recent Uploads */}
        <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {uploads.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-square rounded-2xl overflow-hidden glass group"
            >
              <img 
                src={item.url} 
                alt={`Upload by ${item.user}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-brand-charcoal/80 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-[10px] font-bold text-brand-yellow uppercase tracking-tighter">Uploaded by</p>
                <p className="text-xs font-bold truncate">{item.user}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 px-6 border-t border-white/5 glass">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <Banana className="w-6 h-6 text-brand-yellow" />
        <span className="text-xl font-bold tracking-tighter font-display">NANO BANANA</span>
      </div>
      
      <div className="flex gap-8 text-sm text-white/40">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-white transition-colors">Contact</a>
      </div>

      <div className="flex gap-4">
        <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand-yellow transition-colors">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand-yellow transition-colors">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand-yellow transition-colors">
          <Github className="w-5 h-5" />
        </a>
      </div>
    </div>
    <div className="mt-12 text-center text-[10px] text-white/20 uppercase tracking-[0.2em]">
      © 2026 Nano Banana Technologies. All rights reserved.
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-brand-charcoal selection:bg-brand-yellow selection:text-brand-charcoal">
      <Navbar />
      <main>
        <Hero />
        
        {/* Features Bar */}
        <div className="py-12 border-y border-white/5 bg-brand-gray/30">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Cpu, label: 'Nano Engine v2', sub: 'Quantum Processing' },
              { icon: Zap, label: 'Instant Gen', sub: 'Real-time Rendering' },
              { icon: Layers, label: 'Multi-Layer', sub: 'Deep Vision AI' },
              { icon: Globe, label: 'Global Sync', sub: 'Community Driven' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-brand-yellow" />
                </div>
                <div>
                  <p className="text-sm font-bold">{item.label}</p>
                  <p className="text-[10px] text-white/30 uppercase tracking-wider">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Gallery />
        <NanoStudio />
        <CommunityShowcase />
      </main>
      <Footer />
    </div>
  );
}
