"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { PlaneTakeoff, ShieldAlert, BarChart3, Globe } from 'lucide-react';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.04] bg-neutral-950/50 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-md shadow-blue-500/20">
            <PlaneTakeoff className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold tracking-wider text-xl bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            AEROXIS
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#analytics" className="hover:text-white transition-colors flex items-center gap-1.5"><BarChart3 size={15}/> Analytics</a>
          <a href="#flight-board" className="hover:text-white transition-colors flex items-center gap-1.5"><PlaneTakeoff size={15}/> Live Board</a>
          <a href="#features" className="hover:text-white transition-colors flex items-center gap-1.5"><ShieldAlert size={15}/> Services</a>
          <a href="#destinations" className="hover:text-white transition-colors flex items-center gap-1.5"><Globe size={15}/> Destinations</a>
        </div>

        <button className="relative px-5 py-2.5 text-xs font-semibold tracking-wider text-white uppercase rounded-xl overflow-hidden group border border-white/10 transition-all">
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"/>
          Nexus Gateway
        </button>
      </div>
    </motion.nav>
  );
}
