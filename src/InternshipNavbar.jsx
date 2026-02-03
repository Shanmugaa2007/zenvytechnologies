import Login from "./Login";
import { Link } from "react-router-dom";
import logo from './assets/Zenvylogo.png'

function Internships() {

    return(
        <>
          <nav className="intern-nav-container">
            <div className="Ilogo">
              <img src={logo} alt="Company Logo" />
              <h1>Zenvy Technologies</h1>
            </div>
            <div>
              <Link className="dashboard" to="/dashboard" style={{marginRight:"20%"}}>Dashboard</Link>
              <Link className="dashboard" to="/">Home</Link>
            </div>
          </nav>
        </>
    );
}

export default Internships;