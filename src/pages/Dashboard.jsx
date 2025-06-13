import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to right, #e0f7fa, #b3e5fc)",
      padding: "2rem",
      fontFamily: "sans-serif"
    }}>
      <div style={{
        background: "#fff",
        padding: "1.5rem",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "0 auto",
        textAlign: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
      }}>
        <h2>Welcome, {user?.name || "User"} 👋</h2>
        <p>Your dashboard is ready.</p>
        <div style={{ marginTop: "1rem" }}>
          <button
            onClick={() => navigate("/form")}
            style={{ margin: "5px", padding: "8px 16px", border: "none", background: "#03a9f4", color: "#fff", borderRadius: "4px" }}
          >
            Fill Form
          </button>
          <button
            onClick={() => navigate("/userlist")}
            style={{ margin: "5px", padding: "8px 16px", border: "none", background: "#0288d1", color: "#fff", borderRadius: "4px" }}
          >
            View Users
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
