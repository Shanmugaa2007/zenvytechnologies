function ProjectsStats () {

   const details = [
  {
    count: 2,
    desc: "Projects Completed",
  },
  {
    count: 1,
    desc: "Happy Clients",
  },
  {
    count: 1,
    desc: "Ongoing Projects",
  },
  {
    count: 0,
    desc: "Years of Experience",
  },
];


    return(
        <>
            <div className="project-section" id="project">
                <div style={{paddingLeft: "5%"}}>
                    <h1 className="project-head">Projects Stats</h1>
                </div>
                <div className="cardss">
                   {details.map((item, index) => (
                        <div className="stat-card" key={index}>
                            <h2>{item.count}+</h2>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProjectsStats;
