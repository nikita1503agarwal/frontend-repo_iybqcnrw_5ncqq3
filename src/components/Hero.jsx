export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-[520px] h-[520px] rounded-full bg-emerald-400/20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
              Jammu & Kashmir Board of Professional Entrance Examinations
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Transparent, timely and student-first
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Access official notifications, application forms, admit cards, answer keys and results for all JKBOPEE examinations.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#notifications" className="px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700">Latest Notifications</a>
              <a href="#apply" className="px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800">Apply Online</a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 shadow-xl p-6">
              <div className="grid grid-cols-3 gap-4 h-full">
                <div className="col-span-2 rounded-xl bg-slate-900 text-white p-4">
                  <div className="text-xs text-slate-300">Dashboard</div>
                  <div className="mt-3 text-2xl font-bold">Your Exams</div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                      <span className="text-sm">MBBS/BDS Entrance</span>
                      <span className="text-xs px-2 py-1 rounded bg-emerald-500 text-white">Open</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                      <span className="text-sm">B.Sc Nursing</span>
                      <span className="text-xs px-2 py-1 rounded bg-yellow-500 text-white">Admit Card</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                      <span className="text-sm">BPT/BASLP</span>
                      <span className="text-xs px-2 py-1 rounded bg-blue-500 text-white">Result</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-white border border-slate-200 p-4">
                  <div className="text-xs text-slate-500">Quick Links</div>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li><a className="text-blue-700 hover:underline" href="#">Application Forms</a></li>
                    <li><a className="text-blue-700 hover:underline" href="#">Admit Cards</a></li>
                    <li><a className="text-blue-700 hover:underline" href="#">Answer Keys</a></li>
                    <li><a className="text-blue-700 hover:underline" href="#">Results</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
