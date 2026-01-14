import { useRef, useState, useEffect } from "react";

function Services() {
  const [ListofServices, setListofServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const scrollRef = useRef(null);

  // fetch services
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

  // INFINITE AUTO SCROLL (LEFT ↔ RIGHT)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || ListofServices.length === 0) return;

    // start from center (because we duplicate data)
    const singleSetWidth = container.scrollWidth / 3;
    container.scrollLeft = singleSetWidth;

    let autoScroll = null;
    const speed = 1; // smooth speed

    const startAutoScroll = () => {
      stopAutoScroll();
      autoScroll = setInterval(() => {
        container.scrollLeft += speed;

        // right end → jump to middle
        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft = singleSetWidth;
        }

        // left end → jump to middle
        if (container.scrollLeft <= 0) {
          container.scrollLeft = singleSetWidth;
        }
      }, 16); // ~60fps
    };

    const stopAutoScroll = () => {
      if (autoScroll) {
        clearInterval(autoScroll);
        autoScroll = null;
      }
    };

    const checkScreen = () => {
      if (window.innerWidth <= 426) {
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

  // duplicate data for seamless infinite scroll
  const services = [...ListofServices, ...ListofServices, ...ListofServices];

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
