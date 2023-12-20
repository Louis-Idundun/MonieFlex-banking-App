import axiosConfig from "../api/axiosConfig";
import useAuth from "./useAuth";
import SweetAlert from "../../commons/SweetAlert"
import { useNavigate } from "react-router-dom";
import OurRoutes from "../../commons/OurRoutes"
import { useEffect } from "react";

const useAxiosWithAuth = () => {
    const { token } = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
        const requestIntercept = axiosConfig.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosConfig.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    return Promise.reject(error).catch((reason) => {
                        SweetAlert("Log in to continue transaction", "error")
                        navigate(OurRoutes.login)
                    });
                }
            }
        );

        return () => {
            axiosConfig.interceptors.request.eject(requestIntercept);
            axiosConfig.interceptors.response.eject(responseIntercept);
        }
    }, [ token, navigate ])

    return axiosConfig;
}

export default useAxiosWithAuth;