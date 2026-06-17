{
  id: 4,
  title: "SELECT Query",
  icon: "🔍",
  sections: [
    {
      heading: "Basic SELECT Syntax",
      content: "SELECT is the most used SQL command. It retrieves data from one or more tables.",
      subsections: [
        {
          title: "Full SELECT Clause Order",
          code: `SELECT   [columns]
FROM     [table]
WHERE    [filter conditions]
GROUP BY [grouping columns]
HAVING   [filter on aggregates]
ORDER BY [sort columns]`,
        },
        {
          title: "Simple Examples",
          code: `-- Select all columns
SELECT * FROM Employees;

-- Select specific columns
SELECT FirstName, LastName, Department FROM Employees;

-- Select with alias (rename columns in output)
SELECT 
    FirstName AS [First Name],
    LastName  AS [Last Name],
    Salary    AS [Annual Salary]
FROM Employees;`,
        },
      ],
    },
    {
      heading: "WHERE Clause: Used for Filtering Data",
      content: "The WHERE clause filters rows based on conditions.",
      subsections: [
        {
          title: "Comparison & Logical Operators",
          table: {
            headers: ["Operator", "Meaning", "Example"],
            rows: [
              ["=", "Equal to", "Department = 'Engineering'"],
              ["<> or !=", "Not equal to", "Department <> 'HR'"],
              [">  <  >=  <=", "Comparison", "Salary > 70000"],
              ["AND", "Both conditions true", "Dept = 'Eng' AND Salary > 80000"],
              ["OR", "Either condition true", "Dept = 'HR' OR Dept = 'Marketing'"],
              ["NOT", "Negates condition", "NOT Department = 'HR'"],
              ["BETWEEN", "Within a range (inclusive)", "Salary BETWEEN 60000 AND 90000"],
              ["IN", "Matches a list of values", "Department IN ('HR', 'Marketing')"],
              ["LIKE", "Pattern matching", "FirstName LIKE 'A%'"],
              ["IS NULL", "Checks for NULL", "Department IS NULL"],
            ],
          },
        },
        {
          title: "WHERE Examples",
          code: `-- Employees in Engineering
SELECT * FROM Employees WHERE Department = 'Engineering';

-- Salary between 60k and 90k
SELECT FirstName, LastName, Salary 
FROM Employees 
WHERE Salary BETWEEN 60000 AND 90000;

-- Name starts with 'A' or 'B'
SELECT * FROM Employees WHERE FirstName LIKE 'A%' OR FirstName LIKE 'B%';

-- Multiple departments using IN
SELECT * FROM Employees WHERE Department IN ('Engineering', 'Marketing');

-- Active employees hired after 2022
SELECT * FROM Employees 
WHERE IsActive = 1 AND HireDate > '2022-01-01';`,
        },
        {
          title: "LIKE Pattern Characters",
          table: {
            headers: ["Pattern", "Meaning", "Example"],
            rows: [
              ["%", "Any sequence of characters", "LIKE 'A%' → starts with A"],
              ["_", "Any single character", "LIKE '_ob' → Bob, Rob, Job"],
              ["[abc]", "Any one of the listed chars", "LIKE '[AE]mma' → Amma or Emma"],
              ["[a-z]", "Any char in range", "LIKE '[A-C]%' → starts with A, B, or C"],
            ],
          },
        },
      ],
    },
    {
      heading: "Practice Questions: Basic SELECT",
      content: "These questions use a Books table (BookID, Title, Author, Genre, Price, PublishedDate, IsAvailable) instead of Employees, so you apply the concept rather than copy the example.",
      subsections: [
        {
          title: "Q1. Display all columns and rows from the Books table.",
          code: `SELECT * FROM Books;`,
        },
        {
          title: "Q2. Display only the Title and Author columns.",
          code: `SELECT Title, Author FROM Books;`,
        },
        {
          title: "Q3. Display Title and Price, renaming Price to 'Book Price' in the output.",
          code: `SELECT 
    Title,
    Price AS [Book Price]
FROM Books;`,
        },
        {
          title: "Q4. Display Title, Genre, and Price, renamed to 'Book Title', 'Category', and 'Cost'.",
          code: `SELECT 
    Title AS [Book Title],
    Genre AS Category,
    Price AS Cost
FROM Books;`,
        },
        {
          title: "Q5. Display each Author once, without duplicates, even if they wrote multiple books.",
          code: `SELECT DISTINCT Author FROM Books;`,
        },
      ],
    },
    {
      heading: "Practice Questions: WHERE Clause",
      content: "Continuing with the Books table — write a query for each scenario below.",
      subsections: [
        {
          title: "Q1. Find all books in the 'Fantasy' genre.",
          code: `SELECT * FROM Books WHERE Genre = 'Fantasy';`,
        },
        {
          title: "Q2. Find all books priced above 400.",
          code: `SELECT * FROM Books WHERE Price > 400;`,
        },
        {
          title: "Q3. Find all books priced between 300 and 500 (inclusive).",
          code: `SELECT * FROM Books WHERE Price BETWEEN 300 AND 500;`,
        },
        {
          title: "Q4. Find all books whose title starts with the word 'The'.",
          code: `SELECT * FROM Books WHERE Title LIKE 'The%';`,
        },
        {
          title: "Q5. Find all books that are currently available and were published after January 1, 2015.",
          code: `SELECT * FROM Books 
WHERE IsAvailable = 1 AND PublishedDate > '2015-01-01';`,
        },
        {
          title: "Q6. Find all books that are NOT in the 'Fantasy' genre.",
          code: `SELECT * FROM Books WHERE Genre <> 'Fantasy';`,
        },
        {
          title: "Q7. Find all books in either the 'Fantasy' or 'Mystery' genre, using IN.",
          code: `SELECT * FROM Books WHERE Genre IN ('Fantasy', 'Mystery');`,
        },
        {
          title: "Q8. Find all books where the Author column has not been filled in (is NULL).",
          code: `SELECT * FROM Books WHERE Author IS NULL;`,
        },
        {
          title: "Q9. Find all books priced above 300 that are also currently unavailable.",
          code: `SELECT * FROM Books 
WHERE Price > 300 AND IsAvailable = 0;`,
        },
      ],
    },
  ],
}