import "./loader.css";

function Loader() {
  return (
    <div className="loader-container">

      <div className="loader-wrapper">

        <span className="loader-line"></span>
        <span className="loader-line"></span>
        <span className="loader-line"></span>
        <span className="loader-line"></span>

      </div>

      <h2 className="loader-text">
        Zenvy Services
      </h2>

    </div>
  );
}

export default Loader;