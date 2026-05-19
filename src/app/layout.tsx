import React from 'react';
import '@/app/globals.css'; // Standard Tailwind directives configuration

export const metadata = {
  title: 'AeroXis Nexus — Luxury Airport Command Systems',
  description: 'Next-generation cinematic infrastructure orchestration and analytical control unit.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark bg-[#030712] scroll-smooth">
      <body className="antialiased selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
