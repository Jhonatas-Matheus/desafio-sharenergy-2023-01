import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import DashboardPage from "./pages/RandomUserGeneratorPage";
import LoginPage from "./pages/LoginPage";
import CatPage from "./pages/CatPage";
import DogsPage from "./pages/DogsPage";
import CrudPage from "./pages/CrudPage";
import { UserProvider } from "./context/UserContext";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Page404 from "./pages/404Page";
import ModalCRUDUser from "./components/ModalCRUDCreateClient";
import { ModalProvider } from "./context/ModalContext";
import { CurrentClientProvider } from "./context/CurrentClientContext";
import { TriggerContextProvider } from "./context/TriggerContext";
function App() {
  return (
    <ModalProvider>
      <UserProvider>
        <TriggerContextProvider>
          <CurrentClientProvider>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route element={<ProtectedRoutes />}>
                  <Route path="/random-users" element={<DashboardPage />} />
                  <Route path="/cats" element={<CatPage />} />
                  <Route path="/dogs" element={<DogsPage />} />
                  <Route path="/crud" element={<CrudPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </CurrentClientProvider>
        </TriggerContextProvider>
      </UserProvider>
    </ModalProvider>
  );
}

export default App;
