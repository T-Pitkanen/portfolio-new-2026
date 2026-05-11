const courses = [
  {
    id: 1,
    title: "Databases & APIs",
    tag: "Backend",
    tagClass: "backend",
    institution: "VAMK",
    span: "w3 h2",
    description: "Designed and built a relational database with a REST API layer. Covered schema design, normalization, complex queries, and data integrity through constraints and transactions.",
    body: "Relational modeling, joins that don't scare me anymore, and the moment EXPLAIN became a friend.",
    topics: ["PostgreSQL","REST API design","Schema normalization","CRUD operations","SQL joins & views"],
    takeaway: "Good data modeling saves you from painful rewrites later — structure first, build second.",
    project: {
      title: "Zoo Management Database",
      image: "/elaintarha/elaintarha_drawio.jpg",
      description: "Designed and implemented a relational database for a fictional Finnish zoo as part of a databases and APIs course. The schema covers 11 entities including animals, species, employees, visits, and tickets, with M:N junction tables, a self-referencing employee hierarchy, CHECK constraints, and indexes for query performance. Queries use JOINs, GROUP BY, self-joins, and subqueries to answer real operational questions like monthly food consumption and ticket sales by type. The database is normalized to 3NF and uses transactions to ensure data integrity across multi-step operations. Also integrated pgvector to store text embeddings, laying the groundwork for a RAG-based AI chatbot feature.",
      topics: ["PostgreSQL","Vector embeddings (pgvector)","Schema design","3NF normalization","SQL queries","Transactions"],
      takeaway: "Self-referencing tables and vector embeddings in the same schema. Relational and AI-ready don't have to be separate concerns.",
      snippets: [
        { label: "Self-referencing employee hierarchy", code: `CREATE TABLE tyontekija (\n  id      SERIAL PRIMARY KEY,\n  nimi    VARCHAR(50) NOT NULL,\n  rooli   VARCHAR(50),\n  palkka  NUMERIC CHECK (palkka > 0),\n  esimies_id INT,\n  FOREIGN KEY (esimies_id) REFERENCES tyontekija(id)\n);` },
        { label: "pgvector: AI document embeddings", code: `CREATE TABLE dokumentti (\n  id          SERIAL PRIMARY KEY,\n  sisalto     TEXT NOT NULL,\n  embedding   VECTOR(1536),\n  viite_taulu VARCHAR(50) CHECK (\n    viite_taulu IN ('elain', 'lipputyyppi', 'yleinen')\n  ),\n  viite_id    INTEGER,\n  luotu       TIMESTAMP DEFAULT NOW()\n);` },
        { label: "Employees above average salary", code: `SELECT nimi, rooli, palkka\nFROM tyontekija\nWHERE palkka > (SELECT AVG(palkka) FROM tyontekija)\nORDER BY palkka DESC;` },
        { label: "Transaction: new hire with role-specific insert", code: `BEGIN;\nINSERT INTO tyontekija (nimi, rooli, palkka, esimies_id)\nVALUES ('Petra Hoitaja', 'Eläintenhoitaja', 2800, 2)\nRETURNING id;\n\nINSERT INTO elain_hoitaja (elain_id, tyontekija_id, vastuualue)\nVALUES (1, lastval(), 'Apuhoitaja');\nCOMMIT;` },
      ],
    },
  },
  {
    id: 2, title: "Usability & Accessibility", tag: "UX", tagClass: "ux", institution: "VAMK", span: "w3",
    body: "Heuristic evals · WCAG 2.2 walkthroughs · three user tests for a course project.",
    topics: ["WCAG 2.1 guidelines","Usability testing","Heuristic evaluation","Accessible components","User research"],
    takeaway: "Accessibility isn't a checklist — it's designing so nobody gets left behind.",
  },
  {
    id: 3, title: "Cloud Services", tag: "Infrastructure", tagClass: "infra", institution: "VAMK", span: "w3",
    body: "Azure basics, deploying from a repo, and understanding what \"serverless\" actually costs.",
    topics: ["Microsoft Azure","Cloud deployment","Virtual machines","Storage & networking","Serverless functions"],
    takeaway: "Cloud infrastructure is a force multiplier — small teams can run big systems.",
  },
  {
    id: 4, title: "B2B Marketing", tag: "Business", tagClass: "business", institution: "VAMK", span: "w2",
    body: "Positioning, pricing models, GTM for software.",
    topics: ["Buyer persona development","Lead generation","Content & channel strategy","Sales funnel","Campaign planning"],
    takeaway: "B2B marketing is about building trust over time, not just selling a product.",
  },
  {
    id: 5, title: "Blockchain", tag: "Emerging Tech", tagClass: "emerging", institution: "VAMK", span: "w2",
    body: "On-chain state, gas, the parts that are actually useful outside crypto.",
    topics: ["Distributed ledger concepts","Consensus mechanisms","Smart contract basics","Use cases & limitations","Decentralized systems"],
    takeaway: "Blockchain is a powerful trust mechanism but not every problem needs a distributed ledger.",
  },
  {
  id: 6, 
  title: "Web Design",
  tag: "Web Design",
  tagClass: "web design", 
  institution: "VAMK · 2026",
  span: "w2",
  body: "Build a brand identity for a fictional wellness studio.",
  topics: [
    "Brand identity",
    "Logo design",
    "Color system & typography",
    "Graphic guidelines",
    "Content strategy & wireframing",
    "Figma prototyping"
  ],
  project: {
    title: "Wellness Studio Branding",
    image: ["/design/tyyni_logo.png", "/design/tyyni_about.png", "/design/tyyni_ajanvaraus.png", "/design/tyyni_hero.png", "/design/tyyni_palvelut.png"],
    description: "Created a cohesive brand identity for a fictional wellness studio, including logo design, color palette, typography, and graphic guidelines. Developed a content strategy and wireframes for the website, culminating in a high-fidelity Figma prototype that reflects the brand's values of tranquility and holistic well-being.",
    topics: ["Brand identity","Logo design","Color theory","Typography","Content strategy","Figma prototyping"],
  },
  takeaway: "A good brand starts with the audience, not the color palette. Color and type choices are reasoned decisions, not preferences."
}
];

export default courses;
