"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { Sparkles, Shield, Cpu, Bot, Truck, ConciergeBell } from 'lucide-react';

const PREMIUM_CAPABILITIES = [
  { icon: <ConciergeBell className="h-5 w-5 text-amber-400" />, title: "VIP Sovereign Lounge", desc: "Manajemen personal eksklusif dan alokasi ruang peristirahatan premium untuk delegasi kelas utama." },
  { icon: <Shield className="h-5 w-5 text-blue-400" />, title: "Biometric Smart Check-In", desc: "Akses gerbang imigrasi otonom berbasis data biometrik dengan latensi pemrosesan di bawah 15 milidetik." },
  { icon: <Truck className="h-5 w-5 text-indigo-400" />, title: "Automated Cargo Logistics", desc: "Pelacakan kontainer logistik real-time terintegrasi penuh ke dalam sistem manifes bea cukai internasional." },
  { icon: <Bot className="h-5 w-5 text-cyan-400" />, title: "AI Predictive Co-Pilot", desc: "Sistem kecerdasan buatan terpusat untuk simulasi manajemen cuaca ekstrem dan pembagian koordinat rute udara." },
  { icon: <Cpu className="h-5 w-5 text-purple-400" />, title: "Hardware Node Scaling", desc: "Infrastruktur server komputasi awan lokal mandiri yang tangguh menghadapi lonjakan pemesanan tiket." },
  { icon: <Sparkles className="h-5 w-5 text-emerald-400" />, title: "Luxury Duty-Free API", desc: "Sinkronisasi pos kasir ritel mewah bandara untuk pelaporan perpajakan dan ketersediaan stok global." }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-[#030712] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Elite Operational Framework</h2>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed">Ekosistem komparatif yang menghadirkan standardisasi aviasi termodern demi mengedepankan pengalaman tanpa hambatan bagi para profesional penerbangan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PREMIUM_CAPABILITIES.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <GlassCard className="p-6 h-full flex flex-col items-start text-left">
                <div className="p-3 bg-white/[0.03] border border-white/[0.06] rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cap.icon}
                </div>
                <h4 className="text-base font-bold text-white mb-2 tracking-tight">{cap.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{cap.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
