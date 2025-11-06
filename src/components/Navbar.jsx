import { useState } from 'react';
import { Menu, X, LineChart, Settings, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-white/60 border-b border-neutral-200/80">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600" />
            <span className="text-xl font-semibold tracking-tight">Flux Journal</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
            <a href="#features" className="hover:text-black transition-colors">Features</a>
            <a href="#analytics" className="hover:text-black transition-colors">Analytics</a>
            <a href="#journal" className="hover:text-black transition-colors">Journal</a>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-3 py-2 text-sm hover:bg-neutral-50 transition-colors">
              <Settings size={16} />
              Settings
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-black text-white px-3 py-2 text-sm hover:bg-neutral-900 transition-colors">
              <LineChart size={16} />
              Open App
            </button>
          </div>
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-neutral-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-sm text-neutral-700">
              <a href="#features" className="rounded-md px-2 py-2 hover:bg-neutral-100">Features</a>
              <a href="#analytics" className="rounded-md px-2 py-2 hover:bg-neutral-100">Analytics</a>
              <a href="#journal" className="rounded-md px-2 py-2 hover:bg-neutral-100">Journal</a>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-300 px-3 py-2 text-sm hover:bg-neutral-50 transition-colors">
                  <User size={16} />
                  Account
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-black text-white px-3 py-2 text-sm hover:bg-neutral-900 transition-colors">
                  <LineChart size={16} />
                  Open App
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
