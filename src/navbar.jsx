import { Link } from 'react-router-dom'
import logo from './assets/Zenvylogo.png'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function  Navbar(){

  const navigate = useNavigate();

const handleGetStart = () => {
  navigate("/gotoregister"); 
};


  const [active, setActive] = useState(false);

  const MenubarClick = ()=>{
    
    setActive(!active);
  }
  
  const clicked = ()=> setActive(false)

    const handleGetStarted = () => {
    clicked(); 
    navigate("/gotoregister");
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Company Logo" />
        </div>
        <ul className={active ? "nav-links" : "linkss"}>
          <li><a className='navigate' href='#about' onClick={clicked}>About Us</a></li>
          <li><a className='navigate' href='#service' onClick={clicked}>Services</a></li>
          <li><a className='navigate' href='#project' onClick={clicked}>Projects</a></li>
          {/* <li><Link className='navigate' onClick={clicked}>Internships</Link></li> */}
          <li><a className='navigate' href='#founders' onClick={clicked}>Founders</a></li>
          <li><a className='navigate' href='#review' onClick={clicked}>Reviews</a></li>
          <li><a className='navigate' href='#contact' onClick={clicked}>Contact Us</a></li>
          <button className={active ? "button" : "buttons"} onClick={handleGetStarted}>Get Started</button>
        </ul>
        <button className={active ? "btn":"get-started-btn" } onClick={handleGetStart}>Get Started</button>
        <i className="fa-solid fa-bars menubar" onClick={MenubarClick}></i>
      </div>
      <div className="nav-glow-line"></div>
    </nav>
  );
};

export default Navbar;
