
import React from 'react'
import Logo from '../UI/Logo'

export default function Headersignin() {
  return (
    <header className="sticky top-0 bg-white ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-3 gap-2">
          <div className="flex items-center w-full md:w-auto justify-center md:justify-start">
            <Logo  />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto justify-center md:justify-end">
            <button className='text-gray-500 hover:text-gray-700 text-sm md:text-base px-3 py-2 hover:bg-gray-50  transition-colors'>
              Don’t have an account?
            </button>
            <button className='bg-orange-100 text-orange-600 hover:bg-orange-200 font-medium text-sm md:text-base px-4 py-2  transition-colors  '>
              Create Account
            </button>
          </div>
        </div>
      </div>
      
      <div className='border h-.5  border-gray-200 w-full'></div>
    </header>
  )
}