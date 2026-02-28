import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function GotoRegister() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(null); 

  const checkAuth = async () => {
    try {
      const res = await axios.get(
        "https://zenvytechnologiess.onrender.com/me",
        { withCredentials: true }
      );
      setIsAuthenticated(res.data.authenticated);
    } catch {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const handleLoginClick = () => {
    navigate("/gotoregister/login");
  };

  const handleLogoutClick = async () => {
    try {
      await axios.get(
        "https://zenvytechnologiess.onrender.com/logout",
        { withCredentials: true }
      );
      setIsAuthenticated(false);
    } catch (err) {
      console.error("Logout error", err);
    }
  };

  if (isAuthenticated === null) {
    return (
      <div className="user-type-registration">
        <div className="selection-box">
          <h1>Welcome To Zenvy Technologies</h1>
          <div className="selection">
            <p>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="user-type-registration">
      <div className="selection-box">
        <h1>Welcome To Zenvy Technologies</h1>

        <div className="selection">

          {isAuthenticated ? (
            <>
              <span
                className="link-options"
                onClick={handleLogoutClick}
              >
                Logout
              </span>

              <Link className="link-option" to="/">
                Back To Home
              </Link>
            </>
          ) : (
            <>
              <span
                className="link-options"
                onClick={handleLoginClick}
              >
                Login
              </span>

              <Link className="link-option" to="studentregister">
                Student Registration
              </Link>

              <Link className="link-option" to="userregister">
                Other Registration
              </Link>

              <Link className="link-option" to="/">
                Back To Home
              </Link>
            </>
          )}

        </div>
      </div>
    </div>
  );
}

export default GotoRegister;
