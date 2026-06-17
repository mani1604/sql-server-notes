{
  id: 2,
  title: "Download & Installation",
  icon: "⬇️",
  sections: [
    {
      heading: "Step 1: Download SQL Server",
      content: "We'll use SQL Server Developer Edition (free, full-featured for development).",
      subsections: [
        {
          title: "Download Steps",
          numbered: [
            'Visit https://www.microsoft.com/en-us/sql-server/sql-server-downloads',
            'Scroll to "Developer" edition and click **Download now**',
            "Run the downloaded installer (SQLServer2022-DEV-x64-ENU.exe)",
            'Choose **Basic** installation for a quick setup (recommended for beginners)',
            "Accept the license terms and choose install location",
            "Click **Install** and wait for completion (~5–10 minutes)",
          ],
        },
      ],
    },
    {
      heading: "Step 2: Download SQL Server Management Studio (SSMS)",
      content: "SSMS is the free GUI tool you'll use to write queries, manage databases, and explore your data.",
      subsections: [
        {
          title: "SSMS Install Steps",
          numbered: [
            "Visit https://aka.ms/ssmsfullsetup",
            "Run the SSMS installer",
            "Accept defaults and click **Install**",
            "Restart your computer when prompted",
          ],
        },
      ],
    },
    {
      heading: "Step 3: Connect to SQL Server",
      content: "Once SSMS is installed, connect to your local SQL Server instance.",
      subsections: [
        {
          title: "Connection Steps",
          numbered: [
            "Open SQL Server Management Studio",
            'In the **Connect to Server** dialog, set Server type: **Database Engine**',
            'Set Server name to: `.` or `localhost` or `(local)` or `YOUR-PC-NAME\\SQLEXPRESS`',
            'Set Authentication to: **Windows Authentication**',
            "Click **Connect**",
            "You should now see your server in Object Explorer on the left panel ✅",
          ],
        },
        {
          title: "Troubleshooting Tips",
          bullets: [
            "If connection fails, ensure SQL Server service is running (check Windows Services)",
            'Open SQL Server Configuration Manager → SQL Server Services → right-click your instance → **Start**',
            "For named instances (e.g., SQLEXPRESS), use `localhost\\SQLEXPRESS` as server name",
          ],
        },
      ],
    },
  ],
}
