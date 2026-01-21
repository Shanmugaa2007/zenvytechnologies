
const Certificate = ({ data }) => {
  const {
    name = "YOUR NAME HERE",
    field = "Software Development",
    startDate = "DD/MM/YYYY",
    endDate = "DD/MM/YYYY",
    cto = "Shanmuganathan",
    ceo = "Dharaneshvar"
  } = data || {};

  return (
    <div className="certificate-wrapper">
      <div className="certificate-container">
        
        {/* Left Decorative Sidebar */}
        <div className="sidebar">
          <div className="pattern-overlay"></div>
          <div className="gold-seal">
            <div className="seal-inner">
              <span className="star">★</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="content">
          <div className="header">
            <div className="brand">
              <span className="brand-logo">ZEN</span>
              <span className="brand-subtext">ZENVY TECHNOLOGIES</span>
            </div>
            <div className="msme-logo">
              {/* Replace with actual MSME logo URL */}
              <div className="placeholder-logo">MSME</div>
            </div>
          </div>

          <div className="body">
            <p className="title-small">CERTIFICATE OF</p>
            <h1 className="main-title">INTERNSHIP COMPLETION</h1>
            
            <div className="award-text">
              <span className="line"></span>
              <span className="award-label">proudly awarded to</span>
              <span className="line"></span>
            </div>

            <h2 className="recipient-name">{name}</h2>

            <p className="description">
              has successfully completed an internship in <span className="bold-underline">{field}</span> at <strong>Zenvy Technologies</strong>.
            </p>

            <p className="description-small">
              The internship was conducted from <strong>{startDate}</strong> to <strong>{endDate}</strong>. During this period, the intern demonstrated dedication, sincerity, and a positive attitude toward learning and completing assigned tasks. We found the intern to be hardworking, enthusiastic, and professional throughout the internship duration.
            </p>
          </div>

          <div className="footer">
            <div className="signature-block">
              <p className="role">Chief Technical Officer</p>
              <div className="sig-line">
                <span className="sig-name">{cto}</span>
              </div>
            </div>

            <div className="stamp-seal">
              <div className="stamp-inner">
                ZEN<br/>ESTD 2026<br/>REGISTERED
              </div>
            </div>

            <div className="signature-block">
              <p className="role">Chief Executive Officer</p>
              <div className="sig-line">
                <span className="sig-name">{ceo}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Right Decoration */}
        <div className="corner-decor"></div>
      </div>
    </div>
  );
};

export default Certificate;