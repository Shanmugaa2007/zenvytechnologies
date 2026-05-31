import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./service.css";
import Loader from "./Loader";

function Services() {
  const [ListofServices, setListofServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://zenvytechnologiess.onrender.com/services")
      .then((res) => res.json())
      .then((data) => {
        setListofServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="wrapper" id="service">

      <h1 className="service-h1">
        Our Services
      </h1>

      {loading ? (

        <div className="service-loader">
          <Loader />
        </div>

      ) : (

        <div className="grid-position">

          {ListofServices.map((service, index) => (

            <div
              className="grids"
              key={index}
              onClick={() =>
                navigate(`/services/${service.slug}`)
              }
            >
              <div className="image-box">
                <img
                  src={service.image}
                  alt={service.title}
                />
              </div>

              <div className="service-title">
                <h3>{service.title}</h3>
              </div>

              <i className="fa-solid fa-arrow-right"></i>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Services;