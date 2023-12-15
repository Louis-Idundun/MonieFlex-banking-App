import { BrowserRouter, Route, Routes } from "react-router-dom";
import {SnackbarProvider} from "notistack";
import OurRoutes from "./commons/OurRoutes"
import AirtimePurchasePage from "./pages/home/airtime-purchase/AirtimePage";

function App() {
  return (
      <>
          <SnackbarProvider />
          <BrowserRouter>
              <Routes>
                  /// TODO::: Add pages with their routes
                  <Route path={ OurRoutes.airtime } element={ <AirtimePurchasePage /> } />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;