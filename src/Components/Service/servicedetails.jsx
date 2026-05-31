import { useParams } from "react-router-dom";
import WebDevelopment from "./wedevelopment";
import GraphicsDesign from "./graphicsdesign";
import DigitalMarketing from "./digitalmarketing";
import PortfolioBuilding from "./portfoliobuilding";
import ResumeBuilding from "./resumebuilding";

function ServiceDetails() {

  const { slug } = useParams();

  return (
    <div>

      {slug === "web-development" && (
        <WebDevelopment/>
      )}

      {slug === "graphics-design" && (
        <GraphicsDesign/>
      )}

      {slug === "digital-marketing" && (
        <DigitalMarketing/>
      )}

      {slug === "portfolio" && (
        <PortfolioBuilding/>
      )}

      {slug === "resume" && (
        <ResumeBuilding/>
      )}

    </div>
  );
}

export default ServiceDetails;