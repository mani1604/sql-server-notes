{
  id: 1,
  title: "Introduction to SQL & SQL Server",
  icon: "🗄️",
  sections: [
    {
      heading: "What is SQL?",
      content: `SQL (Structured Query Language) is the standard language used to communicate with relational databases. It allows you to create, read, update, and delete data — commonly known as CRUD operations.

SQL was first developed by IBM in the 1970s and became an ANSI/ISO standard in 1986. Today, virtually every relational database system uses SQL as its core language.`,
      subsections: [
        {
          title: "Why SQL Matters",
          bullets: [
            "Universal language: works across MySQL, PostgreSQL, Oracle, SQL Server, and more",
            "Declarative syntax: you describe *what* you want, not *how* to get it",
            "Handles massive datasets with speed and efficiency",
            "Foundation for data analysis, reporting, backend development, and data engineering",
          ],
        },
      ],
    },
    {
      heading: "What is Microsoft SQL Server?",
      content: `Microsoft SQL Server (often called MSSQL) is a Relational Database Management System (RDBMS) developed by Microsoft. It stores and retrieves data as requested by applications across a network.

SQL Server uses T-SQL (Transact-SQL), Microsoft's extension of standard SQL, which adds procedural programming, local variables, error handling, and more.`,
      subsections: [
        {
          title: "Popular SQL Server Editions",
          bullets: [
            "**Express**: Free, limited to 10 GB storage. Great for learning & small apps",
            "**Developer**: Free, full-featured, for development/testing only (not for production)",
            "**Standard**: Paid, for mid-tier apps and databases",
            "**Enterprise**: Paid, for mission-critical, large-scale production environments",
          ],
        },
      ],
    },
    {
      heading: "Key Components of SQL Server",
      content: "SQL Server is made up of several core components that work together to store, manage, and deliver data.",
      subsections: [
        {
          title: "Core Components",
          table: {
            headers: ["Component", "Description"],
            rows: [
              ["Database Engine", "The core service for storing, processing, and securing data"],
              ["SQL Server Management Studio (SSMS)", "GUI tool for managing SQL Server databases"],
              ["T-SQL", "Microsoft's SQL dialect with procedural extensions"],
              ["SQL Server Agent", "Automates administrative tasks and scheduled jobs"],
              ["SQL Server Integration Services (SSIS)", "ETL tool for data migration and transformation"],
              ["SQL Server Reporting Services (SSRS)", "Creates and delivers reports"],
              ["SQL Server Analysis Services (SSAS)", "OLAP and data mining capabilities"],
            ],
          },
        },
        {
          title: "Key SQL Command Categories",
          bullets: [
            "**DDL (Data Definition Language)**: CREATE, ALTER, DROP (defines structure)",
            "**DML (Data Manipulation Language)**: SELECT, INSERT, UPDATE, DELETE (manipulates data)",
            "**DCL (Data Control Language)**: GRANT, REVOKE (controls permissions)",
            "**TCL (Transaction Control Language)**: COMMIT, ROLLBACK, SAVEPOINT (manages transactions)",
          ],
        },
      ],
    },
  ],
}
