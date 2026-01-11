import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function GotoRegister() {

  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    axios.get("https://zenvytechnologiess.onrender.com/me", {
      withCredentials: true
    })
    .then(res => {
      if (res.data.authenticated) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    })
    .catch(() => setIsAuthenticated(false));
  }, []);

  const handleLoginClick = async () => {

    if (isAuthenticated) {
      // LOGOUT
      await axios.get("https://zenvytechnologiess.onrender.com/logout", {
        withCredentials: true
      });

      setIsAuthenticated(false);
      navigate("/gotoregister");
    } else {
      navigate("/gotoregister/login");
    }
  };

  return (
    <div className="user-type-registration">
      <div className="selection-box">
        <h1>Welcome To Zenvy Technologies</h1>

        <div className="selection">

          <span className="link-options" onClick={handleLoginClick}>
            {isAuthenticated ? "Logout" : "Login"}
          </span>

          {!isAuthenticated && (
            <>
              <Link className="link-option" to="studentregister">
                Student Registration
              </Link>
              <Link className="link-option" to="userregister">
                Other's Registration
              </Link>
            </>
          )}

          <Link className="link-option" to="/">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GotoRegister;
