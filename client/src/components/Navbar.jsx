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
    <div className="fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32">
     <img
  alt="logo"
  src={assets.logo}  // ✅ Correct key
  className="w-20 sm:w-20 object-contain cursor-pointer"
  onClick={() => navigate('/')}
/>

      
      {user ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <button
          onClick={() => openSignIn()}
          className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5"
        >
          Get started
          <ArrowRightIcon className="w-4 h-4 object-contain" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
