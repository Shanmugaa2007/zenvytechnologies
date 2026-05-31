import './about.css'
import {Link} from 'react-router-dom'


function AboutUs () {

    return(
        <>
            <div className='about-container'>
                <div className="ai-chip">
                    <div className="chip-core">
                        <span>ZEN</span>
                    </div>

                    <div className="circuit top"></div>
                    <div className="circuit right"></div>
                    <div className="circuit bottom"></div>
                    <div className="circuit left"></div>

                    <div className="dot d1"></div>
                    <div className="dot d2"></div>
                    <div className="dot d3"></div>
                    <div className="dot d4"></div>
                    </div>
                <div className="aboutus" id="about">
                    <h1 className="about-head" style={{paddingLeft:"5%"}}>About Us</h1>
                    <div className="about-pdiv">
                        <p className="para">A clean, high-tech website design.
    At <strong>Zenvy Technology</strong> and IT Solutions, we don’t just provide services; we build the future. Born from a passion for digital excellence, we bridge the gap between complex challenges and elegant solutions. Whether it’s architecting robust software, crafting cinematic video content, or empowering careers through professional resume building, our mission is simple: To turn your boldest ideas into scalable innovation.
    We believe that in a digital-first world, your brand deserves more than just a presence—it deserves an edge. From the first line of code to the final sales pitch, Zenvy is your dedicated partner in growth.</p>
                    </div>
                    <Link to="/zenvytechnologies-aboutus" className='read-more'>Read More</Link>
                </div>
            </div>
        </>
    )
}

export default AboutUs;

