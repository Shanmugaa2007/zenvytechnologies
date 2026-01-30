import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios
      .get("https://zenvytechnologiess.onrender.com/me", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.authenticated) {
          navigate("/gotoregister");
        }
      })
      .catch(() => {});
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://zenvytechnologiess.onrender.com/login",
        {
          username,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.success) {
          alert("Login Successful");
          navigate("/"); 
        } else {
          alert(res.data.message || "Login failed");
        }
      })
      .catch((err) => {
        alert(err.response?.data?.message || "Login failed");
      });
  };

  const click = () => {
    navigate("/gotoregister");
  };

  return (
    <div className="login-container">
      <button onClick={() => navigate("/gotoregister")} className="mass-btn">
        Back
      </button>

      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <p className="subtitle">Welcome back to Zenvy Technologies</p>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          name="cn_password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <p className="register-text">
          Don’t have an account? <span onClick={click}>Register</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
