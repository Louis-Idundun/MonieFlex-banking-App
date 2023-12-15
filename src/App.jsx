import { BrowserRouter, Route, Routes } from "react-router-dom";
import {SnackbarProvider} from "notistack";
import OurRoutes from "./commons/OurRoutes";
import TransferPage from  "./pages/home/transfer/TransferPage"

function App() {
  return (
      <>
          <SnackbarProvider />
          <BrowserRouter>
              <Routes>
                  <Route path={ OurRoutes.transfer } element={ <TransferPage /> } />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
