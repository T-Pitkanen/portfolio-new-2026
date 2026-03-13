export const dataTopics = {
  slug: "database-fundamentals",
  title: "Database Fundamentals",
  excerpt:
    "Core concepts essential for designing efficient, scalable, and reliable database systems.",
  content: [
    "A solid understanding of database theory is crucial for any backend developer or data architect. This section covers the foundational principles of structuring data, ensuring integrity through normalization, and creating efficient schemas. More content coming....",
  ],
  subtopics: [
    {
      slug: "database-normalization",
      title: "Database Normalization (1NF, 2NF, 3NF)",
      excerpt: "Organizing data to reduce redundancy, prevent anomalies, and ensure consistency.",
      content: [
        {
          type: "header",
          text: "Why Normalize?",
        },
        {
          type: "paragraph",
          text: "Database normalization is a design technique used to organize a relational database to minimize redundancy and dependency. The primary goal is to divide larger tables into smaller and less redundant tables and define relationships between them. Without normalization, databases often suffer from anomalies:",
        },
        {
          type: "list",
          items: [
            "Insertion Anomaly: Inability to add data to the database due to absence of other data.",
            "Deletion Anomaly: Unintended loss of data due to deletion of other data.",
            "Update Anomaly: Data inconsistency resulting from data redundancy and partial update.",
          ],
        },
        {
          type: "header",
          text: "First Normal Form (1NF)",
        },
        {
          type: "paragraph",
          text: "For a table to be in 1NF, it must ensure that every column contains atomic (indivisible) values and there are no repeating groups of columns. Each record must be unique.",
        },
        {
          type: "paragraph",
          text: "Example: Instead of storing 'Red, Blue, Green' in a single 'Colors' column, you would create a separate row for each color for that item, or move colors to a separate table.",
        },
        {
          type: "header",
          text: "Second Normal Form (2NF)",
        },
        {
          type: "paragraph",
          text: "A table is in 2NF if it is in 1NF and all non-key attributes are fully functional dependent on the primary key. This step removes partial dependencies, which occur when a non-key attribute depends on only a part of a composite primary key.",
        },
        {
          type: "paragraph",
          text: "Example: If you have a table comprising (StudentID, CourseID, ProfessorName), where StudentID and CourseID form the key, ProfessorName depends only on CourseID, not the specific Student. This violates 2NF. To fix it, move ProfessorName to a 'Courses' table.",
        },
        {
          type: "header",
          text: "Third Normal Form (3NF)",
        },
        {
          type: "paragraph",
          text: "A table is in 3NF if it is in 2NF and has no transitive dependencies. This means non-key attributes must depend only on the candidate key and not on other non-key attributes.",
        },
        {
          type: "paragraph",
          text: "Example: In an 'Orders' table with columns (OrderID, CustomerID, CustomerCity), CustomerCity depends on CustomerID, not directly on OrderID. This is a transitive dependency. Moving customer details to a separate 'Customers' table satisfies 3NF.",
        },
      ],
    },
    {
      slug: "er-diagrams",
      title: "Entity-Relationship (ER) Diagrams",
      excerpt: "Visualizing database structures and relationships before implementation.",
      content: [
        {
          type: "header",
          text: "The Database Blueprint",
        },
        {
          type: "paragraph",
          text: "ER Diagrams are the architectural blueprints of a database system. They allow developers and stakeholders to visualize the system's data requirements before any SQL code is written. They model the logical structure of a database by defining entities, attributes, and relationships.",
        },
        {
          type: "header",
          text: "Core Components",
        },
        {
          type: "subheader",
          text: "Entities",
        },
        {
          type: "paragraph",
          text: "Entities are objects or concepts that have data stored about them. In an ER diagram, they are represented by rectangles. Examples include 'Customer', 'Product', 'Order', or 'Employee'. Each entity typically maps to a database table.",
        },
        {
          type: "subheader",
          text: "Attributes",
        },
        {
          type: "paragraph",
          text: "Attributes describe the properties of an entity. Represented by ovals, they become the columns of the table. For a 'User' entity, attributes might be 'Username', 'Email', and 'PasswordHash'.",
        },
        {
          type: "subheader",
          text: "Relationships",
        },
        {
          type: "paragraph",
          text: "Relationships illustrate how two entities interact with each other. They are represented by diamonds connecting entities. For example, a Customer 'Places' an Order.",
        },
        {
          type: "header",
          text: "Cardinality and Crow's Foot Notation",
        },
        {
          type: "paragraph",
          text: "Cardinality defines the numerical relationship between entity instances:",
        },
        {
          type: "list",
          items: [
            "One-to-One (1:1): One row in Table A relates to one row in Table B (e.g., User to UserProfile).",
            "One-to-Many (1:N): One row in Table A relates to multiple rows in Table B (e.g., Customer to Orders). This is the most common relationship.",
            "Many-to-Many (M:N): Multiple rows in Table A relate to multiple rows in Table B (e.g., Students to Courses). This requires a junction table (or association table) to implement.",
          ],
        },
      ],
    },
    {
      slug: "keys-and-constraints",
      title: "Primary Keys, Foreign Keys, and Constraints",
      excerpt: "Enforcing data integrity and defining reliable relationships between tables.",
      content: [
        {
          type: "header",
          text: "The Role of Keys",
        },
        {
          type: "paragraph",
          text: "Keys are the backbone of relational theory. They ensure that we can distinctively identify every single record and traverse the relationships between data points reliably.",
        },
        {
          type: "subheader",
          text: "Primary Keys (PK)",
        },
        {
          type: "paragraph",
          text: "A Primary Key is a column (or set of columns) that uniquely identifies each row in a table. It cannot contain NULL values and must be unique. Common choices are auto-incrementing integers (IDs) or UUIDs.",
        },
        {
          type: "subheader",
          text: "Foreign Keys (FK)",
        },
        {
          type: "paragraph",
          text: "A Foreign Key is a field that links to the Primary Key of another table. This establishes a parent-child relationship. Foreign keys enforce 'Referential Integrity', ensuring that you cannot have an 'orphan' record that points to a non-existent parent.",
        },
        {
          type: "subheader",
          text: "Composite Keys",
        },
        {
          type: "paragraph",
          text: "Sometimes, a single column isn't enough to uniquely identify a record. A Composite Key uses two or more columns together to form a unique identifier. This is common in junction tables for many-to-many relationships (e.g., StudentID + CourseID).",
        },
        {
          type: "header",
          text: "Data Constraints",
        },
        {
          type: "paragraph",
          text: "Constraints are rules enforced at the database level to maintain accurate data. If an operation violates a constraint, the database aborts the transaction.",
        },
        {
          type: "list",
          items: [
            "NOT NULL: Guarantees that a column always returns a value.",
            "UNIQUE: Ensures all values in a column are different across the entire table.",
            "CHECK: Validates that data meets a specific condition (e.g., Age >= 18).",
            "DEFAULT: Provides a default value if none is specified during insertion.",
          ],
        },
      ],
    },
    {
      slug: "indexing-optimization",
      title: "Indexing and Query Optimization",
      excerpt: "Techniques to speed up data retrieval and improve database performance.",
      content: [
        {
          type: "header",
          text: "Understanding Indexes",
        },
        {
          type: "paragraph",
          text: "An index in a database is like an index in the back of a textbook. Instead of reading every page (a 'full table scan') to find a user by their email, the database consults the index to find the location of that specific record instantly. Indexes are typically implemented using B-Tree or Hash structures.",
        },
        {
          type: "header",
          text: "Clustered vs. Non-Clustered Indexes",
        },
        {
          type: "paragraph",
          text: "Clustered Index: Determines the physical order of data in the table. A table can have only one clustered index (usually the Primary Key).",
        },
        {
          type: "paragraph",
          text: "Non-Clustered Index: Creates a separate structure that points back to the original data rows. You can have multiple non-clustered indexes on a table.",
        },
        {
          type: "header",
          text: "The Trade-off",
        },
        {
          type: "paragraph",
          text: "While indexes speed up read operations (SELECT), they slow down write operations (INSERT, UPDATE, DELETE) because the index must be updated whenever the data changes. Over-indexing can degrade performance.",
        },
        {
          type: "header",
          text: "Query Optimization Best Practices",
        },
        {
          type: "list",
          items: [
            "Avoid SELECT *: Only fetch the columns you actually need to reduce network load and memory usage.",
            "Use Sargable Queries: Write queries that can take advantage of indexes (e.g., avoid using functions on indexed columns in the WHERE clause).",
            "Explain Plans: Use the EXPLAIN command to see how the database engine executes your query and identify bottlenecks.",
            "Normalize vs. Denormalize: Sometimes, joining many tables is too slow. Denormalization (adding redundancy) can optimize read-heavy workloads at the cost of storage and complexity.",
          ],
        },
      ],
    },
  ],
};
