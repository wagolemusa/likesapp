'use client'
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Search from "./Search";
import Image from "next/image";
import { useSession } from "next-auth/react";
import AuthContext from "../../context/AuthContext";


const Navbar = () => {

  const { user, setUser } = useContext(AuthContext);

  const { data } = useSession();

  console.log(data);

  useEffect(() => {
    if (data) {
      setUser(data?.user);
    }
  }, [data]);


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home'); // State to manage active tab

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a tab
  }

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white">
              <div className="flex-shrink-0 mr-5">
                <a href="/" className="homelogo">Home</a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* Nav items */}
                <Link href="/">
                  <b className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${activeTab === 'dashboard' && 'bg-gray-700'}`} onClick={() => handleTabClick('dashboard')}>curreny </b>
                </Link>

              </div>
            </div>
          </div>

          {!user ? (
            <Link
              href="/login"
              className="btn btn-primary px-3 py-2 inline-block text-center text-gray-700 shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
            >
              <i className="text-gray-400 w-5 fa fa-user"></i>
              <span className="hidden lg:inline ml-1">Sign in</span>
            </Link>
          ) : (
            <Link href="/me">
              <div className="flex items-center mb-4 space-x-3 mt-4 cursor-pointer">
                <div className="space-y-1 font-medium">
                
                    <time className="txthome block text-sm text-gray-500 dark:text-gray-400">
                      {user?.name}
                    </time>
                
                </div>
              </div>
            </Link>
          )}

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button className="text-gray-300 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none" onClick={toggleMobileMenu}>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Nav items */}
            <Link href="/">
                  <b className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${activeTab === 'dashboard' && 'bg-gray-700'}`} onClick={() => handleTabClick('dashboard')}>curreny </b>
            </Link>


          </div>
        </div>
      )}


    </nav>
  );
};

export default Navbar;
