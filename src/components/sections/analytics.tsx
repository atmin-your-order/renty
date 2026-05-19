"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { GlassCard } from '@/components/ui/glass-card';
import { Landmark, TrendingUp, Compass, Cpu } from 'lucide-react';

const PERFORMANCE_DATA = [
  { time: '00:00', passenger: 4000, revenue: 2400 },
  { time: '04:00', passenger: 3000, revenue: 1398 },
  { time: '08:00', passenger: 9800, revenue: 9800 },
  { time: '12:00', passenger: 6780, revenue: 3908 },
  { time: '16:00', passenger: 8890, revenue: 4800 },
  { time: '20:00', passenger: 11000, revenue: 7100 },
];

export function AnalyticsSection() {
  return (
    <section id="analytics" className="py-24 bg-[#030712] relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12 text-left">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white font-sans">Live System Infrastructure Analytics</h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl">Pantau langsung performa finansial komersial dan logistik penumpang makro antar terminal di seluruh kawasan udara.</p>
        </div>

        {/* Analytic Cards Grid system */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          
          <GlassCard className="p-6 lg:col-span-2" hoverEffect={false}>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h4 className="text-sm font-semibold text-slate-200">Terminal Passenger Density Matrix</h4>
                <p className="text-xs text-slate-500">Agregasi pergerakan penumpang per interval 4 jam</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md border border-emerald-500/20">
                <TrendingUp size={12} /> Optimization Peak
              </div>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={PERFORMANCE_DATA}>
                  <defs>
                    <linearGradient id="colorPassenger" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" stroke="#475569" fontSize={11} tickLine={false} />
                  <YAxis stroke="#475569" fontSize={11} tickLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: '#070a13', borderColor: 'rgba(255,255,255,0.08)', borderRadius: '12px', color: '#fff' }} />
                  <Area type="monotone" dataKey="passenger" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorPassenger)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>

          <GlassCard className="p-6" hoverEffect={false}>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h4 className="text-sm font-semibold text-slate-200">Commercial Revenue Feed</h4>
                <p className="text-xs text-slate-500">Kalkulasi keuntungan duty-free & logistik</p>
              </div>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={PERFORMANCE_DATA}>
                  <XAxis dataKey="time" stroke="#475569" fontSize={11} tickLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: '#070a13', borderColor: 'rgba(255,255,255,0.08)', borderRadius: '12px' }} />
                  <Bar dataKey="revenue" fill="#6366f1" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>

        </div>

        {/* 3 Columns Strategic Financial Nodes Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.01] to-transparent border border-white/[0.04] flex items-center gap-4">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400"><Landmark size={20}/></div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-mono">Gross ARR Revenue</p>
              <p className="text-xl font-bold font-mono text-white mt-0.5">$48.2M</p>
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.01] to-transparent border border-white/[0.04] flex items-center gap-4">
            <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400"><Cpu size={20}/></div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-mono">Automated Gate Load</p>
              <p className="text-xl font-bold font-mono text-white mt-0.5">12.4ms <span className="text-xs text-slate-400 font-sans font-medium">(Avg)</span></p>
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.01] to-transparent border border-white/[0.04] flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400"><Compass size={20}/></div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-mono">Global Connected Hubs</p>
              <p className="text-xl font-bold font-mono text-white mt-0.5">382 Locations</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
