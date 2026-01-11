import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function UserRegistration () {

  const navigate = useNavigate();

  const Click = ()=>{
    navigate('/login')
  }


    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [profession,setProfession] = useState("");
    const [organization,setOrganization] = useState("");
    const [c_password,setC_password] = useState("");
    const [cn_password,setCn_password] = useState("");

    const Submit = (e)=>{


      e.preventDefault();

      if(c_password != cn_password){
          return alert("Password Not be Same")
        }

      axios.post('https://zenvytechnologiess.onrender.com/otherregister',{
        name:name,email:email,phone:phone,profession:profession,organization:organization,password:cn_password
      });
      alert("Register Successfully")
    }

    return (
        <>
            <div className="register-container">
         <button onClick={()=>navigate('/gotoregister')} className="mass-btn"> Back</button>
        <form className="register-form" onSubmit={Submit}>
          <h2>User Registration</h2>
          <p className="subtitle">Create your account to access our services</p>

          <input type="text" placeholder="Full Name" name="Name" value={name} onChange={(e)=>setName(e.target.value)} required />
          <input type="email" placeholder="Email Address" name="Email" value={email} onChange={(e)=> setEmail(e.target.value)} required />
          <input type="tel" placeholder="Mobile Number" name="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)} required />
          <input type="text" placeholder="Profession" name="Profession" value={profession} onChange={(e)=>setProfession(e.target.value)} required />
          <input type="text" placeholder="Organization (Optional)" name="Organization" value={organization} onChange={(e)=>setOrganization(e.target.value)} />
          <input type="password" placeholder="Create Password" name="C_password" value={c_password} onChange={e=>setC_password(e.target.value)} required />
          <input type="password" placeholder="Confirm Password" name="Cn_password" value={cn_password} onChange={e=>setCn_password(e.target.value)} required />

          <button type="submit">Register</button>

          <p className="login-text">
            Already registered? <span onClick={Click}>Login</span>
          </p>
        </form>
      </div>
        </>
    );
}

export default UserRegistration;