import { Outlet } from "react-router-dom";

import Navigation from "../../ui/navigation/Navigation";
import Footer from "../../ui/footer/Footer";

import "./AppLayout.scss";

function AppLayout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
