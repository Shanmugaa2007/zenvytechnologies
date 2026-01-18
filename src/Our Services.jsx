import { useRef, useState, useEffect } from "react";

function Services() {
  const [ListofServices, setListofServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const scrollRef = useRef(null);
  const autoScrollRef = useRef(null);

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

    const singleSetWidth = container.scrollWidth / 4;
    container.scrollLeft = singleSetWidth;

    const speed = 0.7;

    const startAutoScroll = () => {
      stopAutoScroll();
      autoScrollRef.current = setInterval(() => {
        container.scrollLeft += speed;

        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft = singleSetWidth;
        }
      }, 16);
    };

    const stopAutoScroll = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }
    };

    // 🖥️ Desktop hover pause
    container.addEventListener("mouseenter", stopAutoScroll);
    container.addEventListener("mouseleave", startAutoScroll);

    // 📱 Mobile touch pause
    container.addEventListener("touchstart", stopAutoScroll);
    container.addEventListener("touchend", startAutoScroll);

    // Start auto scroll initially
    startAutoScroll();

    return () => {
      stopAutoScroll();

      container.removeEventListener("mouseenter", stopAutoScroll);
      container.removeEventListener("mouseleave", startAutoScroll);
      container.removeEventListener("touchstart", stopAutoScroll);
      container.removeEventListener("touchend", startAutoScroll);
    };
  }, [ListofServices]);

  const services = [
    ...ListofServices,
    ...ListofServices,
    ...ListofServices,
    ...ListofServices,
  ];

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
