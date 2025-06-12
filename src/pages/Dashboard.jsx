const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Welcome, {user?.name || "User"} 👋</h2>
      <p>This is your dashboard.</p>
    </div>
  );
};

export default Dashboard;
