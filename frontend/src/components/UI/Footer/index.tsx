import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import React, { useState } from "react";

const Footer = () => {
  const [selected, setSelected] = useState("English");
  const [open, setOpen] = useState(false);

  const languages = ["English", "French", "Spanish", "German"];
  return (
    <footer className="bg-black text-white p-8 w-full mt-30">
      {/* First Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">
            Start learning with 67.1K <br /> students around the world
          </h2>
          <div className="flex gap-4">
            <button className="bg-orange-600 px-4 py-2  h-10">
              Join The Family
            </button>
            <button className="bg-gray-950 px-4 py-2  h-10 border border-gray-800">
              Browser All Courses
            </button>
          </div>
        </div>
        <div className="flex gap-12 md:gap-20 mt-5">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold">6.3K</h2>
            <p className="text-sm text-gray-400">Online courses</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold">26K</h2>
            <p className="text-sm text-gray-400">Certified instructor</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold">99.9%</h2>
            <p className="text-sm text-gray-400">Success Rate</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-8"></div>

      {/* Second Section */}
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
        <div className="md:w-1/4">
          <div className="flex items-center mb-4">
            <img src="../../../public/GraduationCap.png" alt="" className="w-8 h-8" />
            <h2 className="text-xl ml-2 font-bold">E-tutor</h2>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at
          </p>
          <div className="flex gap-2">
            {[Facebook, Instagram, Linkedin, Twitter, Youtube].map((Icon, index) => (
              <div key={index} className="hover:cursor-pointer w-10 h-10 flex items-center justify-center bg-gray-900 hover:bg-orange-600 rounded-md">
                <Icon size={20} />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
          {/* TOP CATEGORY */}
          <div>
            <h4 className="text-lg font-bold mb-4">TOP 4 CATEGORY</h4>
            <ul className="space-y-3">
              {['Development', 'Finance & Accounting', 'Design', 'Business'].map((item) => (
                <li key={item}>
                  <a className="group relative inline-flex items-center text-gray-400 hover:text-white transition-all">
                    {item}
                    <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight size={16} />
                    </span>
                    <span className="absolute bottom-0 left-0 h-px bg-orange-400 w-0 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-bold mb-4">QUICK LINKS</h4>
            <ul className="space-y-3">
              {['About', 'Become instructor', 'Contact', 'Career'].map((item) => (
                <li key={item}>
                  <a className="group relative inline-flex items-center text-gray-400 hover:text-white transition-all">
                    {item}
                    <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight size={16} />
                    </span>
                    <span className="absolute bottom-0 left-0 h-px bg-orange-400 w-0 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-3">
              {['Help Center', 'Terms of Service','Privat Policy', 'FAQ'].map((item) => (
                <li key={item}>
                  <a className="group relative inline-flex items-center text-gray-400 hover:text-white transition-all">
                    {item}
                    <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight size={16} />
                    </span>
                    <span className="absolute bottom-0 left-0 h-px bg-orange-400 w-0 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* DOWNLOAD */}
          <div>
            <h4 className="text-lg font-bold mb-4">DOWNLOAD</h4>
            <div className="space-y-4">
              <div className="flex items-center p-2 bg-gray-900 rounded-md w-40">
                <img src="../../../public/apple-removebg-preview.png" alt="App Store" className="w-8 h-8 mr-3" />
                <div>
                  <p className="text-xs text-gray-400">Download now</p>
                  <p className="text-sm">App Store</p>
                </div>
              </div>
              <div className="flex items-center p-2 bg-gray-900 rounded-md w-40">
                <img src="../../../public/googleplay-removebg-preview.png" alt="Play Store" className="w-8 h-8 mr-3" />
                <div>
                  <p className="text-xs text-gray-400">Download now</p>
                  <p className="text-sm">Play Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-8"></div>

      {/* Third Section */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm mb-4 md:mb-0">
          &copy; 2025 Eduflex. Design by Templatecookie. All rights reserved.
        </p>
        
        <div className="relative inline-block text-left">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex justify-between items-center w-40 rounded-md bg-gray-900 px-4 py-2 text-sm"
          >
            {selected}
            <span>▼</span>
          </button>

          {open && (
            <div className="absolute right-0 bottom-full mb-2 w-40 rounded-md bg-gray-900 shadow-lg z-10">
              <ul className="py-1">
                {languages.map((lang) => (
                  <li
                    key={lang}
                    onClick={() => {
                      setSelected(lang);
                      setOpen(false);
                    }}
                    className={`px-4 py-2 text-sm cursor-pointer hover:bg-orange-600 ${
                      selected === lang ? 'bg-orange-700' : ''
                    }`}
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;