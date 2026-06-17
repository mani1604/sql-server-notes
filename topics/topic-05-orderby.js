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

-- Sort by salary ascending (lowest first) - selecting only few columns
SELECT FirstName, LastName, Salary 
FROM Employees 
ORDER BY Salary ASC;

-- Sort by LastName ascending (lowest first) - selecting all columns
SELECT * 
FROM Employees 
ORDER BY LastName ASC;

-- Sort by data in hiring order - display who got hired first - selecting only few columns
SELECT EmployeeID, Email, Hiredate 
FROM Employees 
ORDER BY Hiredate ASC;

-- Sort by data in order of hiring date (employee who hired last should be on top) and select only EmployeeID, Salary and HireDate

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
