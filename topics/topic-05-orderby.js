{
  id: 5,
  title: "ORDER BY",
  icon: "🔍",
  sections: [
    {
      heading: "ORDER BY: Used for Sorting Results",
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
            "**WHERE** filters rows *before* grouping - works on individual row values",
            "**HAVING** filters groups *after* grouping - works on aggregate results",
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
  ],
}
