"use client";

import React, { useState, useContext } from 'react';

import { useRouter } from "next/navigation";

import AuthContext from '../../context/AuthContext';


const LinkComponent = ({ links }) => {

  const router = useRouter();

  const { isLoggedIn, userStatus } = useContext(AuthContext);

// const { user, } = useContext(AuthContext);


  // console.log("youssszzxx", user.status)

  const [clickedLinks, setClickedLinks] = useState(
    new Array(links?.length || 0).fill(false)
  );

  const [displayedIndex, setDisplayedIndex] = useState(0);
  
  const handleClick = (index) => {

    if (!isLoggedIn || !userStatus || clickedLinks[index]) return;

    const nextIndex = clickedLinks.indexOf(false);
    if (nextIndex !== -1) {
      setDisplayedIndex(nextIndex);
      const newClickedLinks = [...clickedLinks];
      newClickedLinks[displayedIndex] = true;
      setClickedLinks(newClickedLinks);
    
    }
  }

  return (
    <div>
    <h1>Click the links (Only once per link)</h1>
    <div>
      {userStatus&& !clickedLinks.every((clicked) => clicked) && ( // Show button only if user status is true and there are unclicked links
        <button onClick={handleClick}>Next Link</button>
      )}
    </div>
    <div>
      {/* <h2>{links[displayedIndex]}</h2>  */}
      {userStatus && !clickedLinks[displayedIndex] && <h2>{links[displayedIndex]}</h2>}
    </div>
  </div>
  );
};

export default LinkComponent
