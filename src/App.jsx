import { BrowserRouter, Route, Routes } from "react-router-dom";
import {SnackbarProvider} from "notistack";
import TransferPage from  "./pages/home/transfer/TransferPage"
import DashboardPage from "./pages/home/dashboard/DashboardPage"
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
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
                  <Route path={ OurRoutes.forgotPassword } element={ <ForgotPasswordPage /> } />
                  <Route path={ OurRoutes.resetPassword } element={ <ResetPasswordPage /> } />
                  <Route path={ OurRoutes.transfer } element={ <TransferPage /> } />
                  <Route path={ OurRoutes.dashboard } element={ <DashboardPage /> } />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
