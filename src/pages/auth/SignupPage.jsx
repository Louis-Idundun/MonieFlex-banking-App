import * as React from "react";
import { useState } from "react";
import OnboardingHeader from "../../components/headers/OnboardingHeader"
import AuthFormField from "../../components/formfields/AuthFormField"
import PasswordFormField from '../../components/formfields/PasswordFormField'
import { Button, AuthLinkButton } from "../../components/Buttons";
import Assets from "../../assets/Assets";
import OurRoutes from "../../commons/OurRoutes"
import Title from "../../commons/Title"

function SignupPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [visible, setVisibile] = useState(true);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleToggle = () => {
    setVisibile(!visible)
  }
  const handleConfirmToggle = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible)
  }

  Title("MonieFlex - Create MonieFlex Account")

  return (
    <div className="bg-stone-100 flex flex-col items-stretch">
      <OnboardingHeader />
      <div className="w-full max-md:max-w-full">
        <div className="flex max-md:flex-col max-md:items-stretch">
          <div className="flex flex-col items-center justify-center items-stretch w-[49%] max-md:w-full max-md:ml-0">
            <div className="shadow-sm bg-white flex grow flex-col w-full px-20 py-12 max-md:max-w-full max-md:px-5">
                <p 
                    className="text-zinc-800 text-3xl font-bold tracking-wide w-[500px] max-w-full mt-24 max-md:mt-10"
                    style={{
                        width: '500px', color: '#2E2E2E', 
                        fontFamily: 'Urbanist', fontSize: '28px',
                        fontStyle: 'normal',fontWeight: 700,
                        lineHeight: 'normal',letterSpacing: '0.28px',
                    }}
                >
                    SIGN UP
                </p>
                <p 
                    className="text-neutral-400 text-left text-lg font-medium whitespace-nowrap mt-1.5"
                    style={{fontFamily: 'Urbanist', color: '5B5B5B'}}
                >
                    Fill in the below to sign up an account with us.
                </p>
                <AuthFormField 
                    id="email" 
                    title="Email" 
                    type="email" 
                    onValueChanged={() => {}}
                />
                <AuthFormField 
                    id="firstName" 
                    title="First Name" 
                    onValueChanged={() => {}}
                />
                <AuthFormField 
                    id="lastName" 
                    title="Last Name" 
                    onValueChanged={() => {}}
                />
                <AuthFormField 
                    id="phone" 
                    title="Phone Number" 
                    type="tel" 
                    onValueChanged={() => {}}
                />
                <AuthFormField 
                    id="bvn" 
                    title="BVN" 
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
                <PasswordFormField 
                    id="confirmpassword" 
                    title="Confirm Password" 
                    visible={confirmPasswordVisible} 
                    onToggle={handleConfirmToggle}
                    onValueChanged={() => {}}
                />
                <Button text="Sign Up"/>
                <AuthLinkButton 
                    isPurple={ true } 
                    title="I have a MonieFlex Account." 
                    path={ OurRoutes.login }
                />
            </div>
          </div>
          <img src={ Assets.signup } alt="Signup" />
        </div>
      </div>
    </div>
  );
}

export default SignupPage;