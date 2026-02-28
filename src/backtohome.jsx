import { useEffect, useState } from "react";

function BackToHome() {

  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {show && (
        <div className="arrow-div" onClick={scrollToTop}>
          <i className="fa-solid fa-arrow-up up-arrow"></i>
        </div>
      )}
    </>
  );
}

export default BackToHome;
