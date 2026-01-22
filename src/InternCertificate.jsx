import certificate from './assets/Zenvy Certificate.png';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';

function Certificate() {

  const printRef = useRef();

  const handlePrint = useReactToPrint({
  content: () => {
    alert("CONTENT FUNCTION CALLED");
    console.log("PRINT REF:", printRef.current);
    return printRef.current;
  },
  documentTitle: "Zenvy Certificate",
});



  return (
    <>
      {/* PRINT AREA */}
      <div className='certificate-container' ref={printRef}>
        <img src={certificate} alt="Certificate" />

        {/* Name on certificate */}
        <input
          type="text"
          className='username'
          value="SHANMUGANATHAN S"
          readOnly
        />

        {/* Domain */}
        <input
          type="text"
          className='domain'
          placeholder="Web Development"
          readOnly
        />
      </div>

      {/* PRINT BUTTON */}
      <button onClick={()=>{console.log("clicked");handlePrint}}>Print</button>
    </>
  );
}

export default Certificate;
