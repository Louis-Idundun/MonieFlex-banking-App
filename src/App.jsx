import { BrowserRouter, Route, Routes } from "react-router-dom";
import {SnackbarProvider} from "notistack";
import OurRoutes from "./commons/OurRoutes";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";

function App() {
  return (
      <>
          <SnackbarProvider />
          <BrowserRouter>
              <Routes>
                  <Route path={ OurRoutes.forgotPassword } element={ <ForgotPasswordPage /> } />
                  <Route path={ OurRoutes.resetPassword } element={ <ResetPasswordPage /> } />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
