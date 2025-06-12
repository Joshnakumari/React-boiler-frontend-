import React from "react";

const Home = () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%)",
        padding: "3rem 1rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#1f2937",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "1rem" }}>
          Enterprise Resource Planning (ERP) System
        </h1>
        <p style={{ fontSize: "1.25rem", marginBottom: "3rem", color: "#4b5563" }}>
          Streamline your business processes with an all-in-one ERP solution. Manage resources, automate workflows, and gain valuable insights.
        </p>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "2rem",
              borderRadius: 12,
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ color: "#2563eb", marginBottom: "0.75rem" }}>📊 Analytics & Reporting</h2>
            <p>
              Gain real-time insights with customizable dashboards and detailed reports to make data-driven decisions.
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "2rem",
              borderRadius: 12,
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ color: "#2563eb", marginBottom: "0.75rem" }}>⚙️ Workflow Automation</h2>
            <p>
              Automate repetitive tasks and optimize business workflows across departments to improve efficiency.
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "2rem",
              borderRadius: 12,
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ color: "#2563eb", marginBottom: "0.75rem" }}>🛠️ Resource Management</h2>
            <p>
              Manage inventory, assets, employees, and projects all in one place for streamlined operations.
            </p>
          </div>
        </section>

        <button
          onClick={() => alert("Navigate to dashboard")}
          style={{
            backgroundColor: "#2563eb",
            color: "#fff",
            padding: "1rem 2.5rem",
            fontSize: "1.25rem",
            fontWeight: "600",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(37, 99, 235, 0.5)",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#2563eb")}
        >
          🚀 Get Started
        </button>
      </div>
    </main>
  );
};

export default Home;
