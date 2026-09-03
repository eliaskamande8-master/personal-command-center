'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  const navItems = [
    { name: '// overview', href: '/dashboard' },
    { name: './tasks', href: '/dashboard/tasks' },
    { name: './schedule', href: '/dashboard/schedule' },
    { name: './finances', href: '/dashboard/finances' },
    { name: './fitness', href: '/dashboard/fitness' },
    { name: './languages', href: '/dashboard/languages' },
  ];

  return (
    <div className="flex h-screen bg-zinc-950 text-zinc-100 overflow-hidden font-mono">
      {/* Sidebar - Terminal Style */}
      <aside className="w-64 bg-zinc-900/80 backdrop-blur border-r border-zinc-800/80 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-zinc-800/80 flex items-center justify-between">
          <h1 className="text-sm font-bold tracking-wider text-amber-400 uppercase">
            root@command-center:~
          </h1>
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        </div>
        <nav className="flex-1 p-4 space-y-1.5">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-3.5 py-2 rounded-md text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]'
                    : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-zinc-800/80 text-[11px] text-zinc-500 flex justify-between items-center">
          <span>sys_v1.0.4</span>
          <span className="text-emerald-400 font-semibold">STABLE</span>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-y-auto bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.08),rgba(255,255,255,0))]">
        <header className="h-14 border-b border-zinc-800/80 bg-zinc-900/30 backdrop-blur flex items-center justify-between px-6 md:hidden">
          <span className="text-xs font-bold text-amber-400 font-mono">~/command-center</span>
        </header>
        <div className="p-8 max-w-7xl w-full mx-auto flex-1">
          {children}
        </div>
      </main>
    </div>
  );
}