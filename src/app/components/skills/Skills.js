import styles from './skills.module.css';

const STACK = {
	'AI in development': [
		'Claude Code',
		'Codex',
		'OpenRouter',
		'LLM integration and testing',
	],
	'Backend and data': [
		'Python',
		'FastAPI',
		'Node.js',
		'Express',
		'REST APIs',
		'PostgreSQL + pgvector',
		'SQL',
		'Database design',
		'MongoDB',
	],
	Frontend: [
		'TypeScript',
		'JavaScript',
		'React',
		'Next.js',
		'Vite',
		'HTML & CSS',
	],
	'Tools and design': ['Git', 'Figma', 'Vercel', 'UX/UI design', 'Photoshop'],
};

export default function Skills() {
	return (
		<section className={styles.section} id="skills">
			<h2 className="section-h2">Tools and technologies I have used</h2>
			<p className={styles.subtitle}>
				These days most of my code goes through Claude Code and Codex. I spend
				less time writing code manually and more time researching, planning,
				testing ideas and exploring new technologies.
			</p>

			<dl className={styles.stack}>
				{Object.entries(STACK).map(([category, technologies]) => (
					<div key={category} className={styles.group}>
						<dt className={styles.groupTitle}>{category}</dt>
						<dd className={styles.techs}>{technologies.join(', ')}</dd>
					</div>
				))}
			</dl>
		</section>
	);
}
