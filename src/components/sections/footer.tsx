"use client";

import React from 'react';
import { PlaneTakeoff, Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-white/[0.04] pt-16 pb-8 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          <div className="flex flex-col items-start md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-blue-600 text-white"><PlaneTakeoff size={16}/></div>
              <span className="font-bold tracking-wider text-white">AEROXIS</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">Infrastruktur orkestrasi aviasi kelas dunia terintegrasi sistem automasi mutakhir.</p>
            <div className="flex items-center gap-3 text-slate-500">
              <a href="#" className="hover:text-white transition-colors"><Twitter size={16} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={16} /></a>
              <a href="#" className="hover:text-white transition-colors"><Github size={16} /></a>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-widest font-mono mb-4">Systems</h5>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Flight Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terminal Operations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Passenger Manifest</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-widest font-mono mb-4">Enterprise</h5>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Security Shield</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Global Hub API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partnerships</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-widest font-mono mb-4">Newsletter</h5>
            <p className="text-xs text-slate-400 mb-3">Dapatkan intelijen operasional bulanan.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="corporate@domain.com" className="bg-slate-900 text-xs border border-white/10 rounded-lg px-3 py-2 w-full text-white outline-none focus:border-blue-500/50" />
              <button className="bg-blue-600 text-xs font-semibold px-4 rounded-lg text-white hover:bg-blue-500 transition-colors">Join</button>
            </div>
          </div>

        </div>

        <div className="border-t border-white/[0.04] pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500 font-mono gap-4">
          <span>&copy; 2026 AeroXis Systems Inc. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Framework</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
