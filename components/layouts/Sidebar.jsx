'use client'

import React, {useContext} from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import AuthContext from "../../context/AuthContext";

const Sidebar = () => {

  const { user } = useContext(AuthContext)

  const logoutHandler = () => {
    signOut("/");
    
  }

  return (
    <aside className="md:w-1/3 lg:w-1/4 px-4">
      <ul className="sidebar">

        {user?.role === "admin" && (
            <>
            <li>
              {" "}
              <Link
                href="/admin/depost"
                className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
              >
                Depost <span className="text-red-500">(Admin)</span>
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="/admin/depost/getdata"
                className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
              >
                Deposted Data <span className="text-red-500">(Admin)</span>
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="/admin/messages"
                className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
              >
                Messages <span className="text-red-500">(Admin)</span>
              </Link>
            </li>


            <li>
              {" "}
              <Link
                href="/admin/step"
                className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
              >
                Steps <span className="text-red-500">(Admin)</span>
              </Link>
            </li>

            <li>
              {" "}
              <Link
                href="/admin/users"
                className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
              >
                All Users <span className="text-red-500">(Admin)</span>
              </Link>
            </li>

            <hr />
          </>

      )}
 

        <li>
          {" "}
          <Link
            href="/me"
            className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
          >
            Your Profile
          </Link>
        </li>
   
        <li>
          {" "}
          <Link
            href="/me/update"
            className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
          >
            Update Profile
          </Link>
        </li>
        <li>
          {" "}
          <Link
            href="/me/update_password"
            className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
          >
            Update Password
          </Link>
        </li>

        <li>
          {" "}
          <a className="block px-3 py-2 text-red-800 hover:bg-red-100 hover:text-white-500 rounded-md cursor-pointer"
            onClick={logoutHandler}
          >
            Logout
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;