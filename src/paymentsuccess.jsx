import { Link , useLocation, useNavigate } from 'react-router-dom';
import logo from './assets/Zenvylogo.png';
import Certificate from './InternCertificate';
import zenCertificate from './assets/demoCertificate.png';
import Footer from './Footer';
import FeedbackForm from './FeedbackForm';
import { useState } from 'react';

function SuccessPayment () {

    const location = useLocation();
    const domaindata = location.state;
    const [changebtn,setChangebtn] = useState('Start Learning')
     const today = new Date().toLocaleDateString();

     const navigate = useNavigate();
     const Click = ()=>{
        navigate('/startlearn')
        setChangebtn('Resume Learning')
     }

     const mentor = ()=>{
        if(domaindata.title=="Digital Marketing")
            return "Jagadeeshwaran R"
        else if (domaindata.title=="UI & UX Design" || domaindata.title=="Graphics Design")
            return "Dharaneshver S"
        else if (domaindata.title=="Python Development" || domaindata.title=="Artificial Intelligence & Machine Learning" || domaindata.title=="Data Science" || domaindata.title=="Data Analytics")
            return "Kowsika J"
        else
            return "Shanmuganathan S"
     }

     if(domaindata.title=="Artificial Intelligence & Machine Learning"){
        domaindata.title="Artificial Intelligence & ML"
     }
    else if(domaindata.title=="C Program Application Development"){
        domaindata.title="C Application Development"
    }
    else if(domaindata.title=="NO SQL DataBase"){
        domaindata.title="MongoDB"
    }

    return (
        <>
            <nav className="intern-nav-container" style={{ zIndex:1000}}>
                <div className="Ilogo">
                <img src={logo} alt="Company Logo" />
                <h1>Zenvy Technologies</h1>
                </div>
                <div>
                <Link className="dashboard" to="/dashboard">Dashboard</Link>
                <Link className="dashboards" to="/">Home</Link>
                </div>
            </nav>
            <div className='sucess-head'>
                <div className='sc-background'>
                <h1>Welcome to Your Internship Dashboard!</h1>
                </div>
                <div className='con-container'>
                <p>Congratulations 🎉 Your payment has been successfully verified and your enrollment is now confirmed.</p>
                <p>You are officially enrolled in the <strong style={{textDecoration:"underline"}}>{domaindata.title}</strong> Program.</p>
                </div>
            </div>
            <div className='intern-overview-suc'>
                <h1>Internship Overview</h1>
                <ul style={{listStyle:"none"}}>
                    <li><strong>Program Name:</strong> {domaindata.title}</li>
                    <li><strong>Duration:</strong> {domaindata.selectedDuration}</li>
                    <li><strong>Start Date:</strong> {today}</li>
                    <li><strong>Mode:</strong> <strong>Online</strong></li>
                    <li><strong>Mentor:</strong> {mentor()}</li>
                </ul>
            </div>
            <div className='course-suc'>
                <h1>Access Your Courses</h1>
                <p>Start learning through structured modules:</p>
                <ul>
                   {domaindata.lang_1 && <li>{domaindata.lang_1}</li>}
                   {domaindata.lang_2 && <li>{domaindata.lang_2}</li>}
                    {domaindata.lang_3 &&<li>{domaindata.lang_3}</li>}
                    {domaindata.lang_4 &&<li>{domaindata.lang_4}</li>}
                    {domaindata.lang_5 &&<li>{domaindata.lang_5}</li>}
                </ul>
                <button className='start-learn' onClick={Click}>{changebtn}</button>
            </div>
            <div className='certificate-print-continer'>
                <h1>Your Certificate</h1>
                <img src={zenCertificate} alt="Internship Certificate" className='print-certificate'/>
                <Certificate domain={domaindata.title} />
                <div className='invisible'></div>
            </div>
            <div className='final-feedback'>
                <h1>Give Our Learning Experience</h1>
            <FeedbackForm/>
            </div>
            <Footer/>
        </>
    );



}

export default SuccessPayment;