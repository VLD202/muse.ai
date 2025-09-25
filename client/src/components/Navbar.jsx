import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { assets } from "../assets/assets";
import { useUser, useClerk, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div className="fixed z-50 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-6 sm:px-12 lg:px-20">
      
      {/* Logo + Text */}
      <div 
        className="flex items-center cursor-pointer"
        onClick={() => navigate('/')}
      >
        <img
          alt="logo"
          src={assets.logo}
          className="w-8 sm:w-10 object-contain"
        />
        <span className="ml-1 text-lg sm:text-xl font-semibold text-purple-700">use.ai</span>
      </div>

      {/* Right Side - Button/User */}
      {user ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <button
          onClick={() => openSignIn()}
          className="flex items-center gap-2 rounded-full text-sm sm:text-base cursor-pointer bg-primary text-white px-6 sm:px-8 py-2 sm:py-2.5"
        >
          Get started
          <ArrowRightIcon className="w-4 h-4 object-contain" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
