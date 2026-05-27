import { authorInfo, navLinks } from '../data'

export default function Footer() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="bg-[#0D0D0D] text-[#F5F0EB]">
      {/* Launch Portal */}
      <div className="border-b-2 border-[#E85D2C]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-oswald font-bold uppercase tracking-[0.1em] mb-1">Ready to Publish?</h3>
              <p className="text-[#777] text-sm font-inter">Access the go-live portal for your book</p>
            </div>
            <a
              href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-[#1A1A1A] font-oswald font-bold uppercase tracking-[0.1em] text-sm hover:from-yellow-300 hover:via-yellow-200 hover:to-yellow-400 transition-all shadow-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                🚀 Launch & Go-Live Portal
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-7 h-7 text-[#E85D2C]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a2 2 0 012 2c0 .74-.4 1.38-1 1.72V7h3V5.72A2 2 0 0117 4a2 2 0 012 2 2 2 0 01-1 1.72V11h3v1h-3v3h3v1h-3v3.28a2 2 0 011 1.72 2 2 0 01-2 2 2 2 0 01-1.72-1H14a2 2 0 01-1.72 1A2 2 0 0110 21a2 2 0 011-1.72V16H8v3.28A2 2 0 017 21a2 2 0 01-2-2 2 2 0 011-1.72V14H3v-1h3v-3H3v-1h3V5.72A2 2 0 015 4a2 2 0 012-2 2 2 0 011.72 1H10a2 2 0 011.72-1A2 2 0 0112 2z"/>
              </svg>
              <p className="text-lg font-oswald font-bold uppercase tracking-[0.1em]">{authorInfo.name}</p>
            </div>
            <p className="text-[#777] text-sm font-inter leading-relaxed">
              Author and labor advocate. Voice for the hourly workers of America.
            </p>
          </div>

          <div>
            <h4 className="font-oswald font-bold uppercase tracking-[0.1em] text-sm mb-4 text-[#E85D2C]">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-[#999] hover:text-[#E85D2C] transition-colors text-sm font-inter uppercase tracking-wider"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-oswald font-bold uppercase tracking-[0.1em] text-sm mb-4 text-[#E85D2C]">Contact</h4>
            <a
              href={`mailto:${authorInfo.email}`}
              className="text-[#999] hover:text-[#E85D2C] transition-colors text-sm font-inter"
            >
              {authorInfo.email}
            </a>
            <p className="text-[#555] text-xs mt-6 font-inter italic border-l-2 border-[#E85D2C] pl-3">
              "We are hourly laborers who want to work for a company, not individuals."
            </p>
          </div>
        </div>

        <div className="border-t border-[#333] mt-12 pt-8 text-center">
          <p className="text-[#555] text-xs font-inter uppercase tracking-wider">
            &copy; {new Date().getFullYear()} {authorInfo.name} | We Are Hourly Labors. Not Paupers.
          </p>
        </div>
      </div>
    </footer>
  )
}