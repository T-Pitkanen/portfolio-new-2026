import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Portfolio Site',
    stack: ['Next.js', 'Tailwind CSS'],
    description: 'Personal portfolio with CSS scroll reveal animations, floating pill navigation, and gradient mesh hero.',
    href: '#portfolio',
    number: '01',
    previewUrl: 'portfolio',
    // Replace with: image: '/previews/portfolio.png'
  },
  {
    title: 'Database Schema Project',
    stack: ['PostgreSQL', 'SQL'],
    description: 'Complex relational database design focusing on normalization, efficient querying, and real-world data scenarios.',
    href: '#database',
    number: '02',
    previewUrl: 'database',
    // Replace with: image: '/previews/database.png'
  },
  {
    title: 'RAG Pipeline',
    stack: ['Python', 'Vector DBs', 'LLMs'],
    description: 'Retrieval-Augmented Generation system with semantic search, embeddings, and LLM integration.',
    href: '#rag',
    number: '03',
    previewUrl: 'rag',
    // Replace with: image: '/previews/rag.png'
  },
  {
    title: 'UI/UX Design',
    stack: ['Figma', 'User Research'],
    description: 'End-to-end product design including user research, wireframes, prototyping, and usability testing.',
    href: '#uiux',
    number: '04',
    previewUrl: 'uiux',
    // Replace with: image: '/previews/uiux.png'
  },
];

function BrowserFrame({ url }) {
  return (
    <div className="relative h-40 bg-white/[0.03] border-b border-white/8 overflow-hidden flex flex-col">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3.5 py-2 border-b border-white/6 bg-white/[0.02] flex-shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
        <span className="flex-1 mx-2 h-4 rounded-sm bg-white/5 text-[9px] text-white/15 flex items-center px-2 font-mono">
          localhost/{url}
        </span>
        <span className="w-3 h-3 rounded-sm bg-white/5" />
      </div>
      {/* Placeholder wireframe content */}
      <div className="flex-1 p-4 flex gap-3">
        <div className="flex flex-col gap-2 flex-1">
          <div className="h-2.5 w-24 rounded bg-white/10" />
          <div className="h-1.5 w-36 rounded bg-white/6" />
          <div className="h-1.5 w-28 rounded bg-white/6" />
          <div className="mt-2 h-10 w-full rounded bg-white/5" />
          <div className="flex gap-1.5 mt-1">
            <div className="h-1.5 w-10 rounded-full bg-accent/20" />
            <div className="h-1.5 w-10 rounded-full bg-white/6" />
          </div>
        </div>
        <div className="w-20 h-full rounded bg-white/5 flex-shrink-0" />
      </div>
      {/* Gradient overlay hinting at "real content below" */}
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[hsl(0_0%_8%)] to-transparent" />
    </div>
  );
}

export default function Projects() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 relative z-10" id="projects">
      <div className="max-w-5xl mx-auto">

        <p className="text-xs tracking-[3px] uppercase text-white/35 mb-3 font-medium reveal">Projects</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 reveal" data-delay="1">
          Work I&apos;ve done
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.href}
              className="card group overflow-hidden flex flex-col reveal"
              data-delay={String((index % 2) + 1)}
            >
              <BrowserFrame url={project.previewUrl} />

              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <span className="text-[10px] text-white/20 font-mono">{project.number}</span>
                  <ArrowUpRight
                    size={16}
                    className="text-white/20 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>

                <div>
                  <h3 className="text-base md:text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/40 border border-white/8"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="text-xs text-white/20 text-center mt-8 reveal" data-delay="3">
          Screenshots coming soon — placeholder wireframes shown above
        </p>
      </div>
    </section>
  );
}
