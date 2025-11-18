import { Menu, Search } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Brand */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-emerald-500 text-white grid place-content-center font-bold shadow-lg shadow-blue-600/20">
              JK
            </div>
            <div>
              <div className="text-slate-900 font-semibold leading-tight group-hover:text-blue-700 transition-colors">
                J&K Board of Professional Entrance Examinations
              </div>
              <div className="text-xs text-slate-500">Government of Jammu & Kashmir</div>
            </div>
          </a>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2">
            <a href="#notifications" className="px-3 py-2 text-sm font-medium rounded-lg text-slate-700 hover:text-blue-700 hover:bg-blue-50">
              Notifications
            </a>
            <a href="#exams" className="px-3 py-2 text-sm font-medium rounded-lg text-slate-700 hover:text-blue-700 hover:bg-blue-50">
              Examinations
            </a>
            <a href="#results" className="px-3 py-2 text-sm font-medium rounded-lg text-slate-700 hover:text-blue-700 hover:bg-blue-50">
              Results
            </a>
            <a href="#links" className="px-3 py-2 text-sm font-medium rounded-lg text-slate-700 hover:text-blue-700 hover:bg-blue-50">
              Important Links
            </a>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 bg-white text-slate-600">
              <Search className="w-4 h-4" />
              <input
                placeholder="Search notifications, exams..."
                className="outline-none text-sm w-56 placeholder:text-slate-400"
              />
            </div>
            <a href="#apply" className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold shadow-sm hover:bg-blue-700">
              Apply Online
            </a>
            <button className="md:hidden p-2 rounded-lg hover:bg-slate-100">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
