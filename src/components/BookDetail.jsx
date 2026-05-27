import { book } from '../data'

export default function BookDetail() {
  return (
    <section id="book" className="py-24 bg-[#F5F0EB] industrial-texture">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 border-2 border-[#1A1A1A] px-4 py-2 mb-6">
            <svg className="w-4 h-4 text-[#E85D2C]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a2 2 0 012 2c0 .74-.4 1.38-1 1.72V7h3V5.72A2 2 0 0117 4a2 2 0 012 2 2 2 0 01-1 1.72V11h3v1h-3v3h3v1h-3v3.28a2 2 0 011 1.72 2 2 0 01-2 2 2 2 0 01-1.72-1H14a2 2 0 01-1.72 1A2 2 0 0110 21a2 2 0 011-1.72V16H8v3.28A2 2 0 017 21a2 2 0 01-2-2 2 2 0 011-1.72V14H3v-1h3v-3H3v-1h3V5.72A2 2 0 015 4a2 2 0 012-2 2 2 0 011.72 1H10a2 2 0 011.72-1A2 2 0 0112 2z"/>
            </svg>
            <span className="text-[#1A1A1A] text-xs font-oswald font-bold uppercase tracking-[0.2em]">The Manifesto</span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bebas text-[#1A1A1A] mb-4 uppercase leading-[0.95]">
            {book.title}
          </h2>
          <p className="text-3xl md:text-4xl font-bebas text-[#E85D2C] uppercase">{book.subtitle}</p>
          <div className="w-32 h-1 bg-[#E85D2C] mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
          {/* Book Cover */}
          <div className="relative mx-auto max-w-sm">
            <div className="bg-white shadow-2xl border-2 border-[#1A1A1A]"
              style={{ boxShadow: '12px 12px 0px #1A1A1A' }}>
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#E85D2C]"></div>
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#E85D2C]"></div>
              <div className="aspect-[3/4] bg-[#F5F0EB]">
                <img
                  src={book.coverImage}
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
                      </div>
                    `
                  }}
                />
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="space-y-8">
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white border-2 border-[#1A1A1A] text-[#1A1A1A] text-sm font-oswald font-bold uppercase tracking-wider">Labor Rights</span>
              <span className="px-4 py-2 bg-white border-2 border-[#1A1A1A] text-[#1A1A1A] text-sm font-oswald font-bold uppercase tracking-wider">Social Justice</span>
              <span className="px-4 py-2 bg-[#E85D2C] text-white text-sm font-oswald font-bold uppercase tracking-wider">{book.period}</span>
            </div>

            <div className="border-l-4 border-[#E85D2C] pl-6">
              <p className="text-[#333] text-lg leading-relaxed font-inter">
                {book.description}
              </p>
            </div>

            {/* Pull quote */}
            <div className="bg-[#1A1A1A] text-[#F5F0EB] p-8 border-l-4 border-[#E85D2C]">
              <p className="text-2xl font-oswald font-bold uppercase leading-tight mb-4">
                "Our choice to work is overwhelmingly protected by the constitution."
              </p>
              <p className="text-[#E85D2C] text-sm font-oswald uppercase tracking-wider">
                — {book.fullTitle}
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#F5F0EB] font-oswald font-bold uppercase tracking-[0.1em] hover:bg-[#333] transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
              Order This Book
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}