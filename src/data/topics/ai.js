export const aiTopics = {
  slug: "artificial-intelligence",
  title: "Artificial Intelligence",
  excerpt: "Overview of AI concepts and applications.",
  content: [
    "AI encompasses machine learning, natural language processing, and robotics. More content coming....",
  ],
  subtopics: [
    {
      slug: "what-is-ai",
      title: "What Is Artificial Intelligence?",
      excerpt:
        "A clear overview of artificial intelligence, its definitions, uses, and related fields.",
      content: [
        {
          type: "header",
          text: "Artificial Intelligence (AI)",
        },
        {
          type: "paragraph",
          text: "Artificial Intelligence, or AI, refers to computer systems capable of performing tasks that typically require human-like intelligence, such as perception, reasoning, learning, and decision-making. AI is not a single invention but a broad discipline within computer science that combines multiple technologies and methods. For some, AI evokes images of thinking machines; for others, it simply represents advanced automation and data analysis.",
        },

        {
          type: "header",
          text: "Examples of AI in Practice",
        },
        {
          type: "paragraph",
          text: "AI technologies are embedded in many systems we use daily. Common examples include self-driving vehicles, recommendation engines, and image or video analysis tools.",
        },

        {
          type: "header",
          text: "Self-Driving Cars",
        },
        {
          type: "paragraph",
          text: "Autonomous vehicles combine several AI techniques, including route optimization, computer vision, and real-time decision-making. Their purpose is to enhance safety, efficiency, and sustainability in transportation. The same principles extend to drones, warehouse robots, and autonomous ships.",
        },

        {
          type: "header",
          text: "Recommendation Systems",
        },
        {
          type: "paragraph",
          text: "Recommendation algorithms personalize what users see on platforms such as Netflix, Spotify, and YouTube. They analyze viewing and listening behavior to predict what content each user might enjoy next. While this improves user experience, it can also create filter bubbles, spread misinformation, and amplify bias.",
        },

        {
          type: "header",
          text: "Image and Video Processing",
        },
        {
          type: "paragraph",
          text: "AI-driven image and video systems can recognize faces, identify objects, and tag people automatically. They are widely used in photography, surveillance, and autonomous navigation. At the same time, the same technology can generate convincing fake media, or deepfakes, raising concerns about authenticity and misinformation.",
        },

        {
          type: "header",
          text: "Why AI Is Hard to Define",
        },
        {
          type: "paragraph",
          text: "Defining AI is difficult because the field evolves continuously. Once a task becomes routine, it often stops being labeled as AI. Cultural influence and science fiction have also shaped public expectations, sometimes blurring the line between current reality and imagination. Interestingly, tasks that seem simple to humans, like grasping an object, are complex for machines, while tasks that seem difficult, such as playing chess, are relatively straightforward for computers.",
        },

        {
          type: "header",
          text: "Core Qualities of AI",
        },
        {
          type: "paragraph",
          text: "Two key properties characterize AI systems: autonomy and adaptivity. Autonomy refers to operating independently in dynamic environments, while adaptivity means improving performance through learning and experience. Although we often describe AI as 'thinking' or 'understanding', these are metaphors—AI systems process data without true comprehension or awareness.",
        },

        {
          type: "header",
          text: "Misleading Language and 'Suitcase Words'",
        },
        {
          type: "paragraph",
          text: "Terms like intelligence, learning, and understanding can be misleading because they carry multiple meanings. Marvin Minsky called these 'suitcase words'—concepts packed with different interpretations. Most AI today is narrow, designed for specific tasks rather than general intelligence. Comparing AIs by intelligence level makes little sense; a chess engine and a spam filter are skilled in different domains. It is clearer to say that a system uses AI methods than to call the system 'an AI'.",
        },

        {
          type: "header",
          text: "AI as a Scientific Discipline",
        },
        {
          type: "paragraph",
          text: "AI should be viewed as a field of study rather than a countable object. We don’t speak of 'one AI, two AIs' any more than we would say 'one biology, two biologies'. Instead, AI represents a collection of techniques, algorithms, and principles within computer science, much like mathematics or physics.",
        },

        {
          type: "header",
          text: "Related Fields and Subtopics",
        },
        {
          type: "paragraph",
          text: "AI draws from several closely connected areas—machine learning, deep learning, data science, and robotics. Together they form the foundation of most practical AI systems.",
        },

        {
          type: "header",
          text: "Machine Learning (ML)",
        },
        {
          type: "paragraph",
          text: "Machine learning enables systems to improve automatically through data and experience. Instead of being explicitly programmed for each task, ML models learn patterns from examples, making them more adaptable and effective across diverse applications.",
        },

        {
          type: "header",
          text: "Deep Learning",
        },
        {
          type: "paragraph",
          text: "Deep learning is a branch of machine learning that uses multi-layered neural networks. The term 'deep' refers to the number of processing layers. This approach has led to major breakthroughs in image recognition, speech processing, and natural language understanding.",
        },

        {
          type: "header",
          text: "Data Science",
        },
        {
          type: "paragraph",
          text: "Data science combines statistics, algorithms, and computing to extract insights from data. It applies AI methods to real-world problems in business, health, and research. Data scientists bridge technical and domain expertise, using tools like machine learning to turn data into action.",
        },

        {
          type: "header",
          text: "Robotics",
        },
        {
          type: "paragraph",
          text: "Robotics integrates multiple AI techniques to create machines that interact with the physical world. Robots use sensors to perceive their environment, actuators to move or manipulate objects, and algorithms to plan actions. They need not look human—a dishwasher or self-driving car qualifies as a robot, even if a chatbot does not.",
        },

        {
          type: "header",
          text: "Key Takeaways",
        },
        {
          type: "paragraph",
          text: "Artificial intelligence is a broad, evolving discipline that combines many technologies under one concept. It enables systems to act autonomously and adapt through experience, but it is not a single invention or product. Understanding its related fields—machine learning, deep learning, data science, and robotics—helps explain how AI operates in practice.",
        },
        {
          type: "paragraph",
          text: "AI should be viewed as a capability rather than an entity. Instead of speaking about a single AI, we should focus on how AI principles are applied to solve specific problems. Words like 'intelligence' or 'understanding' are metaphors, not literal truths. Despite these nuances, AI already shapes modern life—transforming transportation, media, healthcare, and research—and its influence will continue to expand as technology advances.",
        },
      ],
    },

    {
      slug: "philosophy-of-ai",
      title: "The Philosophy of Artificial Intelligence",
      excerpt:
        "Exploring the philosophical questions behind intelligence, consciousness, and the true nature of AI.",
      content: [
        {
          type: "paragraph",
          text: "Artificial intelligence raises some of the deepest questions in modern philosophy. Can a machine truly think, or only appear to think? Does intelligent behavior require consciousness, or can it emerge from computation alone? These questions link computer science to philosophy, psychology, and cognitive science, and invite us to reflect on what intelligence really means.",
        },

        {
          type: "header",
          text: "The Turing Test",
        },
        {
          type: "image",
          src: "/topics/ai/turing.png",
          alt: "Illustration of the Turing Test with a human and a computer",
          caption: "Alan Turing and The Turing Machine",
        },
        {
          type: "paragraph",
          text: "Alan Turing (1912–1954), the British mathematician often regarded as the father of computer science, explored whether machines could demonstrate genuine intelligence. His most famous contribution, the Turing Test—originally called the imitation game—set out to define intelligence through behavior rather than biology.",
        },
        {
          type: "paragraph",
          text: "In the test, a human interrogator exchanges written messages with two unseen participants: one human and one computer. If the interrogator cannot reliably tell which is which, the computer is said to have passed the test. Turing’s core idea was simple: if something behaves intelligently, we may as well call it intelligent. In this behavioral sense, intelligence depends on perception, not on the internal process behind it.",
        },

        {
          type: "header",
          text: "Does Acting Human Mean Being Intelligent?",
        },
        {
          type: "paragraph",
          text: "Critics argue that the Turing Test measures humanness more than intelligence. Some programs have 'passed' it by mimicking human imperfections—dodging questions, joking awkwardly, or making grammatical mistakes—rather than by reasoning or understanding.",
        },
        {
          type: "paragraph",
          text: "A well-known example is Eugene Goostman, a chatbot designed to imitate a 13-year-old Ukrainian boy. Its humor, confusion, and erratic replies convinced several judges it was human. The experiment revealed how easily personality and randomness can masquerade as intelligence, blurring the line between simulation and understanding.",
        },

        {
          type: "header",
          text: "The Chinese Room Argument",
        },
        {
          type: "image",
          src: "/topics/ai/searle.png",
          alt: "Illustration of the Chinese Room Argument",
          caption: "John Searle and The Chinese Room Argument",
        },
        {
          type: "paragraph",
          text: "Philosopher John Searle challenged the idea that intelligent behavior implies true understanding. In his Chinese Room thought experiment, a person who does not know Chinese sits in a room with a detailed rulebook explaining how to respond to Chinese characters slipped under the door. By following the rules, the person can produce perfect answers—convincing outsiders that they understand Chinese—yet they grasp no meaning at all.",
        },
        {
          type: "paragraph",
          text: "Searle argued that computers operate in the same way. They manipulate symbols according to formal rules but have no awareness of what the symbols mean. Even if a program passes the Turing Test, it does not necessarily possess understanding or consciousness—it only behaves as though it does.",
        },

        {
          type: "header",
          text: "Is a Self-Driving Car Intelligent?",
        },
        {
          type: "paragraph",
          text: "The Chinese Room argument highlights the difference between acting intelligently and being intelligent. A self-driving car can recognize lanes, detect obstacles, and make split-second decisions, but it does not 'know' what a pedestrian or a traffic sign truly is. It processes data and follows algorithms without subjective awareness. Its behavior is intelligent in appearance, not in experience.",
        },

        {
          type: "header",
          text: "How Important Is Philosophy in Practice?",
        },
        {
          type: "image",
          src: "/topics/ai/mccarthy.png",
          alt: "Illustration of John McCarthy",
          caption: "John McCarthy",
        },
        {
          type: "paragraph",
          text: "Philosophical questions about mind and consciousness are profound but notoriously difficult to answer. As computer scientist John McCarthy once observed, 'The philosophy of AI has about as much influence on AI practice as the philosophy of science has on scientific practice.' In short, while philosophy helps us think critically about what intelligence means, practical AI focuses on solving specific technical problems rather than defining thought itself.",
        },

        {
          type: "header",
          text: "General vs. Narrow AI",
        },
        {
          type: "paragraph",
          text: "AI research distinguishes between general and narrow intelligence. Narrow AI refers to systems designed for specific tasks—face recognition, music recommendation, or autonomous driving. General AI, or AGI, would match human versatility and reasoning across any domain. All existing AI today is narrow; AGI remains hypothetical, more a philosophical concept than an engineering reality.",
        },

        {
          type: "header",
          text: "Strong vs. Weak AI",
        },
        {
          type: "paragraph",
          text: "Another distinction divides strong and weak AI. Strong AI would possess consciousness and self-awareness—a true mind. Weak AI, which includes all systems today, can perform intelligent actions without actual understanding. It follows rules, processes data, and produces outcomes that appear smart, but it does not think or feel as humans do.",
        },

        {
          type: "paragraph",
          text: "The philosophy of AI explores what it means to think, know, or be aware. Thought experiments like the Turing Test and the Chinese Room reveal both the possibilities and limits of artificial intelligence. Machines can imitate reasoning and simulate conversation, but genuine understanding—at least for now—remains a uniquely human trait.",
        },
      ],
    },
    {
      slug: "solving-problems-with-ai",
      title: "Solving Problems with Artificial Intelligence",
      excerpt:
        "A historical overview of how AI emerged through logic, search, and early problem-solving research.",
      content: [
        {
          type: "paragraph",
          text: "Artificial intelligence is almost as old as computer science itself. Long before the first actual computers existed, people were already fascinated by the idea of automated reasoning and machine intelligence. One of the key figures in this story was Alan Turing, whose ideas laid the foundation for both AI and modern computing.",
        },
        {
          type: "paragraph",
          text: "In addition to the famous Turing Test, one of his greatest contributions was the realization that anything which can be computed numerically can also be automated. This became the theoretical basis for how computers can perform logical operations and problem solving.",
        },
        {
          type: "header",
          text: "Turing’s Machine and the Birth of Programmable Computing",
        },
        {
          type: "paragraph",
          text: "Turing designed a simple conceptual device now known as the Turing Machine — a theoretical model capable of performing any computation that can be described mathematically. Although it wasn’t a practical device, it inspired the creation of the programmable computer, a system that could carry out different tasks depending on its programming.",
        },
        {
          type: "paragraph",
          text: "Before programmable computers, each task would have required its own separate physical machine. Thanks to Turing’s insight, one machine could perform countless tasks simply by changing the program — a revolutionary concept that became the core of programming. Some of the earliest programmable computers were even used during World War II to decrypt German ciphers, in a project where Turing himself played a crucial role.",
        },
        {
          type: "header",
          text: "John McCarthy and the Birth of Artificial Intelligence",
        },
        {
          type: "paragraph",
          text: "The English term artificial intelligence (AI) is credited to John McCarthy (1927–2011), often called the father of AI. He coined the term in 1956 when he organized the Dartmouth Conference in New Hampshire, USA — the event considered the official beginning of AI as a field of research.",
        },
        {
          type: "paragraph",
          text: "McCarthy built on Turing’s idea of automating reasoning, proposing that every part of learning or intelligence could, in principle, be described precisely enough to be simulated by a machine. This remains one of AI’s central ideas — that intelligence, even human-like intelligence, can be represented as computational steps that a machine can follow.",
        },
        {
          type: "header",
          text: "Why Search and Games Became Early AI Goals",
        },
        {
          type: "paragraph",
          text: "As computers evolved in the 1950s, AI experiments began to take shape. Some of the earliest and most influential applications were related to games. Games provided ideal testing environments — limited, rule-based worlds that could be easily modeled for computation. Classic board games like checkers, chess, and Go became essential testbeds for AI research and continue to influence modern AI systems today.",
        },
        {
          type: "paragraph",
          text: "During the 1960s, AI research progressed rapidly, especially in search and planning. Algorithms such as minimax and alpha–beta pruning were developed during this time. These methods became the foundation for game-playing AIs and remain relevant even today, although many improved variations have been created since.",
        },
        { type: "header", text: "Conclusion" },
        {
          type: "paragraph",
          text: "The history of AI shows that the field has always been driven by one idea — that reasoning, decision-making, and problem-solving can be described as computation. From Turing’s theoretical machine to McCarthy’s vision of simulating intelligence, and from wartime code-breaking to modern search algorithms, AI has evolved as both a scientific and philosophical pursuit.",
        },
      ],
    },
    {
      slug: "games-and-search",
      title: "Games and Search in Artificial Intelligence",
      excerpt:
        "How game theory, decision trees, and the minimax algorithm shaped modern AI.",
      content: [
        {
          type: "paragraph",
          text: "Games have played a key role in the development of artificial intelligence since its early days. To explore the logic behind intelligent decision-making, researchers often turned to two-player perfect-information games such as tic-tac-toe and chess. These games provide a controlled environment where every move, rule, and possible outcome can be clearly defined — making them ideal for testing algorithms that simulate reasoning, planning, and foresight.",
        },
        { type: "header", text: "The Example of Tic-Tac-Toe" },
        {
          type: "paragraph",
          text: "Imagine a game of tic-tac-toe between two players, Max and Minni. Each possible position of the game board can be represented as a state, and every move changes the game from one state to another. This idea leads to the key concept of the game tree — a structure where each node represents a possible game state and each branch represents a move.",
        },
        {
          type: "paragraph",
          text: "The goal of AI is to explore this tree and determine the best move — the one that maximizes the chances of winning while minimizing the opponent’s advantage.",
        },
        { type: "header", text: "Minimizing and Maximizing" },
        {
          type: "paragraph",
          text: "In AI terms, each player has a goal: Max tries to maximize the outcome value (+1 for a win), and Min tries to minimize it (–1 for a loss). By assigning numeric values to each end state, the AI can reason backwards through the tree and predict the best possible move, assuming both players play optimally.",
        },
        { type: "header", text: "From End States to Decisions" },
        {
          type: "paragraph",
          text: "When the AI evaluates the game tree, it can work backward from end states to the root. At Min’s turns, it selects the smallest value, and at Max’s turns, the largest. Repeating this process determines the value of the root node — the value of the game — showing whether the starting position leads to a win, loss, or draw under perfect play.",
        },
        { type: "header", text: "The Minimax Algorithm" },
        {
          type: "image",
          src: "/topics/ai/minmax.png",
          alt: "Illustration of the Minimax Algorithm in a game tree",
          caption: "Minimax Algorithm Example",
        },
        {
          type: "paragraph",
          text: "This reasoning forms the foundation of the minimax algorithm, one of the earliest and most influential methods in game-playing AI. It systematically explores all possible moves, alternately maximizing and minimizing values to determine optimal decisions. In theory, minimax can find the best move in any deterministic, two-player, zero-sum game — such as tic-tac-toe, connect four, chess, or Go.",
        },
        { type: "header", text: "The Problem of Large Game Trees" },
        {
          type: "paragraph",
          text: "A major limitation of minimax is the rapid growth in the number of possible game states — known as combinatorial explosion. In chess, for example, each position has an average of 35 possible moves. Just ten moves ahead would require examining more than 2.7 trillion possibilities, far beyond practical limits.",
        },
        { type: "header", text: "Heuristics and Practical AI" },
        {
          type: "paragraph",
          text: "To handle this complexity, AI systems use heuristics — simplified evaluation functions that estimate the quality of a position. In chess, heuristics may value pieces differently (queens being strongest) or reward control of the center. These techniques let AI make strong decisions without exploring every possible outcome.",
        },
        {
          type: "paragraph",
          text: "IBM’s Deep Blue, which defeated Garry Kasparov in 1997, used a combination of minimax and advanced heuristics to analyze millions of positions per second, showing how these principles can work at scale.",
        },
        { type: "header", text: "Conclusion" },
        {
          type: "paragraph",
          text: "The study of games has shaped artificial intelligence for decades. Through concepts like game trees, minimax, and heuristic evaluation, researchers have learned how to formalize reasoning and strategy. Even though real-world problems are rarely as structured as board games, these same principles — exploring possibilities, optimizing outcomes, and making informed decisions — remain at the heart of AI today.",
        },
      ],
    },

    {
      slug: "types-of-machine-learning",
      title: "Types of Machine Learning",
      excerpt: "An introduction to the main categories of machine learning.",
      content: [
        {
          type: "paragraph",
          text: "A classic example used to demonstrate machine learning is handwritten digit recognition. In this task, the goal is to teach a computer to correctly identify digits (0–9) from images — something that’s easy for humans but surprisingly challenging for machines.",
        },
        {
          type: "image",
          src: "/topics/ai/mnist.png",
          alt: "Examples of handwritten digits from the MNIST dataset",
          caption: "Handwritten Digits from the MNIST Dataset",
        },
        {
          type: "paragraph",
          text: "Researchers often use a famous dataset called MNIST, which contains thousands of handwritten numbers. Each image is labeled with the correct digit, even though many of them are messy or unclear. Instead of writing thousands of fixed rules like 'if there’s a circle, it’s probably a zero,' machine learning allows the computer to learn the patterns automatically from examples. This is much more efficient — and much more powerful.",
        },
        {
          type: "header",
          text: "The Three Main Types of Machine Learning",
        },
        {
          type: "paragraph",
          text: "Machine learning can be divided into three main categories, depending on the type of problem and the data available.",
        },
        {
          type: "header",
          text: "1. Supervised Learning — Learning with a Teacher",
        },
        {
          type: "paragraph",
          text: "In supervised learning, the algorithm is given examples that already include the correct answer. For each input (like a photo of a traffic sign), the model learns to predict the right output (like 'stop sign' or 'speed limit'). This is like learning with a teacher — you show the system examples and correct answers until it can make predictions on its own.",
        },
        {
          type: "paragraph",
          text: "Examples include recognizing digits from the MNIST dataset, detecting fake Twitter accounts (input: user behavior, output: 'fake' or 'real'), or predicting a house price based on location, size, and condition — a task known as regression because the output is a numerical value.",
        },
        {
          type: "paragraph",
          text: "Supervised learning is used in many applications such as spam filters, medical diagnosis, and stock price forecasting.",
        },
        {
          type: "header",
          text: "2. Unsupervised Learning — Finding Patterns without Guidance",
        },
        {
          type: "paragraph",
          text: "In unsupervised learning, there are no labels or correct answers. The goal is not to predict outcomes but to discover hidden patterns or structures in the data. This might mean grouping similar examples together (clustering) or visualizing relationships between data points.",
        },
        {
          type: "paragraph",
          text: "For example, a grocery store could analyze customer purchases using loyalty card data. Without knowing anything about the customers beforehand, an unsupervised algorithm might find groups such as 'budget health enthusiasts,' 'seafood lovers,' or 'pizza and cola every day' shoppers. The algorithm can identify these clusters, but humans still need to interpret and name them meaningfully.",
        },
        {
          type: "paragraph",
          text: "Another interesting form of unsupervised learning is generative learning. Generative models such as Generative Adversarial Networks (GANs) can create realistic new data — for instance, human face images that look completely real but are actually computer-generated.",
        },
        {
          type: "paragraph",
          text: "Generative learning has grown rapidly in recent years and has led to important discussions about synthetic media, creativity, and ethics. This topic will be explored later in the course in Part 6.",
        },
        {
          type: "header",
          text: "3. Reinforcement Learning — Learning by Trial and Error",
        },
        {
          type: "paragraph",
          text: "Reinforcement learning is based on the idea of learning from interaction. An agent takes actions in an environment and receives rewards or penalties based on its performance. Over time, it learns to maximize rewards — much like how humans and animals learn through experience.",
        },
        {
          type: "paragraph",
          text: "Examples include self-driving cars learning to stay on the road safely, robots learning to walk, or game-playing AIs like AlphaGo that improve by playing millions of rounds against themselves.",
        },
        {
          type: "paragraph",
          text: "This type of learning is especially useful in complex environments where feedback is delayed or only received at the end of a task — such as completing a race, winning a game, or avoiding collisions.",
        },
        {
          type: "header",
          text: "Example: Nearest Neighbor Methods and Recommendations",
        },
        {
          type: "image",
          src: "/topics/ai/nnm.png",
          alt: "Illustration of Nearest Neighbor Methods",
          caption: "Nearest Neighbor Methods Example",
          size: "large",
        },
        {
          type: "paragraph",
          text: "Some models make predictions by comparing a new example to known cases and borrowing their labels. This is the nearest neighbor idea. You can picture examples on a two-dimensional plot, where each point has two features, such as a patient’s age and blood sugar level. A new point is assigned to the class of its closest neighbor, which might be shown as the green class in a diagram.",
        },
        {
          type: "paragraph",
          text: "Screens are two-dimensional, but real data can include many features. In practice, the nearest neighbor concept generalizes to any number of dimensions, even fifty or more. We cannot draw a fifty-dimensional plot, so we define similarity numerically.",
        },
        {
          type: "paragraph",
          text: "What does “nearest” mean? In simple geometric settings, distance is often measured with Euclidean distance, the straight-line length between two points. For text, code, or other abstract data, geometric distance may not be meaningful, so other similarity measures are used. The choice of distance is always task-dependent.",
        },
        {
          type: "paragraph",
          text: "In MNIST digit recognition, one simple similarity measure compares pixel values at the same positions, then sums the agreements. This works because MNIST images are centered. It is sensitive to small shifts or rotations, however. For example, sliding a “1” a few pixels sideways may look identical to us, yet pixel-by-pixel comparison changes significantly.",
        },
        {
          type: "paragraph",
          text: "The same neighbor logic appears in recommendation systems. Collaborative filtering predicts what a user might like based on the behavior of other, similar users. If people with listening habits like yours enjoy a newly added 1980s disco track, the system will likely recommend it to you. If most similar users stop after a few seconds, the system will not push it aggressively. These methods can improve relevance, but they can also create filter bubbles if not designed carefully.",
        },
        {
          type: "header",
          text: "Common Pitfalls — Overfitting",
        },
        {
          type: "image",
          src: "/topics/ai/overfit.png",
          alt: "Illustration of Overfitting in Machine Learning",
          caption: "Underfitting, Overfitting and Right Fit example",
        },
        {
          type: "paragraph",
          text: "When training a model, one of the biggest mistakes is overfitting — when the model becomes too perfect on training data but fails on new data. It’s like a student memorizing all the answers instead of truly understanding the topic.",
        },
        {
          type: "paragraph",
          text: "Flexible models such as neural networks can overfit easily if the dataset is small. Simpler models like linear regression are less flexible but often more generalizable. The key is balance — finding a model that’s not too rigid and not too flexible.",
        },
        {
          type: "paragraph",
          text: "Avoiding overfitting and selecting the right level of model complexity is one of the most essential skills for any data scientist.",
        },

        {
          type: "paragraph",
          text: "Machine learning is about teaching computers to learn from data rather than being programmed with fixed rules. Supervised learning learns from labeled examples, unsupervised learning discovers hidden structures, and reinforcement learning learns through feedback and experience. In all cases, the goal is the same — to build models that generalize well, not just memorize patterns.",
        },
      ],
    },
    {
      slug: "regression-basics",
      title: "Regression: Linear and Logistic",
      excerpt:
        "A concise guide to linear and logistic regression, when to use each, and what to study next.",
      content: [
        {
          type: "paragraph",
          text: "Regression is supervised learning that predicts numeric or probabilistic outcomes. We introduce linear regression and its close relative, logistic regression, and clarify how they differ from classification methods like nearest neighbors.",
        },

        {
          type: "header",
          text: "Regression vs. Classification",
        },
        {
          type: "paragraph",
          text: "Both are supervised learning, yet their targets differ. Classification selects from a finite set of labels, such as spam or not spam, or digits 0 to 9. Regression outputs a real-valued number, such as price, distance, or revenue. Choose regression when the answer is continuous; choose classification when the answer is a category.",
        },

        {
          type: "header",
          text: "Linear Regression, Intuition",
        },
        {
          type: "paragraph",
          text: "Linear regression models a target as a weighted sum of input features plus an intercept. Think of a shopping bill where the total equals quantities times prices, then add a base fee if needed. Linearity means that increasing a feature by a fixed amount changes the prediction by a constant amount.",
        },

        {
          type: "header",
          text: "Coefficients, Weights, and Intercept",
        },
        {
          type: "paragraph",
          text: "Each feature has a coefficient that expresses its marginal effect on the prediction, while the intercept represents the baseline value when all features are zero. These parameters are often directly interpretable and may be more insightful than the predictions themselves.",
        },

        {
          type: "header",
          text: "Learning the Model",
        },
        {
          type: "paragraph",
          text: "Given input features and true targets, training estimates coefficients that minimize prediction error. The common approach is least squares, with closed-form or iterative solvers. Real data includes noise; therefore the solution fits trends rather than exact totals.",
        },

        {
          type: "header",
          text: "Visualizing and Interpreting",
        },
        {
          type: "paragraph",
          text: "Scatter plots with a fitted line help build intuition. The slope shows change per unit of a feature; the intercept shows the baseline. Remember that association does not prove causation; external factors may drive observed relationships.",
        },
        {
          type: "image",
          src: "/topics/ai/linear.png",
          alt: "Scatter plot with a linear fit line",
          caption: "Data points with a fitted linear regression line",
        },

        {
          type: "header",
          text: "Logistic Regression",
        },
        {
          type: "paragraph",
          text: "Logistic regression uses a linear combination of features, then maps it through the sigmoid function to produce probabilities for classes. With a threshold, probabilities convert to class labels. The model also supports multiclass problems through one-vs-rest or softmax extensions and can provide calibrated probabilities for decision making.",
        },

        {
          type: "header",
          text: "When to Use Which",
        },
        {
          type: "paragraph",
          text: "Use linear regression for continuous outcomes such as price, demand, or risk score. Use logistic regression for categorical outcomes, such as pass or fail, purchase or not, spam or not. Both benefit from careful feature engineering, scaling, and regularization.",
        },

        {
          type: "header",
          text: "Model Quality and Metrics",
        },
        {
          type: "paragraph",
          text: "For linear regression, track MSE, RMSE, MAE, and R². For logistic regression, use accuracy, precision, recall, F1, ROC AUC, and PR AUC. Choose metrics that match business cost, for example the cost of false positives versus false negatives.",
        },

        {
          type: "header",
          text: "Data Quality and Bias",
        },
        {
          type: "paragraph",
          text: "Good results require sufficient, relevant, and representative data. Poor coverage, label noise, or hidden biases degrade performance and may mislead interpretation. Always validate on held-out data and check for demographic or feature-related bias.",
        },

        {
          type: "header",
          text: "Common Uses",
        },
        {
          type: "paragraph",
          text: "Linear regression: ad click forecasts, retail demand, housing prices, cost estimation, insurance claims, crime rate trends. Logistic regression: risk scoring, medical outcomes, credit default prediction, churn, spam detection, and many other binary or multiclass tasks.",
        },

        {
          type: "header",
          text: "What did I learn?",
        },
        {
          type: "paragraph",
          text: "Machine learning is needed because many real-world problems are too complex for fixed rule-based programming. Instead of explicitly coding instructions, we let algorithms find patterns in data and use them to make predictions or decisions automatically. This makes machine learning essential in areas like image recognition, recommendation systems, forecasting, and natural language understanding.",
        },
        {
          type: "paragraph",
          text: "Supervised and unsupervised learning differ mainly in the presence of labels. In supervised learning, each example includes the correct answer, allowing the model to learn direct input–output relationships. Unsupervised learning lacks these labels, focusing instead on discovering hidden structures, clusters, or relationships in data without predefined outcomes.",
        },
        {
          type: "paragraph",
          text: "In supervised learning, three core methods illustrate the main ideas. The nearest neighbor classifier predicts a class by finding examples most similar to a new input. Linear regression estimates continuous values by combining input features with learned weights. Logistic regression extends linear regression to classification by mapping predictions to probabilities between 0 and 1. Together, these models form the foundation for more advanced techniques used throughout artificial intelligence.",
        },
      ],
    },
  ],
};
