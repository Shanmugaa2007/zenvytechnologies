import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    axios
      .get("https://zenvytechnologiess.onrender.com/me", { withCredentials: true })
      .then(res => {
        setAuth(res.data.authenticated);
        setLoading(false);
      })
      .catch(() => {
        setAuth(false);
        setLoading(false);
      });
  }, []);

  if (loading) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}>
    {alert("Already Login")}
      <h2>Checking authentication...</h2>
    </div>
  );
}


  return auth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
