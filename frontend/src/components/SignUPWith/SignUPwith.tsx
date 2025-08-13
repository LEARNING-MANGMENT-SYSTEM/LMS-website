import React from 'react';

const SignUPWith = () => {
    return (
        <div>
              <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-2 text-sm text-gray-500">SIGN IN WITH</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <button className="flex items-center border border-gray-300  h-12 hover:border-blue-600 transition-colors">
                <div className="flex items-center justify-center w-12 border-r border-gray-300 h-full">
                  <img src="../Google.png" alt="Google" className="w-5 h-5" />
                </div>
                <span className="flex-1 text-sm font-medium">Google</span>
              </button>

              <button className="flex items-center border border-gray-300 r h-12 hover:border-blue-600 transition-colors">
                <div className="flex items-center justify-center w-12 border-r border-gray-300 h-full">
                  <img src="../facebook.png" alt="Facebook" className="w-5 h-5" />
                </div>
                <span className="flex-1 text-sm font-medium">Facebook</span>
              </button>

              <button className="flex items-center border border-gray-300 h-12 hover:border-blue-600 transition-colors">
                <div className="flex items-center justify-center w-12 border-r border-gray-300 h-full">
                  <img src="../apple-balck-2.png" alt="Apple" className="w-5 h-5" />
                </div>
                <span className="flex-1 text-sm font-medium">Apple</span>
              </button>
            </div>
        </div>
    );
}

export default SignUPWith;
