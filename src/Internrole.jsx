import { Link } from "react-router-dom";
import logo from "./assets/Zenvylogo.png";
import { useEffect, useState } from "react";
import axios from "axios";
import MoreInfo from "./Moreinfo";
import Footer from "./Footer";

function InternRole() {
  const [internlists, setInternlists] = useState([]);
  const [moreinfo, setMoreinfo] = useState(null);
  const [selectduration, setSelectDuration] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    axios.get("https://zenvytechnologiess.onrender.com/internships")
      .then(res => setInternlists(res.data))
      .catch(err => console.error("Fetch error", err.message));
  }, []);

  const getEffectiveDuration = () => {
    return selectduration || "1m";
  };

  const getUpdatedPrice = (price) => {
    const duration = getEffectiveDuration();

    if (duration === "15") {
      if (price === 149) return 99;
      if (price === 249) return 149;
      if (price === 99) return 49;
      if (price === 119) return 79;
    } else if (duration === "1m") {
      return price;
    } else if (duration === "3m") {
      if (price === 149) return 249;
      if (price === 249) return 499;
      if (price === 99) return 199;
      if (price === 119) return 249;
    } else if (duration === "6m") {
      if (price === 149) return 499;
      if (price === 249) return 699;
      if (price === 99) return 299;
      if (price === 119) return 499;
    }
    return price;
  };

  const getDurationLabel = () => {
    const duration = getEffectiveDuration();

    switch (duration) {
      case "15": return "15 Days";
      case "1m": return "1 Month";
      case "3m": return "3 Months";
      case "6m": return "6 Months";
      default: return "1 Month";
    }
  };

  const selectedIntern = (id) => {
    const founddata = internlists.find(item => item._id === id);
    if (founddata) {
      const updatedData = {
        ...founddata,
        updatedPrice: getUpdatedPrice(founddata.price),
        selectedDuration: getDurationLabel()
      };
      setMoreinfo(updatedData);
    }
  };

  const filterlist = internlists.filter(list =>
    list.title.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <>
      <div className="role-container" id="scrollRoot">
        <h1>Open Roles and Domains</h1>
        <p>Find the perfect role for your skills and interests.</p>

        <i className="fa-solid fa-magnifying-glass searchbar"></i>
        <input
          type="search"
          id="searchbar_id"
          placeholder="Search domain..."
          onChange={e => setValue(e.target.value)}
        />

        <div className="select-wrapper">
          <select
            value={selectduration}
            onChange={(e) => setSelectDuration(e.target.value)}
          >
            <option defaultValue="1m" disabled selected>Select Duration</option>
            <option value="15">15 Days</option>
            <option value="1m">1 Month</option>
            <option value="3m">3 Months</option>
            <option value="6m">6 Months</option>
          </select>
        </div>

        <div className="intern-lists">
          {filterlist.length > 0 ? (
            filterlist.map((list) => (
              <div className="intern-grids" key={list._id}>
                <img src={list.image} alt="Domain" />
                <h3>{list.title}</h3>

                <div className='listsofintern'>
                  <div className="tools">
                    {list.lang_1 && <p>{list.lang_1}</p>}
                    {list.lang_2 && <p>{list.lang_2}</p>}
                    {list.lang_3 && <p>{list.lang_3}</p>}
                    {list.lang_4 && <p>{list.lang_4}</p>}
                    {list.lang_5 && <p>{list.lang_5}</p>}
                    <p><i className="fa-solid fa-location-dot"></i> Remote / Hybrid</p>
                  </div>

                  <p>
                    <i className="fa-solid fa-calendar"></i> {getDurationLabel()}
                  </p>
                </div>

                <div className="logoimage">
                  <img src={logo} alt="Company Logo" />
                </div>

                <p className="conduct">By Zenvy Technologies</p>

                <div className="final-intern">
                  <span>Price: ₹{getUpdatedPrice(list.price)}.00</span>

                  <Link to="#" className="apply">Apply Now</Link>

                  <div className="info-div">
                    <Link to="#" className="info" onClick={() => selectedIntern(list._id)}>
                      More Info
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <div className="search-illustration">
                <div className="circle"></div>
                <div className="magnifier">
                  <div className="glass"></div>
                  <div className="handle"></div>
                </div>
              </div>
              <h2>No Results Found</h2>
              <p>We couldn’t find any domains matching your search.</p>
          </div>

          )}
        </div>
      </div>

      {moreinfo && <MoreInfo data={moreinfo} onClose={() => setMoreinfo(null)} />}

      <div style={{ marginTop: "10%" }}>
        <Footer />
      </div>
    </>
  );
}

export default InternRole;
