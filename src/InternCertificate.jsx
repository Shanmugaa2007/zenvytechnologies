import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import zenCertificate from "./assets/internshipCertificate.png";
import TrainingCertificate from "./assets/Training Certificate.png";

function Certificate({ domain }) {
  const printRef = useRef(null);
  const [printCertificate, setPrintCertificate] = useState(false);
  const [name, setName] = useState("");
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [count, setCount] = useState(1);

  const numberfun = () => {
    if (count > 99) {
      return "00";
    } else if (count > 9 && count < 100) {
      return "000";
    } else {
      return "0000";
    }
  };

  const [certificateNo, setCertificateNo] = useState(
    numberfun() + count
  );

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "Zenvy Certificate",
  });

  return (
    <div style={{ overflowY: "hidden", overflowX: "hidden" }}>
      
      <div ref={printRef} className="certificate-container">
        <img src={zenCertificate} alt="" />
        <input type="text" className="username" value={name} readOnly />
        <input type="text" className="domain" value={domain} readOnly />
        <input type="text" className="start-date" value={start_date} readOnly />
        <input type="text" className="end-date" value={end_date} readOnly />
        <input type="text" className="certificate-no" value={certificateNo} readOnly />
      </div>

      <div className="hide-certificate"></div>

      <button
        onClick={() => {
          handlePrint();
          setPrintCertificate(true);
        }}
        className="print-pdf"
      >
        Print Certificate
      </button>

      <style>
        {`
          @media print {
            body * {
              display: none !important;
            }

            .certificate-container,
            .certificate-container * {
              display: block !important;
            }

            .certificate-container {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
            }
          }
        `}
      </style>

    </div>
  );
}

export default Certificate;