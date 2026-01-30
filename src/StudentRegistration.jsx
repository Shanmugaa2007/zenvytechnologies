import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentRegister  () {


  const navigate = useNavigate();

  const click = ()=>{
    navigate('/login')
  }

      const [name,setName] = useState("");
      const [username,setUsername] = useState("");
      const [email,setEmail] = useState("");
      const [phone,setPhone] = useState("");
      const [college,setCollege] = useState("");
      const [course,setCourse] = useState("");
      const [yearofstudy,setYearofstudy] = useState("");
      const [c_password,setC_password] = useState("");
      const [cn_password,setCn_password] = useState("");

      const submit = (e) =>{


       e.preventDefault();

        if(c_password != cn_password){
          return alert("Password Not be Same")
        }
        axios.post('https://zenvytechnologiess.onrender.com/studentregister',{
          name:name,username:username,email:email,phone:phone,college:college,course:course,yearofstudy:yearofstudy,password:cn_password
        })
        alert("Student Register Successfully");
        setName("");
        setUsername("");
        setEmail("");
        setPhone("");
        setCollege("");
        setCourse("");
        setYearofstudy("");
        setC_password("");
        setCn_password("");
      }


  return (
    <>
      <div className="register-container">
         <button onClick={()=>navigate('/gotoregister')} className="mass-btn"> Back </button>
        <form className="register-form" onSubmit={submit}>
          <h2>User Registration</h2>
          <p className="subtitle">Create your account to access our services</p>

          <input type="text" placeholder="Full Name" name="name" onChange={e=>setName(e.target.value)} required />
          <input type="text" placeholder="Username for login" name="name" onChange={e=>setUsername(e.target.value)} required />
          <input type="email" placeholder="Email Address" name="email" onChange={e=>setEmail(e.target.value)} required />
          <input type="tel" placeholder="Mobile Number" name="phone" onChange={e=>setPhone(e.target.value)} required />

              <input type="text" placeholder="College / School Name" name="college" onChange={e=>setCollege(e.target.value)} required />
              <input type="text" placeholder="Course / Department" name="course" onChange={e=>setCourse(e.target.value)} required />
              <input type="text" placeholder="Year of Study" name="yearofstudy" onChange={e=>setYearofstudy(e.target.value)} required />
          <input type="password" placeholder="Create Password" name="c_password" onChange={e=>setC_password(e.target.value)} required />
          <input type="password" placeholder="Confirm Password" name="cn_password" onChange={e=>setCn_password(e.target.value)} required />

          <button type="submit">Register</button>

          <p className="login-text">
            Already registered? <span onClick={click}>Login</span>
          </p>
        </form>
      </div>
    </>
  );
};

export default StudentRegister;
