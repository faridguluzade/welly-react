import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./scss/main.scss";

import { SidebarProvider } from "./context/SidebarContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <App />
  </SidebarProvider>
);
