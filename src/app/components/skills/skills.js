const skillCategories = [
  {
    category: 'Backend',
    skills: [
      { name: 'PostgreSQL', level: 'Strong' },
      { name: 'Schema Architecture', level: 'Strong' },
      { name: 'API Design', level: 'Comfortable' },
      { name: 'Node.js', level: 'Comfortable' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 'Strong' },
      { name: 'Next.js', level: 'Strong' },
      { name: 'Tailwind CSS', level: 'Strong' },
      { name: 'HTML & CSS', level: 'Strong' },
    ],
  },
  {
    category: 'Data',
    skills: [
      { name: 'Vector Databases', level: 'Comfortable' },
      { name: 'RAG Pipelines', level: 'Comfortable' },
      { name: 'Data Modeling', level: 'Strong' },
      { name: 'Embeddings', level: 'Familiar' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', level: 'Strong' },
      { name: 'Figma', level: 'Comfortable' },
      { name: 'Azure', level: 'Familiar' },
      { name: 'SQL', level: 'Strong' },
    ],
  },
];

const levelColors = {
  Strong:      'text-accent border-accent/30 bg-accent/8',
  Comfortable: 'text-white/60 border-white/15 bg-white/5',
  Familiar:    'text-white/35 border-white/8 bg-white/3',
};

export default function Skills() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 relative z-10" id="skills">
      <div className="max-w-5xl mx-auto">

        <p className="text-xs tracking-[3px] uppercase text-white/35 mb-3 font-medium reveal">Skills</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 reveal" data-delay="1">
          Technologies &amp; expertise
        </h2>
        <p className="text-sm text-white/30 mb-12 reveal" data-delay="2">
          <span className="inline-flex items-center gap-1.5 mr-4">
            <span className="w-2 h-2 rounded-full bg-accent/60" /> Strong
          </span>
          <span className="inline-flex items-center gap-1.5 mr-4">
            <span className="w-2 h-2 rounded-full bg-white/25" /> Comfortable
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-white/12" /> Familiar
          </span>
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {skillCategories.map((cat, catIndex) => (
            <div key={catIndex} className="reveal" data-delay={String((catIndex % 2) + 1)}>
              <h3 className="text-xs font-semibold text-accent uppercase tracking-[3px] mb-5">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(({ name, level }) => (
                  <span
                    key={name}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium transition-colors cursor-default hover:border-white/25 hover:text-white ${levelColors[level]}`}
                    title={level}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
