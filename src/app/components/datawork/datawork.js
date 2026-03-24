"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./datawork.module.css";

// Course metadata with status information
const COURSE_CONFIG = {
  "UI/UX & Accessibility": { status: "in-progress" },
  "Power BI": { status: "coming-soon" },
};

// Status badge component — eliminates duplicated rendering logic
const StatusBadge = ({ status, type }) => {
  if (status === "coming-soon") {
    return <span className={styles.comingSoonBadge}>Coming Soon</span>;
  }
  if (status === "in-progress") {
    return <span className={styles.inProgressBadge}>In Progress</span>;
  }
  return <span className={styles.typeTag}>{type}</span>;
};

// Get status from course config or artifact data
const getArtifactStatus = (artifact) => {
  if (artifact.status) return artifact.status;
  const courseConfig = COURSE_CONFIG[artifact.course];
  return courseConfig?.status || "complete";
};

// Build card class list cleanly
const getCardClasses = (artifact, isExpandable) => {
  const status = getArtifactStatus(artifact);
  const classes = [styles.card];
  
  if (status === "in-progress") classes.push(styles.cardInProgress);
  if (status === "coming-soon") classes.push(styles.cardComingSoon);
  if (isExpandable) classes.push(styles.cardClickable);
  
  return classes.join(" ");
};

const artifacts = [
  {
    id: "a01",
    course: "Databases & APIs",
    type: "Exercise",
    title: "Zoo Keeper Database",
    description:
      "Built a relational database from scratch — keepers, animals and vet visits tables with proper foreign key constraints. Wrote JOIN queries to link all three tables, then added aggregations to count visits and average weights per keeper.",
    takeaway:
      "Foreign keys use IDs rather than names because names can change, but an ID stays the same.",
    code: `-- Creating tables with FK constraints
CREATE TABLE keepers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    specialty VARCHAR(50),
    phone VARCHAR(20)
);

CREATE TABLE animals (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    species VARCHAR(50),
    age INTEGER,
    keeper_id INTEGER REFERENCES keepers(id)
);

-- All animals with their keepers and visit count
SELECT
    animals.name AS "Animal",
    animals.species AS "Species",
    keepers.name AS "Keeper",
    COUNT(vet_visits.id) AS "Visits"
FROM animals
LEFT JOIN keepers ON animals.keeper_id = keepers.id
LEFT JOIN vet_visits ON vet_visits.animal_id = animals.id
GROUP BY animals.id, animals.name, animals.species, keepers.name
ORDER BY COUNT(vet_visits.id) DESC;`,
    codeLanguage: "sql",
  },
  {
    id: "a02",
    course: "Databases & APIs",
    type: "Exercise",
    title: "Advanced SQL — All Four JOINs",
    description:
      "Worked through INNER, LEFT, RIGHT and FULL JOIN on the same zoo dataset to understand exactly what each one includes and excludes. Added GROUP BY with HAVING to filter aggregated results.",
    takeaway:
      "WHERE filters rows before grouping. HAVING filters groups after — that's why you can't use WHERE to filter an aggregate.",
    code: `-- INNER: only animals that have a keeper (Simo excluded)
SELECT animals.name, animals.species, keepers.name
FROM animals
INNER JOIN keepers ON animals.keeper_id = keepers.id;

-- LEFT: all animals, NULL where keeper is unknown
SELECT animals.name, animals.species, keepers.name
FROM animals
LEFT JOIN keepers ON animals.keeper_id = keepers.id;

-- RIGHT: all keepers, even those with no animals
SELECT keepers.name, keepers.specialty, animals.name
FROM animals
RIGHT JOIN keepers ON animals.keeper_id = keepers.id;

-- GROUP BY + HAVING: keepers with more than 2 animals
SELECT keepers.name, COUNT(animals.id) AS "Animals"
FROM keepers
JOIN animals ON keepers.id = animals.keeper_id
GROUP BY keepers.name
HAVING COUNT(*) > 2;
-- Result: Anna Virtanen — 3`,
    codeLanguage: "sql",
  },
  {
    id: "a03",
    course: "Databases & APIs",
    type: "Normalization",
    title: "Normalizing a Safari Park Database",
    description:
      "Analyzed a badly designed single-table database, identified 1NF violations (comma-separated lists in columns) and 3NF violations (transitive dependencies between non-key columns). Redesigned it into 8 normalized tables including junction tables for M:N relationships like animal diets and keeper assignments.",
    takeaway:
      "Normalization is about keeping data in one place. If you need to change something, you should only ever change it once.",
    image: "/elaintarha/eläintarha_drawio.png",
    code: `-- The original bad design — everything in one table
CREATE TABLE safaripuisto_huono (
    elain_id INTEGER PRIMARY KEY,
    nimi VARCHAR(50),
    laji VARCHAR(50),
    lajin_elinaika INTEGER,     -- repeated for every lion
    lajin_keskipaino DECIMAL,   -- repeated for every lion
    hoitajat VARCHAR(200),      -- comma-separated list!
    kasvattaja_nimi VARCHAR(100),
    kasvattaja_postinumero VARCHAR(10)  -- depends on name, not id
);

-- After normalization: species gets its own table
CREATE TABLE laji (
    id INT PRIMARY KEY,
    nimi VARCHAR(50),
    elinaika INT CHECK (elinaika > 0),
    keskipaino DECIMAL(6,2)
);

-- Junction table handles the M:N animal-keeper relationship
CREATE TABLE elaimen_hoitaja (
    elain_id INT,
    hoitaja_id INT,
    PRIMARY KEY (elain_id, hoitaja_id),
    FOREIGN KEY (elain_id) REFERENCES elain(id),
    FOREIGN KEY (hoitaja_id) REFERENCES hoitaja(id)
);

-- Now querying diet works cleanly across four tables
SELECT elain.nimi, laji.nimi, ruoka.nimi
FROM elain
JOIN laji ON elain.laji_id = laji.id
JOIN ruokavalio ON ruokavalio.elain_id = elain.id
JOIN ruoka ON ruoka.id = ruokavalio.ruoka_id;`,
    codeLanguage: "sql",
  },
  {
    id: "a04",
    course: "Databases & APIs",
    type: "ER Modeling",
    title: "ER Modeling — Tori.fi Marketplace",
    description:
      "Analyzed tori.fi and modeled the database behind it — main categories, subcategories, users and ads tables with proper 1:N relationships. Drew the ER diagram in draw.io and implemented it in SQL with constraints, test data and JOIN queries.",
    takeaway:
      "A simple model that works is better than a complex one you can't maintain. I kept it to four tables and later realized how much was missing — messages, notifications, watchlists.",
    image: "/tori/tori_drawio.png",
    code: `-- Ads table with multiple FK references and a CHECK constraint
CREATE TABLE ads (
    id INTEGER PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) CHECK (price > 0),
    seller_id INTEGER NOT NULL,
    sub_categories_id INTEGER NOT NULL,
    FOREIGN KEY (seller_id) REFERENCES users(id),
    FOREIGN KEY (sub_categories_id) REFERENCES sub_categories(id)
);

-- Three-table JOIN: ad with subcategory and main category
SELECT
    ads.title AS "Title",
    sub_categories.name AS "Subcategory",
    main_categories.name AS "Category"
FROM ads
JOIN sub_categories
    ON ads.sub_categories_id = sub_categories.id
JOIN main_categories
    ON sub_categories.main_categories_id = main_categories.id;

-- Most expensive listing
SELECT title, price
FROM ads
ORDER BY price DESC
LIMIT 1;
-- Result: Lego Mr Gold — 5990.00`,
    codeLanguage: "sql",
  },
  {
    id: "a05",
    course: "Databases & APIs",
    type: "Project",
    title: "Node.js + PostgreSQL",
    description:
      "Connected a Node.js app to a PostgreSQL database using node-postgres. Built async functions to fetch all records and fetch a single record by ID, with try-catch error handling and parameterized queries.",
    takeaway:
      "Pool handles multiple connections automatically. Client is just one — fine for a script, not for anything with real users.",
    code: `const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'lintutietokanta',
    password: process.env.DB_PASSWORD,
    port: 5433,
});

// Fetch all birds
async function getAllBirds() {
    try {
        const result = await pool.query('SELECT * FROM lintu');
        console.log(result.rows);
    } catch (err) {
        console.error('Error:', err.message);
    }
}

// Fetch one bird by ID — parameterized to prevent SQL injection
async function getOneBird(id) {
    try {
        const result = await pool.query(
            'SELECT * FROM lintu WHERE id = $1',
            [id]
        );
        if (result.rows.length === 0) {
            console.log('Not found');
            return;
        }
        console.log(result.rows[0]);
    } catch (err) {
        console.error('Error:', err.message);
    }
}

getOneBird(3).then(() => pool.end());
// Result: Sinitiainen`,
    codeLanguage: "js",
  },
  {
    id: "a06",
    course: "Databases & APIs",
    type: "Project",
    title: "REST API — Bug Registry",
    description:
      "Built a REST API with Node.js and Express connected to PostgreSQL for a bug registry. Implemented GET endpoints for fetching all bugs with optional filtering by harmfulness level via query parameters, and fetching individual bugs by ID via route parameters. Used parameterized queries to prevent SQL injection and proper error handling with status codes.",
    takeaway:
      "Parameterized queries prevent SQL injection — user input never goes directly into the query string. Always use $1, not string concatenation. Filter in SQL with WHERE, not in JavaScript.",
    code: `const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

app.use(express.json());

// GET all bugs — optional filter via query param
app.get('/api/otokat', async (req, res) => {
    try {
        const { on_haitallinen } = req.query;
        let result;
        
        if (on_haitallinen) {
            // Parameterized query: $1 is safe, never concatenate user input
            result = await pool.query(
                'SELECT * FROM otokka WHERE on_haitallinen = $1',
                [on_haitallinen === 'true']
            );
        } else {
            result = await pool.query('SELECT * FROM otokka');
        }
        
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server error' });
    }
});

// GET one bug by ID — 404 if not found
app.get('/api/otokat/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            'SELECT * FROM otokka WHERE id = $1',
            [id]
        );
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Bug not found' });
        }
        
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server error' });
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});`,
    codeLanguage: "js",
  },
  {
    id: "a07",
    course: "Databases & APIs",
    type: "Project",
    title: "RAG Chatbot with Vector Embeddings",
    description:
      "Built a RAG (Retrieval-Augmented Generation) chatbot using PostgreSQL with pgvector extension and OpenRouter API. The system generates embeddings for stored data, performs semantic search using cosine similarity, and feeds relevant context to an LLM for accurate answers. Implemented embedding generation script and chat interface with vector similarity ranking.",
    takeaway:
      "Retrieval is more important than the model. Good context + bad model beats bad context + good model every time. Vector databases make semantic search feel like magic.",
    code: `// RAG Pipeline: Retrieve relevant context, then generate answer
async function chat(kysymys) {
  // 1. RETRIEVAL - Convert question to vector
  const embeddingResponse = await openai.embeddings.create({
    model: EMBEDDING_MODEL,
    input: kysymys,
    encoding_format: EMBEDDING_ENCODING_FORMAT,
  });

  const queryEmbedding = embeddingResponse.data[0].embedding;

  // Vector search: <=> is pgvector's cosine distance operator
  // Finds semantically similar records ranked by distance
  const results = await pool.query(
    \`SELECT nimi, rotu, kuvaus
     FROM kissa
     WHERE embedding IS NOT NULL
     ORDER BY embedding <=> $1
     LIMIT 3\`,
    [JSON.stringify(queryEmbedding)],
  );

  // 2. AUGMENTED - Build context from retrieved results
  const konteksti = results.rows
    .map((k) => \`\${k.nimi} (\${k.rotu}): \${k.kuvaus}\`)
    .join("\\n");

  // 3. GENERATION - Feed context to LLM
  const chatResponse = await openai.chat.completions.create({
    model: "openrouter/free",
    messages: [
      {
        role: "system",
        content: \`Use ONLY the provided context. Don't use general knowledge.
If the context doesn't contain an answer, say so clearly.\`,
      },
      {
        role: "user",
        content: \`Context:\\n\${konteksti}\\n\\nQuestion: \${kysymys}\`,
      },
    ],
  });

  console.log("AI:", chatResponse.choices[0].message.content);
}`,
    codeLanguage: "js",
  },

  // Modeling & Systems
  {
    id: "a08",
    course: "Modeling & Systems",
    type: "Study & Exercises",
    title: "Agile, Scrum & Kanban",
    description:
      "Read through agile project management theory and worked through exercises covering Scrum roles, sprint ceremonies and backlogs. Covered Kanban as a lighter flow-based alternative. Used Miro for planning boards and practiced managing sprints and backlogs.",
    takeaway:
      "Scrum makes sense when scope is unclear and you need structure. Kanban works better when work just keeps flowing in.",
    image: "/agile/kanban.jpg",
  },
  {
    id: "a09",
    course: "Modeling & Systems",
    type: "Exercise",
    title: "UML: Sequence & Class Diagrams",
    description:
      "Practiced modeling systems before writing any code — use case diagrams to map actor interactions with system operations, sequence diagrams showing message flows between objects, and class diagrams for object relationships and dependencies. Created models for ATM systems, e-commerce platforms and other real-world scenarios.",
    takeaway:
      "Modeling before coding forces you to think through things you'd otherwise discover halfway through building. A good diagram catches design flaws before you write a single line.",
    image: "/agile/luokkakaavio.jpg",
  },
  {
    id: "a10",
    course: "Modeling & Systems",
    type: "Tools & Practice",
    title: "Project Management Tools & Workflows",
    description:
      "Hands-on experience with Git for version control and project management platforms: Jira for sprint planning and issue tracking, Trello for flexible task boards, Linear for streamlined workflows. Also used Miro for collaborative diagramming and planning. Practiced real team workflows including sprint ceremonies, backlog grooming, prioritization, and burndown tracking. Created and managed sprint backlogs with clear user stories, acceptance criteria, and task breakdown.",
    takeaway:
      "The tool matters less than actually using it consistently. What matters is the shared understanding of what's in progress and what's done—and a well-organized backlog makes that invisible complexity visible.",
    image: "/agile/sprint_backlog.png",
  },
  {
    id: "a10b",
    course: "Modeling & Systems",
    type: "Exercise",
    title: "Flowcharts & Process Modeling",
    description:
      "Created detailed flowcharts for complex business processes and system flows. Practiced modeling decision trees, loops, and edge cases using standard flowchart notation. Examples include ATM withdrawal flows, e-commerce checkout sequences, and various algorithm implementations.",
    takeaway:
      "A flowchart makes implicit logic explicit. When you have to draw every decision point, bad logic becomes impossible to hide.",
    image: "/agile/pankkiautomaatti.jpg",
  },

  // Web Design
  {
    id: "a11",
    course: "Web Design",
    type: "Project",
    title: "Tyyni Studio — Brand Guidelines",
    description:
      "Designed complete brand identity for Tyyni Studio, a wellness service studio in Vaasa. Developed comprehensive brand guidelines covering logo system with wave motifs in Cormorant Garamond, color palette (teal #2D7D7D, warm beige, cream, terracotta, dark gray), and typography hierarchy using Cormorant Garamond for headings and DM Sans for body text. Established cohesive visual system reflecting the studio's focus on healing, meditation, and physiotherapy services.",
    takeaway:
      "A strong brand guideline gives consistency without being restrictive. Every color choice, font pairing, and logo variation should serve the brand's purpose.",
    image: "/design/tyyni_logo.png",
  },
  {
    id: "a11b",
    course: "Web Design",
    type: "Study & Theory",
    title: "Gestalt Principles — Shapes & Forms",
    description:
      "Deep study of gestalt hahmolajit (shapes and principles) — how humans perceive visual forms holistically. Covered proximity, continuation, closure, symmetry, and figure-ground relationships. Applied these principles through exercises analyzing how elements group and organize visually.",
    takeaway:
      "People see patterns and wholes before parts. When you understand how perception works, your designs become more intuitive.",
  },

  // UI/UX & Accessibility
  {
    id: "a12",
    course: "UI/UX & Accessibility",
    type: "Theory & Exercises",
    title: "User Personas & Usability Testing",
    description:
      "Covering user personas, use context mapping, usability testing methods and heuristic evaluation. Learning how to find real usability problems rather than guessing at them.",
    takeaway:
      "Most usability problems are obvious the moment you watch someone actually use the thing.",
    status: "in-progress",
  },
  {
    id: "a13",
    course: "UI/UX & Accessibility",
    type: "Theory",
    title: "WCAG & Accessibility Legislation",
    description:
      "Going through WCAG guidelines, accessibility law, and how accessibility requirements translate into actual design and development decisions.",
    takeaway:
      "Accessibility is easier to build in from the start than retrofit later.",
    status: "in-progress",
  },

  // Cloud & Infrastructure
  {
    id: "a14",
    course: "Cloud & Infrastructure",
    type: "Study",
    title: "Azure Fundamentals",
    description:
      "Worked through cloud fundamentals via Azure — storage, compute, managed databases, and the difference between IaaS and PaaS. Got comfortable navigating the Azure portal.",
    takeaway:
      "Managed databases remove operational pain, but you lose visibility into what's actually happening underneath.",
    status: "in-progress",
  },

  // Power BI
  {
    id: "a15",
    course: "Power BI",
    type: "Coming Soon",
    title: "Dashboard — Work in Progress",
    description:
      "Currently finishing the Power BI course. Will add a dashboard here when it's done.",
    takeaway: "",
  },

  // Web Development & Blockchain
  {
    id: "a16",
    course: "Web Development & Blockchain",
    type: "Team Project",
    title: "KotiKetju — Blockchain Real Estate Platform",
    description:
      "Built a modern real estate marketplace integrating blockchain technology. Designed and developed the full frontend and interactive features; initially prototyped in Base44 then migrated to VS Code for enhanced customization and power. The platform features property listings, virtual tours, smart contract integration for secure transactions, and NFT-based property ownership. Built with modern web technologies, responsive design, and blockchain wallet integration for crypto transactions.",
    takeaway:
      "Blockchain isn't just hype — it's a real tool for reducing intermediaries and adding transparency. Moving from a low-code tool to a full development environment gave us control but taught us that scaffolding tools are faster for iteration.",
    image: "/kotiketju/screenshot.png",
  },
];

const courses = [
  "All",
  "Databases & APIs",
  "Modeling & Systems",
  "Web Design",
  "UI/UX & Accessibility",
  "Cloud & Infrastructure",
  "Web Development & Blockchain",
  "Power BI",
];

const DetailModal = ({ artifact, onClose }) => {
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const status = getArtifactStatus(artifact);
  
  return (
    <>
      <div className={styles.modalOverlay} onClick={onClose}>
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.modalClose} onClick={onClose}>
            ✕
          </button>

          <div className={styles.modalMeta}>
            <span className={styles.courseTag}>{artifact.course}</span>
            <StatusBadge status={status} type={artifact.type} />
          </div>

          <h2 className={styles.modalTitle}>{artifact.title}</h2>
          <p className={styles.modalDesc}>{artifact.description}</p>

          {artifact.takeaway && (
            <p className={styles.modalTakeaway}>
              <span className={styles.takeawayLabel}>Takeaway — </span>
              {artifact.takeaway}
            </p>
          )}

          {artifact.image && (
            <div 
              className={styles.modalImage}
              onClick={() => setIsImageZoomed(true)}
            >
              <Image
                src={artifact.image}
                alt={artifact.title}
                width={1200}
                height={900}
                style={{ width: "100%", height: "auto", display: "block", cursor: "pointer" }}
              />
            </div>
          )}

          {artifact.code && (
            <div className={styles.codeBlock}>
              <div className={styles.codeHeader}>
                <span className={styles.codeLang}>
                  {artifact.codeLanguage || "sql"}
                </span>
              </div>
              <pre className={styles.codePre}>
                <code>{artifact.code}</code>
              </pre>
            </div>
          )}
        </div>
      </div>

      {isImageZoomed && artifact.image && (
        <div 
          className={styles.imageZoomOverlay}
          onClick={() => setIsImageZoomed(false)}
        >
          <button 
            className={styles.zoomClose}
            onClick={() => setIsImageZoomed(false)}
          >
            ✕
          </button>
          <Image
            src={artifact.image}
            alt={artifact.title}
            width={1600}
            height={1200}
            className={styles.zoomedImage}
            style={{ width: "auto", height: "auto", maxWidth: "90vw", maxHeight: "90vh" }}
          />
        </div>
      )}
    </>
  );
};

const DataWork = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeArtifact, setActiveArtifact] = useState(null);

  const filtered =
    activeFilter === "All"
      ? artifacts
      : artifacts.filter((a) => a.course === activeFilter);

  const isExpandable = (artifact) =>
    artifact.code || artifact.image || artifact.description.length > 120;

  return (
    <>
      <section className={styles.section} id="data">
        <div className={styles.inner}>
          <p className={styles.sectionLabel} data-fade>
            02 — Coursework & Exercises
          </p>
          <div className={styles.header} data-fade data-delay="1">
            <h2 className={styles.heading}>What I&apos;m studying</h2>
            <p className={styles.subheading}>
              Exercises, projects and things I&apos;ve worked on across my
              courses. Click any card to see more detail, code examples or
              diagrams.
            </p>
          </div>

          <div className={styles.filters} data-fade data-delay="2">
            {courses.map((course) => {
              const courseConfig = COURSE_CONFIG[course];
              const courseStatus = courseConfig?.status;
              const statusLabel =
                courseStatus === "in-progress"
                  ? "In Progress"
                  : courseStatus === "coming-soon"
                    ? "Soon"
                    : null;

              return (
                <button
                  key={course}
                  className={`${styles.filterBtn} ${
                    activeFilter === course ? styles.filterActive : ""
                  }`}
                  onClick={() => setActiveFilter(course)}
                >
                  {course}
                  {statusLabel && (
                    <span className={styles.filterBadge}>{statusLabel}</span>
                  )}
                </button>
              );
            })}
          </div>

          <div className={styles.grid}>
            {filtered.map((artifact) => {
              const expandable = isExpandable(artifact);
              const status = getArtifactStatus(artifact);

              return (
                <div
                  key={artifact.id}
                  className={getCardClasses(artifact, expandable)}
                  onClick={() => expandable && setActiveArtifact(artifact)}
                >
                  <div className={styles.cardTop}>
                    <span className={styles.courseTag}>{artifact.course}</span>
                    <StatusBadge status={status} type={artifact.type} />
                  </div>

                  <h3 className={styles.cardTitle}>{artifact.title}</h3>
                  <p className={styles.cardDesc}>{artifact.description}</p>

                  {artifact.takeaway && (
                    <p className={styles.takeaway}>
                      <span className={styles.takeawayLabel}>Takeaway — </span>
                      {artifact.takeaway}
                    </p>
                  )}

                  {expandable && (
                    <div className={styles.cardHint}>
                      {artifact.code && (
                        <span className={styles.hintItem}>
                          {artifact.codeLanguage === "js" ? "JS" : "SQL"}
                        </span>
                      )}
                      {artifact.image && (
                        <span className={styles.hintItem}>Diagram</span>
                      )}
                      <span className={styles.hintExpand}>Open ↗</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {activeArtifact && (
        <DetailModal
          artifact={activeArtifact}
          onClose={() => setActiveArtifact(null)}
        />
      )}
    </>
  );
};

export default DataWork;
