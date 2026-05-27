import { authorInfo } from '../data'

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#1A1A1A] text-[#F5F0EB] relative overflow-hidden">
      {/* Industrial texture */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,255,255,0.03) 5px, rgba(255,255,255,0.03) 10px)'
        }}>
      </div>

      {/* Orange accent bar */}
      <div className="absolute top-0 left-0 w-32 h-1 bg-[#E85D2C]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 border-2 border-[#E85D2C]/50 px-4 py-2 mb-6">
            <svg className="w-4 h-4 text-[#E85D2C]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a2 2 0 012 2c0 .74-.4 1.38-1 1.72V7h3V5.72A2 2 0 0117 4a2 2 0 012 2 2 2 0 01-1 1.72V11h3v1h-3v3h3v1h-3v3.28a2 2 0 011 1.72 2 2 0 01-2 2 2 2 0 01-1.72-1H14a2 2 0 01-1.72 1A2 2 0 0110 21a2 2 0 011-1.72V16H8v3.28A2 2 0 017 21a2 2 0 01-2-2 2 2 0 011-1.72V14H3v-1h3v-3H3v-1h3V5.72A2 2 0 015 4a2 2 0 012-2 2 2 0 011.72 1H10a2 2 0 011.72-1A2 2 0 0112 2z"/>
            </svg>
            <span className="text-[#E85D2C] text-xs font-oswald font-bold uppercase tracking-[0.2em]">The Author</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bebas text-[#F5F0EB] mb-4 uppercase">
            {authorInfo.name}
          </h2>
          <p className="text-[#999] text-lg font-inter max-w-xl mx-auto">
            Voice of the working class. Advocate for dignity in labor.
          </p>
          <div className="w-32 h-1 bg-[#E85D2C] mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-12 max-w-5xl mx-auto">
          {/* Left - Profile placeholder */}
          <div className="md:col-span-5">
            <div className="relative">
              <div className="aspect-square bg-[#252525] border-2 border-[#444] flex items-center justify-center"
                style={{ boxShadow: '8px 8px 0px #E85D2C' }}>
                <div className="text-center p-8">
                  <svg className="w-24 h-24 text-[#E85D2C] mx-auto mb-6 opacity-50" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a2 2 0 012 2c0 .74-.4 1.38-1 1.72V7h3V5.72A2 2 0 0117 4a2 2 0 012 2 2 2 0 01-1 1.72V11h3v1h-3v3h3v1h-3v3.28a2 2 0 011 1.72 2 2 0 01-2 2 2 2 0 01-1.72-1H14a2 2 0 01-1.72 1A2 2 0 0110 21a2 2 0 011-1.72V16H8v3.28A2 2 0 017 21a2 2 0 01-2-2 2 2 0 011-1.72V14H3v-1h3v-3H3v-1h3V5.72A2 2 0 015 4a2 2 0 012-2 2 2 0 011.72 1H10a2 2 0 011.72-1A2 2 0 0112 2z"/>
                  </svg>
                  <p className="text-[#F5F0EB] font-oswald font-bold text-2xl uppercase tracking-wider">{authorInfo.name}</p>
                  <p className="text-[#E85D2C] text-sm font-oswald uppercase tracking-wider mt-2">Author & Advocate</p>
                </div>
              </div>

              {/* Stamp */}
              <div className="absolute -top-4 -right-4 bg-[#E85D2C] text-white px-4 py-2 font-oswald font-bold text-sm uppercase tracking-wider transform rotate-12 shadow-lg">
                VOICE
              </div>
            </div>
          </div>

          {/* Right - Details */}
          <div className="md:col-span-7 space-y-8">
            <div className="border-l-4 border-[#E85D2C] pl-6">
              <p className="text-[#CCC] text-lg leading-relaxed font-inter">
                {authorInfo.bio}
              </p>
            </div>

            {/* Message block */}
            <div className="bg-[#252525] border border-[#444] p-6">
              <p className="text-[#E85D2C] text-sm font-oswald font-bold uppercase tracking-[0.15em] mb-3">⚙️ Core Message</p>
              <p className="text-[#F5F0EB] font-inter italic leading-relaxed text-lg">
                "{authorInfo.message}"
              </p>
            </div>

            {/* Roles */}
            <div className="flex flex-wrap gap-3">
              {authorInfo.roles.map((role, i) => (
                <span key={i} className="px-5 py-2.5 border-2 border-[#E85D2C] text-[#E85D2C] text-sm font-oswald font-bold uppercase tracking-wider hover:bg-[#E85D2C] hover:text-white transition-all cursor-default">
                  {role}
                </span>
              ))}
            </div>

            <a
              href={`mailto:${authorInfo.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E85D2C] text-white font-oswald font-bold uppercase tracking-[0.1em] hover:bg-[#cc4a1f] transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}