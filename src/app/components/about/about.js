const stats = [
  { value: '5+', label: 'Years learning' },
  { value: '2', label: 'Schools' },
  { value: 'Vaasa', label: 'Based in, FI' },
  { value: 'Open', label: 'To work' },
];

const timeline = [
  {
    year: '2020',
    title: 'Web Development',
    institution: 'Media College Denmark',
    description: 'Studied modern frontend technologies, web standards, and responsive design fundamentals.',
  },
  {
    year: '2022',
    title: 'Database Engineering',
    institution: 'Self-directed',
    description: 'Deep dive into PostgreSQL, schema design, normalization, and relational data modeling.',
  },
  {
    year: '2024',
    title: 'Business IT',
    institution: 'VAMK, Finland',
    description: 'Building full-stack solutions with a focus on backend architecture and data-driven systems.',
  },
];

export default function About() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 relative z-10" id="about">
      <div className="max-w-5xl mx-auto">

        <p className="text-xs tracking-[3px] uppercase text-white/35 mb-3 font-medium reveal">About</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 reveal" data-delay="1">
          Building with purpose
        </h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 mb-16">
          {/* Bio */}
          <div className="reveal" data-delay="1">
            <p className="text-base md:text-lg leading-relaxed text-white/65 mb-5">
              I&apos;m a developer fascinated by how systems connect. Whether it&apos;s database architecture or user interfaces, I approach every problem with intention.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-white/65">
              I studied at <span className="text-white font-medium">Media College Denmark</span> and I&apos;m currently completing my degree at <span className="text-white font-medium">VAMK</span> in Finland — exploring full-stack development with a strong emphasis on backend engineering.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3 reveal" data-delay="2">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="card p-5 hover:scale-[1.03] hover:border-white/18 transition-all duration-200 cursor-default"
              >
                <p className="text-2xl md:text-3xl font-bold text-white mb-1">{value}</p>
                <p className="text-xs text-white/35">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          {timeline.map((item, index) => (
            <div
              key={index}
              className="flex gap-8 md:gap-10 py-6 border-t border-white/8 reveal"
              data-delay={String(index + 1)}
            >
              <div className="flex-shrink-0 w-14">
                <p className="text-sm font-semibold text-accent">{item.year}</p>
              </div>
              <div className="flex-1">
                <h3 className="text-sm md:text-base font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-xs text-white/35 mb-2">{item.institution}</p>
                <p className="text-sm text-white/55 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
