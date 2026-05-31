import CEO from '/src/assets/CEO.png'
import CTO from '/src/assets/CTO.jpeg'
import COO from '/src/assets/COO.png'
import CMO from '/src/assets/CMO.png'
import './founder.css'

function Founders() {

  const foundersList = [
    {
      name: "Shanmuganathan S",
      role: "Founder-CTO",
      image: CTO
    },
    {
      name: "Kowsika J",
      role: "Chief Operations Officer",
      image: COO
    },
    {
      name: "Dharaneshwar S",
      role: "Chief Executive Officer",
      image: CEO
    },
    {
      name: "Jagadeeswaran R",
      role: "Chief Marketing Officer",
      image: CMO
    }
    
  ]

  return (
    <div className="Founders" id="founders">
      <h1 className="founders-h1">The People Behind Zenvy</h1>

      <div className="founders-grids">
        {foundersList.map((founder, index) => (
          <div className="founder-card" key={index}>
            <div className="founders-image-box">
              <img src={founder.image} alt={founder.role} />
            </div>
            <h3>{founder.name}</h3>
            <p>{founder.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Founders;
