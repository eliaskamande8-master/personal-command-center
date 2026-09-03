'use client';

export default function FitnessPage() {
  return (
    <main className="relative min-h-screen font-mono text-zinc-100 overflow-hidden">
      {/* Background Image Layer using f2.jpg with opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-40"
        style={{ backgroundImage: "url('/f2.jpg')" }}
      />
      {/* Dark tint overlay and soft blur for readability */}
      <div className="absolute inset-0 bg-zinc-950/80 z-0 backdrop-blur-[2px]" />

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 bg-zinc-900/40 backdrop-blur-md px-4 rounded-lg">
          <div className="flex items-center space-x-3">
            <span className="w-3 h-3 rounded-full bg-amber-400 animate-pulse"></span>
            <h1 className="text-sm font-bold tracking-wider text-amber-400">
              // FITNESS_MODULE :: BIOMETRICS & TRAINING
            </h1>
          </div>
          <div className="text-xs text-zinc-400">SYS_STATUS: ONLINE</div>
        </div>

        <div className="bg-zinc-900/70 border border-zinc-800/80 backdrop-blur-md rounded-xl p-6 shadow-2xl">
          <h2 className="text-xs text-zinc-400 uppercase tracking-widest mb-2">Training Logs</h2>
          <p className="text-sm text-zinc-300">No active routines logged for this session.</p>
        </div>
      </div>
    </main>
  );
}