"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, PlaneTakeoff, PlaneLanding, Clock } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';

const MOCK_FLIGHT_BOARD = [
  { id: '1', number: 'EK-359', airline: 'Emirates', destination: 'Dubai (DXB)', gate: 'Gate B14', status: 'BOARDING', time: '21:40', type: 'DEPARTURE' },
  { id: '2', number: 'QR-956', airline: 'Qatar Airways', destination: 'Doha (DOH)', gate: 'Gate A02', status: 'SCHEDULED', time: '22:15', type: 'DEPARTURE' },
  { id: '3', number: 'GA-204', airline: 'Garuda Indonesia', destination: 'Singapore (SIN)', gate: 'Gate C10', status: 'DELAYED', time: '22:30', type: 'DEPARTURE' },
  { id: '4', number: 'SQ-938', airline: 'Singapore Airlines', destination: 'Jakarta (CGK)', gate: 'Gate D04', status: 'ARRIVED', time: '21:10', type: 'ARRIVAL' },
  { id: '5', number: 'JL-726', airline: 'Japan Airlines', destination: 'Tokyo (NRT)', gate: 'Gate A11', status: 'SCHEDULED', time: '23:05', type: 'DEPARTURE' },
];

export function FlightBoardSection() {
  const [activeTab, setActiveTab] = useState<'DEPARTURE' | 'ARRIVAL'>('DEPARTURE');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFlights = MOCK_FLIGHT_BOARD.filter(flight => 
    flight.type === activeTab &&
    (flight.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
     flight.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
     flight.airline.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="flight-board" className="py-24 bg-[#050814] relative border-y border-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Terminal Header Action Bar Control Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs text-blue-400 font-mono tracking-widest uppercase mb-1">
              <Clock size={14} /> Live Terminal Scheduler Sync
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Main Terminal Flight Control Board</h3>
          </div>

          {/* Interactive Navigation Tab Pill Switches & Search Inputs */}
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            <div className="flex bg-slate-900 border border-white/[0.06] p-1 rounded-xl">
              <button 
                onClick={() => setActiveTab('DEPARTURE')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all ${activeTab === 'DEPARTURE' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                <PlaneTakeoff size={14} /> Departures
              </button>
              <button 
                onClick={() => setActiveTab('ARRIVAL')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all ${activeTab === 'ARRIVAL' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                <PlaneLanding size={14} /> Arrivals
              </button>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search flight vectors..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-white/[0.06] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-blue-500/50 transition-all font-mono"
              />
            </div>
          </div>
        </div>

        {/* Digital Flight Information Display Board Grid Wrapper */}
        <GlassCard className="p-4" hoverEffect={false}>
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/[0.05] text-slate-400 text-[11px] uppercase tracking-widest font-mono">
                  <th className="pb-4 pt-2 pl-4">Time</th>
                  <th className="pb-4 pt-2">Flight Number</th>
                  <th className="pb-4 pt-2">Airline Fleet</th>
                  <th className="pb-4 pt-2">Destination Hub</th>
                  <th className="pb-4 pt-2">Terminal Gate</th>
                  <th className="pb-4 pt-2 pr-4 text-right">Operational Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.03] text-sm text-slate-200">
                <AnimatePresence mode="popLayout">
                  {filteredFlights.map((flight) => (
                    <motion.tr 
                      key={flight.id}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="hover:bg-white/[0.01] transition-all font-mono group"
                    >
                      <td className="py-4 pl-4 text-white font-bold">{flight.time}</td>
                      <td className="py-4 text-blue-400 font-bold group-hover:text-blue-300 transition-colors">{flight.number}</td>
                      <td className="py-4 font-sans text-slate-300">{flight.airline}</td>
                      <td className="py-4 font-sans text-white font-medium">{flight.destination}</td>
                      <td className="py-4 text-slate-400">{flight.gate}</td>
                      <td className="py-4 pr-4 text-right">
                        <span className={`inline-block px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                          flight.status === 'BOARDING' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                          flight.status === 'DELAYED' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' :
                          flight.status === 'ARRIVED' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                          'bg-slate-800 text-slate-400 border border-white/5'
                        }`}>
                          {flight.status}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </GlassCard>

      </div>
    </section>
  );
}
