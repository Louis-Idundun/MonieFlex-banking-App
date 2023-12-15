import { BrowserRouter, Route, Routes } from "react-router-dom";
import {SnackbarProvider} from "notistack";
import DashboardPage from "./pages/home/dashboard/DashboardPage"
import OurRoutes from "./commons/OurRoutes"
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";

function App() {
  return (
      <>
          <SnackbarProvider />
          <BrowserRouter>
              <Routes>
                  <Route path={ OurRoutes.login } element={ <LoginPage /> } />
                  <Route path={ OurRoutes.signup } element={ <SignupPage /> } />

                  <Route path={ OurRoutes.dashboard } element={ <DashboardPage /> } />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
