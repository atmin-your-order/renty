"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { PlaneTakeoff } from 'lucide-react';

const DESTINATIONS = [
  { id: '1', city: 'Dubai', airport: 'International DXB', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop', price: 'From $1,420' },
  { id: '2', city: 'Tokyo', airport: 'Haneda HND', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=600&auto=format&fit=crop', price: 'From $1,150' },
  { id: '3', city: 'London', airport: 'Heathrow LHR', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ca1ad?q=80&w=600&auto=format&fit=crop', price: 'From $980' }
];

export function DestinationsSection() {
  return (
    <section id="destinations" className="py-24 bg-[#050814]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Global Fleet Transit Hubs</h2>
            <p className="text-slate-400 text-xs mt-1">Akses interkoneksi langsung menuju rute jalur metropolitan utama global.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DESTINATIONS.map((dest, idx) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <GlassCard className="p-0 overflow-hidden" hoverEffect={true}>
                
                {/* Image Frame Wrapper with Zoom Animation */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={dest.image} 
                    alt={dest.city} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute bottom-4 left-4 z-20 bg-blue-600/90 text-white font-mono text-[10px] font-bold uppercase px-2 py-0.5 rounded tracking-wide">
                    {dest.price}
                  </span>
                </div>

                {/* Info Text Meta Description Bar */}
                <div className="p-5 relative z-20 bg-slate-950/80 backdrop-blur-md flex justify-between items-center border-t border-white/[0.04]">
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight">{dest.city}</h4>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">{dest.airport}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500/30 transition-all">
                    <PlaneTakeoff size={15} />
                  </div>
                </div>

              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
