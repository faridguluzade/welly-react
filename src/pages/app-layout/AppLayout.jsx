import { Outlet } from "react-router-dom";

import Navigation from "../../ui/navigation/Navigation";

import "./AppLayout.scss";

function AppLayout() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default AppLayout;
