import Header from './components/Header'
import Hero from './components/Hero'
import Notifications from './components/Notifications'
import QuickLinks from './components/QuickLinks'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <Hero />
      <Notifications />
      <QuickLinks />

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="font-semibold">JKBOPEE</div>
              <p className="text-sm text-slate-600 mt-2">Official portal for entrance examinations conducted by J&K Board of Professional Entrance Examinations.</p>
            </div>
            <div>
              <div className="font-semibold mb-2">Contact</div>
              <p className="text-sm text-slate-600">Baghat-i-Barzulla, Opposite J&K Bank, Srinagar - 190005</p>
              <p className="text-sm text-slate-600">Email: helpdesk@jkbopee.gov.in</p>
            </div>
            <div>
              <div className="font-semibold mb-2">Helpline</div>
              <p className="text-sm text-slate-600">9:30 AM - 5:30 PM (Mon-Fri)</p>
              <a href="#apply" className="inline-flex mt-3 items-center px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold shadow-sm hover:bg-blue-700">Apply Online</a>
            </div>
          </div>
          <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} JKBOPEE. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
