import logo from './assets/Zenvylogo.png';
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';
import DashboardContent from './DashboardContent.jsx';
import axios from "axios";
import Footer from './Footer.jsx';

function Dashboard() {
  const [profilePicture, setProfilePicture] = useState(null);
  const [file, setFile] = useState(null);
  const [username, setusername] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    axios.get('https://zenvytechnologiess.onrender.com/me', {
      withCredentials: true
    })
    .then((res) => {
      if (res.data.success) {
        setusername(res.data.user.username);
      }
    })
    .catch((err) => {
      console.error("Error fetching user:", err.response?.data || err.message);
    });
  }, []);

  const OnclickUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setProfilePicture(URL.createObjectURL(selectedFile));
      setFile(selectedFile);
    }
  };

  return (
    <>
      <nav className="intern-nav-container">
        <div className="Ilogo">
          <img src={logo} alt="Company Logo" />
          <h1>Zenvy Technologies</h1>
        </div>
        <div>
          <Link className='dashboard' to="/internship" style={{marginRight:"10%"}}>Internships</Link>
          <Link className="dashboard" to="/">Home</Link>
        </div>
      </nav>

      <div className='profile-image'>
        <input 
          type="file" 
          className='up-file'  
          ref={fileInputRef} 
          accept='image/*' 
          onChange={handleFileChange}
          style={{display:"none"}}
        />
        {!profilePicture && (
          <div className='upload-div'>
            <i className="fa-solid fa-cloud-arrow-up upload-icon" onClick={OnclickUpload}></i>
            <small>Upload Profile</small>
          </div>
        )}
        {profilePicture && <img src={profilePicture} />}
      </div>

      <div>
        <span className='hellouser'>Hello,</span>
        <h1 className='User-name'>Username : {username}</h1>
      </div>

      <div>
        <DashboardContent/>
      </div>
      <Footer/>
    </>
  );
}

export default Dashboard;
