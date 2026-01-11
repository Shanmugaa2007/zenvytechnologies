import { useState,useEffect,React } from "react";
import { useNavigate } from "react-router-dom";
import google from './assets/Google.svg';
import github from './assets/Github.svg';
import twitter from './assets/Twitter.svg'
import axios from 'axios'

const Login = () => {

  const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    useEffect(() => {
  axios.get("https://zenvytechnologiess.onrender.com/me", {
    withCredentials: true
  })
  .then(res => {
    if (res.data.authenticated) {
      navigate("/"); 
    }
  })
  .catch(() => {
  });
}, []);


    const handleSubmit = (e)=>{

      e.preventDefault();

      axios.post("https://zenvytechnologiess.onrender.com/login",
    {
      email: email,
      password: password
    },
    {
      withCredentials: true
    }
  )
  .then(res => {
    if (res.data.success) {
      navigate("/");     
      alert("Login Successful")
              
    } 
    else {
      navigate("/login");
      alert(res.data.message);  
    }
  })
 .catch(err => {
  alert(err.response?.data?.message || "Login failed");
});


    }

  const click = ()=>{
    navigate('/gotoregister')
  }

  return (
    <div className="login-container">
        <button onClick={()=>navigate('/gotoregister')} className="mass-btn"> Back</button>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <p className="subtitle">Welcome back to Zenvy Technologies</p>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={email}
          required
          onChange={e=>setEmail(e.target.value)}
        />

        <input
          type="password"
          name="cn_password"
          placeholder="Password"
          value={password}
          required
          onChange={e=>setPassword(e.target.value)}
        />
        {/* <div className="oauth-authendication">
            <img src={google} alt="Google Icon"  onClick={()=>window.location.href =
    "https://zenvytechnologiess.onrender.com/auth/google"}/>
           
            <img src={github} alt="GitHub Icon" onClick={() =>
              window.location.href = "https://zenvytechnologiess.onrender.com/auth/github"
            } />
            <img src={twitter} alt="Twitter Icon" onClick={() =>
    window.location.href = "https://zenvytechnologiess.onrender.com/auth/twitter"}/>
        </div> */}
        <button type="submit">Login</button>

        <p className="register-text">
          Don’t have an account? <span onClick={click}>Register</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
