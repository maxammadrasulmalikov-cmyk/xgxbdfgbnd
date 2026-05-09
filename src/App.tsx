import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TreePine, 
  Users, 
  Heart, 
  Calendar, 
  User, 
  ZoomIn, 
  ZoomOut,
  Info,
  ChevronDown,
  Award,
  X,
  Target
} from 'lucide-react';

interface FamilyMember {
  id: string;
  name: string;
  year: string;
  role: string;
  side: 'ota' | 'ona';
  level: number;
  parents?: string[];
  partner?: string;
  info?: string;
  isSpecial?: boolean;
}

const familyData: FamilyMember[] = [
  // OTA TARAF (FATHER'S SIDE)
  { id: "ota_l0", name: "DEDAVOYXOJI MIRZABOYEV", year: "1877-1953", role: "Katta Bobo", side: "ota", level: 0, info: "Mirzaboyevlar sulolasining asosi va shajara boshlovchisi." },
  { id: "ota_l1", name: "XAFISXON DEDABAYEV", year: "1929-2000", role: "Katta Bobo", side: "ota", level: 1, parents: ["ota_l0"] },
  { id: "ota_l2", name: "ABDUVOHID DEDABAYEV", year: "1924-2010", role: "Bobo", side: "ota", level: 2, parents: ["ota_l1"] },
  
  // Children of Abduvohid
  { id: "ota_l3_1", name: "ABDUMALIK DEDABAYEV", year: "1959", role: "Abdumalik Bobo", side: "ota", level: 3, parents: ["ota_l2"] },
  { id: "ota_l3_2", name: "ABDUG'ANI DEDABAYEV", year: "1961", role: "Amaki", side: "ota", level: 3, parents: ["ota_l2"] },
  { id: "ota_l3_3", name: "BOTIRJON DEDABAYEV", year: "1965", role: "Amaki", side: "ota", level: 3, parents: ["ota_l2"] },
  { id: "ota_l3_4", name: "RA'NO DEDABAYEVA", year: "1968", role: "Amma", side: "ota", level: 3, parents: ["ota_l2"] },
  { id: "ota_l3_5", name: "HUSANBOY DEDABAYEV", year: "1971", role: "Amaki", side: "ota", level: 3, parents: ["ota_l2"] },
  { id: "ota_l3_6", name: "ASILAHON DEDABAYEVA", year: "1975", role: "Amma", side: "ota", level: 3, parents: ["ota_l2"] },

  // Children of Abdumalik
  { id: "ota_l4_1", name: "FAXRIDDIN DEDABAYEV", year: "1981", role: "Faxriddin Dada", side: "ota", level: 4, parents: ["ota_l3_1"], partner: "ROKIYA BOLTABAYEVA" },
  { id: "ota_l4_2", name: "SHAROBIDDIN DEDABAYEV", year: "1983", role: "Amaki", side: "ota", level: 4, parents: ["ota_l3_1"], partner: "MUNOJAT BOLTABAYEVA" },
  { id: "ota_l4_3", name: "UTKURBEK DEDABAYEV", year: "1988", role: "Amaki", side: "ota", level: 4, parents: ["ota_l3_1"], partner: "MUQADDAS BOLTABAYEVA" },
  { id: "ota_l4_4", name: "ABDULAZIZ DEDABAYEV", year: "1993", role: "Amaki", side: "ota", level: 4, parents: ["ota_l3_1"] },
  { id: "ota_l4_5", name: "ERKINJON DEDABAYEV", year: "1995", role: "Amaki", side: "ota", level: 4, parents: ["ota_l3_1"] },

  // ONA TARAF (MOTHER'S SIDE)
  { id: "ona_l0", name: "BOLTABOY", year: "N/A", role: "Boltaboy Katta Bobo", side: "ona", level: 0 },
  { id: "ona_l1", name: "TOJIBOY BOLTABAYEV", year: "1910-1978", role: "Tojiboy Bobo", side: "ona", level: 1, parents: ["ona_l0"] },
  { id: "ona_l2_1", name: "ABDUMAJID BOLTABAYEV", year: "1964", role: "Abdumajid Bobo", side: "ona", level: 2, parents: ["ona_l1"] },

  // Children of Abdumajid (ONA side L3)
  { id: "ona_l3_1", name: "ROKIYA BOLTABAYEVA", year: "1986", role: "Rokiya Ona", side: "ona", level: 3, parents: ["ona_l2_1"], partner: "FAXRIDDIN DEDABAYEV" },
  { id: "ona_l3_2", name: "MUNOJAT BOLTABAYEVA", year: "1988", role: "Xola", side: "ona", level: 3, parents: ["ona_l2_1"], partner: "SHAROBIDDIN DEDABAYEV" },
  { id: "ona_l3_3", name: "MUQADDAS BOLTABAYEVA", year: "1993", role: "Xola", side: "ona", level: 3, parents: ["ona_l2_1"], partner: "UTKURBEK DEDABAYEV" },
  { id: "ona_l3_4", name: "MADINA BOLTABAYEVA", year: "2000", role: "Xola", side: "ona", level: 3, parents: ["ona_l2_1"] },

  // DESCENDANTS (L5)
  // Faxriddin + Rokiya
  { id: "child_f1", name: "MALIKOVA FOTIMA", year: "2013", role: "Avlod Davomchisi", side: "ota", level: 5, parents: ["ota_l4_1", "ona_l3_1"], isSpecial: true, info: "Ushbu shajaraning asosiy vakili va shajara egasi (Faxriddin dada va Rokiya ona qizi)." },
  { id: "child_f2", name: "MALIKOV MUHAMMADYOR", year: "2005", role: "Aka", side: "ota", level: 5, parents: ["ota_l4_1", "ona_l3_1"] },
  { id: "child_f3", name: "MALIKOV MUHAMMADRASUL", year: "2008", role: "Aka", side: "ota", level: 5, parents: ["ota_l4_1", "ona_l3_1"] },

  // Sharobiddin + Munojat
  { id: "child_s1", name: "MALIKOVA MUBINA", year: "2009", role: "Jiyan", side: "ota", level: 5, parents: ["ota_l4_2", "ona_l3_2"] },
  { id: "child_s2", name: "MALIKOV ABUBAKR", year: "2013", role: "Jiyan", side: "ota", level: 5, parents: ["ota_l4_2", "ona_l3_2"] },

  // Utkurbek + Muqaddas
  { id: "child_u1", name: "MALIKOV ZAKARIYO", year: "2013", role: "Jiyan", side: "ota", level: 5, parents: ["ota_l4_3", "ona_l3_3"] },
  { id: "child_u2", name: "MALIKOVA OYSHA", year: "2018", role: "Jiyan", side: "ota", level: 5, parents: ["ota_l4_3", "ona_l3_3"] },

  // Madina's children
  { id: "child_m1", name: "ISMAILOVA MUXLISA", year: "2020", role: "Jiyan", side: "ona", level: 5, parents: ["ona_l3_4"] },
  { id: "child_m2", name: "ISMAILOV AHMAD ALI", year: "2023", role: "Jiyan", side: "ona", level: 5, parents: ["ona_l3_4"] },

  // Erkinjon's children
  { id: "child_e1", name: "MALIKOVA MARG'UBAHON", year: "2021", role: "Jiyan", side: "ota", level: 5, parents: ["ota_l4_5"] },
  { id: "child_e2", name: "MALIKOVA OBIDAHON", year: "2022", role: "Jiyan", side: "ota", level: 5, parents: ["ota_l4_5"] }
];

function MemberCard({ member, onClick }: { member: FamilyMember, onClick: (m: FamilyMember) => void }) {
  const isSpecial = member.isSpecial;
  return (
    <motion.div
      layoutId={member.id}
      whileHover={{ scale: 1.05, y: -4, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
      onClick={() => onClick(member)}
      className={`relative p-4 min-w-[160px] md:min-w-[200px] border-2 rounded-2xl cursor-pointer text-center flex flex-col items-center transition-all
        ${isSpecial 
          ? "bg-emerald-600 border-emerald-300 text-white shadow-xl" 
          : member.side === 'ota' 
            ? "bg-white border-blue-100 hover:border-blue-400 text-slate-800 shadow-sm" 
            : "bg-white border-rose-100 hover:border-rose-400 text-slate-800 shadow-sm"
        }`}
    >
      <div className={`mb-2 p-2 rounded-xl ${isSpecial ? "bg-white/20" : member.side === 'ota' ? "bg-blue-50" : "bg-rose-50"}`}>
        <User size={16} className={isSpecial ? "text-white" : member.side === 'ota' ? "text-blue-900" : "text-rose-900"} />
      </div>
      <h3 className="font-bold text-[10px] md:text-xs uppercase tracking-tight leading-tight">{member.name}</h3>
      <div className="mt-2 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest bg-slate-100 text-slate-500">
        {member.role}
      </div>
    </motion.div>
  );
}

function TreeNode({ member, allMembers, onSelect }: { member: FamilyMember, allMembers: FamilyMember[], onSelect: (m: FamilyMember) => void }) {
  const children = allMembers.filter(m => m.parents?.includes(member.id));
  
  return (
    <div className="flex flex-col items-center">
      <MemberCard member={member} onClick={onSelect} />
      
      {children.length > 0 && (
        <div className="flex flex-col items-center">
          {/* Vertical line from parent */}
          <div className="w-[2px] h-12 bg-slate-200" />
          
          <div className="relative flex gap-8">
            {/* Horizontal bridge connecting siblings */}
            {children.length > 1 && (
              <div className="absolute top-0 left-[10%] right-[10%] h-[2px] bg-slate-200" />
            )}
            
            {children.map((child, idx) => (
              <div key={child.id} className="flex flex-col items-center">
                {/* Vertical segment above each child */}
                <div className="w-[2px] h-8 bg-slate-200" />
                <TreeNode member={child} allMembers={allMembers} onSelect={onSelect} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [zoom, setZoom] = useState(0.85);
  const [selectedMember, setSelectedMember] = useState<FamilyMember | null>(null);
  const [activeSide, setActiveSide] = useState<'ota' | 'ona'>('ota');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  React.useEffect(() => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const scrollWidth = scrollContainer.scrollWidth;
      const clientWidth = scrollContainer.clientWidth;
      const scrollHeight = scrollContainer.scrollHeight;
      const clientHeight = scrollContainer.clientHeight;
      
      scrollContainer.scrollLeft = (scrollWidth - clientWidth) / 2;
      scrollContainer.scrollTop = 0; // Start at the root (top)
    }
  }, [activeSide]);

  const otaRoot = familyData.find(m => m.id === "ota_l0")!;
  const onaRoot = familyData.find(m => m.id === "ona_l0")!;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setStartY(e.pageY - scrollRef.current.offsetTop);
    setScrollLeft(scrollRef.current.scrollLeft);
    setScrollTop(scrollRef.current.scrollTop);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const y = e.pageY - scrollRef.current.offsetTop;
    const walkX = (x - startX) * 1.5;
    const walkY = (y - startY) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walkX;
    scrollRef.current.scrollTop = scrollTop - walkY;
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8] text-slate-900 font-sans overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
      
      {/* Header */}
      <header className="fixed top-8 left-8 right-8 z-50 flex flex-col md:flex-row items-center justify-between gap-6 pointer-events-none">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex items-center gap-4 bg-white/80 backdrop-blur-md p-4 rounded-3xl border border-white shadow-lg pointer-events-auto">
          <div className="w-12 h-12 bg-emerald-900 rounded-2xl flex items-center justify-center shadow-lg rotate-3 overflow-hidden">
             <TreePine className="text-emerald-400" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-black text-slate-900 tracking-tighter uppercase leading-none">MALIKOVLAR <span className="text-emerald-600">SHAJARASI</span></h1>
            <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-slate-400 mt-1">Avlodlar Chizig'i</p>
          </div>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex bg-white/80 backdrop-blur-md p-1.5 rounded-2xl shadow-xl border border-white pointer-events-auto">
          <button 
            onClick={() => setActiveSide('ota')}
            className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeSide === 'ota' ? 'bg-blue-900 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-50'}`}
          >
            Ota taraf
          </button>
          <button 
            onClick={() => setActiveSide('ona')}
            className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeSide === 'ona' ? 'bg-rose-900 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-50'}`}
          >
            Ona taraf
          </button>
        </div>

        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md p-2 rounded-2xl shadow-lg border border-white pointer-events-auto">
          <button onClick={() => setZoom(z => Math.max(0.1, z - 0.1))} className="p-2 hover:bg-slate-100 rounded-lg"><ZoomOut size={18}/></button>
          <div className="w-12 text-center text-xs font-bold">{Math.round(zoom * 100)}%</div>
          <button onClick={() => setZoom(z => Math.min(1.5, z + 0.1))} className="p-2 hover:bg-slate-100 rounded-lg"><ZoomIn size={18}/></button>
        </div>
      </header>

      {/* Tree Visualization Stage */}
      <main 
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`h-screen w-screen overflow-auto pt-48 pb-[500px] relative bg-slate-50/50 scroll-smooth select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      >
        <div 
          className="w-fit min-w-full flex justify-center origin-top transition-transform duration-500 ease-out p-40"
          style={{ transform: `scale(${zoom})` }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSide}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              {activeSide === 'ota' ? (
                <div className="flex flex-col items-center">
                  <div className="mb-16 px-10 py-4 bg-blue-900 text-white text-sm font-black uppercase tracking-[1.5em] rounded-full shadow-2xl shadow-blue-900/30 border-4 border-white/20 text-center">OTA TARAF SHAJARASI</div>
                  <TreeNode member={otaRoot} allMembers={familyData} onSelect={setSelectedMember} />
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="mb-16 px-10 py-4 bg-rose-900 text-white text-sm font-black uppercase tracking-[1.5em] rounded-full shadow-2xl shadow-rose-900/30 border-4 border-white/20 text-center">ONA TARAF SHAJARASI</div>
                  <TreeNode member={onaRoot} allMembers={familyData} onSelect={setSelectedMember} />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Help */}
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 pointer-events-none opacity-40">
           <div className="flex items-center gap-4 text-slate-400">
             <div className="w-12 h-[1px] bg-slate-300" />
             <span className="text-[10px] font-bold uppercase tracking-[0.3em] whitespace-nowrap">Suring yoki Drag qiling</span>
             <div className="w-12 h-[1px] bg-slate-300" />
           </div>
        </div>
      </main>

      {/* Modal Details */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedMember(null)} className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
            <motion.div layoutId={selectedMember.id} className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className={`h-24 ${selectedMember.side === 'ota' ? 'bg-blue-900' : 'bg-rose-900'} relative flex items-center justify-center`}>
                <button onClick={() => setSelectedMember(null)} className="absolute top-4 right-4 text-white/50 hover:text-white"><X size={24}/></button>
                <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center -mb-16 border-4 border-white rotate-3">
                  <User size={32} className="text-slate-200" />
                </div>
              </div>
              <div className="p-8 pt-12 text-center">
                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-1">{selectedMember.name}</h2>
                <p className="text-emerald-600 text-[10px] font-black uppercase tracking-widest mb-6">{selectedMember.role}</p>
                
                <div className="flex gap-4 mb-6">
                  <div className="flex-1 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-[9px] uppercase font-bold text-slate-400 mb-1">Yillar</p>
                    <p className="text-sm font-bold">{selectedMember.year}</p>
                  </div>
                  <div className="flex-1 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-[9px] uppercase font-bold text-slate-400 mb-1">Tarmog'i</p>
                    <p className="text-sm font-bold uppercase">{selectedMember.side}</p>
                  </div>
                </div>

                {selectedMember.info && (
                  <div className="mb-6 p-5 bg-emerald-50 rounded-2xl text-left border border-emerald-100">
                    <p className="text-xs text-emerald-800 leading-relaxed italic">"{selectedMember.info}"</p>
                  </div>
                )}

                <button onClick={() => setSelectedMember(null)} className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold uppercase tracking-widest text-xs">Yopish</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-6 py-2 rounded-full border border-slate-200 shadow-xl flex items-center gap-3">
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Ierarxik chiziqlar tizimi ishga tushdi</span>
      </div>
    </div>
  );
}
