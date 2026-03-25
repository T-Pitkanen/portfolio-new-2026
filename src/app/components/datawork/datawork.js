'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const courses = [
  {
    title: 'PostgreSQL & Databases',
    institution: 'VAMK',
    topics: 'Relational design, schema normalization, ER modeling, complex JOINs',
    takeaway: 'Normalization prevents data duplication — change once, everywhere updates.',
  },
  {
    title: 'Cloud Fundamentals',
    institution: 'VAMK',
    topics: 'Azure, cloud services, deployment, infrastructure basics',
    takeaway: "Cloud is just someone else's computer — but well-managed infrastructure is valuable.",
  },
  {
    title: 'UI/UX & Web Design',
    institution: 'Media College Denmark',
    topics: 'Wireframing, usability testing, user research, design systems',
    takeaway: "Users don't care about your technical choices — they care about what works.",
  },
  {
    title: 'Web Development',
    institution: 'Media College Denmark',
    topics: 'HTML, CSS, JavaScript, responsive design, web standards',
    takeaway: 'Good fundamentals scale to any framework — build with the web, not against it.',
  },
  {
    title: 'Business Information Systems',
    institution: 'VAMK',
    topics: 'Enterprise systems, data governance, business processes, IT strategy',
    takeaway: 'Technology is a tool for business — understand the business first.',
  },
  {
    title: 'Vector Databases & RAG',
    institution: 'VAMK',
    topics: 'Embeddings, semantic search, RAG pipelines, AI-adjacent data',
    takeaway: 'RAG bridges the gap between static data and generative AI in a practical way.',
  },
];

function CourseItem({ course, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b border-white/8 last:border-0 reveal" data-delay={String((index % 3) + 1)}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <div className="flex items-start gap-4 min-w-0">
          <span className="text-[10px] font-mono text-white/20 mt-0.5 flex-shrink-0 w-6">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="min-w-0">
            <p className="text-sm md:text-base font-semibold text-white group-hover:text-accent transition-colors">
              {course.title}
            </p>
            <p className="text-xs text-white/35 mt-0.5">{course.institution}</p>
          </div>
        </div>
        <ChevronDown
          size={16}
          className={`flex-shrink-0 text-white/30 mt-0.5 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          expanded ? 'max-h-48 pb-5' : 'max-h-0'
        }`}
      >
        <div className="pl-10 flex flex-col gap-3">
          <p className="text-sm text-white/50 leading-relaxed">{course.topics}</p>
          <p className="text-sm text-white/35 italic border-l-2 border-accent/25 pl-3 leading-relaxed">
            &ldquo;{course.takeaway}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Coursework() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 relative z-10" id="coursework">
      <div className="max-w-5xl mx-auto">

        <p className="text-xs tracking-[3px] uppercase text-white/35 mb-3 font-medium reveal">Learning</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 reveal" data-delay="1">
          Key coursework
        </h2>
        <p className="text-sm text-white/30 mb-10 reveal" data-delay="2">
          Click any course to expand details and takeaways.
        </p>

        <div className="max-w-2xl">
          {courses.map((course, index) => (
            <CourseItem key={index} course={course} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
