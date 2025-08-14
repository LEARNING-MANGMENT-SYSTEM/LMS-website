import React from 'react';
import Headersignin from '../../components/HeaderSingIn_up';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import { ArrowRight, Eye } from 'lucide-react';
import SignUPWith from '../../components/SignUPWith/SignUPwith';

const SignUp = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Headersignin />
            <div className="flex flex-col lg:flex-row flex-1">
                <div className="bg-[#EBEBFF] w-full lg:w-1/3 flex items-center justify-center p-8 min-h-[50vh] lg:min-h-full">
                    <img 
                        src="../Saly-1.png" 
                        alt="sign up illustration" 
                        className="h-full max-h-[400px] object-contain"
                    />
                </div>

                <div className="w-full lg:w-2/3 flex items-center justify-center p-6 lg:p-12 bg-white">
                    <div className="w-full max-w-md">
                        <h2 className="text-xl text-gray-900 text-center mb-8">Create your account</h2>
                        
                        <div className="space-y-5">
                            <label>Full Name</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input 
                                    placeholder="Enter first name"
                                    className="w-full"
                                />
                                <Input 
                                    placeholder="Enter last name"
                                    className="w-full"
                                />
                            </div>
                            
                            <Input 
                                label="Username"
                                placeholder="Enter your username"
                                className="w-full"
                                type="text"
                            />
                            
                            <Input
                                label="Email"
                                placeholder="Enter your email address"
                                className="w-full"
                                type="email"
                            />
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input 
                                    label="Password"
                                    placeholder="create password"
                                    type="password"
                                    rightIcon={<Eye />}
                                    className="w-full"
                                />
                                <Input 
                                    label="Confirm Password"
                                    placeholder="confirm password"
                                    type="password"
                                    rightIcon={<Eye />}
                                    className="w-full"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between my-8 w-full">
                            <div className="flex items-center flex-1 min-w-0">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="h-4 w-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500 flex-shrink-0"
                                />
                                <label htmlFor="terms" className=" text-sm text-gray-600 whitespace-nowrap">
                                    I agree with all your <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a>
                                </label>
                            </div>
                            <Button
                                variant="primary"
                                className="ml-4 py-2 px-4 text-sm whitespace-nowrap"
                            >
                                Create Account <ArrowRight className="ml-1 inline" size={16} />
                            </Button>
                        </div>

                        {/* Social Sign Up */}
                        <div className="mt-10">
                            <SignUPWith />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;