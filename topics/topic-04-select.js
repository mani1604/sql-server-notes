{
  id: 4,
  title: "SELECT Query in Detail",
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
      heading: "WHERE Clause — Filtering Data",
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
      heading: "ORDER BY — Sorting Results",
      content: "ORDER BY sorts the result set. Default is ASC (ascending). Use DESC for descending.",
      subsections: [
        {
          title: "ORDER BY Examples",
          code: `-- Sort by salary descending (highest first)
SELECT FirstName, LastName, Salary 
FROM Employees 
ORDER BY Salary DESC;

-- Sort by department, then by last name
SELECT FirstName, LastName, Department 
FROM Employees 
ORDER BY Department ASC, LastName ASC;

-- Order by column position (2nd and 3rd column)
SELECT FirstName, LastName, Salary 
FROM Employees 
ORDER BY 3 DESC, 2 ASC;`,
        },
      ],
    },
    {
      heading: "Aggregate Functions",
      content: "Aggregate functions perform calculations on a set of rows and return a single value.",
      subsections: [
        {
          title: "Common Aggregate Functions",
          table: {
            headers: ["Function", "Description", "Example"],
            rows: [
              ["COUNT()", "Counts rows", "COUNT(*) or COUNT(column)"],
              ["SUM()", "Total of values", "SUM(Salary)"],
              ["AVG()", "Average of values", "AVG(Salary)"],
              ["MIN()", "Lowest value", "MIN(Salary)"],
              ["MAX()", "Highest value", "MAX(Salary)"],
            ],
          },
        },
        {
          title: "Aggregate Examples",
          code: `-- Total number of employees
SELECT COUNT(*) AS TotalEmployees FROM Employees;

-- Average, min, max salary
SELECT 
    AVG(Salary) AS AvgSalary,
    MIN(Salary) AS MinSalary,
    MAX(Salary) AS MaxSalary
FROM Employees;

-- Count only active employees
SELECT COUNT(*) AS ActiveEmployees 
FROM Employees WHERE IsActive = 1;`,
        },
      ],
    },
    {
      heading: "GROUP BY & HAVING",
      content: "GROUP BY groups rows sharing a value, so aggregates apply per group. HAVING filters those groups.",
      subsections: [
        {
          title: "GROUP BY Examples",
          code: `-- Count employees per department
SELECT Department, COUNT(*) AS EmployeeCount
FROM Employees
GROUP BY Department;

-- Average salary per department
SELECT 
    Department,
    COUNT(*)        AS HeadCount,
    AVG(Salary)     AS AvgSalary,
    SUM(Salary)     AS TotalPayroll
FROM Employees
GROUP BY Department
ORDER BY TotalPayroll DESC;

-- HAVING: show departments with avg salary above 70k
SELECT Department, AVG(Salary) AS AvgSalary
FROM Employees
GROUP BY Department
HAVING AVG(Salary) > 70000;`,
        },
        {
          title: "WHERE vs HAVING",
          bullets: [
            "**WHERE** filters rows *before* grouping — works on individual row values",
            "**HAVING** filters groups *after* grouping — works on aggregate results",
            "You can use both in the same query: WHERE first, then GROUP BY, then HAVING",
          ],
        },
        {
          title: "Combined Example",
          code: `-- Active employees only, grouped by dept, only depts with 2+ people
SELECT 
    Department,
    COUNT(*)    AS HeadCount,
    AVG(Salary) AS AvgSalary
FROM Employees
WHERE IsActive = 1                -- filter rows first
GROUP BY Department               -- then group
HAVING COUNT(*) >= 2              -- then filter groups
ORDER BY AvgSalary DESC;`,
        },
      ],
    },
    {
      heading: "TOP & DISTINCT",
      content: "Two useful modifiers that control the shape of your result set.",
      subsections: [
        {
          title: "TOP and DISTINCT Examples",
          code: `-- Top 3 highest-paid employees
SELECT TOP 3 FirstName, LastName, Salary 
FROM Employees 
ORDER BY Salary DESC;

-- Top 10% of earners
SELECT TOP 10 PERCENT FirstName, LastName, Salary
FROM Employees
ORDER BY Salary DESC;

-- Get unique department names (no duplicates)
SELECT DISTINCT Department FROM Employees;

-- Count distinct departments
SELECT COUNT(DISTINCT Department) AS UniqueDepts FROM Employees;`,
        },
      ],
    },
    {
      heading: "Useful Built-in Functions",
      content: "SQL Server provides many functions to transform and format data in your SELECT output.",
      subsections: [
        {
          title: "String Functions",
          code: `SELECT 
    UPPER(FirstName)                  AS UpperName,
    LOWER(LastName)                   AS LowerName,
    LEN(Email)                        AS EmailLength,
    CONCAT(FirstName, ' ', LastName)  AS FullName,
    SUBSTRING(Email, 1, 5)            AS EmailStart,
    REPLACE(Email, '@company.com', '') AS Username,
    LTRIM(RTRIM('  hello  '))         AS Trimmed
FROM Employees;`,
        },
        {
          title: "Date Functions",
          code: `SELECT 
    HireDate,
    YEAR(HireDate)                        AS YearHired,
    MONTH(HireDate)                       AS MonthHired,
    DAY(HireDate)                         AS DayHired,
    GETDATE()                             AS CurrentDateTime,
    DATEDIFF(YEAR, HireDate, GETDATE())   AS YearsEmployed,
    DATEADD(YEAR, 1, HireDate)            AS OneYearAnniversary,
    FORMAT(HireDate, 'MMMM dd, yyyy')     AS FormattedDate
FROM Employees;`,
        },
        {
          title: "CASE Expression — Conditional Logic",
          code: `-- Classify employees by salary range
SELECT 
    FirstName,
    LastName,
    Salary,
    CASE 
        WHEN Salary >= 90000 THEN 'Senior'
        WHEN Salary >= 70000 THEN 'Mid-Level'
        WHEN Salary >= 50000 THEN 'Junior'
        ELSE 'Entry'
    END AS SalaryGrade
FROM Employees
ORDER BY Salary DESC;`,
        },
        {
          title: "NULL Handling Functions",
          code: `-- ISNULL: replace NULL with a default
SELECT FirstName, ISNULL(Department, 'Unassigned') AS Dept
FROM Employees;

-- COALESCE: returns first non-NULL value
SELECT FirstName, COALESCE(Department, 'Unassigned') AS Dept
FROM Employees;

-- NULLIF: returns NULL if both values are equal
SELECT NULLIF(Salary, 0) AS NonZeroSalary FROM Employees;`,
        },
      ],
    },
  ],
}
