import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import Collections from "./pages/Collections";
import Login from "./pages/Account/Login";
import Signup from "./pages/Account/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="collections" />} />
        <Route path="collections" element={<Collections />} />
        <Route path="account/login" element={<Login />} />
        <Route path="account/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
