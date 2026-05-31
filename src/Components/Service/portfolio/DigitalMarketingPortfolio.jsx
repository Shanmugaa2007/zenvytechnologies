import "./DigitalMarketingPortfolio.css";

function DigitalMarketingPortfolio() {
  const projects = [
    {
      title: "Social Media Campaign",
      desc: "Instagram & Facebook ad campaign for brand awareness.",
    },
    {
      title: "SEO Optimization",
      desc: "Improved website ranking from page 5 to page 1 on Google.",
    },
    {
      title: "Google Ads Marketing",
      desc: "High conversion PPC campaigns with optimized CTR.",
    },
    {
      title: "Brand Strategy",
      desc: "Complete digital branding for startup business growth.",
    },
    {
      title: "Email Marketing",
      desc: "Automated email funnels for customer retention.",
    },
    {
      title: "Content Marketing",
      desc: "Blog & content strategy to increase organic traffic.",
    },
  ];

  return (
    <div className="dm-portfolio-page">

      {/* Hero Section */}
      <section className="dm-hero">
        <h1>
          Digital Marketing <span>Portfolio</span>
        </h1>
        <p>
          Explore our performance-driven campaigns, SEO strategies,
          and growth marketing solutions.
        </p>
      </section>

      {/* Stats Section */}
      <section className="dm-stats">
        <div>
          <h2>50+</h2>
          <p>Projects Completed</p>
        </div>
        <div>
          <h2>30+</h2>
          <p>Happy Clients</p>
        </div>
        <div>
          <h2>120%</h2>
          <p>Avg Growth Rate</p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="dm-grid">
        {projects.map((item, index) => (
          <div className="dm-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="dm-cta">
        <h2>Want to grow your business online?</h2>
        <button>Contact Us</button>
      </section>

    </div>
  );
}

export default DigitalMarketingPortfolio;