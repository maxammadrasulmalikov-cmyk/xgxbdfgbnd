/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Flower2, Wind, Heart, Share2 } from "lucide-react";

interface FamilyMember {
  id: string;
  name: string;
  role: string;
}

const uncles: FamilyMember[] = [
  { id: "s1", name: "DEDABAYEV SHAROBIDDIN", role: "Amaki" },
  { id: "s2", name: "DEDABAYEV UTKURBEK", role: "Amaki" },
  { id: "s3", name: "DEDABAYEV ABDULAZIZ", role: "Amaki" },
  { id: "s4", name: "DEDABAYEV ERKINJON", role: "Amaki" },
];

const father: FamilyMember = { id: "f1", name: "DEDABAYEV FAXRIDDIN", role: "Dada" };

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDF8E4] text-[#422B14] font-serif overflow-hidden relative py-12 px-4 shadow-[inset_0_0_100px_rgba(0,0,0,0.05)]">
      {/* Vintage Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')]" />

      <main className="relative z-10 max-w-6xl mx-auto flex flex-col items-center min-h-screen">
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#2E1A05] relative inline-block uppercase">
            MALIKOVLAR <span className="text-[#3A5A40]">SHAJARASI</span>
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-[#8B5E3C] rounded-full opacity-20" />
          </h1>
          <p className="mt-6 text-sm md:text-base italic text-[#5D4037] opacity-80 max-w-lg mx-auto">
            "Ildizi baquvvat daraxtning shoxlari osmonga yetar."
          </p>
        </motion.div>

        {/* The Tree Visualization */}
        <div className="relative w-full h-[600px] md:h-[750px] flex flex-col items-center justify-end">
          
          {/* Main SVG Tree Structure */}
          <svg 
            viewBox="0 0 800 600" 
            className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Trunk and Branches */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M400 600 C400 500 380 450 400 350 C420 250 500 200 600 150 M400 350 C380 250 300 200 200 150 M400 350 C400 200 400 100 400 50 M400 450 C450 400 550 350 650 350 M400 450 C350 400 250 350 150 350"
              stroke="#5D4037"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
            />
            
            {/* Leaves Group (Stylized blobs) */}
            <motion.g
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 2 }}
            >
              {[...Array(40)].map((_, i) => (
                <circle
                  key={i}
                  cx={200 + Math.random() * 400}
                  cy={100 + Math.random() * 300}
                  r={20 + Math.random() * 40}
                  fill="#3A5A40"
                  fillOpacity="0.15"
                />
              ))}
            </motion.g>
          </svg>

          {/* Members Positioning */}
          <div className="w-full relative z-10 h-full">
            
            {/* TOP LEVEL: Uncles (Spread in Foliage) */}
            <div className="absolute top-[8%] md:top-[12%] left-0 w-full flex justify-around px-4 md:px-20">
              {uncles.slice(0, 2).map((member, idx) => (
                <MemberCard key={member.id} member={member} delay={1.2 + idx * 0.2} variant="leaf" />
              ))}
            </div>

            <div className="absolute top-[35%] md:top-[30%] left-1/2 -translate-x-1/2 w-full flex justify-center gap-12 md:gap-40 px-4">
               {/* Father in the middle foliage */}
               <MemberCard member={father} delay={1.8} variant="main-leaf" />
            </div>

            <div className="absolute top-[55%] md:top-[50%] left-0 w-full flex justify-around px-4 md:px-20">
              {uncles.slice(2, 4).map((member, idx) => (
                <MemberCard key={member.id} member={member} delay={2 + idx * 0.2} variant="leaf" />
              ))}
            </div>

            {/* BOTTOM LEVEL: Fotima (At the Root/Trunk) */}
            <div className="absolute bottom-[2%] md:bottom-[5%] left-1/2 -translate-x-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5, duration: 0.8 }}
                className="relative bg-[#F4EBD0] border-4 border-[#5D4037] p-6 md:p-10 rounded-[2rem] shadow-2xl flex flex-col items-center min-w-[280px] md:min-w-[400px] border-double overflow-hidden"
              >
                {/* Decorative Pattern inside card */}
                <div className="absolute inset-2 border border-[#5D4037]/20 rounded-[1.5rem] pointer-events-none" />
                <div className="absolute -top-4 -right-4 text-[#3A5A40]/10 rotate-12">
                  <Flower2 size={120} />
                </div>

                <motion.div 
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-[#5D4037] text-white p-3 rounded-full mb-4"
                >
                  <Heart size={24} className="fill-white" />
                </motion.div>
                
                <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-[#8B5E3C] mb-2">Avlod Davomchisi</p>
                <h2 className="text-3xl md:text-5xl font-black text-[#2E1A05] tracking-tight text-center">
                  MALIKOVA <br className="md:hidden" /> <span className="text-[#8B5E3C]">FOTIMA</span>
                </h2>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer Info Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          className="mt-20 w-full border-t border-[#5D4037]/10 pt-8 pb-12 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex items-center gap-3 text-[#5D4037]">
            <Wind size={20} className="opacity-50" />
            <p className="text-xs uppercase tracking-widest font-semibold italic">Malikovlar Oilaviy Shajarasi</p>
          </div>
          <div className="flex gap-4">
             <div className="w-1.5 h-1.5 rounded-full bg-[#3A5A40]" />
             <div className="w-1.5 h-1.5 rounded-full bg-[#8B5E3C]" />
             <div className="w-1.5 h-1.5 rounded-full bg-[#3A5A40]" />
          </div>
          <p className="text-[10px] font-mono text-[#5D4037]/60">© 2026 • DIGITAL ANCESTRY ARCHIVE</p>
        </motion.div>
      </main>

      {/* Floating Leaves Animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: Math.random() * 100 + "%", y: "-10%" }}
            animate={{ 
              opacity: [0, 0.4, 0],
              y: "110%",
              x: (Math.random() * 100) + "%",
              rotate: 360
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              delay: i * 2
            }}
          >
            <Flower2 className="text-[#3A5A40]/10" size={30 + Math.random() * 40} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

interface MemberCardProps {
  member: FamilyMember;
  delay: number;
  variant: "leaf" | "main-leaf";
  key?: string | number;
}

function MemberCard({ member, delay, variant }: MemberCardProps) {
  const isMain = variant === "main-leaf";
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.7, type: "spring" }}
      className={`relative group flex flex-col items-center ${isMain ? "scale-110 md:scale-125" : "scale-90 md:scale-100"}`}
    >
      {/* Parchment Style Label */}
      <div className={`
        relative px-4 py-3 md:px-6 md:py-4 rounded-lg shadow-lg border-2 border-[#5D4037]/30 bg-gradient-to-br from-[#FDF8E4] to-[#F4EBD0]
        transition-all duration-300 group-hover:border-[#3A5A40] group-hover:-translate-y-2
        ${isMain ? "ring-2 ring-[#3A5A40]/20" : ""}
      `}>
        {/* Vintage corners */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#5D4037]/40" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#5D4037]/40" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#5D4037]/40" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#5D4037]/40" />

        <p className={`text-[8px] md:text-[10px] uppercase tracking-widest font-bold mb-1 ${isMain ? "text-[#3A5A40]" : "text-[#8B5E3C]"}`}>
          {member.role}
        </p>
        <h3 className={`text-xs md:text-sm font-bold tracking-tight text-[#2E1A05] text-center whitespace-nowrap`}>
          {member.name}
        </h3>
      </div>
      
      {/* Decorative Connection */}
      <div className="w-[2px] h-6 bg-[#5D4037]/20" />
      <div className="w-3 h-3 rounded-full bg-[#3A5A40]/40 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-[#3A5A40]" />
      </div>
    </motion.div>
  );
}


