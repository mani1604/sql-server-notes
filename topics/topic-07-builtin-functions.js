{
  id: 7,
  title: "BUILT-IN Functions",
  icon: "🛠️",
  sections: [
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
          title: "CASE Expression - Conditional Logic",
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
