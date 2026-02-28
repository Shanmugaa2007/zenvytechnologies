import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import certificate from './assets/Zenvy Certificate.png'

function MoreInfo({ data, onClose }) {

  const scrollPos = useRef(0);

  useEffect(() => {
    const scrollRoot = document.getElementById("scrollRoot");
    if (!scrollRoot) return;

    if (data) {
      scrollPos.current = scrollRoot.scrollTop;
      scrollRoot.style.overflow = "hidden";
    } else {
      scrollRoot.style.overflow = "";
      scrollRoot.scrollTop = scrollPos.current;
    }

    return () => {
      scrollRoot.style.overflow = "";
    };
  }, [data]);

  if (!data) return null;

  return (
    <div className="moredomain">
      <div className="specific-domain">
        <img src={data.image} alt="Domain" />
        <h1>{data.title}</h1>
        <Link className="none-class" to="/applynow" state={data}>Apply Now For Just <i className="fa-solid fa-indian-rupee-sign"></i>{data.updatedPrice}.00</Link>
      </div>
      <div className="content-div">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>🎓 Internship Program Overview:</h2>
        <p>Gain real-world skills and industry experience through our structured internship program designed to make you job-ready.</p>
        <div className="intern-learn">
          <div className="detailsofdomain">
            <h2>Tools & Languages Learning:</h2>
        <ul>
          {data.lang_1 && <li>{data.lang_1}</li>}
          {data.lang_2 && <li>{data.lang_2}</li>}
          {data.lang_3 && <li>{data.lang_3}</li>}
          {data.lang_4 && <li>{data.lang_4}</li>}
          {data.lang_5 && <li>{data.lang_5}</li>}
        </ul>
        </div>
        <h2>Internship Mode:</h2>
        <ul style={{listStyle:"none"}}>
          <li><strong>Hybrid (Online)</strong></li>
        </ul>
        <h2>🚀 What You Will Learn:</h2>
        <ul className="listsformore">
          <li>Core fundamentals of the selected domain</li>
          <li>Practical tools & technologies used in industry</li>
          <li>Real-time project development</li>
          <li>Problem-solving techniques</li>
          <li>Industry workflow and best practices</li>
        </ul>
      </div>
      <div className="tech-intern">
        <h2>⚙️ Technologies Covered:</h2>
        <p>Latest tools and technologies related to this domain will be taught through hands-on practice.</p>
        <h2>📂 Real-Time Projects:</h2>
        <ul style={{listStyle:"none",lineHeight:"1.8"}} >
          <li>✔ Mini Project</li>
          <li>✔ Major Project</li>
          <li>✔ Practical Assignments</li>
          <li>✔ Case Study Based Tasks</li>
        </ul>
        <h2>🎯 Internship Highlights:</h2>
        <ul style={{listStyle:"none",lineHeight:"1.8"}}>
          <li>⭐ Live Training Sessions</li>
          <li>⭐ Daily Practical Tasks</li>
          <li>⭐ Project-Based Learning</li>
          <li>⭐ Mentor Support</li>
          <li>⭐ Doubt Clearing Sessions</li>
          <li>⭐ Mock Interviews</li>
          <li>⭐ Industry Guidance</li>
        </ul>
        <h2>🏆 What You Get?</h2>
        <ul style={{listStyle:"none",lineHeight:"1.8"}}>
          <li>📜 Internship Completion Certificate</li>
          <li>📜 Training Completion Certificate</li>
          <li>📜 Project Completion Certificate</li>
          <li>📁 Real-Time Project Experience</li>
          <li>💼 Resume Building Support</li>
          <li>🎯 Mock Interview</li>
        </ul>
        <h2>⏳ Duration</h2>
        <p>{data.selectedDuration} Internship Program</p>
        <h2>💰 Internship Fee</h2>
        <p>Affordable & Student Friendly</p>
        <h2>👨‍🎓 Who Can Apply?</h2>
        <ul>
          <li>Students (Any Degree / Department)</li>
          <li>Beginners</li>
          <li>Freshers</li>
          <li>Anyone interested in this field</li>
        </ul>
        <h2>🔥 Career Opportunities</h2>
        <p>Multiple job roles are available based on the chosen domain after successful completion.</p>
        <h2>Internship Model Certificate:</h2>
        <img src={certificate} alt="Model Certificate Image"/>
        <div className="lock-div"></div>
        <i className="fa-solid fa-lock lock"></i>
      </div>
      <Link className="none-classbtn" to="/applynow" state={data}>Apply Now For Just <i className="fa-solid fa-indian-rupee-sign"></i>{data.updatedPrice}.00</Link>
      </div>
      
    </div>
  );
}

export default MoreInfo;