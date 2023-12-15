import { BrowserRouter, Route, Routes } from "react-router-dom";
import {SnackbarProvider} from "notistack";
import OurRoutes from "./commons/OurRoutes";
import DashboardPage from "./pages/home/dashboard/DashboardPage"

function App() {
  return (
      <>
          <SnackbarProvider />
          <BrowserRouter>
              <Routes>
                  <Route path={ OurRoutes.dashboard } element={ <DashboardPage /> } />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
