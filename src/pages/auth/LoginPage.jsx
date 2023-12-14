import * as React from "react";
import { useState } from "react";
import OnboardingHeader from "../../components/headers/OnboardingHeader"
import AuthFormField from "../../components/formfields/AuthFormField"
import PasswordFormField from '../../components/formfields/PasswordFormField'
import { AuthButton, AuthLinkButton } from "../../components/buttons/AuthButton";
import { Link } from "react-router-dom";
import Assets from "../../assets/Assets";
import OurRoutes from "../../commons/OurRoutes";

function LoginPage() {
    const [password, setPassword] = useState("");
    const [visible, setVisibile] = useState(true);

    const handleToggle = () => {
        setVisibile(!visible)
      }

    return (
        <div className="bg-stone-100 flex flex-col items-stretch">
            <OnboardingHeader />
            <div className="w-full max-md:max-w-full">
                <div className="flex max-md:flex-col max-md:items-stretch">
                    <div className="flex flex-col items-center justify-center items-stretch w-[49%] max-md:w-full max-md:ml-0">
                        <div className="shadow-sm bg-white flex grow flex-col w-full px-20 py-12 max-md:max-w-full max-md:px-5">
                            <p className="text-zinc-800 text-3xl font-bold tracking-wide text-left w-[500px] max-w-full mt-32 max-md:mt-10"
                                style={{ 
                                    width: '500px', color: '#2E2E2E', 
                                    fontFamily: 'Urbanist', fontSize: '28px', 
                                    fontStyle: 'normal', fontWeight: 700, 
                                    lineHeight: 'normal', letterSpacing: '0.28px', 
                                }}
                            >
                                LOGIN
                            </p>
                            <p 
                                className="text-neutral-400 text-left font-medium tracking-normal mt-1.5 
                                    max-md:max-w-full"
                                style={{ 
                                    color: '#5B5B5B', fontFamily: 'Urbanist', 
                                    fontSize: '16px', fontStyle: 'normal', 
                                    fontWeight: 500, lineHeight: 'normal', 
                                    letterSpacing: '0.16px' 
                                }} >
                                Input your details below to login
                            </p>
                            <AuthFormField 
                                id="email" 
                                title="Email Address" 
                                type="number" 
                                onValueChanged={() => {}}
                            />
                            <PasswordFormField
                                id="password" 
                                title="Password" 
                                visible={visible} 
                                onToggle={handleToggle} 
                                onValueChanged={() => {}}
                            />
                            <Link 
                                to={"/forgot"}
                                className="text-zinc-800 text-center text-xls whitespace-nowrap mt-2 
                                self-end max-md:mr-2.5"
                                style={{ fontFamily: 'Urbanist' }}
                            >
                                Forgot Password?
                            </Link>
                            <p className="text-sky-950 text-sm font-medium mt-7 max-md:max-w-full">
                                <span className="text-neutral-400" style={{ fontFamily: 'Urbanist' }}>
                                    By Logging in, I Acknowledge that I have read and agree to the{" "}
                                </span>
                                <span className="text-sky-950">Terms and Conditions</span>
                                <span className="text-neutral-400"> and </span>
                                <span className="text-sky-950">Privacy Policy</span>
                            </p>
                            <AuthButton text="Login"/>
                            <AuthLinkButton 
                                isPurple={ false } 
                                title="Open a MonieFlex Bank Account" 
                                path={OurRoutes.signup} 
                            />
                        </div>
                    </div>
                    <div 
                        className="w-[51%] max-md:w-full self-stretch h-auto bg-cover bg-center" 
                        style={{ backgroundImage: `url(${Assets.login})` 
                    }}></div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;