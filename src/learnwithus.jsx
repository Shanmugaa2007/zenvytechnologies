import Footer from "./Footer";
import intern_certificate from './assets/Zenvy Certificate.png';
import train_Certificate from './assets/Training Certificate.png';
import offerletter from './assets/intership offer letter.png'

function LearnWithUs() {

    return(
        <>
            <div className="learn_nav">
                <h1>Internship program at Zenvy Technologies</h1>
                <p><strong>Learn. Build.</strong> Get Industry Ready</p>
            </div>
            <div className="learn-content">
                <p>At <strong>Zenvy Technologies</strong>, our internship program is designed to help students gain real industry skills through structured learning and practical exposure. We focus on turning theoretical knowledge into real-world application. Interns receive proper guidance, hands-on experience, and career preparation. Our goal is to make every student confident, skilled, and job-ready. This program acts as a strong foundation for your professional journey.</p>
            </div>
            <div className="learn-offer">
                <h1><i class="fa-solid fa-envelope"></i> Internship Offer Letter</h1>
                <p>Every selected student receives an official Internship Offer Letter from our company. This confirms your position and gives you a professional corporate experience from day one. It can be used for college submission and academic purposes. The offer letter also adds credibility to your profile. It marks the formal start of your internship journey.</p>
            </div>
            <div className="learn-offer">
                <h1><i class="fa-solid fa-gear"></i> Technical Training</h1>
                <p>Before project work begins, interns undergo structured technical training in their chosen domain. Concepts are taught step-by-step with practical examples and real-time use cases. This helps students clearly understand how technologies work in real applications. Mentor support is provided throughout the learning phase. The training builds a strong base for project development.</p>
            </div>
            <div className="learn-offer">
                <h1><i class="fa-solid fa-medal"></i> Training Certificate</h1>
                <p>After completing the training program, students receive a Training Completion Certificate. This certificate proves that you have gained professional technical knowledge. It adds value to your resume and LinkedIn profile. It shows recruiters that you completed structured learning. This recognition boosts confidence and credibility.</p>
            </div>
            <div className="learn-offer">
                <h1><i class="fa-solid fa-laptop-code"></i> Two Mini Projects</h1>
                <p>Interns work on two mini projects to apply their learning in a practical way. These projects strengthen fundamentals and improve technical understanding. Students gain confidence in development and problem-solving. It helps bridge the gap between theory and real work. Mini projects prepare you for bigger challenges.</p>
            </div>
            <div className="learn-offer">
                <h1><i class="fa-solid fa-folder-open"></i> One Major Project</h1>
                <p>After mini projects, interns develop one major project based on industry standards. This project involves planning, design, and full implementation. It gives real development experience similar to company work. The major project becomes a key highlight in your portfolio. It can be showcased during interviews.</p>
            </div>
            <div className="learn-offer">
                <h1><i className="fa-solid fa-microphone"></i> Mock Interview</h1>
                <p>We conduct mock interview sessions to prepare students for real job interviews. Interns face technical and HR-style questions in a simulated environment. This improves communication skills and confidence. It helps reduce interview fear and nervousness. Students understand how companies hire candidates.</p>
            </div>
            <div className="learn-offer">
                <h1><i class="fa-solid fa-newspaper"></i> Internship Certificate</h1>
                <p>After successfully completing training and projects, students receive an Internship Completion Certificate. This certificate serves as proof of practical experience. It adds strong value to job applications and resumes. It shows that you have worked on real projects. It marks the successful completion of your internship.</p>
            </div>
            <div className="demo-certificate">
                <h1>Demo Certificates & Letter:</h1>
                <div className="demo-image">
                    <div className="internH">
                        <img src={intern_certificate} alt="Internship Certificate"/>
                        <h2>Internship Certificate</h2>
                    </div>
                    <div className="trainH">
                        <img src={train_Certificate} alt="Training Certificate" />
                        <h2>Training Certificate</h2>
                    </div>
                </div>
                <div className="letter-image">
                    <img src={offerletter} alt="Internship offer Letter" />
                    <h2>Internship Offer Letter</h2>
                </div>
            </div>
            <div style={{marginTop:"10%"}}>
            <Footer/>
            </div>
        </>
    );
}

export default LearnWithUs;