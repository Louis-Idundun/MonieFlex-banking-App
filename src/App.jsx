import { BrowserRouter, Route, Routes } from "react-router-dom";
import {SnackbarProvider} from "notistack";

function App() {
  return (
      <>
          <SnackbarProvider />
          <BrowserRouter>
              <Routes>
                  /// TODO::: Add pages with their routes
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
