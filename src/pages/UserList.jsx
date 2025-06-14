import { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({
    name: "", id: "", state: "", city: "", email: "", phone: "", gender: ""
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("userDetails")) || [];
    setUsers(stored);
  }, []);

  const handleDelete = (index) => {
    const updated = [...users];
    updated.splice(index, 1);
    setUsers(updated);
    localStorage.setItem("userDetails", JSON.stringify(updated));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditData(users[index]);
  };

  const handleUpdate = () => {
    const updated = [...users];
    updated[editIndex] = editData;
    setUsers(updated);
    localStorage.setItem("userDetails", JSON.stringify(updated));
    setEditIndex(null);
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const filteredAndSortedUsers = users
    .filter((user) =>
      Object.values(user).some((val) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    .sort((a, b) => {
      if (!sortKey) return 0;
      const valA = String(a[sortKey]).toLowerCase();
      const valB = String(b[sortKey]).toLowerCase();
      if (valA < valB) return sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #dbeafe, #bfdbfe)",
        padding: "2rem",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h2 style={{
        textAlign: "center",
        marginBottom: "2rem",
        color: "#1e3a8a",
        fontSize: "2rem"
      }}>
        User Details List
      </h2>

      {/* Search and Sort Controls */}
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "6px", flex: "1" }}
        />

        <select
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value)}
          style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "6px" }}
        >
          <option value="">Sort by</option>
          <option value="name">Name</option>
          <option value="id">ID</option>
          <option value="state">State</option>
          <option value="city">City</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="gender">Gender</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "6px" }}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
            overflow: "hidden"
          }}
        >
          <thead style={{ backgroundColor: "#3b82f6", color: "white" }}>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>State</th>
              <th style={thStyle}>City</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Phone</th>
              <th style={thStyle}>Gender</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedUsers.map((u, i) =>
              editIndex === i ? (
                <tr key={i}>
                  {["name", "id", "state", "city", "email", "phone"].map((field) => (
                    <td key={field}>
                      <input
                        name={field}
                        value={editData[field]}
                        onChange={handleChange}
                        style={inputStyle}
                      />
                    </td>
                  ))}
                  <td>
                    <select
                      name="gender"
                      value={editData.gender}
                      onChange={handleChange}
                      style={inputStyle}
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </td>
                  <td>
                    <button onClick={handleUpdate} style={actionBtn}>Update</button>
                    <button onClick={() => setEditIndex(null)} style={cancelBtn}>Cancel</button>
                  </td>
                </tr>
              ) : (
                <tr key={i} style={{ transition: "background 0.3s", cursor: "default" }}>
                  <td style={tdStyle}>{u.name}</td>
                  <td style={tdStyle}>{u.id}</td>
                  <td style={tdStyle}>{u.state}</td>
                  <td style={tdStyle}>{u.city}</td>
                  <td style={tdStyle}>{u.email}</td>
                  <td style={tdStyle}>{u.phone}</td>
                  <td style={tdStyle}>{u.gender}</td>
                  <td style={tdStyle}>
                    <button onClick={() => handleEdit(i)} style={actionBtn}>Edit</button>
                    <button onClick={() => handleDelete(i)} style={deleteBtn}>Delete</button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const thStyle = {
  padding: "12px",
  fontWeight: "bold",
  fontSize: "1rem",
  textAlign: "left"
};

const tdStyle = {
  padding: "10px",
  borderBottom: "1px solid #e5e7eb",
  fontSize: "0.95rem"
};

const inputStyle = {
  width: "100%",
  padding: "6px",
  border: "1px solid #ccc",
  borderRadius: "6px"
};

const actionBtn = {
  padding: "6px 12px",
  marginRight: "5px",
  backgroundColor: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

const deleteBtn = {
  ...actionBtn,
  backgroundColor: "#dc2626"
};

const cancelBtn = {
  ...actionBtn,
  backgroundColor: "#6b7280"
};

export default UserList;
