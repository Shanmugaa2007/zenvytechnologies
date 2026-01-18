import { useRef, useState, useEffect } from "react";

function Services() {
  const [ListofServices, setListofServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const scrollRef = useRef(null);

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

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || ListofServices.length === 0) return;

    const singleSetWidth = container.scrollWidth / 3;
    container.scrollLeft = singleSetWidth;

    let autoScroll = null;
    const speed = 0.7; 

    const startAutoScroll = () => {
      stopAutoScroll();
      autoScroll = setInterval(() => {
        container.scrollLeft += speed;

        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft = singleSetWidth;
        }

        if (container.scrollLeft <= 0) {
          container.scrollLeft = singleSetWidth;
        }
      }, 16); 
    };

    const stopAutoScroll = () => {
      if (autoScroll) {
        clearInterval(autoScroll);
        autoScroll = null;
      }
    };

    const checkScreen = () => {
      if (window.innerWidth <= 2560) {
        startAutoScroll();
      } else {
        stopAutoScroll();
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => {
      stopAutoScroll();
      window.removeEventListener("resize", checkScreen);
    };
  }, [ListofServices]);

  const services = [...ListofServices, ...ListofServices, ...ListofServices,...ListofServices];

  return (
    <div className="wrapper" id="service">
      <h1 className="service-h1">Our Services</h1>

      <div className="grid-position" ref={scrollRef}>
        {loading ? (
          <div className="loader"></div>
        ) : (
          services.map((service, index) => (
            <div className="grids" key={index}>
              <div className="image-box">
                <img src={service.image} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Services;
