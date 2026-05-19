import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = true, ...props }: GlassCardProps) {
  return (
    <div
      className={twMerge(
        clsx(
          "relative overflow-hidden rounded-2xl border border-white/[0.06] bg-slate-950/40 backdrop-blur-2xl transition-all duration-500 ease-out",
          hoverEffect && "hover:border-blue-500/30 hover:bg-slate-950/60 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]"
        ),
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-blue-500/[0.02] pointer-events-none" />
      {children}
    </div>
  );
}
