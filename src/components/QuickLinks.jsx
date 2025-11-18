import { ExternalLink, FileText, GraduationCap, HelpCircle, Info, ShieldCheck } from "lucide-react"

const links = [
  { title: "Application Forms", desc: "Active and upcoming forms", href: "#" },
  { title: "Admit Cards", desc: "Download hall tickets", href: "#" },
  { title: "Answer Keys", desc: "View official keys", href: "#" },
  { title: "Results", desc: "Merit lists & scorecards", href: "#" },
  { title: "Provisional Selections", desc: "Round-wise allocation", href: "#" },
  { title: "Counselling", desc: "Schedules & guidelines", href: "#" },
]

export default function QuickLinks() {
  return (
    <section id="links" className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Important Links</h2>
          <p className="text-slate-600">Direct access to frequently used sections</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((l) => (
            <a key={l.title} href={l.href} className="block rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-slate-900 text-white">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{l.title}</div>
                  <div className="text-sm text-slate-600">{l.desc}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
