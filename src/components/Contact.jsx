import { contactInfo, authorInfo, book } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#1A1A1A] text-[#F5F0EB] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-32 h-1 bg-[#E85D2C]"></div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-3 border-2 border-[#E85D2C]/50 px-4 py-2 mb-8">
          <svg className="w-4 h-4 text-[#E85D2C]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a2 2 0 012 2c0 .74-.4 1.38-1 1.72V7h3V5.72A2 2 0 0117 4a2 2 0 012 2 2 2 0 01-1 1.72V11h3v1h-3v3h3v1h-3v3.28a2 2 0 011 1.72 2 2 0 01-2 2 2 2 0 01-1.72-1H14a2 2 0 01-1.72 1A2 2 0 0110 21a2 2 0 011-1.72V16H8v3.28A2 2 0 017 21a2 2 0 01-2-2 2 2 0 011-1.72V14H3v-1h3v-3H3v-1h3V5.72A2 2 0 015 4a2 2 0 012-2 2 2 0 011.72 1H10a2 2 0 011.72-1A2 2 0 0112 2z"/>
          </svg>
          <span className="text-[#E85D2C] text-xs font-oswald font-bold uppercase tracking-[0.2em]">Contact</span>
        </div>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bebas uppercase mb-6">
          Get the Book
        </h2>
        <p className="text-[#999] text-lg mb-12 max-w-md mx-auto font-inter">
          Contact {authorInfo.firstName} to order your copy of "{book.fullTitle}"
        </p>

        <div className="bg-[#252525] border-2 border-[#E85D2C] p-10 inline-block"
          style={{ boxShadow: '8px 8px 0px #E85D2C' }}>
          <svg className="w-12 h-12 text-[#E85D2C] mx-auto mb-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a2 2 0 012 2c0 .74-.4 1.38-1 1.72V7h3V5.72A2 2 0 0117 4a2 2 0 012 2 2 2 0 01-1 1.72V11h3v1h-3v3h3v1h-3v3.28a2 2 0 011 1.72 2 2 0 01-2 2 2 2 0 01-1.72-1H14a2 2 0 01-1.72 1A2 2 0 0110 21a2 2 0 011-1.72V16H8v3.28A2 2 0 017 21a2 2 0 01-2-2 2 2 0 011-1.72V14H3v-1h3v-3H3v-1h3V5.72A2 2 0 015 4a2 2 0 012-2 2 2 0 011.72 1H10a2 2 0 011.72-1A2 2 0 0112 2z"/>
          </svg>

          <a
            href={`mailto:${contactInfo.email}`}
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#E85D2C] text-white font-oswald font-bold uppercase tracking-[0.1em] hover:bg-[#cc4a1f] transition-all text-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            {contactInfo.email}
          </a>
        </div>
      </div>
    </section>
  )
}