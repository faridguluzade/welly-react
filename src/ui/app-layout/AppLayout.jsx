import { Outlet } from "react-router-dom";
import Navigation from "../navigation/Navigation";

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
