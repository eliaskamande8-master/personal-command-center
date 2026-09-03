'use client';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-mono p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center space-x-3">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
            <h1 className="text-sm font-bold tracking-wider text-amber-400">
              // COMMAND_CENTER_ACTIVE :: SECURE_ZONE
            </h1>
          </div>
          <div className="text-xs text-zinc-500">SYS_STATUS: ONLINE</div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-xl">
            <h2 className="text-xs text-zinc-400 uppercase tracking-widest mb-2">System Metrics</h2>
            <p className="text-2xl font-bold text-emerald-400">100%</p>
            <p className="text-xs text-zinc-500 mt-1">Operational readiness nominal</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-xl">
            <h2 className="text-xs text-zinc-400 uppercase tracking-widest mb-2">Database Sync</h2>
            <p className="text-2xl font-bold text-amber-400">CONNECTED</p>
            <p className="text-xs text-zinc-500 mt-1">Supabase client active</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-xl">
            <h2 className="text-xs text-zinc-400 uppercase tracking-widest mb-2">Environment</h2>
            <p className="text-2xl font-bold text-zinc-100">Next.js 16</p>
            <p className="text-xs text-zinc-500 mt-1">Turbopack build pipeline</p>
          </div>
        </div>
      </div>
    </main>
  );
}