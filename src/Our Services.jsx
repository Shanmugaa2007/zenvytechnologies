import { useRef, useState, useEffect } from "react";

function Services() {
  const [ListofServices, setListofServices] = useState([]);
  const scrollRef = useRef(null);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://zenvytechnologiess.onrender.com/services")
      .then((res) => res.json())
      .then((data) => {
        setListofServices(data);
        setLoading(false); // ✅ only after data is fetched
      })
      .catch((err) => console.log(err));
  }, []);

  const handleScroll = () => {
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    setShowLeft(scrollLeft > 5);
    setShowRight(scrollLeft < maxScrollLeft - 5);
  };

  const scrollLeftFn = () => {
    scrollRef.current.scrollBy({ left: -240, behavior: "smooth" });
  };

  const scrollRightFn = () => {
    scrollRef.current.scrollBy({ left: 240, behavior: "smooth" });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let autoScroll = null;

    const startAutoScroll = () => {
      autoScroll = setInterval(() => {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft >= maxScrollLeft) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: 240, behavior: "smooth" });
        }
      }, 2500);
    };

    const stopAutoScroll = () => {
      if (autoScroll) {
        clearInterval(autoScroll);
        autoScroll = null;
      }
    };

    const checkScreen = () => {
      const width = window.innerWidth;
      if (width >= 320 && width <= 426) {
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
  }, []);

  return (
    <>
      <div className="wrapper" id="service">
        <h1 className="service-h1">Our Services</h1>
        {showLeft && (
          <i
            className="fa-solid fa-angle-left left-arrow"
            onClick={scrollLeftFn}
          ></i>
        )}
        <div className="grid-position" ref={scrollRef} onScroll={handleScroll}>
          {loading ? (
            <div className="loader"></div>
          ) : (
            ListofServices.map((service, index) => (
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
        {showRight && (
          <i
            className="fa-solid fa-angle-right right-arrow"
            onClick={scrollRightFn}
          ></i>
        )}
      </div>
    </>
  );
}

export default Services;
