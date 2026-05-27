import { authorInfo, book } from '../data'

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center bg-[#F5F0EB] relative overflow-hidden industrial-texture">
      {/* Industrial grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(90deg, #1A1A1A 1px, transparent 1px), linear-gradient(0deg, #1A1A1A 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}>
      </div>

      {/* Bold accent blocks */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1A1A1A] hidden lg:block"></div>
      <div className="absolute top-0 right-0 w-1/3 h-2 bg-[#E85D2C] hidden lg:block"></div>

      {/* Gear decoration */}
      <div className="absolute bottom-10 right-[35%] text-[#E85D2C] opacity-10 hidden lg:block">
        <svg className="w-40 h-40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a2 2 0 012 2c0 .74-.4 1.38-1 1.72V7h3V5.72A2 2 0 0117 4a2 2 0 012 2 2 2 0 01-1 1.72V11h3v1h-3v3h3v1h-3v3.28a2 2 0 011 1.72 2 2 0 01-2 2 2 2 0 01-1.72-1H14a2 2 0 01-1.72 1A2 2 0 0110 21a2 2 0 011-1.72V16H8v3.28A2 2 0 017 21a2 2 0 01-2-2 2 2 0 011-1.72V14H3v-1h3v-3H3v-1h3V5.72A2 2 0 015 4a2 2 0 012-2 2 2 0 011.72 1H10a2 2 0 011.72-1A2 2 0 0112 2z"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Author Introduction */}
          <div className="text-center md:text-left animate-march">
            {/* Industrial badge */}
            <div className="inline-flex items-center gap-3 border-2 border-[#1A1A1A] px-4 py-2 mb-8">
              <svg className="w-4 h-4 text-[#E85D2C]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a2 2 0 012 2c0 .74-.4 1.38-1 1.72V7h3V5.72A2 2 0 0117 4a2 2 0 012 2 2 2 0 01-1 1.72V11h3v1h-3v3h3v1h-3v3.28a2 2 0 011 1.72 2 2 0 01-2 2 2 2 0 01-1.72-1H14a2 2 0 01-1.72 1A2 2 0 0110 21a2 2 0 011-1.72V16H8v3.28A2 2 0 017 21a2 2 0 01-2-2 2 2 0 011-1.72V14H3v-1h3v-3H3v-1h3V5.72A2 2 0 015 4a2 2 0 012-2 2 2 0 011.72 1H10a2 2 0 011.72-1A2 2 0 0112 2z"/>
              </svg>
              <span className="text-[#1A1A1A] text-xs font-oswald font-bold uppercase tracking-[0.2em]">Labor Rights Author</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bebas text-[#1A1A1A] mb-6 leading-[0.9] uppercase tracking-tight">
              {authorInfo.name}
            </h1>

            <div className="w-32 h-1 bg-[#E85D2C] mb-8 mx-auto md:mx-0"></div>

            <p className="text-lg text-[#444] mb-8 leading-relaxed max-w-lg mx-auto md:mx-0 font-inter">
              Giving voice to the hourly laborers of America. Asserting dignity, demanding respect, and declaring that workers are the backbone of industry — not paupers begging for scraps.
            </p>

            <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
              {authorInfo.roles.map((role, i) => (
                <span key={i} className="px-4 py-2 bg-white border-2 border-[#1A1A1A] text-[#1A1A1A] text-sm font-oswald font-bold uppercase tracking-wider">
                  {role}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#about"
                onClick={(e) => handleScroll(e, '#about')}
                className="px-8 py-4 bg-[#1A1A1A] text-[#F5F0EB] font-oswald font-bold uppercase tracking-[0.1em] hover:bg-[#333] transition-all text-center"
              >
                About the Author
              </a>
              <a
                href="#book"
                onClick={(e) => handleScroll(e, '#book')}
                className="px-8 py-4 border-2 border-[#1A1A1A] text-[#1A1A1A] font-oswald font-bold uppercase tracking-[0.1em] hover:bg-[#1A1A1A] hover:text-[#F5F0EB] transition-all text-center"
              >
                The Book
              </a>
            </div>
          </div>

          {/* Book Cover */}
          <div className="relative mx-auto max-w-sm animate-stamp">
            {/* Industrial frame */}
            <div className="relative bg-white shadow-2xl border-2 border-[#1A1A1A]"
              style={{ boxShadow: '12px 12px 0px #1A1A1A' }}>
              {/* Top accent stripe */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#E85D2C]"></div>
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#E85D2C]"></div>

              <div className="aspect-[3/4] bg-[#F5F0EB]">
                <img
                  src="/images/paupers.png"
                  alt={book.fullTitle}
                  className="w-full h-full object-contain p-2"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center')
                    e.target.parentElement.innerHTML = `
                      <div class="text-center p-12">
                        <svg class="w-20 h-20 text-[#E85D2C] mx-auto mb-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2a2 2 0 012 2c0 .74-.4 1.38-1 1.72V7h3V5.72A2 2 0 0117 4a2 2 0 012 2 2 2 0 01-1 1.72V11h3v1h-3v3h3v1h-3v3.28a2 2 0 011 1.72 2 2 0 01-2 2 2 2 0 01-1.72-1H14a2 2 0 01-1.72 1A2 2 0 0110 21a2 2 0 011-1.72V16H8v3.28A2 2 0 017 21a2 2 0 01-2-2 2 2 0 011-1.72V14H3v-1h3v-3H3v-1h3V5.72A2 2 0 015 4a2 2 0 012-2 2 2 0 011.72 1H10a2 2 0 011.72-1A2 2 0 0112 2z"/>
                        </svg>
                        <p class="text-2xl font-bebas text-[#1A1A1A] uppercase">${book.title}</p>
                        <p class="text-[#E85D2C] text-sm mt-2 font-oswald uppercase tracking-wider">Cover coming soon</p>
                      </div>
                    `
                  }}
                />
              </div>
            </div>

            {/* Period badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#E85D2C] text-white px-4 py-2 font-oswald font-bold text-sm uppercase tracking-wider shadow-lg">
              {book.period}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}