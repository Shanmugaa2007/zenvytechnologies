import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import zenCertificate from './assets/Zenvy Certificate.png'


function Certificate() {
  const printRef = useRef(null);
  const [name,setName] = useState("SHANMUGANATHAN S");
  const [domain,setDomain] = useState("Mern Stack");
  const [start_date,setStart_date] = useState("01/01/2026");
  const [end_date,setEnd_date] = useState("01/01/2026");

  const handlePrint = useReactToPrint({
    contentRef: printRef,              
    documentTitle: "Zenvy Certificate",
    removeAfterPrint: true,
    onBeforePrint: async () => {
      console.log("Printing...", printRef.current);
    },
    onAfterPrint: () => {
      console.log("Done");
    },
  });

  return (
    <div>
      <div ref={printRef} className="certificate-container">
        <img src={zenCertificate} alt="" />
        <input type="text" className="username" value={name} readOnly />
        <input type="text" className="domain" value={domain} readOnly />
        <input type="text" className="start-date" value={start_date} readOnly />
        <input type="text" className="end-date" value={end_date} readOnly />
      </div>

      <button onClick={handlePrint} style={{ marginTop: 10 }}>
        Print PDF
      </button>
    </div>
  );
}

export default Certificate;