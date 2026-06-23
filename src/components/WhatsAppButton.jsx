import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

const num = '94717666084'
const msgs = [
  { label: 'Hajj Packages Inquiry', msg: 'Assalamu Alaikum Warahmatullahi Wabarakatuh! I am interested in your Hajj packages.' },
  { label: 'Umrah Packages Inquiry', msg: 'Assalamu Alaikum Warahmatullahi Wabarakatuh! I am interested in your Umrah packages.' },
  { label: 'Visa Assistance', msg: 'Assalamu Alaikum Warahmatullahi Wabarakatuh! I need help with Saudi visa processing.' },
  { label: 'General Inquiry', msg: 'Assalamu Alaikum Warahmatullahi Wabarakatuh! I have a question about your services.' },
]

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)
  const send = (msg) => { window.open(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`, '_blank'); setOpen(false) }

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
      {open && (
        <div className="absolute bottom-16 right-0 w-56 sm:w-64 mb-2 animate-scale-in">
          <div className="glass-card rounded-xl overflow-hidden border border-white/20 shadow-2xl">
            <div className="bg-primary p-3 text-white text-sm font-medium">Quick Messages</div>
            <div className="p-2 space-y-1">
              {msgs.map((m, i) => (
                <button key={i} onClick={() => send(m.msg)} className="w-full text-left p-2.5 text-xs sm:text-sm text-gray-700 hover:bg-primary/5 rounded-lg transition-colors">
                  {m.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(!open)} className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 ${open ? 'bg-gray-500 rotate-90' : 'bg-green-500 hover:bg-green-600'}`}>
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  )
}
