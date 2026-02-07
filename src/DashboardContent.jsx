import axios from "axios";
import { useState,useEffect } from "react";

axios.defaults.withCredentials = true;

function DashboardContent() {

    const [dashboard,setDashboard] = useState(true);
    const [profileDetails,setProfileDetails] = useState(false);
    const [mylearning,setMylearning] = useState(false);
    const [orderhistory,setOrderhistory] = useState(false);
    const [userdetials,setUserdetials] = useState(null)
    
   useEffect(() => {
  const checkUser = async () => {
    try {
      const res = await axios.get(
        "https://zenvytechnologiess.onrender.com/me",
        { withCredentials: true }
      );

      if (res.data.success) {
        console.log("User:", res.data.user);
        setUserdetials(res.data.user);
      } else {
        setUserdetials(null);
      }
    } catch (err) {
      console.log("No active session");
      setUserdetials(null);
    }
  };

  checkUser();
}, []);

    return(
        <>
            <div className="dashContent">
                <div className="dashmenu">
                    <ul>
                        <li onClick={()=>{setMylearning(false);setProfileDetails(false);setOrderhistory(false);setDashboard(true)}}>
                                <i className="fa-solid fa-gauge"></i> Dashboard</li>
                        <li onClick={()=>{setMylearning(false);setDashboard(false);setOrderhistory(false);setProfileDetails(true);}}>
                                <i className="fa-solid fa-user"></i> My Profile</li>
                        <li onClick={()=>{setMylearning(true);setProfileDetails(false);setOrderhistory(false);setDashboard(false)}}>
                                <i className="fa-solid fa-graduation-cap"></i> My Learnings</li>
                        <li onClick={()=>{setDashboard(false);setMylearning(false);setProfileDetails(false);setOrderhistory(true)}}>
                                <i className="fa-solid fa-cart-shopping"></i> Order History</li>
                        <li><i className="fa-solid fa-arrow-right-from-bracket"></i> Log Out</li>
                    </ul>
                </div>
                <div className="menudetails">
                    <div className={dashboard?"dashdetails":"dashdetailsnone"}>
                        <div className="Enrolled">
                            <i className="fa-solid fa-book-open"></i>
                            <h2>Enrolled Course</h2>
                            <strong>0+</strong>
                        </div>
                        <div className="Activate">
                            <i className="fa-solid fa-graduation-cap"></i>
                            <h2>Activated Course</h2>
                            <strong>0+</strong>
                        </div>
                        <div className="Complete">
                            <i className="fa-solid fa-award"></i>
                            <h2>Completed Course</h2>
                            <strong>0+</strong>
                        </div>
                    </div>

                    <div className={profileDetails?"profiledetails":"profilenone"}>
                         <h1>My Profile</h1>
                        <div className="user-profile-details">
                            <div className="userkey">
                                <p>Registration Date </p>
                                <p>First Name </p>
                                <p>Last Name </p>
                                <p>Username </p>
                                <p>Email </p>
                                <p>Phone Number </p>
                            </div>
                            <div className="uservalue">
                                <p>- date</p>
                                <p>- {userdetials?.fullname}</p>
                                <p>- -</p>
                                <p>- {userdetials?.username}</p>
                                <p>- {userdetials?.email}</p>
                                <p>- -</p>
                            </div>
                        </div>
                    </div>

                    <div className={mylearning?"mylearn":"mylearn-none"}>
                        <div>
                            <h1>My Learnings</h1>
                        </div>
                    </div>

                    <div className={orderhistory?"orderhistory":"orderhistory-none"}>
                        <h1>Order History</h1>
                        <div className="order-detials">
                            <p>Artificial Intelligence & Machine Learning</p>
                            <p>transcation id</p>
                            <p><i className="fa-solid fa-indian-rupee-sign" style={{fontSize:"14px"}}></i>999</p>
                            <p>Success</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardContent;

