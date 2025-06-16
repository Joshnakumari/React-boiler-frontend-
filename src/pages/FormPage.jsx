import { useState } from "react";
import { useNavigate } from "react-router-dom";

const indianStatesWithCities = {
  "Tamil Nadu": ["Chennai", "Madurai", "Coimbatore"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
  "Karnataka": ["Bengaluru", "Mysore", "Hubli"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi"],
  "Bihar": ["Patna", "Gaya", "Bhagalpur"]
};

const FormPage = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { name, id, email, phone, dob, gender, state, city };
    const existing = JSON.parse(localStorage.getItem("userDetails")) || [];
    const updated = [...existing, newUser];

    localStorage.setItem("userDetails", JSON.stringify(updated));
    setMessage("User details saved!");

    // Reset form fields
    setName("");
    setId("");
    setEmail("");
    setPhone("");
    setDob("");
    setGender("");
    setState("");
    setCity("");

    setTimeout(() => {
      navigate("/userlist");
    }, 1000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #cbd5e1, #93c5fd)",
        fontFamily: "Arial"
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          width: "100%",
          maxWidth: "500px"
        }}
      >
        <h2 style={{ textAlign: "center" }}>User Details Form</h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="ID"
          value={id}
          required
          onChange={(e) => setId(e.target.value)}
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          required
          onChange={(e) => setPhone(e.target.value)}
          style={inputStyle}
        />

        <input
          type="date"
          value={dob}
          required
          onChange={(e) => setDob(e.target.value)}
          style={inputStyle}
        />

        <select
          value={gender}
          required
          onChange={(e) => setGender(e.target.value)}
          style={inputStyle}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <select
          value={state}
          required
          onChange={(e) => {
            setState(e.target.value);
            setCity("");
          }}
          style={inputStyle}
        >
          <option value="">Select State</option>
          {Object.keys(indianStatesWithCities).map((st) => (
            <option key={st} value={st}>
              {st}
            </option>
          ))}
        </select>

        <select
          value={city}
          required
          onChange={(e) => setCity(e.target.value)}
          style={inputStyle}
          disabled={!state}
        >
          <option value="">Select City</option>
          {state &&
            indianStatesWithCities[state].map((ct) => (
              <option key={ct} value={ct}>
                {ct}
              </option>
            ))}
        </select>

        {message && <p style={{ color: "green" }}>{message}</p>}

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
            marginTop: "1rem",
            cursor: "pointer"
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "0.75rem",
  marginBottom: "1rem",
  border: "1px solid #ccc",
  borderRadius: "8px",
  fontSize: "1rem"
};

export default FormPage;
