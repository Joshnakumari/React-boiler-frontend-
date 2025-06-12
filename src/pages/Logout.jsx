import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("user");
    navigate("/", { replace: true });
  }, [navigate]);

  return (
    <div className="p-4">
      <h2>Logging out...</h2>
    </div>
  );
};

export default Logout;
