import { Outlet } from "react-router-dom";
import ScrollToTop from "./scrollTotop.jsx";

function RootLayout() {
  return (
    <>
      <ScrollToTop/>
      <Outlet />
    </>
  );
}

export default RootLayout;