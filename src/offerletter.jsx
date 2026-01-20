import Logo from './assets/Zenvylogo.png';
import Seal from './assets/Seal.jpeg';

export default function OfferLetter() {
  return (
    <div className="offer-letter">

      <div className="top-design">
        <div className="purple-strip"></div>
        <div className="yellow-strip"></div>
      </div>

      <div className="header">
        <div className="logo-left">
            <img src={Logo} alt="Company Logo" />
        </div>

        <div className="title">
          <h1>ZENVY TECHNOLOGIES</h1>
          <div className='line'><hr /></div>
          <h2>INTERNSHIP OFFER LETTER</h2>
        </div>

        <div className="logo-right">
          {/* ADD MSME / GOVT LOGO IMAGE HERE */}
        </div>
      </div>

      <div className="content">
        <p><strong>Dear _________,</strong></p>

        <p>
          We are pleased to inform you that you have been selected for the
          position of <strong>Intern – [________]</strong> at Zenvy Technologies.
        </p>

        <p>
          Your internship will start on <strong>[_____]</strong> and will
          continue till <strong>[_____]</strong>. The duration of the internship
          will be <strong>[_____]</strong>. During this period, you will work
          with our team and gain practical knowledge and hands-on experience in
          your selected domain.
        </p>

        <p><strong>Internship Details:</strong></p>
        <ul>
          <li>Internship Role: [Role / Domain]</li>
          <li>Mode: Online / Offline / Hybrid</li>
          <li>Duration: [ ]</li>
          <li>Reporting to: Assign projects to Tech Officer</li>
        </ul>

        <p><strong>As an intern, you are expected to:</strong></p>
        <ul>
          <li>Follow company rules and guidelines</li>
          <li>Complete assigned tasks on time</li>
          <li>Maintain professionalism and discipline</li>
          <li>Keep all company information confidential</li>
        </ul>

        <p>
          On successful completion of the internship, you will be awarded an
          Internship Completion Certificate and Experience Letter based on your
          performance.
        </p>

        <p>
          We are excited to have you as part of our team and look forward to
          working with you. Kindly confirm your acceptance of this offer by
          replying to this email.
        </p>

        <p>For any queries, feel free to contact us.</p>
      </div>

      <div className="signature">
        <div className="left-sign">
          <p><strong>Sincerely,</strong></p>
          <p>
            <strong>S. Dharaneshvar</strong><br />
            Zenvy Technologies<br />
            UDYAM ID: TN-29-0095608<br />
            Date of Issue: ________
          </p>
        </div>

        <div className="center-seal">
          <img src={Seal} alt="" />
        </div>

        <div className="right-sign">
          <div className="sign-line"></div>
          <p>Chief Executive Officer</p>
        </div>
      </div>

      <div className="footer">
        <span>📞+918300773569</span>
        <span>✉ zenvytechnologies@gmail.com</span>
        <span>🌐 zenvytechnologies.vercel.app</span>
      </div>
    </div>
  );
}
