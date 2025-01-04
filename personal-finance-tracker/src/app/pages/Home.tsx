import React from "react";

export default function Home() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ marginBottom: "20px" }}>
        <h1>Personal Finance Tracker</h1>
        <p>Manage your finances effectively and efficiently.</p>
      </header>

      <main>
        <section style={{ marginBottom: "20px" }}>
          <h2>Overview</h2>
          <p>Get a quick overview of your financial status.</p>
          {/* You can add components or placeholders for charts and summaries here */}
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h2>Recent Transactions</h2>
          <p>Track your latest income and expenses.</p>
          {/* You can add a list or table of recent transactions here */}
        </section>

        <section>
          <h2>Budget Goals</h2>
          <p>Set and monitor your budget goals.</p>
          {/* You can add components or placeholders for budget goals here */}
        </section>
      </main>

      <footer style={{ marginTop: "20px" }}>
        <p>&copy; 2025 Personal Finance Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
}
