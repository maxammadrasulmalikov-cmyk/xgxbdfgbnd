/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { TreePine, Wind, Heart, Award, Calendar, Share2, Info } from "lucide-react";

interface Member {
  id: string;
  name: string;
  year: string;
  role?: string;
  side: "ota" | "ona" | "root";
}

const familyData: Member[] = [
  // Ancestors - Ota (Malikovlar)
  { id: "m1", name: "DEDAVOYXOJI", year: "1877-1953", role: "Katta Bobo", side: "ota" },
  { id: "m2", name: "ABDUVOHID", year: "1924-2010", role: "Bobo", side: "ota" },
  { id: "m3", name: "XAFISXON", year: "1929-2000", role: "Amaki Bobo", side: "ota" },
  { id: "m4", name: "BOSITXON", year: "1938-2023", role: "Amaki Bobo", side: "ota" },
  { id: "m5", name: "MALIK", year: "1959", role: "Bobo", side: "ota" },
  { id: "m6", name: "G'ANIXON", year: "1961", role: "Amaki", side: "ota" },
  { id: "m7", name: "BOTIRJON", year: "1965", role: "Amaki", side: "ota" },
  { id: "m8", name: "HUSANBOY", year: "1971", role: "Amaki", side: "ota" },
  { id: "m9", name: "RA'NO", year: "1968", role: "Amma", side: "ota" },
  { id: "m10", name: "ASILA", year: "1975", role: "Amma", side: "ota" },
  { id: "m11", name: "FAXRIDDIN", year: "1981", role: "Dada", side: "ota" },
  { id: "m12", name: "SHAROFIDDIN", year: "1983", role: "Amaki", side: "ota" },
  { id: "m13", name: "UTKURBEK", year: "1988", role: "Amaki", side: "ota" },
  { id: "m14", name: "ABDULAZIZ", year: "1993", role: "Amaki", side: "ota" },
  { id: "m15", name: "ERKINJON", year: "1996", role: "Amaki", side: "ota" },

  // Ona Side (Boltabayevlar)
  { id: "b1", name: "YO'LDOSHVOY", year: "N/A", role: "Katta Bobo", side: "ona" },
  { id: "b2", name: "BOLTABOY", year: "N/A", role: "Ona Tomon Bobo", side: "ona" },
  { id: "b3", name: "TOJIBOY", year: "1910-1978", role: "Bobo", side: "ona" },
  { id: "b12", name: "TURSUNXON", year: "N/A", role: "Momo", side: "ona" },
  { id: "b4", name: "ABDUMAJID", year: "1964", role: "Bobo", side: "ona" },
  { id: "b5", name: "ABDURASHID", year: "1952", role: "Amaki", side: "ona" },
  { id: "b6", name: "MAVLUDA", year: "1947", role: "Opa", side: "ona" },
  { id: "b7", name: "MAXBUBA", year: "1969", role: "Singil", side: "ona" },
  { id: "b8", name: "ROKIYA", year: "1986", role: "Ona", side: "ona" },
  { id: "b9", name: "MUNOJAT", year: "1988", role: "Xola", side: "ona" },
  { id: "b10", name: "MUQADDAS", year: "1993", role: "Xola", side: "ona" },
  { id: "b11", name: "MADINA", year: "2000", role: "Xola", side: "ona" },

  // Root
  { id: "root", name: "MALIKOVA FOTIMA", year: "2013", role: "Asoschi", side: "root" }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDF8E4] text-[#422B14] font-serif overflow-hidden relative selection:bg-[#3A5A40]/20">
      {/* Vintage Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')]" />

      <main className="relative z-10 max-w-7xl mx-auto flex flex-col items-center py-8 px-4">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3A5A44] text-[#FDF8E4] rounded-full text-[10px] uppercase tracking-[0.3em] font-bold shadow-md mb-4">
            <TreePine size={14} />
            MALIKOVLAR SHAJARASI
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-[#2E1A05] tracking-tight uppercase leading-none italic">
            OILAVIY <span className="text-[#3A5A40]">SHAJARA DARAXTI</span>
          </h1>
          <p className="border-t border-[#5D4037]/20 mt-4 pt-2 text-xs md:text-sm italic opacity-70">
            Avlodlar xotirasi va merosi - zamonaviy ko'rinishda
          </p>
        </motion.div>

        {/* Tree Container */}
        <div className="relative w-full h-[850px] md:h-[1050px] flex items-center justify-center -mt-10">
          {/* Main Tree SVG */}
          <svg 
            viewBox="0 0 1000 1000" 
            className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-2xl" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Trunk */}
            <path
              d="M500 980 Q500 900 500 850"
              stroke="#4B3621"
              strokeWidth="40"
              fill="none"
              strokeLinecap="round"
            />
            
            {/* Organic Branches */}
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "linear" }}
              d="M500 850 C500 700 480 650 500 600 
                 C520 500 750 350 850 200 
                 M500 600 C480 500 250 350 150 200
                 M500 600 C500 500 500 400 500 100
                 M500 700 C400 650 250 550 100 400
                 M500 700 C600 650 750 550 900 400"
              stroke="#5D4037"
              strokeWidth="15"
              fill="none"
              strokeLinecap="round"
              className="opacity-90"
            />

            {/* Leaves Clusters (Greener) */}
            <g fill="#3A5A40" fillOpacity="0.8">
              {/* Cluster 1 - Top Left */}
              <circle cx="150" cy="200" r="40" />
              <circle cx="130" cy="180" r="30" />
              <circle cx="170" cy="180" r="25" />
              
              {/* Cluster 2 - Top Right */}
              <circle cx="850" cy="200" r="40" />
              <circle cx="830" cy="180" r="30" />
              <circle cx="870" cy="180" r="25" />

              {/* Cluster 3 - Center Top */}
              <circle cx="500" cy="100" r="40" />
              <circle cx="480" cy="80" r="30" />
              <circle cx="520" cy="80" r="25" />

              {/* Cluster 4 - Mid Left */}
              <circle cx="100" cy="400" r="35" />
              <circle cx="80" cy="380" r="25" />

              {/* Cluster 5 - Mid Right */}
              <circle cx="900" cy="400" r="35" />
              <circle cx="920" cy="380" r="25" />
            </g>

            {/* Fine Branches */}
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 2, duration: 2 }}
              d="M150 200 Q100 150 50 50
                 M150 200 Q200 150 250 50
                 M850 200 Q800 150 750 50
                 M850 200 Q900 150 950 50
                 M500 100 Q450 50 400 0
                 M500 100 Q550 50 600 0"
              stroke="#8B5E3C"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* Member Nodes Overlays */}
          <div className="absolute top-[2%] w-full flex justify-between px-[10%] opacity-40 hover:opacity-100 transition-opacity">
            <MemberTag member={familyData[16]} /> 
            <MemberTag member={familyData[0]} /> 
            <MemberTag member={familyData[17]} />
          </div>

          <div className="absolute top-[12%] w-full flex justify-center gap-8 md:gap-32">
             <div className="flex flex-col gap-1">
                <MemberTag member={familyData[1]} size="xs" />
                <MemberTag member={familyData[2]} size="xs" />
                <MemberTag member={familyData[3]} size="xs" />
             </div>
             <div className="flex flex-col gap-1">
                <MemberTag member={familyData[18]} size="xs" />
                <MemberTag member={familyData[19]} size="xs" />
             </div>
          </div>

          {/* MIDDLE LAYER (Grandparents/Siblings) */}
          <div className="absolute top-[25%] w-full flex justify-around px-[2%]">
             <div className="flex flex-wrap max-w-[140px] md:max-w-[280px] gap-1 justify-center">
                {familyData.slice(4, 10).map(m => <MemberTag key={m.id} member={m} size="xs" />)}
             </div>
             <div className="flex flex-wrap max-w-[140px] md:max-w-[280px] gap-1 justify-center">
                {familyData.slice(20, 23).map(m => <MemberTag key={m.id} member={m} size="xs" />)}
             </div>
          </div>

          {/* PARENTS LAYER */}
          <div className="absolute top-[45%] w-full flex justify-around px-[5%]">
             <div className="flex flex-col items-center">
                <MemberTag member={familyData[10]} size="md" isMain />
                <div className="flex flex-wrap justify-center gap-1 mt-1 max-w-[180px]">
                  {familyData.slice(11, 16).map(m => <MemberTag key={m.id} member={m} size="xs" />)}
                </div>
             </div>
             <div className="flex flex-col items-center">
                <MemberTag member={familyData[23]} size="md" isMain />
                <div className="flex flex-wrap justify-center gap-1 mt-1 max-w-[180px]">
                   {familyData.slice(24, 28).map(m => <MemberTag key={m.id} member={m} size="xs" />)}
                </div>
             </div>
          </div>

          {/* THE ROOT - FOTIMA */}
          <div className="absolute bottom-[5%] flex flex-col items-center">
             <motion.div 
               whileHover={{ scale: 1.05 }}
               className="bg-[#3A5A40] text-[#FDF8E4] p-3 md:p-5 rounded-xl shadow-lg border-2 border-[#FDF8E4] relative overflow-hidden group mb-1"
             >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent)]" />
                <div className="relative flex flex-col items-center gap-1.5">
                  <Heart className="fill-white" size={16} />
                  <h2 className="text-sm md:text-xl font-black tracking-tight">{familyData[familyData.length-1].name}</h2>
                  <div className="text-[8px] md:text-[10px] font-bold opacity-80 flex items-center gap-1">
                    <Calendar size={10} /> {familyData[familyData.length-1].year}
                  </div>
                </div>
             </motion.div>
             <div className="text-[7px] md:text-[9px] uppercase tracking-[0.2em] font-bold opacity-30">Davomchi</div>
          </div>
        </div>

        {/* Footer info Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-t border-[#5D4037]/10 pt-10">
          <InfoCard icon={<Award size={20} />} title="Meros" desc="Ushbu daraxt 5 avlodni o'z ichiga oladi." />
          <InfoCard icon={<Share2 size={20} />} title="Xotira" desc="DEDABAYEV va BOLTABAYEV nasllari." />
          <InfoCard icon={<Wind size={20} />} title="Tarix" desc="1877-yildan hozirgi kunga qadar." />
        </div>
      </main>

      {/* Floating leaves */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "-10%", x: Math.random() * 100 + "%", rotate: 0 }}
            animate={{ y: "110%", rotate: 360, x: (Math.random() * 100 - 10) + "%" }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 20
            }}
            className="absolute opacity-[0.08]"
          >
            <TreePine className="text-[#3A5A40]" size={40 + Math.random() * 60} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function MemberTag({ member, size = "md", isMain = false }: { member: Member, size?: "xs" | "md" | "lg", isMain?: boolean, key?: string | number }) {
  const sizes = {
    xs: "p-1.5 md:p-2 text-[8px] md:text-[10px] min-w-[60px]",
    md: "p-3 md:p-4 text-[10px] md:text-xs min-w-[120px]",
    lg: "p-5 md:p-6 text-sm md:text-lg min-w-[180px]"
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 10px 20px -10px rgba(0,0,0,0.2)" }}
      className={`
        ${sizes[size]} 
        bg-white/90 backdrop-blur-sm border border-[#5D4037]/20 rounded-2xl shadow-sm
        flex flex-col items-center justify-center text-center leading-tight transition-all
        ${isMain ? 'ring-2 ring-[#3A5A40] border-[#3A5A40]' : ''}
      `}
    >
      <span className="text-[7px] md:text-[8px] uppercase tracking-widest opacity-50 mb-0.5 font-bold">{member.role}</span>
      <h4 className="font-black text-[#2E1A05] tracking-tight">{member.name.split(' ').map((p,i) => <span key={i} className="block">{p}</span>)}</h4>
      <span className="text-[7px] md:text-[9px] font-bold opacity-40 mt-1">{member.year}</span>
    </motion.div>
  );
}

function InfoCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-3xl bg-white/40 border border-white/60 shadow-sm">
      <div className="p-3 bg-[#3A5A40] text-white rounded-2xl shadow-lg">
        {icon}
      </div>
      <div>
        <h5 className="text-xs uppercase tracking-widest font-black text-[#2E1A05] mb-0.5">{title}</h5>
        <p className="text-[10px] text-[#5D4037] font-medium opacity-70 leading-normal uppercase">{desc}</p>
      </div>
    </div>
  );
}
