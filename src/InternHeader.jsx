import { Link } from "react-router-dom";

function InternHeader () {

    return(
        <>
            <div className="intern-head">
                    <p className='offer-head'><span className='dot'></span>Applications for Summer 2026 are open!</p>
                <h1>Build the <span>Future</span> With Us</h1>
                <p className='describe'>Join our internship program to work on real projects, learn from industry experts, and kickstart your career in technology.</p>
                    <Link className="learnus" to="/learnwithus">Learn with Us</Link>
                    <Link className="applynow">Apply Now</Link>
                    <div className="about-zen-intern">
                        <h1>Why Intern at Zenvy Technologies?</h1>
                        <p>More than just getting coffee. We offer an immersive experience designed to help you grow.</p>
                    </div>
                    <div className="intern-benifits">
                        <div className="real-impact">
                            <div className="impact-icon">
                                <i className="fa-solid fa-bolt"></i>
                            </div>
                            <div className="impact-content">
                            <h1>Real Impact</h1>
                            <p>Real projects and hands-on experience that turn learning into real skills.
                            Helping students build confidence, portfolios, and career-ready expertise.</p>
                            </div>
                        </div>
                        <div className="culture">
                            <div className="culture-icon">
                                <i className="fa-solid fa-heart"></i>
                            </div>
                            <div className="culture-content">
                                <h1>Inclusive Culture</h1>
                                <p>Join a diverse team where every voice is heard. We organize weekly socials, hackathons, and learning sessions.</p>
                            </div>
                        </div>
                        <div className="mock-interview">
                            <div className="mock-icon">
                                <i className="fa-solid fa-user-tie"></i>
                            </div>
                            <div className="mock-content">
                                <h1>Mock Interview</h1>
                                <p>Our mock interviews simulate real hiring experiences to build confidence and clarity.
                                Students receive expert feedback to improve skills, communication, and interview readiness.</p>
                            </div>
                        </div>
                        <div className="training">
                            <div className="training-icon">
                                <i className="fa-solid fa-chalkboard-user"></i>
                            </div>
                            <div className="training-content">
                                <h1>Training</h1>
                                <p>Industry-focused training designed to build strong practical skills.
                                Hands-on learning that prepares students for real-world challenges.</p>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )

}

export default InternHeader;