import { BrowserRouter, Route, Routes } from "react-router-dom";
import {SnackbarProvider} from "notistack";
import AirtimePurchasePage from "./pages/home/airtime-purchase/AirtimePage";
import TransferPage from  "./pages/home/transfer/TransferPage"
import DashboardPage from "./pages/home/dashboard/DashboardPage"
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import DataPage from "./pages/home/bills/data/DataPage"
import ElectricityPage from "./pages/home/bills/electricity/ElectricityPage"
import TVPage from "./pages/home/bills/tv/TVPage"
import OurRoutes from "./commons/OurRoutes"
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import LoanPage from "./pages/home/loans/LoanPage";
import CardPage from "./pages/home/cards/CardPage";
import AuthenticatedRoute from "./services/AuthenticatedRoute";

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

                    <Route path={ OurRoutes.airtime } element={
                        <AuthenticatedRoute>
                            <AirtimePurchasePage />
                        </AuthenticatedRoute>
                    } />
                    <Route path={ OurRoutes.transfer } element={
                        <AuthenticatedRoute>
                            <TransferPage />
                        </AuthenticatedRoute>
                    } />
                    <Route path={ OurRoutes.dashboard } element={
                        <AuthenticatedRoute>
                            <DashboardPage />
                        </AuthenticatedRoute>
                    } />

                    <Route path={ OurRoutes.data } element={
                        <AuthenticatedRoute>
                            <DataPage />
                        </AuthenticatedRoute>
                    } />
                    <Route path={ OurRoutes.electricity } element={
                        <AuthenticatedRoute>
                            <ElectricityPage />
                        </AuthenticatedRoute>
                    } />
                    <Route path={ OurRoutes.tv } element={
                        <AuthenticatedRoute>
                            <TVPage />
                        </AuthenticatedRoute>
                    } />

                    <Route path={ OurRoutes.loan } element={
                        <AuthenticatedRoute>
                            <LoanPage />
                        </AuthenticatedRoute>
                    } />
                    <Route path={ OurRoutes.card } element={
                        <AuthenticatedRoute>
                            <CardPage />
                        </AuthenticatedRoute>
                    } />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
