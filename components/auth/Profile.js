'use client'

import React, { useContext } from "react";
import Link from "next/link";
import AuthContext from "../../context/AuthContext";
import UserAddresses from "../user/UserAddresses";

const Profile = () => {

  const { user } = useContext(AuthContext)
  console.log("userAddress", user)

  return (
    <>

      <div className="container">
        <h2>profile</h2>
      </div>

    </>
  );
};

export default Profile;