{
  id: 5,
  title: "ORDER BY",
  icon: "📊",
  sections: [
    {
      heading: "ORDER BY: Used for Sorting Results",
      content: "ORDER BY sorts the result set. Default is ASC (ascending). Use DESC for descending.",
      subsections: [
        {
          title: "ORDER BY Examples",
          code: `-- Sort by salary descending (highest first) - selecting all columns
SELECT * 
FROM Employees 
ORDER BY Salary DESC;

-- Sort by salary descending (highest first) - selecting only few columns
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
  ],
}
