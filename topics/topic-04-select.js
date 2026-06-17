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
  ],
}
