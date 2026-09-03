import SupabaseTest from './components/SupabaseTest';

export default function DashboardHome() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-950 text-slate-100">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-slate-800 bg-slate-900/80 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-slate-900 lg:p-4">
          Personal Command Center&nbsp;
          <code className="font-bold">v0.1.0</code>
        </p>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-to-br before:from-indigo-500/20 before:to-sky-500/25 before:blur-3xl">
        <h1 className="text-4xl font-bold tracking-tight z-10 text-center">
          Dashboard is Online 🚀
        </h1>
      </div>

      {/* Inserted Supabase Connection Test Widget */}
      <div className="z-10 w-full max-w-5xl my-4">
        <SupabaseTest />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:grid-cols-3 lg:text-left gap-4 z-10">
        <div className="group rounded-lg border border-slate-800 bg-slate-900/50 px-5 py-4 transition-colors hover:border-slate-700 hover:bg-slate-800/50">
          <h2 className="mb-3 text-2xl font-semibold">Status &rarr;</h2>
          <p className="m-0 max-w-[30ch] text-sm text-slate-400">
            Next.js development server is successfully running.
          </p>
        </div>

        <div className="group rounded-lg border border-slate-800 bg-slate-900/50 px-5 py-4 transition-colors hover:border-slate-700 hover:bg-slate-800/50">
          <h2 className="mb-3 text-2xl font-semibold">Config &rarr;</h2>
          <p className="m-0 max-w-[30ch] text-sm text-slate-400">
            Tailwind CSS and App Router configured.
          </p>
        </div>

        <div className="group rounded-lg border border-slate-800 bg-slate-900/50 px-5 py-4 transition-colors hover:border-slate-700 hover:bg-slate-800/50">
          <h2 className="mb-3 text-2xl font-semibold">Ready &rarr;</h2>
          <p className="m-0 max-w-[30ch] text-sm text-slate-400">
            Start building your custom widgets and modules.
          </p>
        </div>
      </div>
    </main>
  );
}