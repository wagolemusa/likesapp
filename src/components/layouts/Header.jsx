'use client'
import React, { useContext, useEffect } from "react";
import Link from "next/link";
import Search from "./Search";
import Image from "next/image";
import { useSession } from "next-auth/react";
import AuthContext from "../../context/AuthContext";


const Header = () => {
  const { user, setUser } = useContext(AuthContext);

  const { data } = useSession();

  console.log(data);

  useEffect(() => {
    if (data) {
      setUser(data?.user);
    }
  }, [data]);


  return (
    <header className="sticky  top-0 z-50 bg-white py-2 border-b shadow-2xl">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="flex-shrink-0 mr-5">
            <a href="/">
              <Image
                src="/images/xme.png"
                height="40"
                width="120"
                alt="BuyItNow"
              />
            </a>
          </div>
          {/* <Search /> */}

          <div className="navhead flex items-center space-x-2 ml-auto">
          
            {/* <Link href="/youtube">youtube</Link>
            <Link href="/admin/deposts">depost</Link>
            <Link href="/step" className="flex">Steps</Link>
            <Link href="/message">message</Link>
            <Link href="/hotel">Hotel</Link>
            <Link href="/game">Game Page</Link>
            <Link href="/airport">Airports</Link>
            <Link href="/beach">Beach</Link> */}
        </div> 
          <div className="flex items-center space-x-2 ml-auto">
            <Link
              href="/"
              className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
            >
              <i className="text-gray-400 w-5 fa fa-shopping-cart"></i>
              <span className="hidden lg:inline ml-1">
                <b>{user?.account || 0}</b> $
              </span>
            </Link>
            
        
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
                  {/* <img
                    className="w-10 h-10 rounded-full"
                    src={
                      
                      user?.avatar ? user?.avatar?.url : "/images/default.png"
                    }
                  /> */}
                  <div className="space-y-1 font-medium">
                    <p>
                      {user?.name}
                      <time className="block text-sm text-gray-500 dark:text-gray-400">
                        {user?.email}
                      </time>
                    </p>
                  </div>
                </div>
              </Link>
            )} 
          </div>

          <div className="lg:hidden ml-2">
            <button
              type="button"
              className="bg-white p-3 inline-flex items-center rounded-md text-black hover:bg-gray-200 hover:text-gray-800 border border-transparent"
            >
              <span className="sr-only">Open menu</span>
              <i className="fa fa-bars fa-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;