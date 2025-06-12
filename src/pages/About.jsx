import React from "react";

const About = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "4rem 2rem",
        background: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 50%, #93c5fd 100%)", // light blue gradient
        color: "#000", // black text
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          borderRadius: "15px",
          padding: "3rem",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            marginBottom: "1.5rem",
            borderBottom: "3px solid #60a5fa",
            paddingBottom: "0.5rem",
            color: "#000",
            textAlign: "center",
          }}
        >
          About Our ERP System
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.6",
            marginBottom: "3rem",
            color: "#000",
            textAlign: "center",
          }}
        >
          Our Enterprise Resource Planning system is meticulously crafted to unify all your business operations into a seamless and efficient platform, enabling smarter decisions and sustainable growth.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2.5rem",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              padding: "2rem",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
              color: "#000",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h2
              style={{
                fontSize: "1.6rem",
                marginBottom: "1rem",
                borderBottom: "2px solid #60a5fa",
                paddingBottom: "0.5rem",
              }}
            >
              Why Choose Our ERP?
            </h2>
            <ul style={{ lineHeight: "1.7", paddingLeft: "1rem" }}>
              <li>✔ Seamless integration across departments</li>
              <li>✔ Real-time analytics & data-driven insights</li>
              <li>✔ Scalable solutions for any business size</li>
              <li>✔ User-centric design for intuitive navigation</li>
              <li>✔ Top-tier security & compliance standards</li>
            </ul>
          </div>

          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              padding: "2rem",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
              color: "#000",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h2
              style={{
                fontSize: "1.6rem",
                marginBottom: "1rem",
                borderBottom: "2px solid #60a5fa",
                paddingBottom: "0.5rem",
              }}
            >
              Core Modules
            </h2>
            <ul style={{ lineHeight: "1.7", paddingLeft: "1rem" }}>
              <li>📊 Financial Management & Accounting</li>
              <li>📦 Inventory & Supply Chain Management</li>
              <li>👥 Human Resources & Payroll</li>
              <li>⚙️ Workflow Automation & Project Management</li>
              <li>📈 Advanced Reporting & Dashboards</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <button
            style={{
              padding: "1rem 3rem",
              backgroundColor: "#60a5fa",
              border: "none",
              borderRadius: "10px",
              color: "#fff",
              fontSize: "1.2rem",
              cursor: "pointer",
              fontWeight: "600",
              boxShadow: "0 6px 15px rgba(96, 165, 250, 0.6)",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#3b82f6")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#60a5fa")}
            onClick={() => alert("Redirecting to demo request...")}
          >
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
