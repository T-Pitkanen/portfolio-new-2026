import styles from './about.module.css';

const timeline = [
	{
		year: '2022',
		loc: 'Denmark',
		title: 'Web development degree',
		desc: 'Moved to Denmark and did a web dev degree. First real projects. Realised this is what I like to do.',
	},
	{
		year: '2024',
		loc: (
			<>
				<span lang="fi">VAMK</span>, Finland
			</>
		),
		title: 'Business IT',
		desc: 'Back in Finland, studying Business IT, where software development meets business systems.',
	},
	{
		year: 'Now',
		loc: (
			<>
				<span lang="fi">VAMK</span>, <span lang="fi">Vaasa</span>
			</>
		),
		title: 'Trainee, RDI project',
		desc: 'Building a web app powered by generative AI. It includes LLM integration and testing, backend and frontend work including a full UI restyle, and piloting it with real users.',
		now: true,
	},
];

export default function About() {
	return (
		<section className={styles.section} id="about">
			<h2 className="section-h2">About</h2>

			<div className={styles.grid}>
				<div className={styles.prose}>
					<p>
						I have a web development degree from Denmark and am in my third year
						of Business IT at <span lang="fi">VAMK</span>. I learn by building
						real projects and am comfortable working across the stack.
					</p>
					<p>
						Right now I&apos;m a trainee in an RDI project at{' '}
						<span lang="fi">VAMK</span>, building a web app powered by
						generative AI. I work with LLM integration and testing, backend
						work, and a full restyle of the UI on the frontend, then piloting
						the app with its target users.
					</p>
					<p className={styles.aside}>
						Currently learning AI integration and AI-assisted development, plus
						RPA and project management at school.
					</p>
				</div>

				<ol className={styles.timeline}>
					{timeline.map((item) => (
						<li
							key={item.title}
							className={`${styles.tlRow} ${item.now ? styles.tlNow : ''}`}
						>
							<div className={styles.tlWhen}>
								<span className={styles.tlYear}>{item.year}</span>
								<span className={styles.tlLoc}>{item.loc}</span>
							</div>
							<div className={styles.tlMain}>
								<h3 className={styles.tlTitle}>{item.title}</h3>
								<p className={styles.tlDesc}>{item.desc}</p>
							</div>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
