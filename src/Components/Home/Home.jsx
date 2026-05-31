import "./home.css";
import AIOrbital from "../AiOrbital/AiOrbital";

function Home() {
  return (
    <section className="hero-section">

      <div className="hero-content">

        <div className="hero-left">

          <h1>
            Empowering <br />
            <span>Your Digital Success</span>
          </h1>

          <div className="hero-line"></div>

          <div className="tagline">
            <strong>Turning Ideas into Innovation...</strong>

            <p>
              Innovative IT & Digital Solutions for a Smarter World
            </p>
          </div>

        </div>

        <div className="hero-right">

          <div className="hero-image">
            <AIOrbital/>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;