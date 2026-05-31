import CountUp from "react-countup";
import "./project.css";

function ProjectsStats() {

  const details = [
    {
      count: 2,
      desc: "Projects Completed",
    },
    {
      count: 2,
      desc: "Happy Clients",
    },
    {
      count: 1,
      desc: "Ongoing Projects",
    },
    {
      count: 5,
      desc: "Months of Experience",
    },
  ];

  return (
    <div className="project-section" id="project">

      <h1 className="project-head">
        Project Stats
      </h1>

      <div className="cardss">
        {
          details.map((item, index) => (
            <div className="stat-card" key={index}>

              <h2>
                <CountUp
                  start={0}
                  end={item.count}
                  duration={2.5}
                />
                +
              </h2>

              <p>{item.desc}</p>

            </div>
          ))
        }
      </div>

    </div>
  );
}

export default ProjectsStats;