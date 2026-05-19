"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Compass, Users, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-[#030712] to-[#030712]">
      
      {/* Background High-End Ambient Visual Light Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Headline Content Panel */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 text-xs text-blue-400 font-medium tracking-wide uppercase"
          >
            <ShieldCheck size={14} /> Next-Gen Airport Control Suite
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6 text-white"
          >
            Orchestrating <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-white bg-clip-text text-transparent">
              Luxury Tech Logistics
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-slate-400 max-w-xl mb-8 leading-relaxed"
          >
            Transformasikan operasional aviasi makro dengan kecerdasan prediktif tingkat tinggi. Penjadwalan mulus, analitik real-time, dan manajemen armada maskapai elit tersentralisasi.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 w-full sm:w-auto"
          >
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 px-6 py-3.5 rounded-xl font-semibold text-sm text-white transition-all shadow-lg shadow-blue-500/20 w-full sm:w-auto">
              Launch Control Deck <ArrowUpRight size={16} />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 transition-all w-full sm:w-auto">
              <Compass size={16} /> Explore Nodes
            </button>
          </motion.div>
        </div>

        {/* Right Metric Architecture Simulation Preview Panel */}
        <div className="lg:col-span-5 w-full">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="p-6 relative group" hoverEffect={false}>
              
              {/* Header inside simulated terminal frame */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/[0.05]">
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-widest text-blue-400">Node Location</p>
                  <h4 className="font-bold text-sm tracking-tight text-white font-mono">NEXUS-AIRPORT-CGK</h4>
                </div>
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Graphical Simulation Interface */}
              <div className="h-44 w-full bg-gradient-to-b from-blue-950/10 to-transparent border border-white/[0.03] rounded-xl mb-6 relative overflow-hidden flex items-center justify-center">
                
                {/* Simulated Radar Matrix Lines */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />
                <div className="absolute h-[1px] w-full bg-blue-500/10 top-1/2 left-0" />
                <div className="absolute w-[1px] h-full bg-blue-500/10 left-1/2 top-0" />

                {/* Simulated Plane Vector Vectors */}
                <motion.div 
                  animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
                  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                  className="absolute p-2 bg-blue-500/20 rounded-lg text-blue-400 border border-blue-500/30"
                >
                  <Plane size={18} className="rotate-45" />
                </motion.div>
                
                <span className="absolute bottom-3 right-4 font-mono text-[10px] text-slate-500 tracking-wider">RADAR ACTIVE: 28hz</span>
              </div>

              {/* Bottom Mini Metrics Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <p className="text-[11px] text-slate-400 font-medium">Total Passengers</p>
                  <p className="text-xl font-bold font-mono text-white mt-0.5">14,281 <span className="text-xs text-emerald-400 font-sans font-medium">+4.2%</span></p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <p className="text-[11px] text-slate-400 font-medium">Active Air Traffic</p>
                  <p className="text-xl font-bold font-mono text-white mt-0.5">142 <span className="text-xs text-blue-400 font-sans font-medium">Stable</span></p>
                </div>
              </div>

            </GlassCard>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
