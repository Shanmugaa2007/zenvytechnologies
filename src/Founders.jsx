import CEO from './assets/CEO.png'
import CTO from './assets/CTO.jpeg'
import COO from './assets/COO.png'
import CMO from './assets/CMO.png'

function Founders() {

  const foundersList = [
    {
      name: "Dharaneshwar S",
      role: "Chief Executive Officer",
      image: CEO
    },
    {
      name: "Shanmuganathan S",
      role: "Chief Technical Officer",
      image: CTO
    },
    {
      name: "Kowsika J",
      role: "Chief Operations Officer",
      image: COO
    },
    {
      name: "Jagadeeswaran R",
      role: "Chief Marketing Officer",
      image: CMO
    }
  ]

  return (
    <div className="Founders" id="founders">
      <h1 className="founders-h1" style={{marginBottom:"7%"}}>Company Founders</h1>

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
