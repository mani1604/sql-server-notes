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
SELECT EmployeeID, Salary, Hiredate 
FROM Employees 
ORDER BY Hiredate DESC;

-- Sort by department in ascending, then by last name by ascending
SELECT FirstName, LastName, Department 
FROM Employees 
ORDER BY Department ASC, LastName ASC;

-- Sort by department in ascending, then by last name by descending
SELECT FirstName, LastName, Department 
FROM Employees 
ORDER BY Department ASC, LastName DESC;

-- Order by column position (2nd and 3rd column)
SELECT FirstName, LastName, Salary 
FROM Employees 
ORDER BY 3 DESC, 2 ASC;`,
        },
      ],
    },
    {
      heading: "Practice Questions: ORDER BY",
      content: "Continuing with the Books table — write a query for each scenario below.",
      subsections: [
        {
          title: "Q1. Sort all books by Price in descending order (highest price first), showing all columns.",
          answer: `SELECT * 
    FROM Books 
    ORDER BY Price DESC;`,
        },
        {
          title: "Q2. Sort books by Price in descending order, showing only Title, Author, and Price.",
          answer: `SELECT Title, Author, Price 
    FROM Books 
    ORDER BY Price DESC;`,
        },
        {
          title: "Q3. Sort books by Price in ascending order (lowest price first), showing only Title and Price.",
          answer: `SELECT Title, Price 
    FROM Books 
    ORDER BY Price ASC;`,
        },
        {
          title: "Q4. Sort all books alphabetically by Title (A to Z), showing all columns.",
          answer: `SELECT * 
    FROM Books 
    ORDER BY Title ASC;`,
        },
        {
          title: "Q5. Display BookID, Title, and PublishedDate, sorted to show the oldest published book first.",
          answer: `SELECT BookID, Title, PublishedDate 
    FROM Books 
    ORDER BY PublishedDate ASC;`,
        },
        {
          title: "Q6. Display BookID, Price, and PublishedDate, sorted so the most recently published book appears on top.",
          answer: `SELECT BookID, Price, PublishedDate 
    FROM Books 
    ORDER BY PublishedDate DESC;`,
        },
        {
          title: "Q7. Sort books first by Genre (A–Z), and within each genre, sort by Title (A–Z). Show Title, Genre, and Author.",
          answer: `SELECT Title, Genre, Author 
    FROM Books 
    ORDER BY Genre ASC, Title ASC;`,
        },
        {
          title: "Q8. Using column position instead of column name, display Title, Author, and Price — sorted by the 3rd column descending, then the 2nd column ascending.",
          answer: `SELECT Title, Author, Price 
    FROM Books 
    ORDER BY 3 DESC, 2 ASC;`,
        },
      ],
    },
  ],
}
