import { ArrowRight } from "lucide-react";
import Headersignin from "../../components/HeaderSingIn_up";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import SignUPWith from "../../components/SignUPWith/SignUPwith";

const SignIn = () => {
  return (
    <div className="min-h-screen">
      <Headersignin />
      <div className="flex h-[calc(100vh-80px)]">
        <div className="bg-[#EBEBFF] w-1/3  flex items-center justify-center">
          <img 
            src="../Saly-10.png" 
            alt="sign in img" 
            className="max-h-full object-contain "
          />
        </div>

        <div className="flex flex-col justify-center items-center w-2/3 ">
          <div className="w-full max-w-md ">
            <h2 className="text-xl font-bold text-center  mt-10 mb-2">Sign in to your account</h2>
            
           
            <div className="space-y-4 mb-6">
              <Input
                label="Email"
                placeholder="Username or Email address"
                className="w-full"
              />
              <Input 
                label="Password" 
                placeholder="Password" 
                type="password" 
                className="w-full"
              />
            </div>

            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="remember"
                  className="mr-2 h-4 w-4  border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
              </div>
              <Button variant="primary" className="px-6 py-2">
                Sign In <ArrowRight className="ml-2 mt-1.5" size={16} />
              </Button>
            </div>
            <SignUPWith />
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;