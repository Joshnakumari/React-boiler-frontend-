import { useState } from "react";
import { useNavigate } from "react-router-dom";

const mockUsers = [
  { email: "user1@example.com", password: "pass123" },
  { email: "user2@example.com", password: "secret456" },
  { email: "user3@example.com", password: "mypassword" },
];

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg("");
    setError("");

    const matchedUser = mockUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      localStorage.setItem("user", JSON.stringify(matchedUser));
      setMsg("Login Successful! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 1500);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #dbeafe, #93c5fd, #60a5fa)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          padding: "3rem",
          borderRadius: "12px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
          width: "100%",
          maxWidth: "400px",
          color: "black",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
          {msg && <p style={{ color: "green", margin: "0.5rem 0" }}>{msg}</p>}
          {error && <p style={{ color: "red", margin: "0.5rem 0" }}>{error}</p>}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.8rem",
              backgroundColor: "#3b82f6",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "1rem",
              boxShadow: "0 4px 12px rgba(59, 130, 246, 0.5)",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "0.75rem",
  marginBottom: "1rem",
  border: "1px solid #ccc",
  borderRadius: "8px",
  fontSize: "1rem",
  color: "black",
};

export default Login;
