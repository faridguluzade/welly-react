import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./pages/app-layout/AppLayout";
import Collections from "./pages/Collections";
import Login from "./pages/Account/Login";
import Signup from "./pages/Account/Signup";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="collections" />} />
            <Route path="collections" element={<Collections />} />
            <Route path="account/login" element={<Login />} />
            <Route path="account/signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
