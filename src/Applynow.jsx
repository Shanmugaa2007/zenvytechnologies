import { useLocation } from "react-router-dom";
import zenvylogo from './assets/Zenvylogo.png'

function ApplyNow() {
  const location = useLocation();
  const internData = location.state;

  if (!internData) {
    return <h2>No internship selected</h2>;
  }

  return (
    <>
      <div className="applynow-container">
        <div className="top-container">
          <img src={zenvylogo} alt="Zenvy Logo"/>
          <h1>Zenvy Technologies</h1>
        </div>
        <div className="intern-image-container">
          <img src={internData.image} alt="Domain Image" />
        </div>
        <div className="intern-domain-details">
          <h1>{internData.title}</h1>
          <p>{internData.updatedPrice}</p>
          <p>{internData.selectedDuration}</p>
        </div>
      </div>
    </>
  );
}

export default ApplyNow;
