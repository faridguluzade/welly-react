import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

import "./AppLayout.scss";

function AppLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default AppLayout;
