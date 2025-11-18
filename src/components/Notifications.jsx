import { CalendarDays, FileText, Megaphone, Paperclip } from "lucide-react"

const items = [
  {
    id: 1,
    title: "Provisional Merit List for B.Sc Nursing 2025",
    date: "15 Nov 2025",
    type: "Result",
    link: "#",
  },
  {
    id: 2,
    title: "Online Applications invited for MBBS/BDS 2025",
    date: "12 Nov 2025",
    type: "Admission",
    link: "#",
  },
  {
    id: 3,
    title: "Admit Cards available for BPT/BASLP Entrance",
    date: "10 Nov 2025",
    type: "Admit Card",
    link: "#",
  },
  {
    id: 4,
    title: "Answer Key for GNM (Set A, B, C)",
    date: "08 Nov 2025",
    type: "Answer Key",
    link: "#",
  },
]

const badgeColor = (type) => {
  switch (type) {
    case "Result":
      return "bg-blue-50 text-blue-700 border-blue-200"
    case "Admission":
      return "bg-emerald-50 text-emerald-700 border-emerald-200"
    case "Admit Card":
      return "bg-amber-50 text-amber-700 border-amber-200"
    case "Answer Key":
      return "bg-violet-50 text-violet-700 border-violet-200"
    default:
      return "bg-slate-50 text-slate-700 border-slate-200"
  }
}

export default function Notifications() {
  return (
    <section id="notifications" className="py-14 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Latest Notifications</h2>
            <p className="text-slate-600">Official updates, circulars and announcements</p>
          </div>
          <a href="#" className="text-sm font-semibold text-blue-700 hover:underline">View all</a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((n) => (
            <a key={n.id} href={n.link} className="group block rounded-2xl bg-white border border-slate-200 p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-xl bg-blue-50 text-blue-700">
                  <Megaphone className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full border ${badgeColor(n.type)}`}>
                      {n.type}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <CalendarDays className="w-3.5 h-3.5" /> {n.date}
                    </span>
                  </div>
                  <h3 className="font-semibold text-slate-900 truncate group-hover:text-blue-700">
                    {n.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-3 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1"><FileText className="w-3.5 h-3.5" /> PDF</span>
                    <span className="inline-flex items-center gap-1"><Paperclip className="w-3.5 h-3.5" /> Attachment</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
