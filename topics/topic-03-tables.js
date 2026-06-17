{
  id: 3,
  title: "Create Database, Table & Insert Data",
  icon: "🏗️",
  sections: [
    {
      heading: "Creating a Database",
      content: "A database is a container that holds tables, views, stored procedures, and other objects. Let's create one using T-SQL.",
      subsections: [
        {
          title: "Syntax",
          code: `-- Create a new database
CREATE DATABASE CompanyDB;

-- Switch to the new database
USE CompanyDB;

-- Verify current database
SELECT DB_NAME() AS CurrentDatabase;`,
        },
        {
          title: "Key Notes",
          bullets: [
            "Database names are case-insensitive in SQL Server by default",
            "Use USE DatabaseName to switch between databases",
            "Always run USE before creating tables to ensure you're in the right database",
          ],
        },
      ],
    },
    {
      heading: "Creating a Table",
      content: "A table stores data in rows and columns. Each column has a name and a data type.",
      subsections: [
        {
          title: "Common SQL Server Data Types",
          table: {
            headers: ["Data Type", "Description", "Example"],
            rows: [
              ["INT", "Whole numbers", "1, 42, -7"],
              ["VARCHAR(n)", "Variable-length text", "'John', 'New York'"],
              ["NVARCHAR(n)", "Unicode variable-length text", "'José', '東京'"],
              ["DECIMAL(p,s)", "Exact numeric with decimals", "12345.67"],
              ["FLOAT", "Approximate floating point", "3.14159"],
              ["DATE", "Date only (no time)", "2024-01-15"],
              ["DATETIME", "Date + Time", "2024-01-15 10:30:00"],
              ["BIT", "Boolean (0 or 1)", "1 (true), 0 (false)"],
            ],
          },
        },
        {
          title: "Create Table Example",
          code: `USE CompanyDB;

-- Create an Employees table
CREATE TABLE Employees (
    EmployeeID   INT           PRIMARY KEY IDENTITY(1,1),
    FirstName    VARCHAR(50)   NOT NULL,
    LastName     VARCHAR(50)   NOT NULL,
    Email        VARCHAR(100)  UNIQUE NOT NULL,
    Department   VARCHAR(50),
    Salary       DECIMAL(10,2) DEFAULT 0.00,
    HireDate     DATE          NOT NULL,
    IsActive     BIT           DEFAULT 1
);`,
        },
        {
          title: "Understanding Constraints",
          bullets: [
            "**PRIMARY KEY** — Uniquely identifies each row; cannot be NULL",
            "**IDENTITY(1,1)** — Auto-increments the value starting at 1, stepping by 1",
            "**NOT NULL** — The column must always have a value",
            "**UNIQUE** — All values in the column must be different",
            "**DEFAULT** — Value used when none is provided on insert",
          ],
        },
      ],
    },
    {
      heading: "Inserting Data",
      content: "The INSERT INTO statement adds new rows to a table.",
      subsections: [
        {
          title: "Basic INSERT Syntax",
          code: `-- Insert a single row
INSERT INTO Employees (FirstName, LastName, Email, Department, Salary, HireDate)
VALUES ('Alice', 'Johnson', 'alice@company.com', 'Engineering', 85000.00, '2022-03-15');

-- Insert multiple rows at once
INSERT INTO Employees (FirstName, LastName, Email, Department, Salary, HireDate)
VALUES 
    ('Bob',    'Smith',   'bob@company.com',    'Marketing',   62000.00, '2021-07-01'),
    ('Carol',  'White',   'carol@company.com',  'Engineering', 92000.00, '2020-11-20'),
    ('David',  'Brown',   'david@company.com',  'HR',          55000.00, '2023-01-10'),
    ('Emma',   'Davis',   'emma@company.com',   'Marketing',   67000.00, '2022-09-05'),
    ('Frank',  'Wilson',  'frank@company.com',  'Engineering', 78000.00, '2021-04-18');`,
        },
        {
          title: "Verify Inserted Data",
          code: `-- View all data in the table
SELECT * FROM Employees;`,
        },
        {
          title: "Insert Best Practices",
          bullets: [
            "Always specify column names explicitly — don't rely on column order",
            "Omit IDENTITY columns — SQL Server fills them automatically",
            "Use single quotes for text and date values",
            "Inserting multiple rows in one statement is faster than multiple INSERT statements",
          ],
        },
      ],
    },
    {
      heading: "Modifying & Dropping Objects",
      content: "Sometimes you need to change table structure or remove objects.",
      subsections: [
        {
          title: "ALTER and DROP Examples",
          code: `-- Add a new column
ALTER TABLE Employees ADD PhoneNumber VARCHAR(20);

-- Modify a column's data type
ALTER TABLE Employees ALTER COLUMN PhoneNumber VARCHAR(15);

-- Drop a column
ALTER TABLE Employees DROP COLUMN PhoneNumber;

-- Drop the entire table (careful — data is lost!)
-- DROP TABLE Employees;

-- Drop the database (careful — everything inside is lost!)
-- DROP DATABASE CompanyDB;`,
        },
      ],
    },
  ],
}
